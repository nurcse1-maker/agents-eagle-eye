/**
 * The orchestrator orb (2D drawCenter L1723-1800, update L833-860, click L1926-1931, pulse L2008).
 *
 * Layers, back to front (everything additive except the glass body):
 *   main glow 2.3R, back halos / satellites, glass sphere body (fresnel + surface particle network, writes depth),
 *   lat/long grid shell, disc halo rings, conic rim ring, tick ring, shell pulses, front halos / satellites.
 *   Halos and satellites orbit near the disc plane, so each frame they are split into "behind the sphere"
 *   and "in front of it" by changing their renderOrder.
 *
 * Addendum A.5/A.8: the body and grid yaw slowly about world Y (ORB_YAW_SPEED * motion); the body writes depth so the
 * planets (depth tested, drawn later) behind the orb are hidden by it, and the grid shell and disc rings are depth
 * tested against it (only their front halves show over the sphere). Rim and tick ring stay camera-facing.
 */
import {
  AdditiveBlending,
  BufferGeometry,
  DoubleSide,
  Float32BufferAttribute,
  Mesh,
  NormalBlending,
  PlaneGeometry,
  Points,
  ShaderMaterial,
  Sphere,
  SphereGeometry,
  Vector3,
} from 'three'
import type { RGB } from '../../shared/palette'
import { RENDER_ORDER } from '../layer'
import type { Layer, LayerCtx } from '../layer'
import { CENTER_R, ORB_SCALE } from '../layout3d'
import { TAU, clamp, damp, easeOutCubic, lerp } from '../springs'
import type { Projected } from '../camera'

const R = CENTER_R // 2D CENTER_R, L72

/* ───────────────────────── pure logic (tested) ───────────────────────── */

/** Heartbeats per second (2D L852). */
export const orbBpm = (active: number) => 0.55 + active * 0.04
/** Heartbeat envelope (2D L853). */
export const orbBeat = (time: number, bpm: number) => Math.pow(Math.max(0, Math.sin(time * TAU * bpm)), 8)
/** Satellite angular speed (2D L1790). */
export const satelliteSpeed = (i: number) => 0.55 / Math.pow(1 + i * 0.35, 1.5)
/** Orb body scale (2D L1728). */
export const orbScale = (spawn: number, beat: number, feed: number, press: number) => spawn * (1 + beat * 0.012 + feed * 0.02 + press * 0.03)

/**
 * Point on a circle of radius `rad` at angle `ang` (2D convention: clockwise on screen, so y = -sin in y-up world),
 * in a plane tilted by `inc` radians about the in-plane axis at angle `node`. The radius is preserved.
 */
export function orbitPos(out: { x: number; y: number; z: number }, ang: number, rad: number, inc: number, node: number) {
  const lx = Math.cos(ang) * rad
  const ly = -Math.sin(ang) * rad
  const ax = Math.cos(node)
  const ay = Math.sin(node)
  const ci = Math.cos(inc)
  const d = (ax * lx + ay * ly) * (1 - ci)
  out.x = lx * ci + ax * d
  out.y = ly * ci + ay * d
  out.z = (ax * ly - ay * lx) * Math.sin(inc)
  return out
}

/**
 * Addendum A.5: point on a circle of radius `rad` at angle `ang` in the XZ disc plane (Y up), tilted by `inc` radians
 * about the in-plane axis at angle `node` (Rodrigues rotation about (cos node, 0, sin node)). The radius is preserved;
 * at inc = 0 the point lies on the disc (y = 0).
 */
export function discOrbitPos(out: { x: number; y: number; z: number }, ang: number, rad: number, inc: number, node: number) {
  return tiltDisc(out, Math.cos(ang) * rad, Math.sin(ang) * rad, inc, node)
}

/** Disc-plane coordinates (u along +X, w along +Z) tilted by `inc` about the in-plane axis at angle `node`. */
export function tiltDisc(out: { x: number; y: number; z: number }, u: number, w: number, inc: number, node: number) {
  const kx = Math.cos(node)
  const kz = Math.sin(node)
  const ci = Math.cos(inc)
  const d = (kx * u + kz * w) * (1 - ci)
  out.x = u * ci + kx * d
  out.y = (kz * u - kx * w) * Math.sin(inc)
  out.z = w * ci + kz * d
  return out
}

/**
 * Soft clip for additive contributions: ~k*x for small x, saturating at `cap`. The shaders mirror it (1 - exp(-x)) so
 * stacked glows, feed and flashes brighten the orb but never push it to white.
 */
export const softClip = (x: number, cap = 1, k = 1) => cap * (1 - Math.exp((-k * x) / cap))
/** Halo alpha: soft-clipped (base glow + heartbeat + feed). Never above HALO_CAP. */
export const HALO_CAP = 0.62
export const haloAlpha = (beat: number, feed: number) => softClip(0.38 + beat * 0.12 + feed * 0.2, HALO_CAP)
/** Main glow alpha (2.3R sprite): soft-clipped. Never above MAIN_GLOW_CAP. */
export const MAIN_GLOW_CAP = 0.55
export const mainGlowAlpha = (beat: number, feed: number) => softClip(0.36 + beat * 0.12 + feed * 0.18, MAIN_GLOW_CAP)
/**
 * Glow gain from the zoom (`ratio` = camera radius / home radius): 1 at home or further out, smoothly down to 0.7 when
 * the camera is at a quarter of it, so the stacked additive glows do not white the orb out up close.
 */
