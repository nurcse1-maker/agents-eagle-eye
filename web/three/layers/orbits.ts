/**
 * Orbit guides (Addendum A.1): thin, faint, elliptical dashed rings lying on the orbital disc (XZ, Y up) around the
 * orb, one per agent band plus a decorative ring inside and outside. The dashes drift slowly (alternate rings in
 * opposite directions, scaled by the motion uniform) and fade with distance from the camera (shared fog uniform).
 *
 * One draw call: a single quad on the disc; the fragment shader measures the elliptical radius and draws every ring
 * with a derivative based width, so a ring is about 1.2 px wide wherever it is (near, far or grazing).
 */
import { AdditiveBlending, DoubleSide, Mesh, PlaneGeometry, ShaderMaterial, Vector2, Vector3 } from 'three'
import { DISC_BANDS, DISC_GUIDES, discShape } from '../layout3d'
import { FOG_GLSL, RENDER_ORDER, fogUniform, updateFog } from '../layer'
import type { Layer, LayerCtx } from '../layer'

const RINGS = DISC_GUIDES.length
/** World length of one dash period along a ring; the dash covers DUTY of it. */
const DASH = 30
const DUTY = 0.55
/** Dash drift in periods per second (about 6 world units/s at motion 1). */
const DRIFT = 0.2
/** Peak alpha: agent bands a bit brighter than the decorative rings. */
const BAND_ALPHA = 0.2
const DECOR_ALPHA = 0.11
const COLOR = new Vector3(120, 160, 255).divideScalar(255)

const VERT = /* glsl */ `
uniform float uExt;
uniform vec3 uOrb;
varying vec3 vW;
void main() {
  vec3 w = vec3(uOrb.x + position.x * uExt, uOrb.y, uOrb.z + position.y * uExt);
  vW = w;
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}
`

const FRAG = /* glsl */ `
precision highp float;
${FOG_GLSL}
#define RINGS ${RINGS}
#define TAU 6.283185307
uniform vec2 uK;
uniform vec3 uOrb;
uniform float uR[RINGS];
uniform float uA[RINGS];
uniform float uTime;
uniform float uMotion;
uniform vec3 uCol;
varying vec3 vW;
void main() {
  vec2 q = vec2((vW.x - uOrb.x) / uK.x, (vW.z - uOrb.z) / uK.y);
  float rho = length(q);
  float fw = max(fwidth(rho), 1e-3);
  float th = atan(q.y, q.x);
  float acc = 0.0;
  for (int i = 0; i < RINGS; i++) {
    float R = uR[i];
    float line = 1.0 - smoothstep(0.6 * fw, 1.6 * fw, abs(rho - R));
    if (line <= 0.0) continue;
    float n = floor(TAU * R / ${DASH.toFixed(1)} + 0.5);
    float dir = mod(float(i), 2.0) < 0.5 ? 1.0 : -1.0;
    float ph = fract(th / TAU * n + dir * uTime * uMotion * ${DRIFT.toFixed(2)});
    float fwp = fw * n / (TAU * R); // one pixel in dash periods (radial estimate)
    float dash = smoothstep(0.0, fwp, ph) * (1.0 - smoothstep(${DUTY.toFixed(2)} - fwp, ${DUTY.toFixed(2)}, ph));
    dash = mix(dash, ${DUTY.toFixed(2)}, clamp(fwp * 2.0 - 0.5, 0.0, 1.0)); // sub-pixel dashes average out
    acc += line * dash * uA[i];
  }
  if (acc <= 0.0) discard;
  gl_FragColor = vec4(uCol * (acc * fogFade(vW)), 1.0);
}
`

export function createOrbitsLayer(): Layer {
  let mesh: Mesh | undefined
  let geo: PlaneGeometry | undefined
  let mat: ShaderMaterial | undefined
  let scene: LayerCtx['scene'] | undefined
  let unLayout: (() => void) | undefined
  const radii = DISC_GUIDES.slice()
  const alphas = DISC_GUIDES.map(r => (DISC_BANDS.includes(r) ? BAND_ALPHA : DECOR_ALPHA))
  const k = new Vector2(1, 1)
  const orb = new Vector3()

  return {
    name: 'orbits',
    renderOrder: RENDER_ORDER.orbits,
    init(ctx) {
      scene = ctx.scene
      geo = new PlaneGeometry(2, 2)
      mat = new ShaderMaterial({
        vertexShader: VERT,
        fragmentShader: FRAG,
        uniforms: {
          uExt: { value: 1000 },
          uOrb: { value: orb },
          uK: { value: k },
          uR: { value: radii },
          uA: { value: alphas },
          uTime: ctx.uniforms.time,
          uMotion: ctx.uniforms.motion,
          uCol: { value: COLOR },
          uFog: fogUniform(ctx.uniforms),
        },
        blending: AdditiveBlending,
        side: DoubleSide,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        toneMapped: false,
      })
      mesh = new Mesh(geo, mat)
      mesh.frustumCulled = false
      mesh.renderOrder = RENDER_ORDER.orbits
      mesh.name = 'orbits'
      scene.add(mesh)
      const relayout = () => {
        const s = discShape(ctx.world.layout)
        k.set(s.kx, s.kz)
        mat!.uniforms.uExt.value = DISC_GUIDES[RINGS - 1] * Math.max(s.kx, s.kz) + 40
      }
      relayout()
      unLayout = ctx.world.on('layout', relayout)
    },
    update() {},
    beforeRender(ctx) {
      const o = ctx.world.orb
      orb.set(o.x, o.y, o.z)
      updateFog(ctx.uniforms, ctx.rig.camera.position, o)
    },
    dispose() {
      unLayout?.()
      if (mesh) scene?.remove(mesh)
      geo?.dispose()
      mat?.dispose()
      mesh = undefined
      geo = undefined
      mat = undefined
    },
  }
}
