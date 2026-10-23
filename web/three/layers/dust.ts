/**
 * Dust field + pointer gravity-well ring. Port of 2D makeDust/stepDust/drawDust (L547-568, L1035-1073, L1411-1437)
 * and the well indicator (L1850-1857). The CPU sim lives in ../dust-sim.ts; here it is drawn as velocity-stretched
 * instanced quads (one draw call) read straight from the sim's Float32Array through an interleaved buffer.
 */
import {
  AdditiveBlending,
  BufferAttribute,
  DynamicDrawUsage,
  InstancedBufferGeometry,
  InstancedInterleavedBuffer,
  InterleavedBufferAttribute,
  Mesh,
  PlaneGeometry,
  Quaternion,
  ShaderMaterial,
  Vector2,
  Vector3,
} from 'three'
import { DUST_PALETTE } from '../../shared/palette'
import { DUST_STRIDE, DustSim } from '../dust-sim'
import type { DustAttractor } from '../dust-sim'
import { FOG_GLSL, RENDER_ORDER, fogUniform, updateFog } from '../layer'
import type { Layer, LayerCtx } from '../layer'
import { damp } from '../springs'
import { CENTER_R } from '../layout3d'
import type { AgentState } from '../world'

/** Pointer well masses (2D L1036) and ring (2D L1850-1857). */
const PTR_MASS = 26000
const PTR_MASS_DOWN = 150000
const RING_COLOR = new Vector3(140, 180, 255).divideScalar(255)
const RING_SPAN = 240 // world size of the ring quad (covers radius 84 + line)

const DUST_VERT = /* glsl */ `${FOG_GLSL}
attribute vec3 iPos;
attribute vec3 iVel;
attribute vec4 iA; // size, class, phase, twinkle frequency
attribute vec2 iB; // age, big
uniform float uTime;
uniform float uDpr;
uniform vec2 uRes;
uniform vec3 uPal[6];
varying vec2 vLocal;
varying vec3 vInfo; // streak length (px), core width (px), glow radius (px)
varying vec3 vCol;
varying vec2 vAlpha; // alpha, core dimming for sub-pixel sizes
void main() {
  vec4 hc = projectionMatrix * modelViewMatrix * vec4(iPos, 1.0);
  if (hc.w < 1.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); vLocal = vec2(0.0); vInfo = vec3(0.0); vCol = vec3(0.0); vAlpha = vec2(0.0); return; }
  // 2D L1424-1431: speed > 70 is drawn as a streak from the head back along -v * 0.05
  vec4 tc = projectionMatrix * modelViewMatrix * vec4(iPos - iVel * 0.05, 1.0);
  float sp = length(iVel);
  float streak = step(70.0, sp);
  vec2 half_ = 0.5 * uRes;
  vec2 hpx = hc.xy / hc.w * half_;
  vec2 tpx = tc.xy / max(tc.w, 0.5) * half_;
  float ppu = half_.y * projectionMatrix[1][1] / hc.w; // px per world unit at this depth
  float s = iA.x;
  float sizePx = s * ppu;
  float minPx = 1.0 / uDpr; // one device pixel
  float w = streak > 0.5 ? max(sizePx * 0.8, minPx) : max(sizePx, minPx);
  float dim = min(sizePx / minPx, 1.0);
  vec2 d = (tpx - hpx) * streak;
  float len = length(d);
  vec2 dir = len > 1e-4 ? d / len : vec2(1.0, 0.0);
  vec2 perp = vec2(-dir.y, dir.x);
  float G = iB.y > 0.5 ? s * 5.0 * ppu : 0.0; // 12% big glow: s * 5 (2D L1420)
  float ext = max(w * 0.5, G) + 1.0;
  vec2 local = vec2(position.x * (len * 0.5 + ext), position.y * ext);
  vec2 ppx = hpx + dir * (len * 0.5) + dir * local.x + perp * local.y;
  gl_Position = vec4(ppx / half_ * hc.w, hc.z, hc.w);
  vLocal = local;
  vInfo = vec3(len, w, G);
  vCol = uPal[int(iA.y + 0.5)];
  // twinkle, fade-in, alpha (2D L1416-1418)
  float tw = 0.55 + 0.45 * sin(uTime * iA.w + iA.z);
  float fade = clamp(iB.x / 1.2, 0.0, 1.0);
  vAlpha = vec2(tw * fade * 0.85 * fogFade(iPos), dim); // depth cue (Addendum A.8)
}
`

