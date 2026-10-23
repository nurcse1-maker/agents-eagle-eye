/**
 * Choreography layer: runs the pure state machines of ../choreo.ts (launch comets, status reactions, supernova, the
 * demo simulator) and DRAWS their light: comet + trail, charge glows, impact afterglow, nova charge rings, nova
 * shock shells, 18 rays in true 3D directions, 26 debris clumps, the screen-wide flash (2D drawFx L702-786).
 * Sparks and ripples are pushed to the shared fx pools (drawn by the sparks/ripples layers). Three instanced draws:
 * soft glows, rings/shells, ray segments. No per-frame allocation.
 */
import { AdditiveBlending, BufferAttribute, DynamicDrawUsage, InstancedBufferAttribute, InstancedBufferGeometry, Mesh, ShaderMaterial } from 'three'
import type { Scene } from 'three'
import { Choreography, WHITE, WARM, afterglowQ, clampSpriteRadius, launchCharge, launchRimFade, novaBloomScale, novaChargeWhiteA, novaFlash, rayAlpha, rotateClump } from '../choreo'
import type { ChoreoEnv, ChoreoHooks, FxItem } from '../choreo'
import { FOV } from '../camera'
import { DemoSim } from '../demo-sim'
import { GlowSprites } from '../glowsprites'
import { RENDER_ORDER } from '../layer'
import type { Layer, LayerCtx, Uniforms } from '../layer'
import { clamp, easeOutCubic } from '../springs'
import { LAUNCH, LAUNCH_CHARGE, NOVA_CHARGE } from '../world'
import type { Vec3 } from '../world'

const GLOW_CAP = 1536
const RING_CAP = 192
const SEG_CAP = 256

