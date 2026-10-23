/**
 * Agent nodes as planets (plan 6.3 + Addendum A.3/A.4; 2D drawNode L1521-1617, update L831-935, input L1880-1950).
 *
 * The layer owns the per-agent simulation (nodes-sim.ts: dampers, float, spring physics, collisions, pointer gravity,
 * dragging, planet spin/precession) and draws every agent with five instanced draws:
 *   halo    one billboard glow per agent, drawn BEFORE the bodies (the body covers it like 2D)
 *   bodies  one instanced sphere per agent: procedural planet surface in object space (planet-shader.ts), lit by the
 *           orb, oriented by the agent's tilted, precessing, spinning axis; writes depth
 *   atmos   the same sphere, back faces of a 1.16x shell, additive limb glow
 *   sprites 10 quads per agent. PLANAR on the tilted equatorial ring plane: the 4 ring strokes (w15, 8, 3.2 at r,
 *           1.4 at r - 9), the waiting dashes and the idle ripple. Satellites: billboard glows orbiting in the ring
 *           plane (hidden behind the body by depth). Completed check: camera-facing, shifted in front of the body.
 *   arcs    3 camera-facing ribbons along circles in the ring plane (running 3 x 0.62 rad, thinking 2 x 1.1 rad)
 * Everything is additive in raw (gamma) space like the 2D `lighter`; only the body is normal blended.
 * The 2D inner core glow (L1621) is the planet's emissive core pulse now (vE.y in the shader).
 * Debug: `?axes=1` draws the spin axis (roll), the spin direction (yaw) and a precession arrow (pitch) per planet.
 */
import {
  AdditiveBlending,
  BackSide,
  BufferGeometry,
  Float32BufferAttribute,
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  NormalBlending,
  ShaderMaterial,
  SphereGeometry,
  Sphere,
  Vector3,
} from 'three'
import { RENDER_ORDER } from '../layer'
import type { Layer, LayerCtx } from '../layer'
import { FOV } from '../camera'
import type { AgentState } from '../world'
import { clamp } from '../springs'
import {
  EXIT_TIME,
  adoptAgent,
  arcSweep,
  exitFade,
  exitScale,
  hash01,
  hitRadius,
  makeDeco,
  makePointerRay,
  makeSpin,
  pickNearest,
  rayOnPlane,
  ringBasis,
  spinFrame,
  stepAppearance,
  stepCounters,
  stepDeco,
  stepPhysics,
  stepSpin,
} from '../nodes-sim'
import type { Deco, PhysicsInput, Spin } from '../nodes-sim'
import { ATMO_FRAG, ATMO_SCALE, PLANET_FRAG, PLANET_VERT } from '../planet-shader'

/** Screen anchor of an agent for the DOM labels (CSS px of the canvas), refreshed every frame. */
export interface NodeAnchor {
  /** Projected centre. */
  x: number
  y: number
  /** CSS px per world unit at the agent's depth. */
  pxu: number
  /** Screen radius of the body incl. spawn/hover scale. */
  r: number
  /** View-space distance. */
  depth: number
  /** In front of the camera and spawned. */
  visible: boolean
}

export interface NodesLayer extends Layer {
  readonly anchors: ReadonlyMap<string, NodeAnchor>
  /** The agent under a client-space point (the same test as hover), or null. */
  pick(clientX: number, clientY: number): AgentState | null
}

const SPR = 10 // sprites per agent in the main batch
const ARCS = 3
const START_CAP = 32
/** Camera-facing sprites sit this far (in body radii) toward the camera so they clear their own sphere. */
const FRONT = 1.04
/** The planet sphere is this fraction of the agent radius r: the ring strokes at r then read as a Saturn ring. */
export const PLANET_K = 0.78
/** Debug axes: line vertices per agent (axis 2, yaw circle 14 segs + head 2, pitch arc 8 segs + head 2) x 2. */
const AX_SEGS = 1 + 14 + 2 + 8 + 2
const AX_VERTS = AX_SEGS * 2

