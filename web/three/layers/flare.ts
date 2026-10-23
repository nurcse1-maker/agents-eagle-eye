/**
 * Plasma solar flare arcing off the orb (2D stepFlare L1109-1243, drawFlare L1245-1322, drawFlareRoots L1324-1351).
 * The loop is simulated in the orb's plane by ../flare-sim.ts and then tilted about the axis that points at the loop,
 * so it reads as a 3D prominence that swings toward and away from the viewer.
 *
 * Drawing: every piece (haze glows, braided threads, filament trails, root glows and spikes) is one instance of a
 * capsule-with-glow quad, so the whole flare is ONE draw call. Colours come from a 65-entry palette DataTexture.
 * The material depth-tests against an invisible sphere the size of the orb body, so the far side of a tilted loop
 * hides behind the orb while the near side crosses in front of it.
 */
import {
  AdditiveBlending,
  BufferAttribute,
  DataTexture,
  DynamicDrawUsage,
  InstancedBufferGeometry,
  InstancedInterleavedBuffer,
  InterleavedBufferAttribute,
  Mesh,
  MeshBasicMaterial,
  NearestFilter,
  PlaneGeometry,
  RGBAFormat,
  ShaderMaterial,
  SphereGeometry,
  UnsignedByteType,
} from 'three'
import type { RGB } from '../../shared/palette'
import { FLARE_LUT, FP_STRIDE, FlareSim, P_AMP, P_HJ, P_HOT, P_LANE, P_PH, P_SIZE, P_U, flareCol } from '../flare-sim'
import type { FlareEnv } from '../flare-sim'
import { RENDER_ORDER } from '../layer'
import type { Layer, LayerCtx } from '../layer'
import { clamp, lerp } from '../springs'
import { lightenRGB } from '../world'
import { CENTER_R } from '../layout3d'

/** Instance floats: p0.xyz + width | p1.xyz + glow radius | hue, lighten, core alpha, glow alpha | rgb override + pad. */
const STRIDE = 16
const MAX_INSTANCES = 520
/** Draw after the orb body (0) and before nodes (100). */
const FLARE_ORDER = 5
/** Radius of the depth-only occluder as a fraction of the orb radius: just under the rim where the feet sit (0.985 R). */
const OCCLUDER = 0.93

const VERT = /* glsl */ `
attribute vec4 iA; // p0.xyz, width (world units)
attribute vec4 iB; // p1.xyz, glow radius (world units)
attribute vec4 iC; // hue (<0: use iD.rgb), lighten, core alpha, glow alpha
attribute vec4 iD; // rgb override 0..1
uniform float uDpr;
uniform vec2 uRes;
uniform sampler2D uLut;
varying vec2 vLocal;
varying vec3 vInfo; // length (px), width (px), glow radius (px)
varying vec3 vCol;
varying vec2 vAlpha; // core alpha (dimmed when sub-pixel), glow alpha
void main() {
  vec4 hc = projectionMatrix * modelViewMatrix * vec4(iA.xyz, 1.0);
  if (hc.w < 1.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); vLocal = vec2(0.0); vInfo = vec3(0.0); vCol = vec3(0.0); vAlpha = vec2(0.0); return; }
  vec4 tc = projectionMatrix * modelViewMatrix * vec4(iB.xyz, 1.0);
  vec2 half_ = 0.5 * uRes;
  vec2 hpx = hc.xy / hc.w * half_;
  vec2 tpx = tc.xy / max(tc.w, 0.5) * half_;
  float ppu = half_.y * projectionMatrix[1][1] / hc.w;
  float minPx = 1.0 / uDpr;
  float wpx = iA.w * ppu;
  float w = max(wpx, minPx);
  float dim = iA.w > 0.0 ? min(wpx / minPx, 1.0) : 0.0;
  vec2 d = tpx - hpx;
  float len = length(d);
  vec2 dir = len > 1e-4 ? d / len : vec2(1.0, 0.0);
  vec2 perp = vec2(-dir.y, dir.x);
  float G = iB.w * ppu;
  float ext = max(w * 0.5, G) + 1.0;
  vec2 local = vec2(position.x * (len * 0.5 + ext), position.y * ext);
  vec2 ppx = hpx + dir * (len * 0.5) + dir * local.x + perp * local.y;
  gl_Position = vec4(ppx / half_ * hc.w, hc.z, hc.w);
  vLocal = local;
  vInfo = vec3(len, w, G);
  // palette LUT: index round(h * 64) (2D L109), nearest texel
  float idx = floor(clamp(iC.x, 0.0, 1.0) * 64.0 + 0.5);
  vec3 col = iC.x < 0.0 ? iD.rgb : texture2D(uLut, vec2((idx + 0.5) / 65.0, 0.5)).rgb;
  vCol = mix(col, vec3(1.0), iC.y);
  vAlpha = vec2(iC.z * dim, iC.w);
}
`