const RING_VERT = /* glsl */ `
attribute vec4 aA; // centre xyz, radius
attribute vec4 aB; // rgb 0..1, alpha
attribute vec2 aC; // line width (world), shell flag
uniform vec2 uRes;
varying vec2 vC;
varying vec4 vCol;
varying vec3 vP;
varying float vShell;
void main() {
  vec4 mv = viewMatrix * vec4(aA.xyz, 1.0);
  float zc = max(-mv.z, 1.0);
  float upp = zc / (projectionMatrix[1][1] * 0.5 * uRes.y);
  float hw = max(aC.x * 0.5, 0.6 * upp);
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

const RING_FRAG = /* glsl */ `
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
    float limb = 1.0 / sqrt(max(1.0 - rho * rho, 0.04)) - 1.0;
    g = min(max(band, 0.16 * limb * step(d, R)), 1.0);
  }
  if (g <= 0.002) discard;
  gl_FragColor = vec4(vCol.rgb * (vCol.a * g), 1.0);
}
`

const SEG_VERT = /* glsl */ `
attribute vec4 aP0; // start xyz, half width (world)
attribute vec4 aP1; // end xyz, alpha
uniform vec2 uRes;
varying vec2 vS;
varying vec3 vP; // length, half width, world per px
varying float vA;
void main() {
  vec4 m0 = viewMatrix * vec4(aP0.xyz, 1.0);
  vec4 m1 = viewMatrix * vec4(aP1.xyz, 1.0);
  vec2 d = m1.xy - m0.xy;
  float L = length(d);
  vec2 dir = L > 1e-4 ? d / L : vec2(1.0, 0.0);
  vec2 nrm = vec2(-dir.y, dir.x);
  float zc = max(-m0.z, 1.0);
  float upp = zc / (projectionMatrix[1][1] * 0.5 * uRes.y);
  float hw = max(aP0.w, 0.6 * upp);
  float ext = hw + 2.0 * upp;
  bool atStart = position.x < 0.0;
  vec4 mv = atStart ? m0 : m1;
  mv.xy += dir * (atStart ? -ext : ext) + nrm * position.y * ext;
  vS = vec2(atStart ? -ext : L + ext, position.y * ext);
  vP = vec3(L, hw, upp);
  vA = aP1.w * min(1.0, aP0.w / hw) * ((m0.z < -1.0 && m1.z < -1.0) ? 1.0 : 0.0);
  gl_Position = projectionMatrix * mv;
}
`

const SEG_FRAG = /* glsl */ `
precision highp float;
varying vec2 vS;
varying vec3 vP;
varying float vA;
void main() {
  float d = length(vec2(vS.x - clamp(vS.x, 0.0, vP.x), vS.y));
  float g = 1.0 - smoothstep(vP.y - vP.z, vP.y + vP.z, d);
  if (g <= 0.002) discard;
  gl_FragColor = vec4(vec3(vA * g), 1.0);
}
`

const QUAD = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0])

/** Instanced rings / spherical shells with their own alpha (the fx ripple pool has a fixed alpha curve). */
class RingBatch {
  readonly mesh: Mesh
  private readonly geo = new InstancedBufferGeometry()
  private readonly mat: ShaderMaterial
  private readonly A = new Float32Array(RING_CAP * 4)
  private readonly B = new Float32Array(RING_CAP * 4)
  private readonly C = new Float32Array(RING_CAP * 2)
  private readonly aA = new InstancedBufferAttribute(this.A, 4)
  private readonly aB = new InstancedBufferAttribute(this.B, 4)
  private readonly aC = new InstancedBufferAttribute(this.C, 2)
  private n = 0

  constructor(uniforms: Uniforms) {
    const g = this.geo
    g.setAttribute('position', new BufferAttribute(QUAD, 3))
    g.setIndex([0, 1, 2, 0, 2, 3])
    for (const at of [this.aA, this.aB, this.aC]) at.setUsage(DynamicDrawUsage)
    g.setAttribute('aA', this.aA)
    g.setAttribute('aB', this.aB)
    g.setAttribute('aC', this.aC)
    g.instanceCount = 0
    this.mat = new ShaderMaterial({
      vertexShader: RING_VERT,
      fragmentShader: RING_FRAG,
      uniforms: { uRes: { value: uniforms.resolution.value } },
      blending: AdditiveBlending,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
    })
    this.mesh = new Mesh(g, this.mat)
    this.mesh.frustumCulled = false
    this.mesh.renderOrder = RENDER_ORDER.fx
    this.mesh.name = 'choreo-rings'
  }

  begin(): void {
    this.n = 0
  }

  add(x: number, y: number, z: number, r: number, width: number, col: ArrayLike<number>, alpha: number, shell: boolean): void {
    if (this.n >= RING_CAP || alpha <= 0.004 || r <= 0.5) return
    const i = this.n++
    this.A[i * 4] = x
    this.A[i * 4 + 1] = y
    this.A[i * 4 + 2] = z
    this.A[i * 4 + 3] = r
    this.B[i * 4] = col[0] / 255
    this.B[i * 4 + 1] = col[1] / 255
    this.B[i * 4 + 2] = col[2] / 255
    this.B[i * 4 + 3] = alpha > 1 ? 1 : alpha
    this.C[i * 2] = width
    this.C[i * 2 + 1] = shell ? 1 : 0
  }

  end(): void {
    this.geo.instanceCount = this.n
    this.aA.needsUpdate = true
    this.aB.needsUpdate = true
    this.aC.needsUpdate = true
  }

  dispose(): void {
    this.mesh.removeFromParent()
    this.geo.dispose()
    this.mat.dispose()
  }
}

/** Instanced screen-space line segments with round caps (white rays). */
class SegBatch {
  readonly mesh: Mesh
  private readonly geo = new InstancedBufferGeometry()
  private readonly mat: ShaderMaterial
  private readonly P0 = new Float32Array(SEG_CAP * 4)
  private readonly P1 = new Float32Array(SEG_CAP * 4)
  private readonly a0 = new InstancedBufferAttribute(this.P0, 4)
  private readonly a1 = new InstancedBufferAttribute(this.P1, 4)
  private n = 0

  constructor(uniforms: Uniforms) {
    const g = this.geo
    g.setAttribute('position', new BufferAttribute(QUAD, 3))
    g.setIndex([0, 1, 2, 0, 2, 3])
    this.a0.setUsage(DynamicDrawUsage)
    this.a1.setUsage(DynamicDrawUsage)
    g.setAttribute('aP0', this.a0)
    g.setAttribute('aP1', this.a1)
    g.instanceCount = 0
    this.mat = new ShaderMaterial({
      vertexShader: SEG_VERT,
      fragmentShader: SEG_FRAG,
      uniforms: { uRes: { value: uniforms.resolution.value } },
      blending: AdditiveBlending,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
    })
    this.mesh = new Mesh(g, this.mat)
    this.mesh.frustumCulled = false
    this.mesh.renderOrder = RENDER_ORDER.fx
    this.mesh.name = 'choreo-rays'
  }

  begin(): void {
    this.n = 0
  }

  add(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, width: number, alpha: number): void {
    if (this.n >= SEG_CAP || alpha <= 0.004 || width <= 0.01) return
    const i = this.n++ * 4
    this.P0[i] = x0
    this.P0[i + 1] = y0
    this.P0[i + 2] = z0
    this.P0[i + 3] = width * 0.5
    this.P1[i] = x1
    this.P1[i + 1] = y1
    this.P1[i + 2] = z1
    this.P1[i + 3] = alpha > 1 ? 1 : alpha
  }

  end(): void {
    this.geo.instanceCount = this.n
    this.a0.needsUpdate = true
    this.a1.needsUpdate = true
  }

  dispose(): void {
    this.mesh.removeFromParent()
    this.geo.dispose()
    this.mat.dispose()
  }
}

const COOL_FLASH = [255, 250, 240]
const rot = [0, 0, 0]

export function createChoreoLayer(): Layer {
  let glows: GlowSprites | undefined
  let rings: RingBatch | undefined
  let segs: SegBatch | undefined
  let scene: Scene | undefined
  let choreo: Choreography | undefined
  let demo: DemoSim | undefined
  const offs: Array<() => void> = []
  /** Strongest flash of this frame (0..1); scales the bloom down while it is up. */
  let flashQ = 0
  let bloomRef: { novaScale: number } | undefined
  const env: ChoreoEnv = { orb: { x: 0, y: 0, z: 0, r: 135, flash: 0, feed: 0 }, motion: 1, rand: Math.random }
  const pos: Vec3 = { x: 0, y: 0, z: 0 }
  const vel: Vec3 = { x: 0, y: 0, z: 0 }

  const drawFx = (f: FxItem, ctx: LayerCtx) => {
    if (!glows || !rings || !segs) return
    const a = f.a
    const k = f.t
    const orb = ctx.world.orb
    if (f.kind === 'launch') {
      const rx = orb.x + f.dx * orb.r
      const ry = orb.y + f.dy * orb.r
      const rz = orb.z + f.dz * orb.r
      if (k < LAUNCH_CHARGE) {
        const e = k / LAUNCH_CHARGE
        const c = launchCharge(e)
        glows.add(orb.x, orb.y, orb.z, orb.r * c.centreR, a.accent[0], a.accent[1], a.accent[2], c.centreA)
        glows.add(rx, ry, rz, c.whiteR, 255, 255, 255, c.whiteA)
        glows.add(rx, ry, rz, c.colR, f.lc25[0], f.lc25[1], f.lc25[2], c.colA)
      } else if (k < LAUNCH) {
        const q = launchRimFade(k)
        if (q > 0) glows.add(rx, ry, rz, 110, f.lc25[0], f.lc25[1], f.lc25[2], 0.6 * q)
      }
      const n = f.trailN
      for (let j = 0; j < n; j++) {
        const fr = 1 - j / n
        glows.add(f.trail[j * 3], f.trail[j * 3 + 1], f.trail[j * 3 + 2], 5 + 24 * fr, f.lc25[0], f.lc25[1], f.lc25[2], 0.5 * fr)
      }
      if (k >= LAUNCH_CHARGE && k < LAUNCH) {
        glows.add(f.hx, f.hy, f.hz, 56, a.accent[0], a.accent[1], a.accent[2], 0.8)
        glows.add(f.hx, f.hy, f.hz, 26, 255, 255, 255, 1)
      }
      if (k >= LAUNCH) {
        const tb = k - LAUNCH
        const q = afterglowQ(tb)
        glows.add(a.x, a.y, a.z, a.r * (2.5 + tb * 5), f.lc25[0], f.lc25[1], f.lc25[2], q * q * 0.9)
        if (tb < 0.5) glows.add(a.x, a.y, a.z, a.r * 1.7, 255, 255, 255, 1 - tb / 0.5)
        rings.add(a.x, a.y, a.z, a.r * (1 + tb * 2.6), 3 * q + 0.5, WHITE, q * 0.7, false)
      }
      return
    }
    // nova
    if (k < NOVA_CHARGE) {
      const e = k / NOVA_CHARGE
      const e2 = e * e
      glows.add(a.x, a.y, a.z, a.r * (1.8 + 2.2 * e2), f.hot[0], f.hot[1], f.hot[2], 0.3 + 0.6 * e2)
      glows.add(a.x, a.y, a.z, a.r * (0.8 + e), 255, 255, 255, novaChargeWhiteA(e2))
      for (let j = 0; j < 3; j++) {
        const ph = (e * 1.6 + j / 3) % 1
        rings.add(a.x, a.y, a.z, a.r * (3.2 - 2.4 * ph), 2, f.hot, (1 - ph) * 0.5 * e, false)
      }
      return
    }
    const tb = k - NOVA_CHARGE
    const fl = novaFlash(tb, a.r)
    if (fl) {
      const lay = ctx.world.layout
      const res = ctx.uniforms.resolution.value
      // px per world unit at the agent; the flash sprites never cover more than ~30% of the short screen side
      const cam = ctx.rig.camera.position
      const dist = Math.max(1, Math.hypot(a.x - cam.x, a.y - cam.y, a.z - cam.z))
      const ppu = (0.5 * res.y) / (dist * Math.tan((FOV * Math.PI) / 360))
      if (fl.q > flashQ) flashQ = fl.q
      glows.add(a.x, a.y, a.z, clampSpriteRadius(fl.coreR, ppu, res.x, res.y), COOL_FLASH[0], COOL_FLASH[1], COOL_FLASH[2], fl.coreA)
      glows.add(a.x, a.y, a.z, clampSpriteRadius(Math.max(lay.LW, lay.LH) * 0.9, ppu, res.x, res.y), f.cool[0], f.cool[1], f.cool[2], fl.wideA)
    }
    const ks = clamp(tb / 3)
    const fall = Math.pow(1 - ks, 1.5)
    const wd = 18 * (1 - ks) + 2
    const rr = easeOutCubic(ks) * (a.r + 430)
    rings.add(a.x, a.y, a.z, rr, wd, f.cool, 0.22 * fall, true)
    rings.add(a.x, a.y, a.z, rr * 0.7, wd, f.cool, 0.14 * fall, true)
    const kr = clamp(tb / 1.6)
    const er = easeOutCubic(kr)
    const al = rayAlpha(tb)
    if (al >= 0.01) {
      for (let i = 0; i < f.rays.length; i++) {
        const r = f.rays[i]
        const d0 = a.r * 0.5 + er * r.len * 0.45
        const d1 = a.r * 0.7 + er * r.len
        segs.add(a.x + r.dx * d0, a.y + r.dy * d0, a.z + r.dz * d0, a.x + r.dx * d1, a.y + r.dy * d1, a.z + r.dz * d1, r.w * (1 - kr), al)
      }
    }
    const kc = clamp(tb / 3.2)
    const alc = 0.5 * Math.pow(1 - kc, 1.4)
    if (alc > 0.01) {
      const ec = easeOutCubic(kc)
      for (let i = 0; i < f.clumps.length; i++) {
        const c = f.clumps[i]
        const d = ec * c.dist + a.r * 0.5
        rotateClump(c, kc * 0.5 * c.dir, rot)
        const col = c.hot ? WARM : f.cool
        glows.add(a.x + rot[0] * d, a.y + rot[1] * d, a.z + rot[2] * d, c.size * (0.6 + kc * 0.9), col[0], col[1], col[2], alc)
      }
    }
  }

  return {
    name: 'choreo',
    renderOrder: RENDER_ORDER.fx,
    init(ctx) {
      const { world, fx } = ctx
      scene = ctx.scene
      env.orb = world.orb
      env.rand = ctx.rng
      const hooks: ChoreoHooks = {
        ripple(x, y, z, r0, r1, life, col, width, shell) {
          pos.x = x
          pos.y = y
          pos.z = z
          fx.ripple({ pos, r0, r1, life, color: col, width, shell })
        },
        spark(x, y, z, vx, vy, vz, life, size, col) {
          pos.x = x
          pos.y = y
          pos.z = z
          vel.x = vx
          vel.y = vy
          vel.z = vz
          fx.spark(pos, vel, life, size, col)
        },
        burst(x, y, z, col, n, speed) {
          pos.x = x
          pos.y = y
          pos.z = z
          fx.burst(pos, col, n, speed)
        },
        shockwave(x, y, z, s) {
          pos.x = x
          pos.y = y
          pos.z = z
          fx.shockwave(pos, s)
        },
        shake: n => fx.shake(n),
        pulseAgent: (agent, n) => world.emit('pulseAgent', { agent, n }),
      }
      choreo = new Choreography(hooks, ctx.rng)
      choreo.paused = world.paused
      demo = new DemoSim()
      glows = new GlowSprites(GLOW_CAP, RENDER_ORDER.fx, ctx.uniforms, 'choreo-glows')
      glows.attach(scene)
      rings = new RingBatch(ctx.uniforms)
      segs = new SegBatch(ctx.uniforms)
      scene.add(rings.mesh)
      scene.add(segs.mesh)
      offs.push(
        world.on('status', ({ agent, prev, next }) => choreo?.onStatusEvent(agent, prev, next, performance.now())),
        world.on('pause', ({ paused, at }) => choreo?.setPaused(paused, at)),
        world.on('agentRemoved', ({ agent }) => choreo?.drop(agent)),
        world.on('reset', () => choreo?.clear()),
      )
    },
    update(dt, ctx) {
      if (!choreo) return
      env.motion = ctx.uniforms.motion.value
      const w = ctx.world
      if (w.simulate && demo) demo.step(dt, w.time, w.agents, ctx.rng, (a, s) => w.setStatus(a, s))
      choreo.update(dt, w.time, w.agents.values(), env)
    },
    beforeRender(ctx) {
      if (!choreo || !glows || !rings || !segs) return
      flashQ = 0
      glows.begin()
      rings.begin()
      segs.begin()
      for (let i = 0; i < choreo.list.length; i++) drawFx(choreo.list[i], ctx)
      glows.end()
      rings.end()
      segs.end()
      bloomRef = ctx.engine.bloom
      bloomRef.novaScale = novaBloomScale(flashQ)
    },
    dispose() {
      if (bloomRef) bloomRef.novaScale = 1
      bloomRef = undefined
      for (const off of offs) off()
      offs.length = 0
      choreo?.clear()
      choreo = undefined
      glows?.dispose()
      rings?.dispose()
      segs?.dispose()
      glows = rings = undefined
      segs = undefined
    },
  }
}