const wantAxes = (): boolean => {
  try {
    return /[?&#]axes=1\b/.test(location.search + location.hash)
  } catch {
    return false
  }
}

/* ───────────────────────────── shaders ───────────────────────────── */

const SPRITE_VERT = /* glsl */ `
attribute vec4 aC; // xyz centre, w half extent
attribute vec4 aP; // rgb colour 0..1, alpha
attribute vec4 aQ; // kind, p1, p2, p3
attribute float aS; // shift toward the camera (billboards)
attribute vec4 aU; // xyz plane axis u, w = 1 planar (ring plane), 0 camera-facing
attribute vec3 aV; // plane axis v
varying vec2 vP;
varying vec4 vCol;
varying vec4 vQ;
varying float vHalf;
void main() {
  float on = step(0.002, aP.w) * step(0.05, aC.w);
  vP = position.xy * aC.w;
  vCol = aP;
  vQ = aQ;
  vHalf = aC.w;
  vec3 w;
  if (aU.w > 0.5) {
    w = aC.xyz + (aU.xyz * position.x + aV * position.y) * aC.w;
  } else {
    vec3 toCam = cameraPosition - aC.xyz;
    float d = max(length(toCam), 1.0);
    vec3 c = aC.xyz + toCam / d * aS;
    float k = max(d - aS, 1.0) / d; // same screen size as unshifted
    vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
    vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
    w = c + (right * position.x + up * position.y) * aC.w * k;
  }
  gl_Position = on > 0.5 ? projectionMatrix * viewMatrix * vec4(w, 1.0) : vec4(2.0, 2.0, 2.0, 1.0);
}
`


const SPRITE_FRAG = /* glsl */ `
precision highp float;
varying vec2 vP;
varying vec4 vCol;
varying vec4 vQ;
varying float vHalf;
uniform float uTime;
float segd(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}
void main() {
  float kind = vQ.x;
  float rho = length(vP);
  float cov = 0.0;
  if (kind < 0.5) {
    // 2D glow sprite: alpha 1 @0, 0.55 @0.2, 0.14 @0.5, 0 @1 (L130-148)
    float u = rho / vHalf;
    cov = u < 0.2 ? mix(1.0, 0.55, u / 0.2) : u < 0.5 ? mix(0.55, 0.14, (u - 0.2) / 0.3) : u < 1.0 ? mix(0.14, 0.0, (u - 0.5) / 0.5) : 0.0;
  } else if (kind < 1.5) {
    float aa = max(fwidth(rho), 0.0005);
    cov = 1.0 - smoothstep(vQ.z * 0.5 - aa * 0.5, vQ.z * 0.5 + aa * 0.5, abs(rho - vQ.y));
  } else if (kind < 2.5) {
    // dashed ring [2, 9] with round caps, offset -8 t (clockwise): vQ.y radius, vQ.z width, vQ.w scale
    float aa = max(fwidth(rho), 0.0005);
    float per = 11.0 * vQ.w;
    float dash = 2.0 * vQ.w;
    float s = -atan(vP.y, vP.x) * vQ.y;
    float u = mod(s - 8.0 * uTime * vQ.w, per);
    float ax = u < dash ? 0.0 : min(u - dash, per - u);
    float dd = length(vec2(ax, rho - vQ.y));
    cov = 1.0 - smoothstep(vQ.z * 0.5 - aa * 0.5, vQ.z * 0.5 + aa * 0.5, dd);
  } else {
    // checkmark (-0.34,0.02) (-0.1,0.28) (0.38,-0.26) * r, y flipped; vQ.y = r, vQ.z = width
    float s = vQ.y;
    vec2 a = vec2(-0.34, -0.02) * s;
    vec2 b = vec2(-0.1, -0.28) * s;
    vec2 c = vec2(0.38, 0.26) * s;
    float dd = min(segd(vP, a, b), segd(vP, b, c));
    float aa = max(fwidth(dd), 0.0005);
    cov = 1.0 - smoothstep(vQ.z * 0.5 - aa * 0.5, vQ.z * 0.5 + aa * 0.5, dd);
  }
  float a = min(vCol.a, 1.0) * cov;
  if (a < 0.002) discard;
  gl_FragColor = vec4(vCol.rgb * a, 1.0);
}
`

const ARC_VERT = /* glsl */ `
attribute vec4 aA; // xyz centre, w radius
attribute vec4 aB; // xyz basis u, w start angle
attribute vec4 aCc; // xyz basis v, w sweep
attribute vec4 aD; // rgb, alpha
attribute float aE; // width
varying float vSide;
varying vec4 vCol;
varying float vEnd;
void main() {
  float u = position.x;
  float side = position.y;
  float R = max(aA.w, 1.0);
  float capA = aE * 0.5 / R;
  float span = aCc.w + 2.0 * capA;
  float ang = aB.w - capA + u * span;
  vec3 pos = aA.xyz + (cos(ang) * aB.xyz + sin(ang) * aCc.xyz) * R;
  vec3 tang = -sin(ang) * aB.xyz + cos(ang) * aCc.xyz;
  vec3 view = normalize(cameraPosition - pos);
  vec3 s = cross(tang, view);
  float sl = length(s);
  s = sl > 1e-4 ? s / sl : vec3(0.0);
  pos += s * side * aE * 0.5;
  vSide = side;
  vCol = aD;
  vEnd = clamp(min(u, 1.0 - u) * span / (2.0 * capA), 0.0, 1.0);
  float on = step(0.002, aD.w) * step(0.5, aA.w);
  gl_Position = on > 0.5 ? projectionMatrix * viewMatrix * vec4(pos, 1.0) : vec4(2.0, 2.0, 2.0, 1.0);
}
`

const ARC_FRAG = /* glsl */ `
precision highp float;
varying float vSide;
varying vec4 vCol;
varying float vEnd;
void main() {
  float a = min(vCol.a, 1.0) * (1.0 - smoothstep(0.5, 1.0, abs(vSide))) * smoothstep(0.0, 1.0, vEnd);
  if (a < 0.002) discard;
  gl_FragColor = vec4(vCol.rgb * a, 1.0);
}
`

/* ───────────────────────────── gpu batches ───────────────────────────── */

const HUGE = new Sphere(new Vector3(0, 0, 0), 1e6)

interface Gpu {
  halo: Mesh
  haloGeo: InstancedBufferGeometry
  haloA: Float32Array[] // aC aP aQ aS aU aV
  body: Mesh
  atmo: Mesh
  bodyGeo: InstancedBufferGeometry
  atmoGeo: InstancedBufferGeometry
  bodyA: Float32Array[] // aB aBC aBE aBQ
  bodyMat: ShaderMaterial
  atmoMat: ShaderMaterial
  spr: Mesh
  sprGeo: InstancedBufferGeometry
  sprA: Float32Array[]
  arc: Mesh
  arcGeo: InstancedBufferGeometry
  arcA: Float32Array[] // aA aB aCc aD aE
  attrs: InstancedBufferAttribute[]
  /** Debug axes (?axes=1) or undefined. */
  axes?: LineSegments
  axesGeo?: BufferGeometry
  axesP?: Float32Array
  axesC?: Float32Array
  axesAttrs?: Float32BufferAttribute[]
}

const ARC_SEG = 18

function quadGeo(n: number): { geo: InstancedBufferGeometry; arrays: Float32Array[]; attrs: InstancedBufferAttribute[] } {
  const geo = new InstancedBufferGeometry()
  geo.setAttribute('position', new Float32BufferAttribute([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0], 3))
  geo.setIndex([0, 1, 2, 0, 2, 3])
  const sizes = [4, 4, 4, 1, 4, 3]
  const names = ['aC', 'aP', 'aQ', 'aS', 'aU', 'aV']
  const arrays: Float32Array[] = []
  const attrs: InstancedBufferAttribute[] = []
  for (let i = 0; i < sizes.length; i++) {
    const arr = new Float32Array(n * sizes[i])
    const at = new InstancedBufferAttribute(arr, sizes[i])
    geo.setAttribute(names[i], at)
    arrays.push(arr)
    attrs.push(at)
  }
  geo.instanceCount = 0
  geo.boundingSphere = HUGE
  return { geo, arrays, attrs }
}

function buildGpu(
  cap: number,
  uTime: { value: number },
  uOrb: { value: Vector3 },
  axes: boolean,
): { gpu: Gpu; mats: ShaderMaterial[]; sphere: SphereGeometry } {
  const spriteMat = (additive: boolean, depthTest: boolean) =>
    new ShaderMaterial({
      vertexShader: SPRITE_VERT,
      fragmentShader: SPRITE_FRAG,
      uniforms: { uTime },
      blending: additive ? AdditiveBlending : NormalBlending,
      transparent: true,
      depthTest,
      depthWrite: false,
      toneMapped: false,
    })
  const haloMat = spriteMat(true, false)
  const sprMat = spriteMat(true, true)

  const h = quadGeo(cap)
  const halo = new Mesh(h.geo, haloMat)
  halo.renderOrder = RENDER_ORDER.nodes - 5
  halo.frustumCulled = false
  halo.name = 'node-halos'

  const s = quadGeo(cap * SPR)
  const spr = new Mesh(s.geo, sprMat)
  spr.renderOrder = RENDER_ORDER.rings
  spr.frustumCulled = false
  spr.name = 'node-sprites'

  // planets: one instanced sphere, two passes (body + atmosphere shell) sharing the instance attributes
  const sphere = new SphereGeometry(1, 40, 26)
  const bB = new Float32Array(cap * 4)
  const bC = new Float32Array(cap * 4)
  const bE = new Float32Array(cap * 4)
  const bQ = new Float32Array(cap * 4)
  const bAttrs = [new InstancedBufferAttribute(bB, 4), new InstancedBufferAttribute(bC, 4), new InstancedBufferAttribute(bE, 4), new InstancedBufferAttribute(bQ, 4)]
  const planetGeo = () => {
    const g = new InstancedBufferGeometry()
    g.index = sphere.index
    g.setAttribute('position', sphere.getAttribute('position'))
    g.setAttribute('normal', sphere.getAttribute('normal'))
    g.setAttribute('aB', bAttrs[0])
    g.setAttribute('aBC', bAttrs[1])
    g.setAttribute('aBE', bAttrs[2])
    g.setAttribute('aBQ', bAttrs[3])
    g.instanceCount = 0
    g.boundingSphere = HUGE
    return g
  }
  const bodyGeo = planetGeo()
  const atmoGeo = planetGeo()
  const bodyMat = new ShaderMaterial({
    vertexShader: PLANET_VERT,
    fragmentShader: PLANET_FRAG,
    uniforms: { uTime, uOrb, uScale: { value: 1 } },
    blending: NormalBlending,
    transparent: true,
    depthTest: true,
    depthWrite: true,
    toneMapped: false,
  })
  const body = new Mesh(bodyGeo, bodyMat)
  body.renderOrder = RENDER_ORDER.nodes
  body.frustumCulled = false
  body.name = 'node-bodies'
  const atmoMat = new ShaderMaterial({
    vertexShader: PLANET_VERT,
    fragmentShader: ATMO_FRAG,
    uniforms: { uTime, uOrb, uScale: { value: ATMO_SCALE } },
    blending: AdditiveBlending,
    side: BackSide,
    transparent: true,
    depthTest: true,
    depthWrite: false,
    toneMapped: false,
  })
  const atmo = new Mesh(atmoGeo, atmoMat)
  atmo.renderOrder = RENDER_ORDER.nodes + 1
  atmo.frustumCulled = false
  atmo.name = 'node-atmospheres'

  // arcs: ribbon strips
  const arcGeo = new InstancedBufferGeometry()
  const pos: number[] = []
  const idx: number[] = []
  for (let i = 0; i <= ARC_SEG; i++) {
    const u = i / ARC_SEG
    pos.push(u, -1, 0, u, 1, 0)
    if (i < ARC_SEG) {
      const k = i * 2
      idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2)
    }
  }
  arcGeo.setAttribute('position', new Float32BufferAttribute(pos, 3))
  arcGeo.setIndex(idx)
  const n = cap * ARCS
  const aArrays = [new Float32Array(n * 4), new Float32Array(n * 4), new Float32Array(n * 4), new Float32Array(n * 4), new Float32Array(n)]
  const aNames = ['aA', 'aB', 'aCc', 'aD', 'aE']
  const aAttrs = aArrays.map((arr, i) => {
    const at = new InstancedBufferAttribute(arr, i === 4 ? 1 : 4)
    arcGeo.setAttribute(aNames[i], at)
    return at
  })
  arcGeo.instanceCount = 0
  arcGeo.boundingSphere = HUGE
  const arcMat = new ShaderMaterial({
    vertexShader: ARC_VERT,
    fragmentShader: ARC_FRAG,
    blending: AdditiveBlending,
    transparent: true,
    depthTest: true,
    depthWrite: false,
    toneMapped: false,
  })
  const arc = new Mesh(arcGeo, arcMat)
  arc.renderOrder = RENDER_ORDER.rings + 1
  arc.frustumCulled = false
  arc.name = 'node-arcs'

  const gpu: Gpu = {
    halo,
    haloGeo: h.geo,
    haloA: h.arrays,
    body,
    atmo,
    bodyGeo,
    atmoGeo,
    bodyA: [bB, bC, bE, bQ],
    bodyMat,
    atmoMat,
    spr,
    sprGeo: s.geo,
    sprA: s.arrays,
    arc,
    arcGeo,
    arcA: aArrays,
    attrs: [...h.attrs, ...s.attrs, ...bAttrs, ...aAttrs],
  }
  const mats = [haloMat, sprMat, bodyMat, atmoMat, arcMat]

  if (axes) {
    const P = new Float32Array(cap * AX_VERTS * 3)
    const C = new Float32Array(cap * AX_VERTS * 3)
    const ag = new BufferGeometry()
    const pa = new Float32BufferAttribute(P, 3)
    const ca = new Float32BufferAttribute(C, 3)
    ag.setAttribute('position', pa)
    ag.setAttribute('color', ca)
    ag.boundingSphere = HUGE
    ag.setDrawRange(0, 0)
    const am = new LineBasicMaterial({ vertexColors: true, transparent: true, depthTest: false, depthWrite: false, toneMapped: false })
    const ls = new LineSegments(ag, am)
    ls.renderOrder = RENDER_ORDER.fx + 50
    ls.frustumCulled = false
    ls.name = 'node-axes'
    gpu.axes = ls
    gpu.axesGeo = ag
    gpu.axesP = P
    gpu.axesC = C
    gpu.axesAttrs = [pa, ca]
  }
  return { gpu, mats, sphere }
}