const FRAG = /* glsl */ `
precision highp float;
varying vec2 vLocal;
varying vec3 vInfo;
varying vec3 vCol;
varying vec2 vAlpha;
void main() {
  float hl = vInfo.x * 0.5;
  float dx = clamp(vLocal.x, -hl, hl);
  float core = clamp(vInfo.y * 0.5 + 0.5 - length(vec2(vLocal.x - dx, vLocal.y)), 0.0, 1.0);
  float g = 0.0;
  if (vInfo.z > 0.0 && vAlpha.y > 0.0) {
    // the 2D glow sprite profile (assets.ts): 1 at the centre, 0.55 at 20%, 0.14 at 50%, 0 at the edge
    float r = length(vLocal - vec2(-hl, 0.0)) / vInfo.z;
    g = r >= 1.0 ? 0.0 : r < 0.2 ? mix(1.0, 0.55, r / 0.2) : r < 0.5 ? mix(0.55, 0.14, (r - 0.2) / 0.3) : mix(0.14, 0.0, (r - 0.5) / 0.5);
  }
  gl_FragColor = vec4(vCol * (core * vAlpha.x + g * vAlpha.y), 1.0);
}
`

export function createFlareLayer(): Layer {
  let sim: FlareSim | undefined
  let mesh: Mesh | undefined
  let occluder: Mesh | undefined
  let occGeo: SphereGeometry | undefined
  let occMat: MeshBasicMaterial | undefined
  let geometry: InstancedBufferGeometry | undefined
  let material: ShaderMaterial | undefined
  let buffer: InstancedInterleavedBuffer | undefined
  let lut: DataTexture | undefined
  let scene: LayerCtx['scene'] | undefined
  let data: Float32Array

  // plane -> world mapping (rotation by `tilt` about the axis (ux, uy) in the plane, then the orb offset)
  let ux = 1
  let uy = 0
  let tc = 1
  let ts = 0
  let ox = 0
  let oy = 0
  let oz = 0
  let mx = 0
  let my = 0
  let mz = 0
  const mapPt = (x: number, y: number) => {
    const dot = ux * x + uy * y
    mx = ox + x * tc + ux * dot * (1 - tc)
    my = oy + y * tc + uy * dot * (1 - tc)
    mz = oz + (ux * y - uy * x) * ts
  }

  let n = 0
  const put = (
    x0: number,
    y0: number,
    z0: number,
    w: number,
    x1: number,
    y1: number,
    z1: number,
    glowR: number,
    hue: number,
    light: number,
    aCore: number,
    aGlow: number,
    r = 0,
    g = 0,
    b = 0,
  ) => {
    if (n >= MAX_INSTANCES) return
    const o = n++ * STRIDE
    data[o] = x0
    data[o + 1] = y0
    data[o + 2] = z0
    data[o + 3] = w
    data[o + 4] = x1
    data[o + 5] = y1
    data[o + 6] = z1
    data[o + 7] = glowR
    data[o + 8] = hue
    data[o + 9] = light
    data[o + 10] = aCore
    data[o + 11] = aGlow
    data[o + 12] = r
    data[o + 13] = g
    data[o + 14] = b
  }

  /** A glow centred on a plane point. */
  const glow = (x: number, y: number, radius: number, hue: number, alpha: number, rgb?: RGB) => {
    if (alpha <= 0.004 || radius <= 0.5) return
    mapPt(x, y)
    if (rgb) put(mx, my, mz, 0, mx, my, mz, radius, -1, 0, 0, clamp(alpha), rgb[0] / 255, rgb[1] / 255, rgb[2] / 255)
    else put(mx, my, mz, 0, mx, my, mz, radius, hue, 0, 0, clamp(alpha))
  }

  /** A segment between two plane points. */
  const line = (x0: number, y0: number, x1: number, y1: number, width: number, hue: number, light: number, alpha: number) => {
    if (alpha <= 0.004) return
    mapPt(x0, y0)
    const ax = mx
    const ay = my
    const az = mz
    mapPt(x1, y1)
    put(ax, ay, az, width, mx, my, mz, 0, hue, light, clamp(alpha), 0)
  }

  const env: FlareEnv = {
    R: CENTER_R,
    motion: 1,
    active: 0,
    spawn: 0,
    feed: 0,
    sparkRoom: true,
    onSpark: () => {},
  }
  // scratch for sparks and the pooled points of one filament
  const sparkPos = { x: 0, y: 0, z: 0 }
  const sparkVel = { x: 0, y: 0, z: 0 }
  const pts = new Float64Array(6) // head, m1, m2 (plane x, y)

  /** Tilt + offset for this frame from the sim state. */
  const frameMap = (orbX: number, orbY: number, orbZ: number) => {
    const s = sim!
    ux = Math.cos(s.thE)
    uy = Math.sin(s.thE)
    tc = Math.cos(s.tilt)
    ts = Math.sin(s.tilt)
    ox = orbX
    oy = orbY
    oz = orbZ
  }

  const layer: Layer & { readonly sim: FlareSim | undefined } = {
    /** Debug handle (window.__eagleEye3D.engine.getLayer("flare").sim). */
    get sim() {
      return sim
    },
    name: 'flare',
    renderOrder: RENDER_ORDER.flare,
    init(ctx) {
      scene = ctx.scene
      sim = new FlareSim(ctx.rng)
      data = new Float32Array(MAX_INSTANCES * STRIDE)

      // palette LUT (2D FLARE_LUT, 65 entries)
      const lutData = new Uint8Array(65 * 4)
      for (let i = 0; i < 65; i++) {
        lutData[i * 4] = Math.round(FLARE_LUT[i][0])
        lutData[i * 4 + 1] = Math.round(FLARE_LUT[i][1])
        lutData[i * 4 + 2] = Math.round(FLARE_LUT[i][2])
        lutData[i * 4 + 3] = 255
      }
      lut = new DataTexture(lutData, 65, 1, RGBAFormat, UnsignedByteType)
      lut.minFilter = NearestFilter
      lut.magFilter = NearestFilter
      lut.generateMipmaps = false
      lut.needsUpdate = true

      const base = new PlaneGeometry(2, 2)
      geometry = new InstancedBufferGeometry()
      geometry.setIndex(base.getIndex()!)
      geometry.setAttribute('position', base.getAttribute('position') as BufferAttribute)
      base.dispose()
      buffer = new InstancedInterleavedBuffer(data, STRIDE, 1)
      buffer.setUsage(DynamicDrawUsage)
      geometry.setAttribute('iA', new InterleavedBufferAttribute(buffer, 4, 0))
      geometry.setAttribute('iB', new InterleavedBufferAttribute(buffer, 4, 4))
      geometry.setAttribute('iC', new InterleavedBufferAttribute(buffer, 4, 8))
      geometry.setAttribute('iD', new InterleavedBufferAttribute(buffer, 4, 12))
      geometry.instanceCount = 0
      material = new ShaderMaterial({
        vertexShader: VERT,
        fragmentShader: FRAG,
        uniforms: { uDpr: ctx.uniforms.dpr, uRes: { value: ctx.uniforms.resolution.value }, uLut: { value: lut } },
        blending: AdditiveBlending,
        transparent: true,
        depthTest: true,
        depthWrite: false,
        toneMapped: false,
      })
      mesh = new Mesh(geometry, material)
      mesh.frustumCulled = false
      mesh.renderOrder = FLARE_ORDER
      mesh.name = 'flare'
      mesh.visible = false
      scene.add(mesh)

      // depth-only sphere standing in for the orb body: hides the far side of the loop
      occGeo = new SphereGeometry(1, 28, 18)
      occMat = new MeshBasicMaterial({ colorWrite: false, depthWrite: true, depthTest: true })
      occluder = new Mesh(occGeo, occMat)
      occluder.frustumCulled = false
      occluder.visible = false
      occluder.name = 'flare-occluder'
      scene.add(occluder)

      // loop sparks go to the shared pool (2D L1213-1221): plane vectors are rotated like points
      env.onSpark = (x, y, vx, vy, life, size, u) => {
        mapPt(x, y)
        sparkPos.x = mx
        sparkPos.y = my
        sparkPos.z = mz
        const dot = ux * vx + uy * vy
        sparkVel.x = vx * tc + ux * dot * (1 - tc)
        sparkVel.y = vy * tc + uy * dot * (1 - tc)
        sparkVel.z = (ux * vy - uy * vx) * ts
        ctx.fx.spark(sparkPos, sparkVel, life, size, lightenRGB(flareCol(u), 0.3))
      }
    },

    update(dt, ctx) {
      const s = sim!
      const w = ctx.world
      let active = 0
      for (const a of w.agents.values()) if (a.power > 0.3) active++
      env.R = w.orb.r
      env.motion = ctx.uniforms.motion.value
      env.active = active
      env.spawn = w.orb.spawn.x
      env.feed = w.orb.feed
      env.sparkRoom = ctx.fx.sparks.length < 700
      frameMap(w.orb.x, w.orb.y, w.orb.z)
      s.step(dt, env)
    },

    beforeRender(ctx) {
      const s = sim
      if (!s || !mesh || !geometry || !buffer || !occluder) return
      const w = ctx.world
      const kk = s.kk
      if (s.count === 0 && kk < 0.02) {
        mesh.visible = false
        occluder.visible = false
        return
      }
      mesh.visible = true
      occluder.visible = true
      occluder.position.set(w.orb.x, w.orb.y, w.orb.z)
      occluder.scale.setScalar(w.orb.r * OCCLUDER)

      const R = w.orb.r
      const time = s.ft
      frameMap(w.orb.x, w.orb.y, w.orb.z)
      n = 0

      // broad haze hanging off the loop (2D L1251-1258)
      for (let i = 0; i < 14; i++) {
        const u = (i + 0.5) / 14
        const e = s.loopAt(lerp(s.sA, s.sB, u))
        const wv = Math.sin(Math.PI * u)
        const sway = R * 0.28 + Math.sin(time * 0.7 + i * 1.9) * R * 0.22
        glow(e[0] + e[2] * sway, e[1] + e[3] * sway, R * s.sc * (0.7 + 0.45 * wv), u * 0.9 + 0.05, (0.14 + 0.14 * wv) * kk)
      }

      // thin braided threads: the faint continuous skeleton (2D L1260-1278)
      const SEG = 48
      const CH = 8
      const PER = SEG / CH
      for (let r = 0; r < 3; r++) {
        const amp = 0.35 + 0.25 * r
        const ph = r * 2.1
        for (let ch = 0; ch < CH; ch++) {
          const uc = (ch + 0.5) / CH
          const fl = 0.5 + 0.5 * Math.sin(time * 1.2 + uc * 11 + r * 2)
          const alpha = (0.12 + 0.3 * fl) * kk * Math.sin(Math.PI * uc)
          if (alpha <= 0.004) continue
          let q = s.strandAt((ch * PER) / SEG, 0, amp, ph, kk, time)
          let px = q[0]
          let py = q[1]
          for (let i = 1; i <= PER; i++) {
            q = s.strandAt((ch * PER + i) / SEG, 0, amp, ph, kk, time)
            line(px, py, q[0], q[1], 1.1, uc, 0.55, alpha)
            px = q[0]
            py = q[1]
          }
        }
      }

      // filaments: curved trails that follow the braid, bucketed by hue x brightness like 2D (L1280-1320)
      const gain = clamp(kk * 1.9 * (0.55 + 0.45 * s.dn))
      const NH = 8
      const du = 0.016 * (0.6 + kk)
      const AA = [0.22, 0.45, 0.8]
      let glows = 0
      const P = s.particles
      for (let i = 0; i < s.count; i++) {
        const o = i * FP_STRIDE
        const u = P[o + P_U]
        const lane = P[o + P_LANE]
        const amp = P[o + P_AMP]
        const ph = P[o + P_PH]
        const core = 1 - Math.min(1, Math.abs(lane)) * 0.5
        const a = Math.min(1, u * 9) * Math.min(1, (1 - u) * 6) * (0.3 + 0.55 * core) * gain * (0.75 + 0.25 * Math.sin(time * 2.5 + ph * 5))
        if (a < 0.08) continue
        const hj = P[o + P_HJ]
        const hb = Math.min(NH - 1, Math.max(0, Math.floor(clamp(u + hj) * NH)))
        const ab = a < 0.3 ? 0 : a < 0.6 ? 1 : 2
        let q = s.strandAt(u, lane, amp, ph, kk, time)
        pts[0] = q[0]
        pts[1] = q[1]
        q = s.strandAt(Math.max(0, u - du), lane, amp, ph, kk, time)
        pts[2] = q[0]
        pts[3] = q[1]
        q = s.strandAt(Math.max(0, u - du * 2.4), lane, amp, ph, kk, time)
        pts[4] = q[0]
        pts[5] = q[1]
        const hue = (hb + 0.5) / NH
        // tail stroke (width 1.2, colour lighten 0.3, alpha 0.45 AA) over head->m1->m2, head stroke (2.1, lighten 0.3+0.2) over head->m1
        line(pts[0], pts[1], pts[2], pts[3], 1.2, hue, 0.3, AA[ab] * 0.45)
        line(pts[2], pts[3], pts[4], pts[5], 1.2, hue, 0.3, AA[ab] * 0.45)
        line(pts[0], pts[1], pts[2], pts[3], 2.1, hue, 1 - 0.7 * 0.8, AA[ab])
        if (P[o + P_HOT] > 0.5 && glows < 14) {
          glows++
          glow(pts[0], pts[1], P[o + P_SIZE] * 6, clamp(u + hj), a * 0.6)
        }
      }

      // roots: bright eruption points where the loop meets the rim, with spikes (2D L1324-1350)
      for (let f = 0; f < 2; f++) {
        const fx = f === 0 ? s.fax : s.fbx
        const fy = f === 0 ? s.fay : s.fby
        const nx = f === 0 ? s.nax : s.nbx
        const ny = f === 0 ? s.nay : s.nby
        const ph = f === 0 ? 0 : 2.3
        const pulse = 0.75 + 0.25 * Math.sin(time * 2 + ph) + w.orb.feed * 0.3
        glow(fx, fy, R * 0.85 * s.sc * (0.8 + 0.4 * kk), 0, 0.24 * kk * pulse, [255, 170, 255])
        glow(fx, fy, R * 0.36, 0, 0.285 * kk * pulse, [255, 245, 255])
        const base = Math.atan2(ny, nx)
        for (let j = 0; j < 8; j++) {
          const h = Math.sin(j * 91.7 + ph) * 0.5 + 0.5
          const ang = base + (j / 7 - 0.5) * 1.6 + Math.sin(time * 1.2 + j * 1.3 + ph) * 0.1
          const len = R * (0.1 + 0.28 * h) * (0.6 + 0.4 * Math.sin(time * 2 + j * 2.1 + ph))
          const ca = Math.cos(ang)
          const sa = Math.sin(ang)
          line(fx + ca * 4, fy + sa * 4, fx + ca * len, fy + sa * len, 0.7 + h * 1.1, 0.1 + h * 0.5, 0.5, 0.084 * kk * pulse)
        }
      }

      buffer.needsUpdate = true
      geometry.instanceCount = n
    },

    onContextRestored() {
      if (lut) lut.needsUpdate = true
    },

    dispose() {
      if (mesh) scene?.remove(mesh)
      if (occluder) scene?.remove(occluder)
      geometry?.dispose()
      material?.dispose()
      occGeo?.dispose()
      occMat?.dispose()
      lut?.dispose()
      mesh = undefined
      occluder = undefined
      geometry = undefined
      material = undefined
      occGeo = undefined
      occMat = undefined
      lut = undefined
      buffer = undefined
      sim = undefined
    },
  }
  return layer
}
