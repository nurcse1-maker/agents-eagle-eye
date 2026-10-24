/**
 * Cinematic choreography as pure state machines: intro/spawn launch comets, the status-change reaction, the
 * supernova. No three, no DOM: unit tested in web/tests/choreo.spec.ts. Every number is copied from the 2D view,
 * web/agent-network.ts (startLaunch/startNova/impact L609-629, stepFx L630-700, setStatus L814-828, intro
 * timeline L864). The 3D additions: directions are true 3D (uniform on the sphere), the comet follows the 3D
 * strand-0 Bezier, ripples at the impact are spherical shells.
 *
 * Side effects go through `ChoreoHooks` (the layer wires them to ctx.fx / ctx.world), so nothing here allocates
 * per frame; an effect allocates its small arrays once, when it starts.
 */
import { LIVE, FINISHED, GREY, HALTED, STATUS } from '../shared/status'
import type { AgentStatus } from '../shared/status'
import type { RGB } from '../shared/palette'
import { bez3 } from './links-sim'
import { TAU, clamp } from './springs'
import { LAUNCH, LAUNCH_CHARGE, LAUNCH_FLY, NOVA_CHARGE, lightenRGB, mixRGB } from './world'
import type { AgentState } from './world'

export const WHITE: RGB = [255, 255, 255]
/** Comet trail length in points (2D L661). */
export const TRAIL_MAX = 44
/** The launch effect lives until LAUNCH + 1 s (2.35 s total, 2D L669). */
export const LAUNCH_TOTAL = LAUNCH + 1

export interface ChoreoHooks {
  ripple(x: number, y: number, z: number, r0: number, r1: number, life: number, col: RGB, width: number, shell: boolean): void
  spark(x: number, y: number, z: number, vx: number, vy: number, vz: number, life: number, size: number, col: RGB): void
  burst(x: number, y: number, z: number, col: RGB, n: number, speed: number): void
  shockwave(x: number, y: number, z: number, strength: number): void
  /** Raw amount; the fx shake multiplies by motion (2D `max(shake, n * motion)`). */
  shake(amount: number): void
  /** n light packets + hit + ripple on one agent (2D pulseAgent L804). */
  pulseAgent(a: AgentState, n: number): void
}

export interface ChoreoOrb {
  x: number
  y: number
  z: number
  r: number
  flash: number
  feed: number
}

export interface ChoreoEnv {
  orb: ChoreoOrb
  motion: number
  rand: () => number
}

export interface FxItem {
  kind: 'launch' | 'nova'
  a: AgentState
  t: number
  intro: boolean
  acc: number
  arrived: boolean
  /** Comet head, 0..1 progress along the strand, and the trail (newest first, x y z). */
  hx: number
  hy: number
  hz: number
  u: number
  trail: Float32Array
  trailN: number
  /** Unit direction orb -> agent (launch rim point = orb + dir * R). Refreshed every step. */
  dx: number
  dy: number
  dz: number
  /** Colours built once per effect (sparks keep references to them). */
  lc2: RGB
  lc25: RGB
  lc3: RGB
  lc4: RGB
  hot: RGB
}

/** Uniform random unit vector into `out`. */
export function randomDir(rand: () => number, out: number[]): void {
  const z = rand() * 2 - 1
  const a = rand() * TAU
  const s = Math.sqrt(1 - z * z)
  out[0] = Math.cos(a) * s
  out[1] = Math.sin(a) * s
  out[2] = z
}

/** Unit vector perpendicular to (dx,dy,dz) at azimuth `az` around it, into `out`. */
export function perpendicular(dx: number, dy: number, dz: number, az: number, out: number[]): void {
  // helper axis least aligned with d
  const hx = Math.abs(dx) < 0.8 ? 1 : 0
  const hy = hx ? 0 : 1
  // e1 = normalize(h x d), e2 = d x e1
  let e1x = hy * dz
  let e1y = -hx * dz
  let e1z = hx * dy - hy * dx
  const l = Math.hypot(e1x, e1y, e1z) || 1
  e1x /= l
  e1y /= l
  e1z /= l
  const e2x = dy * e1z - dz * e1y
  const e2y = dz * e1x - dx * e1z
  const e2z = dx * e1y - dy * e1x
  const c = Math.cos(az)
  const s = Math.sin(az)
  out[0] = e1x * c + e2x * s
  out[1] = e1y * c + e2y * s
  out[2] = e1z * c + e2z * s
}

export type StatusKind = 'launch' | 'nova' | 'change'

export const novaChargeWhiteA = (e2: number): number => e2 * 0.15

