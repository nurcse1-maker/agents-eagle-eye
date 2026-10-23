/**
 * Choreography layer: runs the pure state machines of ../choreo.ts (launch comets, status reactions, nova charge, the
 * demo simulator) and DRAWS their light: comet + trail, charge glows, impact afterglow and its rim ring (2D drawFx
 * L702-786). Sparks and ripples are pushed to the shared fx pools (drawn by the sparks/ripples layers). Two instanced
 * draws: soft glows, rings. No per-frame allocation.
 */
import { AdditiveBlending, BufferAttribute, DynamicDrawUsage, InstancedBufferAttribute, InstancedBufferGeometry, Mesh, ShaderMaterial } from 'three'
import type { Scene } from 'three'
import { Choreography, WHITE, afterglowQ, launchCharge, launchRimFade, novaChargeWhiteA } from '../choreo'
import type { ChoreoEnv, ChoreoHooks, FxItem } from '../choreo'
import { DemoSim } from '../demo-sim'
import { GlowSprites } from '../glowsprites'
import { RENDER_ORDER } from '../layer'
import type { Layer, LayerCtx, Uniforms } from '../layer'
import { LAUNCH, LAUNCH_CHARGE, NOVA_CHARGE } from '../world'
import { CENTER_R } from '../layout3d'
import type { Vec3 } from '../world'

const GLOW_CAP = 1536
const RING_CAP = 192

const RING_VERT = /* glsl */ `
attribute vec4 aA; // centre xyz, radius
attribute vec4 aB; // rgb 0..1, alpha
attribute float aC; // line width (world)
uniform vec2 uRes;
varying vec2 vC;
varying vec4 vCol;
varying vec3 vP;
void main() {
  vec4 mv = viewMatrix * vec4(aA.xyz, 1.0);
  float zc = max(-mv.z, 1.0);
  float upp = zc / (projectionMatrix[1][1] * 0.5 * uRes.y);
  float hw = max(aC * 0.5, 0.6 * upp);
  float ext = aA.w + hw + 2.0 * upp;
  vec4 pos = mv;
  pos.xy += position.xy * ext;
  vC = position.xy * ext;
  vP = vec3(aA.w, hw, upp);
  float thin = min(1.0, aC * 0.5 / hw);
  vCol = vec4(aB.rgb, aB.a * thin * (mv.z < -1.0 ? 1.0 : 0.0));
  gl_Position = projectionMatrix * pos;
}
`

const RING_FRAG = /* glsl */ `
precision highp float;
varying vec2 vC;
varying vec4 vCol;
varying vec3 vP;
void main() {
  float d = length(vC);
  float R = vP.x;
  float hw = vP.y;
  float aa = vP.z;
  float band = 1.0 - smoothstep(hw - aa, hw + aa, abs(d - R));
  if (band <= 0.002) discard;
  gl_FragColor = vec4(vCol.rgb * (vCol.a * band), 1.0);
}
`

const QUAD = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0])

/** Instanced rings with their own alpha (the fx ripple pool has a fixed alpha curve). */
class RingBatch {
  readonly mesh: Mesh
  private readonly geo = new InstancedBufferGeometry()
  private readonly mat: ShaderMaterial
  private readonly A = new Float32Array(RING_CAP * 4)
  private readonly B = new Float32Array(RING_CAP * 4)
  private readonly C = new Float32Array(RING_CAP)
  private readonly aA = new InstancedBufferAttribute(this.A, 4)
  private readonly aB = new InstancedBufferAttribute(this.B, 4)
  private readonly aC = new InstancedBufferAttribute(this.C, 1)
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

  add(x: number, y: number, z: number, r: number, width: number, col: ArrayLike<number>, alpha: number): void {
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
    this.C[i] = width
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

export function createChoreoLayer(): Layer {
  let glows: GlowSprites | undefined
  let rings: RingBatch | undefined
  let scene: Scene | undefined
  let choreo: Choreography | undefined
  let demo: DemoSim | undefined
  const offs: Array<() => void> = []
  const env: ChoreoEnv = { orb: { x: 0, y: 0, z: 0, r: CENTER_R, flash: 0, feed: 0 }, motion: 1, rand: Math.random }
  const pos: Vec3 = { x: 0, y: 0, z: 0 }
  const vel: Vec3 = { x: 0, y: 0, z: 0 }

  const drawFx = (f: FxItem, ctx: LayerCtx) => {
    if (!glows || !rings) return
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
        rings.add(a.x, a.y, a.z, a.r * (1 + tb * 2.6), 3 * q + 0.5, WHITE, q * 0.7)
      }
      return
    }
    const e = k / NOVA_CHARGE
    const e2 = e * e
    glows.add(a.x, a.y, a.z, a.r * (1.8 + 2.2 * e2), f.hot[0], f.hot[1], f.hot[2], (0.3 + 0.6 * e2) * 0.3)
    glows.add(a.x, a.y, a.z, a.r * (0.8 + e), 255, 255, 255, novaChargeWhiteA(e2))
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
      scene.add(rings.mesh)
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
      if (!choreo || !glows || !rings) return
      glows.begin()
      rings.begin()
      for (let i = 0; i < choreo.list.length; i++) drawFx(choreo.list[i], ctx)
      glows.end()
      rings.end()
    },
    dispose() {
      for (const off of offs) off()
      offs.length = 0
      choreo?.clear()
      choreo = undefined
      glows?.dispose()
      rings?.dispose()
      glows = rings = undefined
    },
  }
}