export const orbZoomGain = (ratio: number): number => {
  if (!(ratio > 0)) return 1
  const t = Math.min(1, Math.max(0, (ratio - 0.25) / 0.75))
  return 0.7 + 0.3 * t * t * (3 - 2 * t)
}
/** Factor applied to halo glow inside the body disc (the rim keeps its full glow). */
export const HALO_INNER = 0.35

/** Orb surface yaw speed about world Y, rad/s (times motion). */
export const ORB_YAW_SPEED = 0.05

/* ───────────────────────── constants ───────────────────────── */

const HALO: RGB[] = [[170, 80, 255], [60, 120, 255], [255, 150, 60], [60, 255, 140]] // 2D L1733
// Addendum A.5: halo glows and satellites orbit near the disc plane (small inclinations from XZ)
const HALO_INC = [0.1, -0.16, 0.22, -0.08]
const HALO_NODE = [0, 1.1, 2.2, 3.3]
const SAT_INC = [0.12, 0.26, -0.18, 0.34]
const SAT_NODE = [0.5, 1.9, 3.1, 4.4]
/** Thin halo rings lying near the disc plane around the orb: radius offset from R, inclination, node, colour, alpha. */
const DISC_RINGS: { dr: number; inc: number; node: number; col: RGB; a: number; dashes: number; speed: number }[] = [
  { dr: 34, inc: 0.05, node: 0.4, col: [110, 160, 255], a: 0.42, dashes: 0, speed: 0 },
  { dr: 62, inc: -0.11, node: 1.7, col: [170, 120, 255], a: 0.34, dashes: 64, speed: 0.045 },
  { dr: 96, inc: 0.16, node: 3.0, col: [90, 220, 255], a: 0.26, dashes: 120, speed: -0.03 },
]
const GRID_SHELL = 1.025 // lat/long wireframe shell radius / R
const TICKS = 90 // 2D L1773
const SHELLS = 3

/* ───────────────────────── shaders ───────────────────────── */