/* --- paused view (review M3): queued status flips must not all replay on resume --- */

/** A view paused for longer than this resumes silently: every queued status is applied without effects. */
export const PAUSE_SILENT_MS = 2000
/** An event older than this is never played as choreography. */
export const EVENT_STALE_MS = 2000

export interface PendingStatus {
  agent: AgentState
  prev: AgentStatus
  next: AgentStatus
  /** Wall ms of the latest flip. */
  at: number
}

/** Classify a status transition (2D setStatus L816-819). */
export function classifyStatus(prev: AgentStatus, next: AgentStatus): StatusKind {
  if ((next === 'running' || next === 'thinking') && !LIVE.has(prev)) return 'launch'
  if (next === 'completed' && !FINISHED.has(prev)) return 'nova'
  return 'change'
}

/** 2D L817: waking from a nearly dead status. */
export const isWake = (prev: AgentStatus, next: AgentStatus): boolean => STATUS[prev].power < 0.1 && STATUS[next].power > 0.1

const tmp = [0, 0, 0]

const makeFx = (kind: 'launch' | 'nova', a: AgentState, intro: boolean): FxItem => ({
  kind,
  a,
  t: 0,
  intro,
  acc: 0,
  arrived: false,
  hx: 0,
  hy: 0,
  hz: 0,
  u: 0,
  trail: new Float32Array(kind === 'launch' ? TRAIL_MAX * 3 : 0),
  trailN: 0,
  dx: 0,
  dy: 1,
  dz: 0,
  lc2: lightenRGB(a.accent, 0.2),
  lc25: lightenRGB(a.accent, 0.25),
  lc3: lightenRGB(a.accent, 0.3),
  lc4: lightenRGB(a.accent, 0.4),
  hot: mixRGB(a.accent, WHITE, 0.5),
})

/** Direction orb -> agent into fx.dx/dy/dz (2D `ang`, L637). */
function refreshDir(f: FxItem, orb: ChoreoOrb): void {
  const a = f.a
  const dx = a.x - orb.x
  const dy = a.y - orb.y
  const dz = a.z - orb.z
  const l = Math.hypot(dx, dy, dz)
  if (l < 1e-3) {
    f.dx = 0
    f.dy = 1
    f.dz = 0
  } else {
    f.dx = dx / l
    f.dy = dy / l
    f.dz = dz / l
  }
}

export class Choreography {
  readonly list: FxItem[] = []
  /** True while the view is paused: status flips are queued instead of played. */
  paused = false
  private pausedAt = 0
  private readonly pending = new Map<AgentState, PendingStatus>()

  constructor(
    private readonly hooks: ChoreoHooks,
    private readonly rand: () => number,
  ) {}

  private rnd(lo: number, hi: number): number {
    return lo + this.rand() * (hi - lo)
  }

  startLaunch(a: AgentState, intro: boolean): FxItem {
    const f = makeFx('launch', a, intro)
    this.list.push(f)
    return f
  }

  /** A second nova for the same agent while one runs is ignored (2D L611). */
  startNova(a: AgentState): FxItem | undefined {
    if (this.novaActive(a)) return undefined
    const f = makeFx('nova', a, false)
    this.list.push(f)
    return f
  }

  novaActive(a: AgentState): boolean {
    for (let i = 0; i < this.list.length; i++) if (this.list[i].kind === 'nova' && this.list[i].a === a) return true
    return false
  }

  /**
   * The status hook (2D setStatus L814-828, after the status itself was recorded by the world).
   * Launch and nova return after starting their effect; any other change is the generic reaction.
   */
  onStatus(a: AgentState, prev: AgentStatus, next: AgentStatus): StatusKind {
    const kind = classifyStatus(prev, next)
    if (kind === 'launch') {
      this.startLaunch(a, false)
      return kind
    }
    if (kind === 'nova') {
      this.startNova(a)
      return kind
    }
    if (HALTED.has(next)) return kind
    const h = this.hooks
    const wake = isWake(prev, next)
    const dot = STATUS[next].dot
    a.flash = 1
    h.pulseAgent(a, wake ? 12 : 5)
    h.burst(a.x, a.y, a.z, dot, wake ? 26 : 12, 90)
    h.ripple(a.x, a.y, a.z, a.r * 0.8, a.r + 120, 1.4, dot, 3, false)
    return kind
  }

  /** A status event with its wall time: played now, or queued while paused. */
  onStatusEvent(a: AgentState, prev: AgentStatus, next: AgentStatus, nowMs: number): void {
    if (!this.paused) {
      this.onStatus(a, prev, next)
      return
    }
    const q = this.pending.get(a)
    if (!q) this.pending.set(a, { agent: a, prev, next, at: nowMs })
    else {
      q.next = next
      q.at = nowMs
    }
  }