const DUST_FRAG = /* glsl */ `
precision highp float;
varying vec2 vLocal;
varying vec3 vInfo;
varying vec3 vCol;
varying vec2 vAlpha;
void main() {
  float hl = vInfo.x * 0.5;
  float dx = clamp(vLocal.x, -hl, hl);
  float dist = length(vec2(vLocal.x - dx, vLocal.y));
  float core = clamp(vInfo.y * 0.5 + 0.5 - dist, 0.0, 1.0) * vAlpha.y;
  float g = 0.0;
  if (vInfo.z > 0.0) {
    // the 2D glow sprite profile: 1 at the centre, 0.55 at 20%, 0.14 at 50%, 0 at the edge (assets.ts)
    float r = length(vLocal - vec2(-hl, 0.0)) / vInfo.z;
    g = r >= 1.0 ? 0.0 : r < 0.2 ? mix(1.0, 0.55, r / 0.2) : r < 0.5 ? mix(0.55, 0.14, (r - 0.2) / 0.3) : mix(0.14, 0.0, (r - 0.5) / 0.5);
  }
  float a = vAlpha.x * (core + g * 0.55);
  gl_FragColor = vec4(vCol * a, 1.0);
}
`

const RING_VERT = /* glsl */ `
varying vec2 vP;
uniform float uSpan;
void main() {
  vP = (uv - 0.5) * uSpan;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const RING_FRAG = /* glsl */ `
