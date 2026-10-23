/**
 * Draws the shared `fx.ripples` pool (2D drawEffects L1841-1849) as camera-facing rings: radius lerp(r0, r1, easeOutCubic(k)),
 * alpha (1-k)*0.55, width w*(1-0.6k). Ripples flagged `shell` (launch) are drawn as spherical shells: a bright limb
 * plus a faint rim-weighted interior, so they read as a sphere of light from any orbit angle. One instanced draw call, 60 cap.
 */
import type { Scene } from 'three'
import { AdditiveBlending, BufferAttribute, DynamicDrawUsage, InstancedBufferAttribute, InstancedBufferGeometry, Mesh, ShaderMaterial } from 'three'
import { RENDER_ORDER } from '../layer'
import type { Layer } from '../layer'
import { MAX_RIPPLES } from '../fx'
import { easeOutCubic, lerp } from '../springs'

const CAP = MAX_RIPPLES + 4

const VERT = /* glsl */ `
attribute vec4 aA; // centre xyz, radius R
attribute vec4 aB; // rgb 0..1, alpha
attribute vec2 aC; // line width (world), shell flag
uniform vec2 uRes;
varying vec2 vC;
varying vec4 vCol;
varying vec3 vP; // R, half width, world units per px
varying float vShell;
void main() {
  vec4 mv = viewMatrix * vec4(aA.xyz, 1.0);
  float zc = max(-mv.z, 1.0);
  float upp = zc / (projectionMatrix[1][1] * 0.5 * uRes.y); // world units per px
  float hw = max(aC.x * 0.5, 0.6 * upp); // never thinner than ~1.2 px
  float ext = aA.w + hw + 2.0 * upp;
  vec4 pos = mv;
  pos.xy += position.xy * ext;
  vC = position.xy * ext;
  vP = vec3(aA.w, hw, upp);
  vShell = aC.y;
  float thin = min(1.0, aC.x * 0.5 / hw);
  vCol = vec4(aB.rgb, aB.a * thin * (mv.z < -1.0 ? 1.0 : 0.0));
  gl_Position = projectionMatrix * pos;
}
`

const FRAG = /* glsl */ `
precision highp float;
varying vec2 vC;
varying vec4 vCol;
varying vec3 vP;
varying float vShell;
void main() {
  float d = length(vC);
  float R = vP.x;
  float hw = vP.y;
  float aa = vP.z;
  float band = 1.0 - smoothstep(hw - aa, hw + aa, abs(d - R));
  float g = band;
  if (vShell > 0.5) {
    float rho = clamp(d / max(R, 0.001), 0.0, 1.0);
    // limb brightening of a thin shell: path length ~ 1/sqrt(1 - rho^2)
    float limb = 1.0 / sqrt(max(1.0 - rho * rho, 0.04)) - 1.0;
    g = max(band, 0.16 * limb * step(d, R)) ;
    g = min(g, 1.0);
  }
  if (g <= 0.002) discard;
  gl_FragColor = vec4(vCol.rgb * (vCol.a * g), 1.0);
}
`

export function createRipplesLayer(): Layer {
  let mesh: Mesh | undefined
  let geo: InstancedBufferGeometry | undefined
  let mat: ShaderMaterial | undefined
  let scene: Scene | undefined
  const A = new Float32Array(CAP * 4)
  const B = new Float32Array(CAP * 4)
  const C = new Float32Array(CAP * 2)
  const aA = new InstancedBufferAttribute(A, 4)
  const aB = new InstancedBufferAttribute(B, 4)
  const aC = new InstancedBufferAttribute(C, 2)
  aA.setUsage(DynamicDrawUsage)
  aB.setUsage(DynamicDrawUsage)
  aC.setUsage(DynamicDrawUsage)

  return {
    name: 'ripples',
    renderOrder: RENDER_ORDER.ripples,
    init(ctx) {
      geo = new InstancedBufferGeometry()
      geo.setAttribute('position', new BufferAttribute(new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]), 3))
      geo.setIndex([0, 1, 2, 0, 2, 3])
      geo.setAttribute('aA', aA)
      geo.setAttribute('aB', aB)
      geo.setAttribute('aC', aC)
      geo.instanceCount = 0
      mat = new ShaderMaterial({
        vertexShader: VERT,
        fragmentShader: FRAG,
        uniforms: { uRes: { value: ctx.uniforms.resolution.value } },
        blending: AdditiveBlending,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        toneMapped: false,
      })
      mesh = new Mesh(geo, mat)
      mesh.frustumCulled = false
      mesh.renderOrder = RENDER_ORDER.ripples
      mesh.name = 'ripples'
      scene = ctx.scene
      scene.add(mesh)
    },
    update() {
      /* the pool is stepped by fx.step */
    },
    beforeRender(ctx) {
      if (!geo) return
      const list = ctx.fx.ripples
      const n = Math.min(list.length, CAP)
      for (let i = 0; i < n; i++) {
        const r = list[i]
        const k = r.life / r.max
        const e = easeOutCubic(k)
        A[i * 4] = r.x
        A[i * 4 + 1] = r.y
        A[i * 4 + 2] = r.z
        A[i * 4 + 3] = lerp(r.r0, r.r1, e)
        B[i * 4] = r.col[0] / 255
        B[i * 4 + 1] = r.col[1] / 255
        B[i * 4 + 2] = r.col[2] / 255
        B[i * 4 + 3] = (1 - k) * 0.55
        C[i * 2] = r.w * (1 - k * 0.6)
        C[i * 2 + 1] = r.shell ? 1 : 0
      }
      geo.instanceCount = n
      aA.needsUpdate = true
      aB.needsUpdate = true
      aC.needsUpdate = true
    },
    dispose() {
      if (mesh) scene?.remove(mesh)
      geo?.dispose()
      mat?.dispose()
      mesh = undefined
      geo = undefined
      mat = undefined
    },
  }
}