  /**
   * Pause or resume. On resume, a pause longer than PAUSE_SILENT_MS applies every queued status silently (no launch,
   * nova or bursts); a short one replays the queued flips, except those older than EVENT_STALE_MS.
   */
  setPaused(p: boolean, nowMs: number): void {
    if (p === this.paused) return
    this.paused = p
    if (p) {
      this.pausedAt = nowMs
      return
    }
    const long = nowMs - this.pausedAt > PAUSE_SILENT_MS
    const q = [...this.pending.values()]
    this.pending.clear()
    for (const e of q) {
      if (e.prev === e.next) continue
      if (long || nowMs - e.at > EVENT_STALE_MS) this.applySilently(e.agent, e.next)
      else this.onStatus(e.agent, e.prev, e.next)
    }
  }

  /** Jump an agent to the look of `status` with no effect: its running fx end, easing values snap to the targets. */
  applySilently(a: AgentState, status: AgentStatus): void {
    this.drop(a)
    const cfg = STATUS[status]
    a.statusT = 99
    a.power = cfg.power
    a.flow = cfg.flow
    a.spin = cfg.spin
    a.detail = cfg.power > 0.15 ? 1 : 0
    a.rest = FINISHED.has(status) ? 1 : 0
    a.novaS = 1
    a.novaL = 0
    a.fade = HALTED.has(status) ? 0 : 1
    a.flash = 0
    a.hit = 0
    const g = 1 - clamp(a.power * 1.1)
    for (let i = 0; i < 3; i++) {
      a.col[i] = a.accent[i] + (GREY[i] - a.accent[i]) * g
      a.dot[i] = cfg.dot[i]
    }
  }

  /** Forget the effects of an agent that left (its charging flag is released). */
  drop(a: AgentState): void {
    this.pending.delete(a)
    for (let i = this.list.length - 1; i >= 0; i--) {
      if (this.list[i].a === a) this.list.splice(i, 1)
    }
    a.charging = false
  }

  clear(): void {
    this.pending.clear()
    for (const f of this.list) f.a.charging = false
    this.list.length = 0
  }

  /** One sub-step: intro launches (2D L864) first, then every running effect (2D stepFx). */
  update(dt: number, time: number, agents: Iterable<AgentState>, env: ChoreoEnv): void {
    for (const a of agents) {
      if (!a.launched && time >= a.spawnAt - LAUNCH) {
        a.launched = true
        this.startLaunch(a, true)
      }
    }
    for (let i = this.list.length - 1; i >= 0; i--) {
      const f = this.list[i]
      const done = f.kind === 'launch' ? this.stepLaunch(f, dt, env) : this.stepNova(f, dt, env)
      if (done) {
        this.list[i] = this.list[this.list.length - 1]
        this.list.pop()
      }
    }
  }

  private impact(f: FxItem): void {
    const a = f.a
    const h = this.hooks
    const c = f.lc25
    // spherical shells for the three impact ripples (2D L618-620)
    h.ripple(a.x, a.y, a.z, a.r * 0.7, a.r + 170, 1.2, c, 5, true)
    h.ripple(a.x, a.y, a.z, a.r * 0.9, a.r + 300, 1.9, a.accent, 2.5, true)
    h.ripple(a.x, a.y, a.z, a.r, a.r + 90, 0.7, WHITE, 3, true)
    for (let i = 0; i < 46; i++) {
      randomDir(this.rand, tmp)
      const sp = this.rnd(40, 260)
      h.spark(a.x, a.y, a.z, tmp[0] * sp, tmp[1] * sp, tmp[2] * sp, this.rnd(0.6, 1.5), this.rnd(0.9, 2.4), i % 3 ? c : WHITE)
    }
    h.pulseAgent(a, 14)
    a.flash = 1
    a.hit = 1.4
    h.shake(5)
    h.shockwave(a.x, a.y, a.z, 60)
  }