/* ───────────────────────────── the layer ───────────────────────────── */

interface Exit {
  a: AgentState
  t: number
}

const lighten = (c: number, t: number) => (c + (255 - c) * t) / 255

export function createNodesLayer(): NodesLayer {
  let ctx!: LayerCtx
  let gpu: Gpu | undefined
  let mats: ShaderMaterial[] = []
  let sphere: SphereGeometry | undefined
  let cap = START_CAP
  let hw = 0 // high-water mark of used slots

  let list: AgentState[] = []
  const exits: Exit[] = []
  const slotOf = new Map<AgentState, number>()
  const free: number[] = []
  const decos: Deco[] = []
  let nextSlot = 0
  const anchors = new Map<string, NodeAnchor>()
  const anchorPool: NodeAnchor[] = []

  const ray = makePointerRay()
  const phys: PhysicsInput = { motion: 1, ray, drag: null }
  const dragPt = { x: 0, y: 0, z: 0 }
  const tmpHit = { x: 0, y: 0, z: 0 }
  const rayO = new Vector3()
  const rayD = new Vector3()
  const camN = new Vector3()
  const camF = new Vector3()
  const tv = new Vector3()
  const proj = { x: 0, y: 0, z: 0, visible: false }

  /* pointer state */
  let target: AgentState | null = null
  let ptrDown = false
  let ptrMoved = false
  let ptrId = -1
  let startX = 0
  let startY = 0
  const gripP = new Vector3()
  let setCursor = false
  const unsub: (() => void)[] = []
  let prevShould: ((e: PointerEvent) => boolean) | undefined
  let myShould: ((e: PointerEvent) => boolean) | undefined

  /* pick scratch */
  let sx = new Float64Array(16)
  let sy = new Float64Array(16)
  let sthr = new Float64Array(16)
  let sdepth = new Float64Array(16)
  let sok = new Uint8Array(16)
  let pickOk = new Uint8Array(16)
  let orbX = 0
  let orbY = 0
  let orbR = 0
  let orbDepth = 0
  let orbOk = false

  const showAxes = wantAxes()
  const uOrb = { value: new Vector3() }
  const spins: Spin[] = []

  const detach = () => {
    gpu?.halo.removeFromParent()
    gpu?.body.removeFromParent()
    gpu?.atmo.removeFromParent()
    gpu?.spr.removeFromParent()
    gpu?.arc.removeFromParent()
    gpu?.axes?.removeFromParent()
  }

  const build = () => {
    detach()
    disposeGpu()
    const b = buildGpu(cap, ctx.uniforms.time, uOrb, showAxes)
    gpu = b.gpu
    mats = b.mats
    sphere = b.sphere
    ctx.scene.add(gpu.halo, gpu.body, gpu.atmo, gpu.spr, gpu.arc)
    if (gpu.axes) ctx.scene.add(gpu.axes)
  }

  const disposeGpu = () => {
    if (!gpu) return
    gpu.haloGeo.dispose()
    gpu.bodyGeo.dispose()
    gpu.atmoGeo.dispose()
    gpu.sprGeo.dispose()
    gpu.arcGeo.dispose()
    gpu.axesGeo?.dispose()
    ;(gpu.axes?.material as LineBasicMaterial | undefined)?.dispose()
    sphere?.dispose()
    for (const m of mats) m.dispose()
    gpu = undefined
    mats = []
    sphere = undefined
  }

  const newAnchor = (): NodeAnchor => anchorPool.pop() ?? { x: 0, y: 0, pxu: 1, r: 0, depth: 1, visible: false }

  const assign = (a: AgentState): number => {
    let s = slotOf.get(a)
    if (s !== undefined) return s
    s = free.pop() ?? nextSlot++
    if (s >= cap) {
      cap *= 2
      build()
    }
    slotOf.set(a, s)
    decos[s] = makeDeco()
    spins[s] = makeSpin(a.id, a.spec.status)
    hw = Math.max(hw, s + 1)
    if (!anchors.has(a.id)) anchors.set(a.id, newAnchor())
    adoptAgent(a)
    spinFrame(spins[s], ctx.world.time, a.axisQ!, a.ringN!, a.spinQ!)
    return s
  }

  const clearSlot = (s: number) => {
    if (!gpu) return
    gpu.haloA[1][s * 4 + 3] = 0
    gpu.bodyA[0][s * 4 + 3] = 0
    gpu.bodyA[2][s * 4] = 0
    for (let i = 0; i < SPR; i++) gpu.sprA[1][(s * SPR + i) * 4 + 3] = 0
    for (let i = 0; i < ARCS; i++) gpu.arcA[3][(s * ARCS + i) * 4 + 3] = 0
    if (gpu.axesP) gpu.axesP.fill(0, s * AX_VERTS * 3, (s + 1) * AX_VERTS * 3)
  }

  const release = (a: AgentState) => {
    const s = slotOf.get(a)
    if (s === undefined) return
    slotOf.delete(a)
    clearSlot(s)
    free.push(s)
  }

  const releaseAll = () => {
    for (const a of [...slotOf.keys()]) release(a)
    exits.length = 0
    for (const an of anchors.values()) anchorPool.push(an)
    anchors.clear()
  }

  const syncList = () => {
    list = ctx.world.list()
    for (const a of list) assign(a)
  }

  /* ───────── interaction ───────── */
  const canvas = () => ctx.engine.canvas

  const refreshRay = () => {
    const rig = ctx.rig
    ray.active = rig.pointerActive
    rig.rayFromNDC(rig.pointerNDC.x, rig.pointerNDC.y, rayO, rayD)
    camN.setFromMatrixColumn(rig.camera.matrixWorld, 2)
    ray.ox = rayO.x
    ray.oy = rayO.y
    ray.oz = rayO.z
    ray.dx = rayD.x
    ray.dy = rayD.y
    ray.dz = rayD.z
    ray.nx = camN.x
    ray.ny = camN.y
    ray.nz = camN.z
  }

  const ensureScratch = (n: number) => {
    if (sx.length >= n) return
    const m = Math.max(n, sx.length * 2)
    sx = new Float64Array(m)
    sy = new Float64Array(m)
    sthr = new Float64Array(m)
    sdepth = new Float64Array(m)
    sok = new Uint8Array(m)
    pickOk = new Uint8Array(m)
  }

  /** Index into `list` under the canvas-space point, or -1. Uses the anchors of the last frame. */
  const pickIndex = (px: number, py: number): number => {
    const n = list.length
    const inOrb = orbOk && Math.hypot(px - orbX, py - orbY) < orbR
    for (let i = 0; i < n; i++) pickOk[i] = sok[i] && !(inOrb && sdepth[i] > orbDepth) ? 1 : 0
    return pickNearest(n, sx, sy, sthr, pickOk, px, py)
  }

  const pickClient = (cx: number, cy: number): number => {
    const r = canvas().getBoundingClientRect()
    return pickIndex(cx - r.left, cy - r.top)
  }

  const onDown = (e: PointerEvent) => {
    if (ptrDown || (e.pointerType === 'mouse' && e.button !== 0)) return
    const i = pickClient(e.clientX, e.clientY)
    if (i < 0) return
    const a = list[i]
    ptrDown = true
    ptrMoved = false
    ptrId = e.pointerId
    startX = e.clientX
    startY = e.clientY
    target = a
    a.dragging = true
    refreshRay()
    ray.active = true
    gripP.set(a.x, a.y, a.z)
    if (rayOnPlane(ray, a.x, a.y, a.z, tmpHit)) {
      a.grabX = tmpHit.x - a.x
      a.grabY = tmpHit.y - a.y
      a.grabZ = tmpHit.z - a.z
    } else {
      a.grabX = a.grabY = a.grabZ = 0
    }
    try {
      canvas().setPointerCapture(e.pointerId)
    } catch {
      /* noop */
    }
    ctx.world.setHover(a.id)
    canvas().style.cursor = 'grabbing'
    setCursor = true
  }

  const onMove = (e: PointerEvent) => {
    if (!ptrDown || e.pointerId !== ptrId) return
    if (!ptrMoved && Math.hypot(e.clientX - startX, e.clientY - startY) > 5) ptrMoved = true
  }

  const onUp = (e: PointerEvent) => {
    if (!ptrDown || e.pointerId !== ptrId) return
    const tgt = e.type === 'pointercancel' ? null : target
    ptrDown = false
    try {
      canvas().releasePointerCapture(e.pointerId)
    } catch {
      /* noop */
    }
    for (const a of list) a.dragging = false
    target = null
    if (tgt && !ptrMoved && ctx.world.agents.get(tgt.id) === tgt) click(tgt)
    canvas().style.cursor = ''
    setCursor = false
  }

  /** 2D L1932-1936: click event, pulse 10, burst 22 (speed 100), shockwave 55. */
  const click = (a: AgentState) => {
    ctx.world.emit('agentClick', { agent: a })
    ctx.world.emit('pulseAgent', { agent: a, n: 10 })
    ctx.fx.burst(a, [a.col[0], a.col[1], a.col[2]], 22, 100)
    ctx.fx.shockwave(a, 55)
  }

  /* ───────── per-frame anchors and hover ───────── */
  const refreshAnchors = () => {
    const rig = ctx.rig
    const cam = rig.camera
    cam.updateMatrixWorld()
    camF.setFromMatrixColumn(cam.matrixWorld, 2).negate()
    const cp = cam.position
    const f = ctx.engine.height / 2 / Math.tan((FOV * Math.PI) / 360)
    const n = list.length
    ensureScratch(n)
    for (let i = 0; i < n; i++) {
      const a = list[i]
      const an = anchors.get(a.id)
      const depth = (a.x - cp.x) * camF.x + (a.y - cp.y) * camF.y + (a.z - cp.z) * camF.z
      const pxu = depth > 1 ? f / depth : 0
      tv.set(a.x, a.y, a.z)
      rig.project(tv, proj)
      const sp = Math.max(0, a.spawn.x)
      const vis = proj.visible && depth > 1 && sp > 0.3
      sx[i] = proj.x
      sy[i] = proj.y
      sdepth[i] = depth
      sthr[i] = hitRadius(a.r) * pxu
      sok[i] = vis ? 1 : 0
      if (an) {
        an.x = proj.x
        an.y = proj.y
        an.pxu = pxu
        an.depth = depth
        an.r = a.r * sp * a.hover.x * a.novaS * pxu
        an.visible = vis
      }
    }
    // the orb, for occlusion of agents behind it
    const o = ctx.world.orb
    tv.set(o.x, o.y, o.z)
    rig.project(tv, proj)
    const od = (o.x - cp.x) * camF.x + (o.y - cp.y) * camF.y + (o.z - cp.z) * camF.z
    orbOk = proj.visible && od > 1
    orbX = proj.x
    orbY = proj.y
    orbDepth = od
    orbR = orbOk ? o.r * (f / od) : 0
  }

  const updateHover = () => {
    const w = ctx.world
    const rig = ctx.rig
    if (ptrDown) return
    const cur = w.hover
    const curIsAgent = cur !== null && cur !== 'orb'
    if (!rig.pointerActive || rig.dragging) {
      if (curIsAgent) w.setHover(null)
      if (setCursor) {
        canvas().style.cursor = ''
        setCursor = false
      }
      return
    }
    const w0 = ctx.engine.width
    const h0 = ctx.engine.height
    const px = (rig.pointerNDC.x * 0.5 + 0.5) * w0
    const py = (-rig.pointerNDC.y * 0.5 + 0.5) * h0
    const i = pickIndex(px, py)
    if (i >= 0) {
      w.setHover(list[i].id)
      if (!setCursor) {
        canvas().style.cursor = 'pointer'
        setCursor = true
      }
    } else {
      if (curIsAgent) w.setHover(null)
      if (setCursor) {
        canvas().style.cursor = ''
        setCursor = false
      }
    }
  }

  /* ───────── buffers ───────── */
  const uBasis = new Float32Array(6) // ring plane (u, v) of the agent being written
  const hide = (s: number) => clearSlot(s)

  /** One sprite; `pl` 1 = planar on the current ring plane (uBasis), 0 = camera-facing shifted by `shift`. */
  const writeSpr = (
    i: number,
    cx: number,
    cy: number,
    cz: number,
    half: number,
    r: number,
    g: number,
    b: number,
    alpha: number,
    kind: number,
    p1: number,
    p2: number,
    p3: number,
    shift: number,
    pl: number,
  ) => {
    const A = gpu!.sprA
    const j = i * 4
    A[0][j] = cx
    A[0][j + 1] = cy
    A[0][j + 2] = cz
    A[0][j + 3] = half
    A[1][j] = r
    A[1][j + 1] = g
    A[1][j + 2] = b
    A[1][j + 3] = alpha < 0 ? 0 : alpha > 1 ? 1 : alpha
    A[2][j] = kind
    A[2][j + 1] = p1
    A[2][j + 2] = p2
    A[2][j + 3] = p3
    A[3][i] = shift
    A[4][j] = uBasis[0]
    A[4][j + 1] = uBasis[1]
    A[4][j + 2] = uBasis[2]
    A[4][j + 3] = pl
    const k = i * 3
    A[5][k] = uBasis[3]
    A[5][k + 1] = uBasis[4]
    A[5][k + 2] = uBasis[5]
  }

  const writeAgent = (s: number, a: AgentState, d: Deco, sp: Spin, fade: number, exS: number, time: number) => {
    const g = gpu!
    const spn = Math.max(0, a.spawn.x)
    const sc = spn * a.hover.x * a.novaS * exS
    if (spn < 0.01 || fade <= 0.002 || sc < 0.01) {
      hide(s)
      return
    }
    const r = a.r
    const R = r * sc
    const Rb = R * PLANET_K
    const act = clamp(a.power)
    const breath = 0.8 + 0.2 * Math.sin(time * 1.7 + a.phase) // L1527
    const light = clamp(a.hit * 0.5 + a.flash * 0.6 + (a.hover.x - 1) * 4 + a.novaL * 0.8) // L1528
    const cr = a.col[0] / 255
    const cg = a.col[1] / 255
    const cb = a.col[2] / 255
    const x = a.x
    const y = a.y
    const z = a.z
    const front = FRONT * Rb
    ringBasis(a.axisQ!, uBasis)

    // halo (L1536): 2.4 r, alpha (0.5 act + 0.12) breath + light 0.3
    {
      const A = g.haloA
      const j = s * 4
      A[0][j] = x
      A[0][j + 1] = y
      A[0][j + 2] = z
      A[0][j + 3] = 2.4 * R
      A[1][j] = cr
      A[1][j + 1] = cg
      A[1][j + 2] = cb
      A[1][j + 3] = Math.min(1, ((0.5 * act + 0.12) * breath + light * 0.3) * fade)
      A[2][j] = 0
      A[2][j + 1] = 0
      A[2][j + 2] = 0
      A[2][j + 3] = 0
      A[3][s] = 0
      A[4][j + 3] = 0
    }

    // planet body + atmosphere: centre, radius, colour, act, fade, core pulse (L1621), light (L1528), seed, orientation
    {
      const A = g.bodyA
      const j = s * 4
      A[0][j] = x
      A[0][j + 1] = y
      A[0][j + 2] = z
      A[0][j + 3] = Rb
      A[1][j] = cr
      A[1][j + 1] = cg
      A[1][j + 2] = cb
      A[1][j + 3] = act
      // inner core (L1621): (0.18 + 0.5 act)(0.85 + 0.15 sin(2.4 t + ph)) + light 0.3
      const core = (0.18 + 0.5 * act) * (0.85 + 0.15 * Math.sin(time * 2.4 + a.phase)) + light * 0.3
      A[2][j] = fade
      A[2][j + 1] = core
      A[2][j + 2] = light
      A[2][j + 3] = sp.ph / (Math.PI * 2)
      const q = a.spinQ!
      A[3][j] = q[0]
      A[3][j + 1] = q[1]
      A[3][j + 2] = q[2]
      A[3][j + 3] = q[3]
    }

    // equatorial ring on the tilted ring plane (2D rings L1553-1566): widths 15, 8, 3.2 at r, 1.4 at r - 9
    const ra = 0.25 + 0.75 * act
    const b0 = s * SPR
    const ringHalf = (rad: number, w: number) => rad + w * 0.5 + 2
    writeSpr(b0, x, y, z, ringHalf(R, 15 * sc), cr, cg, cb, 0.1 * ra * breath * fade, 1, R, 15 * sc, 0, 0, 1)
    writeSpr(b0 + 1, x, y, z, ringHalf(R, 8 * sc), cr, cg, cb, (0.28 * ra + light * 0.2) * fade, 1, R, 8 * sc, 0, 0, 1)
    const lr = 0.18 + light * 0.4
    writeSpr(b0 + 2, x, y, z, ringHalf(R, 3.2 * sc), lighten(a.col[0], lr), lighten(a.col[1], lr), lighten(a.col[2], lr), (0.35 + 0.65 * ra) * fade, 1, R, 3.2 * sc, 0, 0, 1)
    const R9 = (r - 9) * sc
    writeSpr(b0 + 3, x, y, z, ringHalf(Math.max(R9, 1), 1.4 * sc), cr, cg, cb, 0.38 * ra * fade, 1, Math.max(R9, 1), 1.4 * sc, 0, 0, 1)

    // waiting dashes (L1595-1601): r + 12, width 2.4, alpha 0.6 (0.5 + 0.5 sin 2.2 t), on the ring plane
    const Rw = (r + 12) * sc
    writeSpr(b0 + 4, x, y, z, Rw + 4 * sc, cr, cg, cb, 0.6 * (0.5 + 0.5 * Math.sin(time * 2.2)) * d.wait * fade, 2, Rw, 2.4 * sc, sc, 0, 1)
    // idle ripple (L1602-1607): r + 4 + ph 34, 0.35 Hz, alpha (1 - ph) 0.5, on the ring plane
    const ph = (time * 0.35 + a.phase) % 1
    const Ri = (r + 4 + ph * 34) * sc
    writeSpr(b0 + 5, x, y, z, ringHalf(Ri, 2 * sc), cr, cg, cb, (1 - ph) * 0.5 * d.idle * fade, 1, Ri, 2 * sc, 0, 0, 1)
    // completed check (L1610-1617): camera-facing, in front of the body
    writeSpr(b0 + 6, x, y, z, R * 0.7, lighten(a.col[0], 0.35), lighten(a.col[1], 0.35), lighten(a.col[2], 0.35), 0.75 * a.rest * d.check * fade, 3, R, 2.2 * sc, 0, front, 0)

    // satellites (L1583-1589): orbits in the ring plane, r + 22 + 5 i, speeds 0.8 + 0.35 i alternating, glow 6, alpha 0.9 act
    const sw = Math.min(1, d.run + d.think)
    for (let i = 0; i < 3; i++) {
      const an = -(time * (0.8 + i * 0.35) * (i % 2 ? -1 : 1) + a.phase + i * 2.1)
      const rr = (r + 22 + i * 5) * sc
      const ca = Math.cos(an) * rr
      const sa = Math.sin(an) * rr
      writeSpr(
        b0 + 7 + i,
        x + uBasis[0] * ca + uBasis[3] * sa,
        y + uBasis[1] * ca + uBasis[4] * sa,
        z + uBasis[2] * ca + uBasis[5] * sa,
        6 * sc,
        cr,
        cg,
        cb,
        0.9 * act * sw * fade,
        0,
        0,
        0,
        0,
        0,
        0,
      )
    }

    // arcs on the ring plane (L1571-1582): running 3 x 0.62, thinking 2 x 1.1, radius r + 11 + (i % 2) 3, width 2.2
    const sweep = arcSweep(d)
    const A = g.arcA
    for (let i = 0; i < ARCS; i++) {
      const k = s * ARCS + i
      const wgt = i < 2 ? Math.min(1, d.run + d.think) : d.run
      const a0 = d.ang[i] + d.off[i]
      const j = k * 4
      A[0][j] = x
      A[0][j + 1] = y
      A[0][j + 2] = z
      A[0][j + 3] = (r + 11 + (i % 2) * 3) * sc
      A[1][j] = uBasis[0]
      A[1][j + 1] = uBasis[1]
      A[1][j + 2] = uBasis[2]
      A[1][j + 3] = -(a0 + sweep) // canvas angles run clockwise; u x v is the ring normal
      A[2][j] = uBasis[3]
      A[2][j + 1] = uBasis[4]
      A[2][j + 2] = uBasis[5]
      A[2][j + 3] = sweep
      A[3][j] = lighten(a.col[0], 0.3)
      A[3][j + 1] = lighten(a.col[1], 0.3)
      A[3][j + 2] = lighten(a.col[2], 0.3)
      A[3][j + 3] = Math.min(1, 0.75 * act * wgt * fade)
      A[4][k] = 2.2 * sc
    }

    if (g.axesP) writeAxes(s, a, Rb, sp, fade)
  }

  /* ───────── debug axes (?axes=1): roll = spin axis, yaw = spin direction, pitch = precession direction ───────── */
  const YAW_C = [1, 0.36, 0.62]
  const PITCH_C = [0.3, 0.72, 1]
  const ROLL_C = [1, 0.6, 0.2]
  let axV = 0 // running vertex index within the agent block
  let axBase = 0
  const axSeg = (x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, c: number[], k: number) => {
    const P = gpu!.axesP!
    const C = gpu!.axesC!
    const i = (axBase + axV) * 3
    P[i] = x0
    P[i + 1] = y0
    P[i + 2] = z0
    P[i + 3] = x1
    P[i + 4] = y1
    P[i + 5] = z1
    for (let m = 0; m < 3; m++) {
      C[i + m] = c[m] * k
      C[i + 3 + m] = c[m] * k
    }
    axV += 2
  }
  /** Circle arc around (cx, cy, cz) in the plane (e1, e2) from a0 to a1 in `n` segments, plus a 2-stroke arrow head. */
  const axArc = (
    cx: number,
    cy: number,
    cz: number,
    e1: ArrayLike<number>,
    o1: number,
    e2: ArrayLike<number>,
    o2: number,
    rad: number,
    a0: number,
    a1: number,
    n: number,
    c: number[],
    k: number,
  ) => {
    let px = 0
    let py = 0
    let pz = 0
    for (let i = 0; i <= n; i++) {
      const t = a0 + ((a1 - a0) * i) / n
      const ct = Math.cos(t) * rad
      const st = Math.sin(t) * rad
      const qx = cx + e1[o1] * ct + e2[o2] * st
      const qy = cy + e1[o1 + 1] * ct + e2[o2 + 1] * st
      const qz = cz + e1[o1 + 2] * ct + e2[o2 + 2] * st
      if (i > 0) axSeg(px, py, pz, qx, qy, qz, c, k)
      px = qx
      py = qy
      pz = qz
    }
    const sg = a1 > a0 ? 1 : -1
    const ct = Math.cos(a1)
    const st = Math.sin(a1)
    const h = Math.max(rad * 0.35, 6)
    for (let side = -1; side <= 1; side += 2) {
      // tangent (direction of travel) and radial unit vectors at the end
      const tx = (-st * e1[o1] + ct * e2[o2]) * sg
      const ty = (-st * e1[o1 + 1] + ct * e2[o2 + 1]) * sg
      const tz = (-st * e1[o1 + 2] + ct * e2[o2 + 2]) * sg
      const rx = ct * e1[o1] + st * e2[o2]
      const ry = ct * e1[o1 + 1] + st * e2[o2 + 1]
      const rz = ct * e1[o1 + 2] + st * e2[o2 + 2]
      axSeg(px, py, pz, px - (tx + rx * side * 0.6) * h, py - (ty + ry * side * 0.6) * h, pz - (tz + rz * side * 0.6) * h, c, k)
    }
  }
  const nBasis = new Float32Array(3)
  const writeAxes = (s: number, a: AgentState, Rb: number, sp: Spin, fade: number) => {
    axBase = s * AX_VERTS
    axV = 0
    const n = a.ringN!
    const k = Math.min(1, fade) * 0.9
    const x = a.x
    const y = a.y
    const z = a.z
    // roll: the spin axis through the planet
    axSeg(x - n[0] * Rb * 1.5, y - n[1] * Rb * 1.5, z - n[2] * Rb * 1.5, x + n[0] * Rb * 2.0, y + n[1] * Rb * 2.0, z + n[2] * Rb * 2.0, ROLL_C, k)
    // yaw: a circle around the axis above the north pole, arrow in the spin direction
    const top = 1.6 * Rb
    axArc(x + n[0] * top, y + n[1] * top, z + n[2] * top, uBasis, 0, uBasis, 3, Rb * 0.42, 0, 5.2, 14, YAW_C, k)
    // pitch: an arc in the (u, axis) plane at 1.45 Rb, arrow in the precession direction
    nBasis[0] = n[0]
    nBasis[1] = n[1]
    nBasis[2] = n[2]
    const pd = sp.prec >= 0 ? 1 : -1
    axArc(x, y, z, uBasis, 0, nBasis, 0, Rb * 1.45, Math.PI * 0.62 - pd * 0.5, Math.PI * 0.62 + pd * 0.5, 8, PITCH_C, k)
  }

  const layer: NodesLayer = {
    name: 'nodes',
    renderOrder: RENDER_ORDER.nodes,
    anchors,
    pick(cx, cy) {
      const i = pickClient(cx, cy)
      return i >= 0 ? list[i] : null
    },

    init(c) {
      ctx = c
      build()
      const w = c.world
      unsub.push(
        w.on('reset', () => {
          releaseAll()
          target = null
          ptrDown = false
          nextSlot = 0
          free.length = 0
          hw = 0
          syncList()
        }),
        w.on('agentAdded', () => syncList()),
        w.on('agentRemoved', ({ agent }) => {
          list = w.list()
          if (agent === target) {
            target = null
            ptrDown = false
          }
          agent.dragging = false
          if (slotOf.has(agent)) {
            exits.push({ a: agent, t: 0 })
            const an = anchors.get(agent.id)
            if (an) {
              anchors.delete(agent.id)
              anchorPool.push(an)
            }
            // small burst on the way out (copy the colour: our arrays are mutated in place)
            ctx.fx.burst(agent, [agent.col[0], agent.col[1], agent.col[2]], 10, 60)
          }
        }),
      )
      const cv = c.engine.canvas
      cv.addEventListener('pointerdown', onDown)
      cv.addEventListener('pointermove', onMove)
      cv.addEventListener('pointerup', onUp)
      cv.addEventListener('pointercancel', onUp)
      // keep the pointerdown for a node drag instead of orbiting (camera.ts hook); chain any earlier hook
      prevShould = c.rig.shouldOrbit
      myShould = (e: PointerEvent) => (pickClient(e.clientX, e.clientY) >= 0 ? false : prevShould ? prevShould(e) : true)
      c.rig.shouldOrbit = myShould
      syncList()
    },

    update(dt, c) {
      const w = c.world
      const time = w.time
      phys.motion = c.uniforms.motion.value
      refreshRay()
      if (target && ptrDown && rayOnPlane(ray, gripP.x, gripP.y, gripP.z, dragPt)) phys.drag = dragPt
      else phys.drag = null
      let active = 0
      for (let i = 0; i < list.length; i++) {
        const a = list[i]
        const s = assign(a)
        stepAppearance(a, dt, time, w.hover === a.id)
        stepCounters(a, dt, c.rng)
        stepPhysics(a, list, dt, time, phys)
        stepDeco(decos[s], a, dt)
        stepSpin(spins[s], a.spec.status, dt, time, phys.motion)
        spinFrame(spins[s], time, a.axisQ!, a.ringN!, a.spinQ!)
        if (a.power > 0.3) active++
      }
      w.orb.activeCount = active // 2D L850
      for (let i = exits.length - 1; i >= 0; i--) {
        const e = exits[i]
        e.t += dt
        stepAppearance(e.a, dt, time, false)
        const s = slotOf.get(e.a)
        if (s !== undefined) {
          stepDeco(decos[s], e.a, dt)
          stepSpin(spins[s], e.a.spec.status, dt, time, phys.motion)
          spinFrame(spins[s], time, e.a.axisQ!, e.a.ringN!, e.a.spinQ!)
        }
        if (e.t >= EXIT_TIME) {
          release(e.a)
          exits.splice(i, 1)
        }
      }
    },

    beforeRender(c) {
      if (!gpu) return
      refreshAnchors()
      updateHover()
      const time = c.world.time
      const o = c.world.orb
      uOrb.value.set(o.x, o.y, o.z)
      for (let i = 0; i < list.length; i++) {
        const a = list[i]
        const s = slotOf.get(a)
        if (s === undefined) continue
        writeAgent(s, a, decos[s], spins[s], a.fade, 1, time)
      }
      for (const raw of exits) {
        const e = raw
        const s = slotOf.get(e.a)
        if (s === undefined) continue
        writeAgent(s, e.a, decos[s], spins[s], exitFade(e.t), exitScale(e.t), time)
      }
      const g = gpu
      g.haloGeo.instanceCount = hw
      g.bodyGeo.instanceCount = hw
      g.atmoGeo.instanceCount = hw
      g.sprGeo.instanceCount = hw * SPR
      g.arcGeo.instanceCount = hw * ARCS
      for (const at of g.attrs) at.needsUpdate = true
      if (g.axesGeo && g.axesAttrs) {
        g.axesGeo.setDrawRange(0, hw * AX_VERTS)
        for (const at of g.axesAttrs) at.needsUpdate = true
      }
    },

    onContextRestored() {
      if (gpu) for (const at of gpu.attrs) at.needsUpdate = true
      if (gpu?.axesAttrs) for (const at of gpu.axesAttrs) at.needsUpdate = true
    },

    dispose() {
      for (const u of unsub) u()
      unsub.length = 0
      const cv = ctx?.engine.canvas
      if (cv) {
        cv.removeEventListener('pointerdown', onDown)
        cv.removeEventListener('pointermove', onMove)
        cv.removeEventListener('pointerup', onUp)
        cv.removeEventListener('pointercancel', onUp)
        if (setCursor) cv.style.cursor = ''
      }
      if (ctx && ctx.rig.shouldOrbit === myShould && prevShould) ctx.rig.shouldOrbit = prevShould
      detach()
      disposeGpu()
      slotOf.clear()
      anchors.clear()
      list = []
      exits.length = 0
    },
  }
  return layer
}

