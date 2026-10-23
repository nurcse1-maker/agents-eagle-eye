/**
 * The braided links between the orb and every agent (2D makeAgent L493-504, updateStrands L965-987, drawStrands L1439-1470).
 * 9 strands per agent, each a cubic Bezier in 3D, drawn as instanced screen-space ribbons: one core pass + one wide soft
 * glow pass per strand, all in a single draw call. Strand geometry is written to `agent.strands[].pts` (x y z per control
 * point) every sub-step so the packets layer can ride the same curves.
 */
import { AdditiveBlending, BufferAttribute, DoubleSide, DynamicDrawUsage, InstancedBufferGeometry, InstancedInterleavedBuffer, InterleavedBufferAttribute, Mesh, ShaderMaterial } from 'three'
import type { Scene } from 'three'
import { FOG_GLSL, RENDER_ORDER, fogUniform, updateFog } from '../layer'
import type { Layer } from '../layer'
import { STRAND_SEGMENTS, growEnd, hoverHl, linkAlphaMul, updateStrands } from '../links-sim'

const MAX_AGENTS = 64
const STRANDS = 9
const PER_AGENT = STRANDS * 2 // core + glow
const CAP = MAX_AGENTS * PER_AGENT
const FLOATS = 19

const VERT = /* glsl */ `${FOG_GLSL}
attribute vec3 aP0;
attribute vec3 aP1;
attribute vec3 aP2;
attribute vec3 aP3;
attribute vec4 aParam; // width (design px), alpha, glow flag, visible fraction of the curve
attribute vec3 aCol;   // agent colour 0..1
uniform vec2 uRes;
varying vec2 vUS;      // curve u, px offset from the centre line
varying float vHalf;
varying float vAlpha;
varying float vGlow;
varying vec3 vCol;

vec3 bez(float u) {
  float m = 1.0 - u;
  return m * m * m * aP0 + 3.0 * m * m * u * aP1 + 3.0 * m * u * u * aP2 + u * u * u * aP3;
}
vec3 dbez(float u) {
  float m = 1.0 - u;
  return 3.0 * (m * m * (aP1 - aP0) + 2.0 * m * u * (aP2 - aP1) + u * u * (aP3 - aP2));
}

void main() {
  float u = position.xy.x * aParam.w;
  vec3 P = bez(u);
  vec3 T = dbez(u);
  vec4 c = projectionMatrix * viewMatrix * vec4(P, 1.0);
  if (c.w < 1.0 || aParam.y <= 0.001) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  float tl = max(length(T), 1e-4);
  vec4 c2 = projectionMatrix * viewMatrix * vec4(P + T / tl * 4.0, 1.0);
  vec2 s0 = c.xy / c.w * uRes * 0.5;
  vec2 s1 = c2.xy / max(c2.w, 1.0) * uRes * 0.5;
  vec2 dir = s1 - s0;
  float dl = length(dir);
  dir = dl > 1e-4 ? dir / dl : vec2(1.0, 0.0);
  vec2 perp = vec2(-dir.y, dir.x);
  float ppu = projectionMatrix[1][1] * 0.5 * uRes.y / c.w; // px per world unit at this depth
  float glow = aParam.z;
  float wpx = aParam.x * ppu;
  // clamped screen-space width: thin lines stay visible, near ones do not balloon
  wpx = clamp(wpx, mix(0.9, 3.5, glow), aParam.x * 2.2 + 1.6);
  float hw = wpx * 0.5;
  float quad = glow > 0.5 ? hw * 2.2 : hw + 0.9;
  vec2 offPx = perp * (position.xy.y * quad);
  c.xy += offPx * 2.0 / uRes * c.w;
  gl_Position = c;
  vUS = vec2(u, position.xy.y * quad);
  vHalf = hw;
  vGlow = glow;
  vAlpha = aParam.y * (glow > 0.5 ? 1.0 : clamp(wpx, 0.55, 1.0)) * fogFade(P); // depth cue (Addendum A.8)
  vCol = aCol;
}
`

const FRAG = /* glsl */ `
precision highp float;
varying vec2 vUS;
varying float vHalf;
varying float vAlpha;
varying float vGlow;
varying vec3 vCol;
void main() {
  float u = vUS.x;
  vec3 c0 = mix(vCol, vec3(160.0, 110.0, 255.0) / 255.0, 0.55);   // 2D L1445
  vec3 c1 = mix(vCol, vec3(90.0, 140.0, 255.0) / 255.0, 0.2);     // 2D L1446
  vec3 c2 = mix(vCol, vec3(1.0), 0.2);                            // 2D L1447
  vec3 g = u < 0.5 ? mix(c0, c1, u * 2.0) : mix(c1, c2, (u - 0.5) * 2.0);
  float d = abs(vUS.y);
  float prof;
  if (vGlow > 0.5) {
    float x = d / max(vHalf * 1.1, 0.001);
    prof = exp(-x * x * 1.6);
  } else {
    float x = clamp(d / (vHalf + 0.75), 0.0, 1.0);
    prof = pow(1.0 - x, 1.4);
  }
  gl_FragColor = vec4(g * (vAlpha * prof), 1.0);
}
`