  /** Returns true when finished. */
  private stepLaunch(f: FxItem, dt: number, env: ChoreoEnv): boolean {
    const a = f.a
    const h = this.hooks
    const orb = env.orb
    f.t += dt
    const k = f.t
    refreshDir(f, orb)
    const rx = orb.x + f.dx * orb.r
    const ry = orb.y + f.dy * orb.r
    const rz = orb.z + f.dz * orb.r
    if (k < LAUNCH_CHARGE) {
      const e = k / LAUNCH_CHARGE
      orb.flash = Math.max(orb.flash, 0.55 * e)
      orb.feed = Math.min(1, orb.feed + dt * 1.5)
      f.acc += dt * (70 + 160 * e)
      while (f.acc >= 1) {
        f.acc -= 1
        // 2D: angle ang + rnd(-1, 1) at distance 50..120 from the rim point; here a cone around the rim normal
        const phi = this.rnd(-1, 1)
        const d = this.rnd(50, 120)
        perpendicular(f.dx, f.dy, f.dz, this.rand() * TAU, tmp)
        const cp = Math.cos(phi)
        const sp = Math.sin(phi)
        const px = rx + (f.dx * cp + tmp[0] * sp) * d
        const py = ry + (f.dy * cp + tmp[1] * sp) * d
        const pz = rz + (f.dz * cp + tmp[2] * sp) * d
        const vx = rx - px
        const vy = ry - py
        const vz = rz - pz
        const dl = Math.hypot(vx, vy, vz) + 0.01
        h.spark(px, py, pz, (vx / dl) * 210, (vy / dl) * 210, (vz / dl) * 210, this.rnd(0.35, 0.7), this.rnd(0.9, 1.8), this.rand() < 0.5 ? WHITE : f.lc3)
      }
    } else if (k < LAUNCH) {
      const u = Math.pow((k - LAUNCH_CHARGE) / LAUNCH_FLY, 1.6)
      bez3(a.strands[0].pts, u, tmp)
      f.hx = tmp[0]
      f.hy = tmp[1]
      f.hz = tmp[2]
      f.u = u
      // trail.unshift(hx, hy, hz); keep TRAIL_MAX points
      const tr = f.trail
      tr.copyWithin(3, 0, (TRAIL_MAX - 1) * 3)
      tr[0] = f.hx
      tr[1] = f.hy
      tr[2] = f.hz
      if (f.trailN < TRAIL_MAX) f.trailN++
      if (f.intro) a.launchGrow = u
      for (let n = 0; n < 3; n++) {
        h.spark(f.hx, f.hy, f.hz, this.rnd(-40, 40), this.rnd(-40, 40), this.rnd(-40, 40), this.rnd(0.3, 0.8), this.rnd(0.8, 1.8), n ? f.lc3 : WHITE)
      }
    }
    if (k >= LAUNCH) {
      if (!f.arrived) {
        f.arrived = true
        if (f.intro) a.launchGrow = 1
        else this.impact(f)
      }
      f.trailN = Math.max(0, f.trailN - 6)
    }
    return k >= LAUNCH_TOTAL
  }

  private stepNova(f: FxItem, dt: number, env: ChoreoEnv): boolean {
    const a = f.a
    const h = this.hooks
    f.t += dt
    const k = f.t
    if (k < NOVA_CHARGE) {
      const e = k / NOVA_CHARGE
      const e2 = e * e
      a.charging = true
      a.novaS = 1 - 0.9 * e2
      a.novaL = 0.3 * (0.2 + 1.4 * e2)
      f.acc += dt * (40 + 220 * e2)
      while (f.acc >= 1) {
        f.acc -= 1
        randomDir(this.rand, tmp)
        const d = a.r * this.rnd(1.8, 3.4)
        h.spark(a.x + tmp[0] * d, a.y + tmp[1] * d, a.z + tmp[2] * d, -tmp[0] * 280, -tmp[1] * 280, -tmp[2] * 280, this.rnd(0.3, 0.6), this.rnd(0.9, 1.8), this.rand() < 0.5 ? WHITE : f.lc4)
      }
      return false
    }
    a.charging = false
    a.novaS = 1
    a.novaL = 0
    return true
  }
}

/* ───────────────────────────── draw curves (2D drawFx L702-786), shared by the layer and the tests ───────────────────────────── */

/** Launch charge phase: [centre glow radius factor, alpha], rim white glow, rim colour glow (2D L710-714). */
export const launchCharge = (e: number) => ({
  centreR: 1.9 + 0.5 * e, // x CENTER_R
  centreA: 0.28 * e,
  whiteR: 24 + 70 * e * e,
  whiteA: 0.85 * e,
  colR: 50 + 110 * e,
  colA: 0.55 * e,
})

/** Rim flare that lingers 0.25 s into the flight (2D L716). */
export const launchRimFade = (k: number): number => clamp(1 - (k - LAUNCH_CHARGE) / 0.25)

/** Impact afterglow q = clamp(1 - tb / 0.9) (2D L730). */
export const afterglowQ = (tb: number): number => clamp(1 - tb / 0.9)