precision highp float;
varying vec2 vP;
uniform float uRadius;
uniform float uAlpha;
uniform float uHalfW; // half line width in world units
uniform vec3 uColor;
void main() {
  float d = abs(length(vP) - uRadius);
  float a = clamp((uHalfW + 0.5 * uHalfW - d) / max(uHalfW, 1e-3), 0.0, 1.0) * uAlpha;
  gl_FragColor = vec4(uColor * a, 1.0);
}
`

export function createDustLayer(): Layer {
  let sim: DustSim | undefined
  let mesh: Mesh | undefined
  let geometry: InstancedBufferGeometry | undefined
  let material: ShaderMaterial | undefined
  let buffer: InstancedInterleavedBuffer | undefined
  let ring: Mesh | undefined
  let ringMat: ShaderMaterial | undefined
  let ringGeo: PlaneGeometry | undefined
  let scene: LayerCtx['scene'] | undefined
  let unShock: (() => void) | undefined
  let unLayout: (() => void) | undefined

  // scratch, so update() allocates nothing
  const agentList: AgentState[] = []
  const hit = new Vector3()
  const orbPoint = new Vector3()
  let ptrMass = 0
  let ptrOn = false
  let hot = 0
  let ringVis = 0
  let ringHit = false
  const ringPos = new Vector3()
  // the dust disc is the XZ plane (Addendum A.1): the pointer well sits on it when the camera looks down enough
  const DISC_N = new Vector3(0, 1, 0)
  const DISC_Q = new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), -Math.PI / 2)
  const camFwd = new Vector3()
  let onDisc = false

  const env = {
    cx: 0,
    cy: 0,
    cz: 0,
    R: CENTER_R,
    agents: agentList as ArrayLike<DustAttractor>,
    ptrMass: 0,
    px: 0,
    py: 0,
    pz: 0,
    motion: 1,
    onConsume: (_x: number, _y: number, _z: number, _c: number) => {},
  }

  return {
    name: 'dust',
    renderOrder: RENDER_ORDER.dust,
    init(ctx) {
      scene = ctx.scene
      const world = ctx.world
      sim = new DustSim(ctx.rng, DUST_PALETTE.length)
      const rebuild = () => {
        const reduced = ctx.uniforms.motion.value < 0.5
        sim!.setViewport(world.layout.LW, world.layout.LH, reduced, world.orb.r, ctx.uniforms.motion.value)
      }
      rebuild()
      unLayout = world.on('layout', rebuild)
      unShock = ctx.fx.onShockwave((pos, strength) => {
        sim!.shockwave(pos.x, pos.y, pos.z, strength, ctx.uniforms.motion.value)
      })

      // consumption (2D L1045-1050): feed the orb, now and then a spark
      const spark = new Vector3()
      env.onConsume = (x, y, z, cls) => {
        world.orb.feed = Math.min(1, world.orb.feed + 0.012)
        if (ctx.rng() < 0.3) {
          spark.x = x
          spark.y = y
          spark.z = z
          ctx.fx.burst(spark, DUST_PALETTE[cls], 1, 25)
        }
      }

      // one quad, instanced
      const base = new PlaneGeometry(2, 2)
      geometry = new InstancedBufferGeometry()
      geometry.setIndex(base.getIndex()!)
      geometry.setAttribute('position', base.getAttribute('position') as BufferAttribute)
      base.dispose()
      buffer = new InstancedInterleavedBuffer(sim.data, DUST_STRIDE, 1)
      buffer.setUsage(DynamicDrawUsage)
      geometry.setAttribute('iPos', new InterleavedBufferAttribute(buffer, 3, 0))
      geometry.setAttribute('iVel', new InterleavedBufferAttribute(buffer, 3, 3))
      geometry.setAttribute('iA', new InterleavedBufferAttribute(buffer, 4, 6))
      geometry.setAttribute('iB', new InterleavedBufferAttribute(buffer, 2, 10))
      geometry.instanceCount = sim.count
      material = new ShaderMaterial({
        vertexShader: DUST_VERT,
        fragmentShader: DUST_FRAG,
        uniforms: {
          uTime: ctx.uniforms.time,
          uDpr: ctx.uniforms.dpr,
          uRes: { value: ctx.uniforms.resolution.value },
          uFog: fogUniform(ctx.uniforms),
          uPal: { value: DUST_PALETTE.map(c => new Vector3(c[0], c[1], c[2]).divideScalar(255)) },
        },
        blending: AdditiveBlending,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        toneMapped: false,
      })
      mesh = new Mesh(geometry, material)
      mesh.frustumCulled = false
      mesh.renderOrder = RENDER_ORDER.dust
      mesh.name = 'dust'
      scene.add(mesh)

      // pointer well ring (camera facing quad at the pointer hit)
      ringGeo = new PlaneGeometry(1, 1)
      ringMat = new ShaderMaterial({
        vertexShader: RING_VERT,
        fragmentShader: RING_FRAG,
        uniforms: {
          uSpan: { value: RING_SPAN },
          uRadius: { value: 60 },
          uAlpha: { value: 0 },
          uHalfW: { value: 0.75 },
          uColor: { value: RING_COLOR },
        },
        blending: AdditiveBlending,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        toneMapped: false,
      })
      ring = new Mesh(ringGeo, ringMat)
      ring.scale.set(RING_SPAN, RING_SPAN, 1)
      ring.frustumCulled = false
      ring.visible = false
      ring.renderOrder = RENDER_ORDER.rings
      ring.name = 'dust-well-ring'
      scene.add(ring)
    },

    update(dt, ctx) {
      const s = sim!
      const world = ctx.world
      const rig = ctx.rig
      const motion = ctx.uniforms.motion.value
      agentList.length = 0
      for (const a of world.agents.values()) agentList.push(a)

      // pointer ray against the disc plane through the orb; near edge-on views fall back to the camera-facing plane
      let anyDrag = false
      for (let i = 0; i < agentList.length; i++) if (agentList[i].dragging) anyDrag = true
      orbPoint.set(world.orb.x, world.orb.y, world.orb.z)
      ringHit = false
      ptrOn = rig.pointerActive
      rig.camera.getWorldDirection(camFwd)
      onDisc = Math.abs(camFwd.y) > 0.3
      if (ptrOn && rig.pointerWorldOnPlane(orbPoint, onDisc ? DISC_N : undefined, hit) && hit.distanceToSquared(orbPoint) < 2500 * 2500) ringHit = true
      const down = rig.dragging
      ptrMass = ringHit ? (down ? PTR_MASS_DOWN : PTR_MASS) : 0
      hot = damp(hot, down ? 1 : 0, 14, dt)
      ringVis = damp(ringVis, ringHit && !anyDrag ? 1 : 0, 14, dt)

      env.cx = world.orb.x
      env.cy = world.orb.y
      env.cz = world.orb.z
      env.R = world.orb.r
      env.ptrMass = ptrMass
      env.px = hit.x
      env.py = hit.y
      env.pz = hit.z
      env.motion = motion
      s.step(dt, env)
    },

    beforeRender(ctx) {
      if (!sim || !geometry || !buffer || !ring || !ringMat) return
      updateFog(ctx.uniforms, ctx.rig.camera.position, ctx.world.orb)
      buffer.needsUpdate = true
      geometry.instanceCount = sim.count

      // ring (2D L1851-1857): k = (0.8 t) % 1; radius 60 - 55k pressed, 60 + 24k otherwise; alpha (1-k)(0.12 + 0.3 hot)
      const show = ringVis > 0.01 && ringHit
      ring.visible = show
      if (!show) return
      const k = (ctx.uniforms.time.value * 0.8) % 1
      const h = hot
      const rad = 60 - k * 55 * h + k * 24 * (1 - h)
      ringPos.copy(hit)
      ring.position.copy(ringPos)
      ring.quaternion.copy(onDisc ? DISC_Q : ctx.rig.camera.quaternion)
      const dist = ctx.rig.camera.position.distanceTo(ringPos)
      const wuPerPx = (2 * dist * Math.tan((ctx.rig.camera.fov * Math.PI) / 360)) / Math.max(1, ctx.uniforms.resolution.value.y)
      ringMat.uniforms.uRadius.value = rad
      ringMat.uniforms.uAlpha.value = (1 - k) * (0.12 + h * 0.3) * ringVis
      ringMat.uniforms.uHalfW.value = Math.max(0.75, wuPerPx * 0.6) // 2D lineWidth 1.5, never thinner than a device pixel
    },

    onResize(_w, _h, ctx) {
      ;(material?.uniforms.uRes.value as Vector2 | undefined)?.copy(ctx.uniforms.resolution.value)
    },

    dispose() {
      unShock?.()
      unLayout?.()
      if (mesh) scene?.remove(mesh)
      if (ring) scene?.remove(ring)
      geometry?.dispose()
      material?.dispose()
      ringGeo?.dispose()
      ringMat?.dispose()
      mesh = undefined
      ring = undefined
      geometry = undefined
      material = undefined
      ringMat = undefined
      ringGeo = undefined
      buffer = undefined
      sim = undefined
    },
  }
}