export function createLinksLayer(): Layer {
  let mesh: Mesh | undefined
  let geo: InstancedBufferGeometry | undefined
  let mat: ShaderMaterial | undefined
  let scene: Scene | undefined
  const data = new Float32Array(CAP * FLOATS)
  const buf = new InstancedInterleavedBuffer(data, FLOATS, 1)
  buf.setUsage(DynamicDrawUsage)
  const N = STRAND_SEGMENTS

  return {
    name: 'links',
    renderOrder: RENDER_ORDER.links,
    init(ctx) {
      geo = new InstancedBufferGeometry()
      const pos = new Float32Array((N + 1) * 2 * 3)
      for (let i = 0; i <= N; i++) {
        pos[i * 6] = i / N
        pos[i * 6 + 1] = -1
        pos[i * 6 + 3] = i / N
        pos[i * 6 + 4] = 1
      }
      const idx: number[] = []
      for (let i = 0; i < N; i++) {
        const a = i * 2
        idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2)
      }
      geo.setAttribute('position', new BufferAttribute(pos, 3))
      geo.setIndex(idx)
      // interleaved instance buffer: p0 p1 p2 p3 (3 each) | param (4) | col (3)
      const at = (offset: number, size: number) => new InterleavedBufferAttribute(buf, size, offset)
      geo.setAttribute('aP0', at(0, 3))
      geo.setAttribute('aP1', at(3, 3))
      geo.setAttribute('aP2', at(6, 3))
      geo.setAttribute('aP3', at(9, 3))
      geo.setAttribute('aParam', at(12, 4))
      geo.setAttribute('aCol', at(16, 3))
      geo.instanceCount = 0
      mat = new ShaderMaterial({
        vertexShader: VERT,
        fragmentShader: FRAG,
        uniforms: { uRes: { value: ctx.uniforms.resolution.value }, uFog: fogUniform(ctx.uniforms) },
        blending: AdditiveBlending,
        side: DoubleSide,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        toneMapped: false,
      })
      mesh = new Mesh(geo, mat)
      mesh.frustumCulled = false
      mesh.renderOrder = RENDER_ORDER.links
      mesh.name = 'links'
      scene = ctx.scene
      scene.add(mesh)
    },
    update(_dt, ctx) {
      const w = ctx.world
      const motion = ctx.uniforms.motion.value
      for (const a of w.agents.values()) updateStrands(a, w.orb, w.time, motion)
    },
    beforeRender(ctx) {
      if (!geo) return
      const w = ctx.world
      updateFog(ctx.uniforms, ctx.rig.camera.position, w.orb)
      const time = w.time
      let n = 0
      let ag = 0
      for (const a of w.agents.values()) {
        if (ag++ >= MAX_AGENTS) break
        if (a.grow <= 0.001) continue
        const hl = hoverHl(a.hover.x)
        const amul = linkAlphaMul(a.power, hl, a.hit)
        const end = growEnd(a.grow)
        const cr = a.col[0] / 255
        const cg = a.col[1] / 255
        const cb = a.col[2] / 255
        // glow pass first (2D L1451-1457), then strands back to front (L1461)
        for (let pass = 0; pass < 2; pass++) {
          for (let j = a.strands.length - 1; j >= 0; j--) {
            const s = a.strands[j]
            const o = n++ * FLOATS
            const p = s.pts
            for (let q = 0; q < 12; q++) data[o + q] = p[q]
            if (pass === 0) {
              data[o + 12] = 7 * (1 + hl * 0.4)
              data[o + 13] = Math.min(1, 0.055 * amul)
              data[o + 14] = 1
            } else {
              const wob = 0.75 + 0.25 * Math.sin(time * 1.6 + s.p1)
              data[o + 12] = s.w * (1 + hl * 0.4)
              data[o + 13] = Math.min(1, s.alpha * amul * wob)
              data[o + 14] = 0
            }
            data[o + 15] = end
            data[o + 16] = cr
            data[o + 17] = cg
            data[o + 18] = cb
          }
        }
      }
      geo.instanceCount = n
      buf.needsUpdate = true
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