const QUAD_VERT = /* glsl */ `
varying vec2 vP;
void main() {
  vP = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

// 2D glow sprite (L130-148): alpha 1 -> .55 @20% -> .14 @50% -> 0, constant colour.
const GLOW_FRAG = /* glsl */ `
precision highp float;
varying vec2 vP;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uDotR;
uniform vec3 uBody; // body disc in this quad's local space: centre xy, radius z (z = 0: none)
uniform float uInner; // glow factor inside the body disc
void main() {
  float r = length(vP);
  if (r > 1.0) discard;
  float a = r < 0.2 ? mix(1.0, 0.55, r / 0.2) : (r < 0.5 ? mix(0.55, 0.14, (r - 0.2) / 0.3) : mix(0.14, 0.0, (r - 0.5) / 0.5));
  if (uBody.z > 0.0) a *= mix(1.0, uInner, 1.0 - smoothstep(uBody.z - 0.06, uBody.z + 0.02, length(vP - uBody.xy)));
  vec3 c = uColor * (a * uAlpha);
  if (uDotR > 0.0) c += vec3(0.9 * (1.0 - smoothstep(uDotR - 0.03, uDotR + 0.03, r)));
  gl_FragColor = vec4(c, 1.0);
}
`

const BODY_VERT = /* glsl */ `
varying vec3 vN;
varying vec3 vO;
void main() {
  vN = normalize(normalMatrix * normal);
  vO = position; // unit sphere, object space: rotates with the mesh (the surface yaw)
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

/**
 * Fine surface particle network (Addendum A.5), procedural: jittered points of a 3D cell grid projected onto the
 * sphere (scale S), a dot at each point and chords from the nearest point to its neighbours (a plexus web).
 */
const NETWORK_GLSL = /* glsl */ `
vec3 nHash(vec3 p) {
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)), dot(p, vec3(269.5, 183.3, 246.1)), dot(p, vec3(113.5, 271.9, 124.6)));
  return fract(sin(p) * 43758.5453);
}
const float NS = 7.0;
// x = dot glow, y = line glow, z = twinkle seed of the nearest point
vec3 network(vec3 dir, float time) {
  vec3 p = dir * NS;
  vec3 c = floor(p);
  float best = 1e9;
  vec3 bp = p;
  float seed = 0.0;
  for (int x = -1; x <= 1; x++)
  for (int y = -1; y <= 1; y++)
  for (int z = -1; z <= 1; z++) {
    vec3 g = c + vec3(float(x), float(y), float(z));
    vec3 h = nHash(g);
    vec3 q = normalize(g + 0.15 + 0.7 * h) * NS;
    vec3 e = q - p;
    float d = dot(e, e);
    if (d < best) { best = d; bp = q; seed = h.x; }
  }
  float line = 0.0;
  for (int x = -1; x <= 1; x++)
  for (int y = -1; y <= 1; y++)
  for (int z = -1; z <= 1; z++) {
    vec3 g = c + vec3(float(x), float(y), float(z));
    vec3 q = normalize(g + 0.15 + 0.7 * nHash(g)) * NS;
    vec3 e = q - bp;
    float L2 = dot(e, e);
    if (L2 < 1e-4 || L2 > 1.7) continue;
    float k = clamp(dot(p - bp, e) / L2, 0.0, 1.0);
    float dd = length(p - bp - e * k);
    line = max(line, (1.0 - smoothstep(0.012, 0.04, dd)) * (1.0 - L2 / 1.7));
  }
  float dotG = 1.0 - smoothstep(0.0, 0.012, best);
  float halo = (1.0 - smoothstep(0.0, 0.06, best)) * 0.35;
  float tw = 0.55 + 0.45 * sin(time * (0.8 + seed * 1.6) + seed * 40.0);
  return vec3((dotG + halo) * tw, line, seed);
}
`

// 2D body gradient (L1745-1750): rgba(12,16,70,.97) -> (14,20,92,.96) @.65 -> (46,60,180,.92) edge, plus fresnel,
// plus the surface particle network (Addendum A.5).
const BODY_FRAG = /* glsl */ `
precision highp float;
varying vec3 vN;
varying vec3 vO;
uniform float uTime;
uniform float uBeat;
uniform float uTier;
${NETWORK_GLSL}
void main() {
  vec3 n = normalize(vN);
  float rr = clamp(length(n.xy), 0.0, 1.0);
  vec3 c0 = vec3(12.0, 16.0, 70.0) / 255.0;
  vec3 c1 = vec3(14.0, 20.0, 92.0) / 255.0;
  vec3 c2 = vec3(46.0, 60.0, 180.0) / 255.0;
  vec3 col = rr < 0.65 ? mix(c0, c1, rr / 0.65) : mix(c1, c2, (rr - 0.65) / 0.35);
  float a = rr < 0.65 ? mix(0.97, 0.96, rr / 0.65) : mix(0.96, 0.92, (rr - 0.65) / 0.35);
  float fres = pow(1.0 - clamp(n.z, 0.0, 1.0), 3.0);
  col += fres * vec3(0.05, 0.13, 0.42) * 0.55;
  // soft glass highlight, upper left
  float hl = smoothstep(0.55, 0.0, distance(n.xy, vec2(-0.28, 0.42)));
  col += hl * vec3(0.05, 0.07, 0.16);
  // particle network: calmer at the centre, brighter toward the limb
  // (the governor's low tier skips it: ~54 cell lookups per fragment)
  if (uTier > 0.5) {
    vec3 nw = network(normalize(vO), uTime);
    float k = mix(0.35, 1.0, smoothstep(0.25, 0.95, rr)) * (1.0 + uBeat * 0.35);
    col += (nw.x * vec3(0.55, 0.8, 1.0) * 0.6 + nw.y * vec3(0.22, 0.42, 1.0) * 0.4) * k;
  }
  col = 1.0 - exp(-col * 1.15); // soft clip: the body stays deep blue, never white
  gl_FragColor = vec4(col, a);
}
`

// Faint lat/long wireframe shell just above the surface (Addendum A.5). Depth tested against the body, so only the
// front hemisphere shows; brighter toward the limb like a glass globe.
const GRID_FRAG = /* glsl */ `
precision highp float;
varying vec3 vN;
varying vec3 vO;
uniform float uBeat;
const float PI = 3.14159265;
float gridLine(float a) {
  float w = min(fwidth(a), 0.25);
  float f = abs(fract(a + 0.5) - 0.5);
  return 1.0 - smoothstep(0.35 * w, 1.35 * w, f);
}
void main() {
  vec3 o = normalize(vO);
  float lat = asin(clamp(o.y, -1.0, 1.0));
  float lon = atan(o.z, o.x);
  float la = gridLine(lat / (PI / 12.0));
  float lo = gridLine(lon / (PI / 12.0)) * smoothstep(0.06, 0.3, sqrt(max(0.0, 1.0 - o.y * o.y)));
  float eq = 1.0 - smoothstep(0.0, 0.012, abs(o.y));
  float g = max(max(la, lo) * 0.75, eq);
  float fres = pow(1.0 - clamp(abs(normalize(vN).z), 0.0, 1.0), 1.5);
  float a = g * (0.14 + 0.34 * fres) * (1.0 + uBeat * 0.4);
  gl_FragColor = vec4(vec3(0.45, 0.66, 1.0) * a, 1.0);
}
`

// Thin halo rings near the disc plane (Addendum A.5): one quad per ring baked in orb-local world px, one draw call.
const DISC_RING_VERT = /* glsl */ `
attribute vec2 aUV;
attribute vec4 aRing; // radius, dash count, dash speed, alpha
attribute vec3 aCol;
varying vec2 vUV;
varying vec4 vRing;
varying vec3 vCol;
void main() {
  vUV = aUV;
  vRing = aRing;
  vCol = aCol;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
const DISC_RING_FRAG = /* glsl */ `
precision highp float;
varying vec2 vUV;
varying vec4 vRing;
varying vec3 vCol;
uniform float uTime;
uniform float uMotion;
uniform float uAlpha;
const float PI2 = 6.283185307;
void main() {
  float d = length(vUV);
  float off = abs(d - vRing.x);
  if (off > ${(8 * ORB_SCALE).toFixed(2)}) discard;
  float aa = fwidth(d);
  float hw = max(0.8, aa * 0.6);
  float line = 1.0 - smoothstep(hw, hw + aa * 1.5, off);
  float glow = (1.0 - smoothstep(0.0, ${(7 * ORB_SCALE).toFixed(2)}, off)) * 0.18;
  float m = 1.0;
  if (vRing.y > 0.5) {
    float u = fract(atan(vUV.y, vUV.x) / PI2 * vRing.y - uTime * vRing.z * uMotion * vRing.y);
    m = 1.0 - smoothstep(0.28, 0.36, abs(u - 0.5));
  }
  gl_FragColor = vec4(vCol * (line * m + glow) * vRing.w * uAlpha, 1.0);
}
`

const RIM_FRAG = /* glsl */ `
precision highp float;
varying vec2 vP;
uniform float uQ;     // quad radius in world px
uniform float uRot;   // conic start angle
uniform float uBeat;
const float PI2 = 6.283185307;
const vec3 k0 = vec3(168.0, 88.0, 255.0) / 255.0;
const vec3 k1 = vec3(70.0, 150.0, 255.0) / 255.0;
const vec3 k2 = vec3(60.0, 235.0, 255.0) / 255.0;
const vec3 k3 = vec3(70.0, 255.0, 130.0) / 255.0;
const vec3 k4 = vec3(255.0, 170.0, 60.0) / 255.0;
const vec3 k5 = vec3(255.0, 110.0, 190.0) / 255.0;
vec3 conic(float u) {
  if (u < 0.2) return mix(k0, k1, u / 0.2);
  if (u < 0.38) return mix(k1, k2, (u - 0.2) / 0.18);
  if (u < 0.54) return mix(k2, k3, (u - 0.38) / 0.16);
  if (u < 0.74) return mix(k3, k4, (u - 0.54) / 0.2);
  if (u < 0.88) return mix(k4, k5, (u - 0.74) / 0.14);
  return mix(k5, k0, (u - 0.88) / 0.12);
}
float stroke(float d, float rad, float w) {
  return 1.0 - smoothstep(w * 0.5 - 0.5, w * 0.5 + 0.5, abs(d - rad));
}
void main() {
  float d = length(vP) * uQ;
  if (d > uQ) discard;
  // canvas conic: angle clockwise on screen from uRot (y-up here, so negate y)
  float u = fract((atan(-vP.y, vP.x) - uRot) / PI2);
  vec3 c = conic(u);
  float a = stroke(d, ${R.toFixed(1)}, ${(26 * ORB_SCALE).toFixed(2)}) * (0.14 + uBeat * 0.08)
          + stroke(d, ${R.toFixed(1)}, ${(13 * ORB_SCALE).toFixed(2)}) * 0.34
          + stroke(d, ${R.toFixed(1)}, ${(5 * ORB_SCALE).toFixed(2)})
          + stroke(d, ${(R - 15 * ORB_SCALE).toFixed(2)}, ${(1.6 * ORB_SCALE).toFixed(2)}) * 0.55;
  a = 1.0 - exp(-1.4 * a); // stacked strokes soft-clip to a coloured rim instead of adding up to white
  gl_FragColor = vec4(c * a, 1.0);
}
`

const TICK_VERT = /* glsl */ `
attribute float aBase;
uniform float uTime;
uniform float uMotion;
uniform float uScale;
uniform float uDpr;
uniform vec2 uRes;
varying float vA;
void main() {
  float an = aBase + uTime * 0.08 * uMotion;               // 2D L1774
  float wave = 0.5 + 0.5 * sin(an * 3.0 - uTime * 2.2);    // 2D L1775
  float rr = ${R.toFixed(1)} + ${(17 * ORB_SCALE).toFixed(2)} + wave * ${(3 * ORB_SCALE).toFixed(2)};
  vec4 mv = modelViewMatrix * vec4(cos(an) * rr, -sin(an) * rr, 0.0, 1.0);
  vA = 0.1 + wave * 0.55;
  float worldDiam = ${(2 * ORB_SCALE).toFixed(2)} * (1.1 + wave * 0.9) * uScale;
  float px = worldDiam * uRes.y * 0.5 * projectionMatrix[1][1] / max(1.0, -mv.z) * uDpr;
  gl_PointSize = max(px, 1.5);
  vA *= min(px / 1.5, 1.0);
  gl_Position = projectionMatrix * mv;
}
`
const TICK_FRAG = /* glsl */ `
precision highp float;
varying float vA;
void main() {
  float soft = 1.0 - smoothstep(0.3, 0.5, length(gl_PointCoord - 0.5));
  gl_FragColor = vec4(vec3(159.0, 196.0, 255.0) / 255.0 * vA * soft, 1.0);
}
`

const SHELL_VERT = BODY_VERT
const SHELL_FRAG = /* glsl */ `
precision highp float;
varying vec3 vN;
uniform vec3 uColor;
uniform float uAlpha;
void main() {
  float f = pow(1.0 - clamp(abs(normalize(vN).z), 0.0, 1.0), 2.0);
  gl_FragColor = vec4(uColor * (uAlpha * (0.06 + 0.94 * f)), 1.0);
}
`

/* ───────────────────────── layer ───────────────────────── */

export interface OrbLayer extends Layer {
  /** 2D api.pulse(id): ripple R -> R+260, flash, shockwave, pulse packets. */
  pulse(id?: string): void
}

interface Shell {
  mesh: Mesh
  mat: ShaderMaterial
  life: number
  max: number
  r0: number
  r1: number
  on: boolean
}

const ADD = { blending: AdditiveBlending, transparent: true, depthTest: false, depthWrite: false, toneMapped: false } as const

export function createOrbLayer(): OrbLayer {
  let ctxRef: LayerCtx | undefined
  const disposers: (() => void)[] = []
  const geos: { dispose(): void }[] = []
  const mats: { dispose(): void }[] = []
  const meshes: Mesh[] = []
  let tickPoints: Points | undefined
  let tickMat: ShaderMaterial | undefined
  let bodyMesh: Mesh
  let bodyMat: ShaderMaterial
  let gridMesh: Mesh
  let gridMat: ShaderMaterial
  let ringMesh: Mesh
  let ringMat: ShaderMaterial
  let yaw = 0
  let rimMesh: Mesh
  let rimMat: ShaderMaterial
  let mainGlow: Mesh
  const halos: Mesh[] = []
  const sats: Mesh[] = []
  const shells: Shell[] = []

  // pointer state
  let downId = -1
  let downX = 0
  let downY = 0
  let moved = false
  let overCursor = false
  let resolveHover: () => void = () => {}
  let pressTarget = 0

  const scratch = new Vector3()
  const toCam = new Vector3()
  const camUp = new Vector3()
  const camRight = new Vector3()
  const orbPos = new Vector3()
  const planePt = new Vector3(0, 0, 0)
  const hitPt = new Vector3()
  const pa: Projected = { x: 0, y: 0, z: 0, visible: false }
  const pb: Projected = { x: 0, y: 0, z: 0, visible: false }
  const tmp = { x: 0, y: 0, z: 0 }
  let curScale = 0
  let lastSpawn = 0

  const glowMesh = (c: RGB, dotR: number, order: number): Mesh => {
    const m = new ShaderMaterial({
      vertexShader: QUAD_VERT,
      fragmentShader: GLOW_FRAG,
      uniforms: { uColor: { value: new Vector3(c[0] / 255, c[1] / 255, c[2] / 255) }, uAlpha: { value: 0 }, uDotR: { value: dotR }, uBody: { value: new Vector3() }, uInner: { value: 1 } },
      ...ADD,
    })
    const mesh = new Mesh(quadGeo, m)
    mesh.frustumCulled = false
    mesh.renderOrder = order
    mats.push(m)
    meshes.push(mesh)
    return mesh
  }
  let quadGeo: PlaneGeometry

  /* ───── shells ───── */
  const spawnShell = (r0: number, r1: number, life: number, col: RGB) => {
    let s = shells.find((x) => !x.on)
    if (!s) s = shells.reduce((a, b) => (a.life / a.max > b.life / b.max ? a : b))
    s.on = true
    s.life = 0
    s.max = life
    s.r0 = r0
    s.r1 = r1
    ;(s.mat.uniforms.uColor.value as Vector3).set(col[0] / 255, col[1] / 255, col[2] / 255)
    s.mesh.visible = true
  }

  const layer: OrbLayer = {
    name: 'orb',
    renderOrder: RENDER_ORDER.orb,

    init(ctx) {
      ctxRef = ctx
      const { scene, world, fx, rig } = ctx
      quadGeo = new PlaneGeometry(2, 2)
      geos.push(quadGeo)
      const sphereGeo = new SphereGeometry(1, 48, 32)
      geos.push(sphereGeo)
      const O = RENDER_ORDER.orb

      mainGlow = glowMesh([70, 110, 255], 0, O - 20)
      for (let i = 0; i < 4; i++) halos.push(glowMesh(HALO[i], 0, O - 10))
      for (let i = 0; i < 4; i++) sats.push(glowMesh(HALO[i], 1.6 / 10, O - 10))

      // the body writes depth (Addendum A.8 occlusion): planets drawn later behind the orb fail the depth test
      bodyMat = new ShaderMaterial({
        vertexShader: BODY_VERT,
        fragmentShader: BODY_FRAG,
        uniforms: { uTime: ctx.uniforms.time, uBeat: { value: 0 }, uTier: ctx.uniforms.tier },
        blending: NormalBlending,
        transparent: true,
        depthTest: true,
        depthWrite: true,
        toneMapped: false,
      })
      mats.push(bodyMat)
      bodyMesh = new Mesh(sphereGeo, bodyMat)
      bodyMesh.renderOrder = O
      bodyMesh.frustumCulled = false
      meshes.push(bodyMesh)

      gridMat = new ShaderMaterial({ vertexShader: BODY_VERT, fragmentShader: GRID_FRAG, uniforms: { uBeat: { value: 0 } }, ...ADD, depthTest: true })
      mats.push(gridMat)
      gridMesh = new Mesh(sphereGeo, gridMat)
      gridMesh.renderOrder = O + 0.5
      gridMesh.frustumCulled = false
      meshes.push(gridMesh)

      // disc halo rings: quads baked in orb-local world px on their tilted planes
      const nR = DISC_RINGS.length
      const rPos = new Float32Array(nR * 4 * 3)
      const rUV = new Float32Array(nR * 4 * 2)
      const rRing = new Float32Array(nR * 4 * 4)
      const rCol = new Float32Array(nR * 4 * 3)
      const rIdx: number[] = []
      const corner = [-1, -1, 1, -1, 1, 1, -1, 1]
      for (let i = 0; i < nR; i++) {
        const dr = DISC_RINGS[i]
        const rad = R + dr.dr * ORB_SCALE
        const half = rad + 10
        for (let c = 0; c < 4; c++) {
          const v = i * 4 + c
          const u = corner[c * 2] * half
          const w = corner[c * 2 + 1] * half
          tiltDisc(tmp, u, w, dr.inc, dr.node)
          rPos.set([tmp.x, tmp.y, tmp.z], v * 3)
          rUV.set([u, w], v * 2)
          rRing.set([rad, dr.dashes, dr.speed, dr.a], v * 4)
          rCol.set([dr.col[0] / 255, dr.col[1] / 255, dr.col[2] / 255], v * 3)
        }
        const b = i * 4
        rIdx.push(b, b + 1, b + 2, b, b + 2, b + 3)
      }
      const rg = new BufferGeometry()
      rg.setAttribute('position', new Float32BufferAttribute(rPos, 3))
      rg.setAttribute('aUV', new Float32BufferAttribute(rUV, 2))
      rg.setAttribute('aRing', new Float32BufferAttribute(rRing, 4))
      rg.setAttribute('aCol', new Float32BufferAttribute(rCol, 3))
      rg.setIndex(rIdx)
      geos.push(rg)
      ringMat = new ShaderMaterial({
        vertexShader: DISC_RING_VERT,
        fragmentShader: DISC_RING_FRAG,
        uniforms: { uTime: ctx.uniforms.time, uMotion: ctx.uniforms.motion, uAlpha: { value: 1 } },
        ...ADD,
        depthTest: true,
        side: DoubleSide,
      })
      mats.push(ringMat)
      ringMesh = new Mesh(rg, ringMat)
      ringMesh.renderOrder = O + 4
      ringMesh.frustumCulled = false
      meshes.push(ringMesh)

      rimMat = new ShaderMaterial({ vertexShader: QUAD_VERT, fragmentShader: RIM_FRAG, uniforms: { uQ: { value: R + 24 * ORB_SCALE }, uRot: { value: 0 }, uBeat: { value: 0 } }, ...ADD })
      mats.push(rimMat)
      rimMesh = new Mesh(quadGeo, rimMat)
      rimMesh.renderOrder = O + 1
      rimMesh.frustumCulled = false
      meshes.push(rimMesh)

      // tick ring: 90 dots, wave in the vertex shader
      const base = new Float32Array(TICKS)
      for (let i = 0; i < TICKS; i++) base[i] = (i / TICKS) * TAU
      const tg = new BufferGeometry()
      tg.setAttribute('position', new Float32BufferAttribute(new Float32Array(TICKS * 3), 3))
      tg.setAttribute('aBase', new Float32BufferAttribute(base, 1))
      tg.boundingSphere = new Sphere(new Vector3(), 1e5)
      geos.push(tg)
      tickMat = new ShaderMaterial({
        vertexShader: TICK_VERT,
        fragmentShader: TICK_FRAG,
        uniforms: { uTime: ctx.uniforms.time, uMotion: ctx.uniforms.motion, uDpr: ctx.uniforms.dpr, uRes: ctx.uniforms.resolution, uScale: { value: 1 } },
        ...ADD,
      })
      mats.push(tickMat)
      tickPoints = new Points(tg, tickMat)
      tickPoints.frustumCulled = false
      tickPoints.renderOrder = O + 2

      for (let i = 0; i < SHELLS; i++) {
        const mat = new ShaderMaterial({ vertexShader: SHELL_VERT, fragmentShader: SHELL_FRAG, uniforms: { uColor: { value: new Vector3(0.43, 0.59, 1) }, uAlpha: { value: 0 } }, ...ADD })
        mats.push(mat)
        const mesh = new Mesh(sphereGeo, mat)
        mesh.renderOrder = O + 3
        mesh.frustumCulled = false
        mesh.visible = false
        meshes.push(mesh)
        shells.push({ mesh, mat, life: 0, max: 1, r0: R, r1: R, on: false })
      }

      for (const m of meshes) {
        m.visible = false
        scene.add(m)
      }
      scene.add(tickPoints)
      tickPoints.visible = false

      /* ───── events and input ───── */
      disposers.push(world.on('orbClick', () => layer.pulse()))
      disposers.push(
        world.on('reset', () => {
          for (const s of shells) {
            s.on = false
            s.mesh.visible = false
          }
        }),
      )

      const canvas = ctx.renderer.domElement
      const hitXY = (x: number, y: number): boolean => {
        if (curScale < 0.05) return false
        orbPos.set(world.orb.x, world.orb.y, world.orb.z)
        camRight.set(1, 0, 0).applyQuaternion(rig.camera.quaternion)
        rig.project(orbPos, pa)
        rig.project(scratch.copy(orbPos).addScaledVector(camRight, R * curScale), pb)
        if (!pa.visible) return false
        return Math.hypot(x - pa.x, y - pa.y) < Math.hypot(pb.x - pa.x, pb.y - pa.y)
      }
      const hitEvent = (e: { clientX: number; clientY: number }): boolean => {
        const r = canvas.getBoundingClientRect()
        return hitXY(e.clientX - r.left, e.clientY - r.top)
      }
      // an agent drawn in front of the orb owns the press (the nodes layer picks it): no orbClick for that click
      const agentAt = (cx: number, cy: number) => !!(ctx.engine.getLayer('nodes') as { pick?: (x: number, y: number) => unknown } | undefined)?.pick?.(cx, cy)
      const onDown = (e: PointerEvent) => {
        if (downId >= 0 || (e.pointerType === 'mouse' && e.button !== 0)) return
        if (!hitEvent(e) || agentAt(e.clientX, e.clientY)) return
        downId = e.pointerId
        downX = e.clientX
        downY = e.clientY
        moved = false
        pressTarget = 1
      }
      const onMove = (e: PointerEvent) => {
        if (downId >= 0) {
          if (e.pointerId === downId && Math.hypot(e.clientX - downX, e.clientY - downY) > 5) moved = true
          return
        }
        void e // hover is resolved once per frame in beforeRender (resolveHover)
      }
      const onUp = (e: PointerEvent) => {
        if (e.pointerId !== downId) return
        const tap = e.type === 'pointerup' && !moved && hitEvent(e)
        downId = -1
        pressTarget = 0
        if (tap) world.emit('orbClick', undefined)
      }
      const onLeave = () => {
        setOver(false)
      }
      /**
       * world.hover = 'orb' while the pointer is over the sphere and no agent is in front of it. Nodes win: the nodes layer
       * (its beforeRender runs after this one) overwrites 'orb' with the agent id the same frame, and only ever clears
       * agent ids, so the two never fight. Called from beforeRender with the last pointer position.
       */
      resolveHover = () => {
        const w = world
        const cur = w.hover
        if (downId >= 0) return setOver(cur === 'orb') // pressing the orb: keep its hover until release
        const idle = !rig.pointerActive || rig.dragging
        let over = false
        if (!idle && (cur === null || cur === 'orb') && curScale >= 0.05) {
          const px = (rig.pointerNDC.x * 0.5 + 0.5) * ctx.engine.width
          const py = (-rig.pointerNDC.y * 0.5 + 0.5) * ctx.engine.height
          const r = canvas.getBoundingClientRect()
          over = hitXY(px, py) && !agentAt(r.left + px, r.top + py)
        }
        if (over && cur === null) w.setHover('orb')
        else if (!over && cur === 'orb') w.setHover(null)
        setOver(over)
      }
      const setOver = (over: boolean) => {
        if (over === overCursor) return
        overCursor = over
        canvas.style.cursor = over ? 'pointer' : ''
      }
      canvas.addEventListener('pointerdown', onDown)
      canvas.addEventListener('pointermove', onMove)
      canvas.addEventListener('pointerup', onUp)
      canvas.addEventListener('pointercancel', onUp)
      canvas.addEventListener('pointerleave', onLeave)
      disposers.push(() => {
        canvas.removeEventListener('pointerdown', onDown)
        canvas.removeEventListener('pointermove', onMove)
        canvas.removeEventListener('pointerup', onUp)
        canvas.removeEventListener('pointercancel', onUp)
        canvas.removeEventListener('pointerleave', onLeave)
        if (overCursor) canvas.style.cursor = ''
      })

      // do not let the engine's empty-space ripple fire for a tap on the orb
      const prevTap = rig.onTap
      const wrapped = (e: PointerEvent) => {
        if (hitEvent(e)) return
        prevTap?.(e)
      }
      rig.onTap = wrapped
      disposers.push(() => {
        if (rig.onTap === wrapped) rig.onTap = prevTap
      })
      void fx
    },

    pulse(id) {
      const c = ctxRef
      if (!c) return
      const o = c.world.orb
      tmp.x = o.x
      tmp.y = o.y
      tmp.z = o.z
      const col: RGB = [140, 170, 255]
      c.fx.ripple({ pos: tmp, r0: R, r1: R + 260 * ORB_SCALE, life: 1.6, color: col, width: 4 }) // 2D L2009
      spawnShell(R, R + 260 * ORB_SCALE, 1.6, col)
      o.flash = 1
      c.fx.shockwave(tmp, 70)
      c.world.emit('pulse', { id })
    },

    update(dt, ctx) {
      const { world, fx, rig, uniforms } = ctx
      const o = world.orb
      const time = world.time

      // spawn pop and pointer parallax (2D L835-846)
      o.spawn.target = time > 0.05 ? 1 : 0
      o.spawn.step(dt)
      let tx = 0
      let ty = 0
      if (rig.pointerActive) {
        const h = rig.pointerWorldOnPlane(planePt, undefined, hitPt)
        if (h) {
          const d = Math.hypot(h.x, h.y) + 1
          const m = Math.min(12, d * 0.02)
          tx = (h.x / d) * m
          ty = (h.y / d) * m
        }
      }
      o.px.target = tx
      o.py.target = ty
      o.px.step(dt)
      o.py.step(dt)
      o.x = o.px.x
      o.y = o.py.x
      o.feed = damp(o.feed, 0, 2.2, dt) // L847
      o.flash = damp(o.flash, 0, 3, dt)
      o.press = damp(o.press, pressTarget, 12, dt)

      let active = 0
      for (const a of world.agents.values()) if (a.power > 0.3) active++
      o.activeCount = active
      o.shimmerT += dt
      // surface yaw scales with motion (reduced motion: slower, not jumpier)
      yaw = (yaw + ORB_YAW_SPEED * uniforms.motion.value * dt) % TAU
      o.model = world.model

      for (const s of shells) {
        if (!s.on) continue
        s.life += dt
        if (s.life >= s.max) {
          s.on = false
          s.mesh.visible = false
        }
      }
    },

    beforeRender(ctx) {
      const { world, rig, uniforms } = ctx
      const o = world.orb
      const time = uniforms.time.value
      const motion = uniforms.motion.value
      const sp = o.spawn.x
      lastSpawn = sp
      const sc = orbScale(sp, o.beat, o.feed, o.press)
      curScale = sc
      const vis = sp >= 0.01
      resolveHover()
      const beat = o.beat
      const cam = rig.camera

      for (const m of meshes) m.visible = vis
      for (const s of shells) s.mesh.visible = vis && s.on
      if (tickPoints) tickPoints.visible = vis
      if (!vis) {
        for (const s of shells) s.mesh.visible = false
        return
      }

      orbPos.set(o.x, o.y, o.z)
      toCam.copy(cam.position).sub(orbPos).normalize()
      camUp.set(0, 1, 0).applyQuaternion(cam.quaternion)

      // label anchor: 2D (0, R*0.2 + 44) below the centre, scaled by the pop
      o.labelAnchor.x = o.x
      o.labelAnchor.y = o.y - (R * 0.2 + 44 * ORB_SCALE) * sc
      o.labelAnchor.z = o.z

      const zoomGain = orbZoomGain(rig.radius / rig.homeRadius)
      // main glow 2.3R (L1740)
      mainGlow.position.copy(orbPos)
      mainGlow.quaternion.copy(cam.quaternion)
      mainGlow.scale.setScalar(R * 2.3 * sc)
      ;(mainGlow.material as ShaderMaterial).uniforms.uAlpha.value = mainGlowAlpha(beat, o.feed) * zoomGain

      // halos (L1735-1739): orbit on tilted planes; split behind/in front of the sphere
      const haloA = haloAlpha(beat, o.feed) * zoomGain
      camRight.set(1, 0, 0).applyQuaternion(cam.quaternion)
      for (let i = 0; i < 4; i++) {
        const an = time * 0.22 * motion + (i * TAU) / 4
        discOrbitPos(tmp, an, R * 0.95 * sc, HALO_INC[i], HALO_NODE[i])
        const m = halos[i]
        m.position.set(o.x + tmp.x, o.y + tmp.y, o.z + tmp.z)
        m.quaternion.copy(cam.quaternion)
        m.scale.setScalar(R * 1.05 * sc)
        m.renderOrder = tmp.x * toCam.x + tmp.y * toCam.y + tmp.z * toCam.z > 0 ? RENDER_ORDER.orb + 10 : RENDER_ORDER.orb - 10
        const hu = (m.material as ShaderMaterial).uniforms
        hu.uAlpha.value = haloA
        // body disc in the halo quad's local space: the glow is held back inside the sphere (the rim keeps its glow)
        const qs = R * 1.05 * sc
        hu.uBody.value.set(-(tmp.x * camRight.x + tmp.y * camRight.y + tmp.z * camRight.z) / qs, -(tmp.x * camUp.x + tmp.y * camUp.y + tmp.z * camUp.z) / qs, (R * sc) / qs)
        hu.uInner.value = HALO_INNER
      }
      // satellites (L1788-1798): same angular speed as 2D, inclined circular orbits
      for (let i = 0; i < 4; i++) {
        const an = time * satelliteSpeed(i) * (i % 2 ? -1 : 1) * motion + i * 1.7
        discOrbitPos(tmp, an, (R + (40 + i * 14) * ORB_SCALE) * sc, SAT_INC[i], SAT_NODE[i])
        const m = sats[i]
        m.position.set(o.x + tmp.x, o.y + tmp.y, o.z + tmp.z)
        m.quaternion.copy(cam.quaternion)
        m.scale.setScalar(10 * ORB_SCALE * sc)
        m.renderOrder = tmp.x * toCam.x + tmp.y * toCam.y + tmp.z * toCam.z > 0 ? RENDER_ORDER.orb + 11 : RENDER_ORDER.orb - 9
        ;(m.material as ShaderMaterial).uniforms.uAlpha.value = 0.9
      }

      // body, rim, ticks
      bodyMesh.position.copy(orbPos)
      bodyMesh.scale.setScalar(R * sc)
      bodyMesh.rotation.y = yaw
      bodyMat.uniforms.uBeat.value = beat
      gridMesh.position.copy(orbPos)
      gridMesh.scale.setScalar(R * GRID_SHELL * sc)
      gridMesh.rotation.y = yaw
      gridMat.uniforms.uBeat.value = beat
      ringMesh.position.copy(orbPos)
      ringMesh.scale.setScalar(sc)
      ringMat.uniforms.uAlpha.value = clamp(0.85 + beat * 0.25 + o.feed * 0.3, 0, 1.4)
      rimMesh.position.copy(orbPos)
      rimMesh.quaternion.copy(cam.quaternion)
      rimMesh.scale.setScalar((R + 24 * ORB_SCALE) * sc)
      rimMat.uniforms.uRot.value = time * 0.25 * motion // L1759
      rimMat.uniforms.uBeat.value = beat
      if (tickPoints && tickMat) {
        tickPoints.position.copy(orbPos)
        tickPoints.quaternion.copy(cam.quaternion) // camera-facing like the rim: its back half never crosses the sphere when orbited
        tickPoints.scale.setScalar(sc)
        tickMat.uniforms.uScale.value = sc
      }

      // shells
      for (const s of shells) {
        if (!s.on) continue
        const k = s.life / s.max
        s.mesh.position.set(o.x, o.y, o.z)
        s.mesh.scale.setScalar(Math.max(1, lerp(s.r0, s.r1, easeOutCubic(k))))
        s.mat.uniforms.uAlpha.value = (1 - k) * 0.4
      }

      void lastSpawn
    },

    dispose() {
      for (const d of disposers) d()
      disposers.length = 0
      const scene = ctxRef?.scene
      for (const m of meshes) scene?.remove(m)
      if (tickPoints) scene?.remove(tickPoints)
      for (const g of geos) g.dispose()
      for (const m of mats) m.dispose()
      meshes.length = 0
      geos.length = 0
      mats.length = 0
      halos.length = 0
      sats.length = 0
      shells.length = 0
      tickPoints = undefined
      tickMat = undefined
      ctxRef = undefined
    },
  }
  return layer
}
