/**
 * Pure per-agent simulation for the 3D node layer: appearance dampers, floating home, spring-damper physics,
 * soft collisions, pointer gravity, drag, decoration weights, hit picking. No three, no DOM, so it is unit tested
 * (web/tests/nodes.spec.ts). Every constant cites the 2D source, web/agent-network.ts `update()` L831-935.
 */
import { FINISHED, GREY, HALTED, STATUS } from '../shared/status'
import type { AgentStatus } from '../shared/status'
import type { AgentState } from './world'
import { TAU, clamp, damp, lerp } from './springs'

/** Radius of an agent (2D L880): inactive agents shrink, active ones claim space, finished ones step back. */
export const agentRadius = (baseR: number, power: number, rest: number): number =>
  baseR * lerp(0.68, 1.1, clamp(power)) * lerp(1, 0.52, rest)

/** Hover spring target (2D L868). */
export const hoverTarget = (dragging: boolean, hovered: boolean): number => (dragging ? 1.12 : hovered ? 1.07 : 1)

/** The shared STATUS table arrays must never be mutated: give the agent its own colour arrays. */
export function adoptAgent(a: AgentState): void {
  a.dot = [a.dot[0], a.dot[1], a.dot[2]]
  a.col = [a.col[0], a.col[1], a.col[2]]
  // planet orientation arrays (filled in place every step by the nodes layer)
  a.axisQ ??= [0, 0, 0, 1]
  a.ringN ??= [0, 1, 0]
  a.spinQ ??= [0, 0, 0, 1]
}

/**
 * Smoothed appearance (2D L875-891): power/flow/spin lambda 2.6, detail 4, rest 3, colour 5, dot 6, hit 2.6,
 * flash 2.2, tokFlash 3.2, timeFlash 5, novaS 4 -> 1, novaL 1.6 -> 0. Also the spawn/hover/labelShift springs.
 * `hovered` is the pointer hover, `time` the master clock.
 */
export function stepAppearance(a: AgentState, dt: number, time: number, hovered: boolean): void {
  const cfg = STATUS[a.spec.status]
  if (!a.spawned && time >= a.spawnAt) {
    a.spawned = true
    a.spawn.target = 1
  }
  a.spawn.step(dt)
  a.hover.target = hoverTarget(a.dragging, hovered)
  a.hover.step(dt)
  a.labelShift.target = hovered ? 5 : 0
  a.labelShift.step(dt)
  a.statusT += dt

  a.power = damp(a.power, cfg.power, 2.6, dt)
  a.rest = damp(a.rest, FINISHED.has(a.spec.status) && !a.charging ? 1 : 0, 3, dt)
  a.novaS = damp(a.novaS, 1, 4, dt)
  a.novaL = damp(a.novaL, 0, 1.6, dt)
  a.fade = damp(a.fade, HALTED.has(a.spec.status) ? 0 : 1, 1.5, dt)
  a.r = agentRadius(a.baseR, a.power, a.rest)
  a.flow = damp(a.flow, cfg.flow, 2.6, dt)
  a.spin = damp(a.spin, cfg.spin, 2.6, dt)
  a.detail = damp(a.detail, cfg.power > 0.15 ? 1 : 0, 4, dt)
  // colour easing in place (a.col target = accent -> GREY by power, 2D L883; a.dot -> status dot, 2D L884)
  const kc = 1 - Math.exp(-5 * dt)
  const g = 1 - clamp(a.power * 1.1)
  for (let i = 0; i < 3; i++) {
    const tc = a.accent[i] + (GREY[i] - a.accent[i]) * g
    a.col[i] += (tc - a.col[i]) * kc
  }
  const kd = 1 - Math.exp(-6 * dt)
  for (let i = 0; i < 3; i++) a.dot[i] += (cfg.dot[i] - a.dot[i]) * kd
  a.hit = damp(a.hit, 0, 2.6, dt)
  a.flash = damp(a.flash, 0, 2.2, dt)
  a.tokFlash = damp(a.tokFlash, 0, 3.2, dt)
  a.timeFlash = damp(a.timeFlash, 0, 5, dt)
  a.grow = FINISHED.has(a.spec.status) && !a.charging && a.launchGrow >= 1 ? damp(a.grow, 0, 3, dt) : Math.max(clamp((time - (a.spawnAt + 0.2)) / 1.3), a.launchGrow)
  a.introCount = clamp((time - a.spawnAt) / 2.0)
}

/** Token and time counters tick for working statuses (2D L893-896). `rand` returns 0..1. */
export function stepCounters(a: AgentState, dt: number, rand: () => number): void {
  const cfg = STATUS[a.spec.status]
  if (cfg.tokenRate > 0) {
    a.tokens += cfg.tokenRate * dt * (0.6 + rand() * 0.8)
    a.seconds += dt
  }
}

/* ───────────────────────────── pointer, physics ───────────────────────────── */

/** A pointer ray (camera origin + unit direction) and the camera-facing plane normal. Mutated in place by the layer. */
export interface PointerRay {
  active: boolean
  ox: number
  oy: number
  oz: number
  dx: number
  dy: number
  dz: number
  nx: number
  ny: number
  nz: number
}

export const makePointerRay = (): PointerRay => ({ active: false, ox: 0, oy: 0, oz: 0, dx: 0, dy: 0, dz: 1, nx: 0, ny: 0, nz: 1 })

/** Intersect the ray with the plane through (px,py,pz) with the ray's normal. Writes `out`, returns false if parallel/behind. */
export function rayOnPlane(r: PointerRay, px: number, py: number, pz: number, out: { x: number; y: number; z: number }): boolean {
  const den = r.dx * r.nx + r.dy * r.ny + r.dz * r.nz
  if (Math.abs(den) < 1e-6) return false
  const t = ((px - r.ox) * r.nx + (py - r.oy) * r.ny + (pz - r.oz) * r.nz) / den
  if (t < 0) return false
  out.x = r.ox + r.dx * t
  out.y = r.oy + r.dy * t
  out.z = r.oz + r.dz * t
  return true
}

export interface PhysicsInput {
  motion: number
  /** Pointer ray, or null when the pointer is away. */
  ray: PointerRay | null
  /** Where the dragged agent's grab point should be (on the camera-facing plane through the grab), or null. */
  drag: { x: number; y: number; z: number } | null
}

const gp = { x: 0, y: 0, z: 0 }

/** The floating target of an agent (2D L898-900 plus the z float of the plan): out = [tx, ty, tz]. */
export function floatTarget(a: AgentState, time: number, motion: number, out: number[]): void {
  const fl = 7 * motion // 2D L897
  const back = 1 + 0.08 * a.rest // finished agents drift out toward the edge, behind the live ones
  const calm = 1 - 0.6 * a.rest
  out[0] = a.hx * back + Math.sin(time * 0.5 * a.fs + a.phase) * fl * calm
  out[1] = a.hy * back + Math.cos(time * 0.43 * a.fs + a.phase * 1.7) * fl * 1.3 * calm
  out[2] = a.hz * back + Math.sin(time * 0.37 * a.fs + a.phase * 2.3) * fl * 1.1 * calm
}

const tgt = [0, 0, 0]

/**
 * One physics step (2D L897-921): spring-damper f = 55 (target - pos) - 7 v, pointer gravity
 * (650 power + 120) / (1 + (d/190)^2), soft collisions d < ra + rb + 60 -> (dmin - d) 28, dragging with the stiff
 * 280 / 26 spring, lean damp 9. All in 3D; the pointer acts on the camera-facing plane through the agent.
 */
export function stepPhysics(a: AgentState, all: readonly AgentState[], dt: number, time: number, inp: PhysicsInput): void {
  floatTarget(a, time, inp.motion, tgt)
  let fx: number
  let fy: number
  let fz: number
  if (a.dragging && inp.drag) {
    fx = 280 * (inp.drag.x - a.grabX - a.x) - 26 * a.vx
    fy = 280 * (inp.drag.y - a.grabY - a.y) - 26 * a.vy
    fz = 280 * (inp.drag.z - a.grabZ - a.z) - 26 * a.vz
  } else {
    fx = 55 * (tgt[0] - a.x) - 7 * a.vx
    fy = 55 * (tgt[1] - a.y) - 7 * a.vy
    fz = 55 * (tgt[2] - a.z) - 7 * a.vz
    const ray = inp.ray
    if (ray && ray.active && rayOnPlane(ray, a.x, a.y, a.z, gp)) {
      const dx = gp.x - a.x
      const dy = gp.y - a.y
      const dz = gp.z - a.z
      const d = Math.hypot(dx, dy, dz) + 1
      const m = (650 * a.power + 120) / (1 + (d / 190) * (d / 190))
      fx += (dx / d) * m
      fy += (dy / d) * m
      fz += (dz / d) * m
    }
    for (let i = 0; i < all.length; i++) {
      const b = all[i]
      if (b === a) continue
      const dx = a.x - b.x
      const dy = a.y - b.y
      const dz = a.z - b.z
      const d = Math.hypot(dx, dy, dz) + 0.01
      const dmin = a.r + b.r + 60
      if (d < dmin) {
        const push = (dmin - d) * 28
        fx += (dx / d) * push
        fy += (dy / d) * push
        fz += (dz / d) * push
      }
    }
  }
  a.vx += fx * dt
  a.vy += fy * dt
  a.vz += fz * dt
  a.x += a.vx * dt
  a.y += a.vy * dt
  a.z += a.vz * dt
  a.lean[0] = damp(a.lean[0], -a.vx * 0.05, 9, dt)
  a.lean[1] = damp(a.lean[1], -a.vy * 0.05, 9, dt)
}

/* ───────────────────────────── decorations ───────────────────────────── */

/** Smooth per-status decoration weights so a status flip crossfades instead of snapping (interruptible). */
export interface Deco {
  run: number
  think: number
  wait: number
  idle: number
  check: number
  /** Integrated arc angles (so a speed change never jumps the phase) and base offsets. */
  ang: [number, number, number]
  off: [number, number, number]
}

export const makeDeco = (): Deco => ({ run: 0, think: 0, wait: 0, idle: 0, check: 0, ang: [0, 0, 0], off: [0, (TAU * 1) / 3, (TAU * 2) / 3] })

const DECO_LAMBDA = 8

/**
 * Decoration weights (2D L1571-1618): arcs and satellites need `act > 0.2` and running/thinking, the dashed ring
 * waiting, the ripple idle, the check completed. Arc angle speed is 0.9 * spin (running) or 2.6 * spin (thinking),
 * alternating direction; the arc offsets are i * TAU / n with n = 3 (running) or 2 (thinking).
 */
export function stepDeco(d: Deco, a: AgentState, dt: number): void {
  const st: AgentStatus = a.spec.status
  const live = clamp(a.power) > 0.2
  d.run = damp(d.run, live && st === 'running' ? 1 : 0, DECO_LAMBDA, dt)
  d.think = damp(d.think, live && st === 'thinking' ? 1 : 0, DECO_LAMBDA, dt)
  d.wait = damp(d.wait, live && st === 'waiting' ? 1 : 0, DECO_LAMBDA, dt)
  d.idle = damp(d.idle, live && st === 'idle' ? 1 : 0, DECO_LAMBDA, dt)
  d.check = damp(d.check, st === 'completed' ? 1 : 0, DECO_LAMBDA, dt)
  const tf = thinkFraction(d)
  const speed = lerp(0.9, 2.6, tf)
  const n = tf > 0.5 ? 2 : 3
  for (let i = 0; i < 3; i++) {
    d.ang[i] += dt * a.spin * speed * (i % 2 ? -1 : 1)
    d.off[i] = damp(d.off[i], (i * TAU) / n, 6, dt)
  }
}

/** 0 = running look, 1 = thinking look (blend while a flip is in flight). */
export const thinkFraction = (d: Deco): number => d.think / (d.run + d.think + 1e-4)

/** Arc sweep (2D L1581): 0.62 rad running, 1.1 rad thinking. */
export const arcSweep = (d: Deco): number => lerp(0.62, 1.1, thinkFraction(d))

/** Orthonormal basis (u, v) of a plane tilted by rx about X then ry about Y. rx = ry = 0 faces +Z (the screen). */
export function planeBasis(rx: number, ry: number, out: Float32Array | number[], o = 0): void {
  const c = Math.cos(rx)
  const s = Math.sin(rx)
  const cy = Math.cos(ry)
  const sy = Math.sin(ry)
  out[o] = cy
  out[o + 1] = 0
  out[o + 2] = -sy
  out[o + 3] = s * sy
  out[o + 4] = c
  out[o + 5] = s * cy
}

/* ───────────────────────────── planet rotation (Addendum A.4) ───────────────────────────── */

/** Spin about the planet's own axis in rad/s by status (3D only, no 2D source). Finished agents stop. */
export const SPIN_RATE: Record<AgentStatus, number> = {
  running: 0.6,
  thinking: 0.9,
  waiting: 0.15,
  idle: 0.08,
  completed: 0,
  stopped: 0,
  offline: 0,
}
/** Damper lambda of the spin rate and the thinking wobble: a status flip eases over ~1.5 s and is interruptible. */
export const SPIN_LAMBDA = 2
/** Axis tilt range (deg) and precession speed range (rad/s, sign per id). */
export const TILT_MIN = 15
export const TILT_MAX = 25

/** Per-agent rotation state. Deterministic from the id; integrated angles so a rate change never jumps. */
export interface Spin {
  /** Axis tilt from +Y in radians (15..25 deg). */
  tilt: number
  /** Azimuth of the tilt around +Y (precession angle, integrated). */
  az: number
  /** Precession rate, rad/s (signed). */
  prec: number
  /** Current spin rate (rad/s, damped toward SPIN_RATE). */
  rate: number
  /** Spin angle about the axis (integrated). */
  yaw: number
  /** Thinking wobble weight 0..1 (damped). */
  wob: number
  /** Phase for the wobble. */
  ph: number
}

/** FNV-1a 32-bit hash of a string, as 0..1 floats via `hash01(id, k)`. */
export function hash01(id: string, k: number): number {
  let h = 2166136261 ^ k
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  h ^= h >>> 13
  h = Math.imul(h, 2246822507)
  h ^= h >>> 16
  return (h >>> 0) / 4294967296
}

const DEG = Math.PI / 180

/** Rotation state for one agent id; `status` sets the starting spin rate (no ramp on the first frame). */
export function makeSpin(id: string, status: AgentStatus): Spin {
  return {
    tilt: (TILT_MIN + (TILT_MAX - TILT_MIN) * hash01(id, 1)) * DEG,
    az: TAU * hash01(id, 2),
    prec: (0.05 + 0.05 * hash01(id, 3)) * (hash01(id, 4) < 0.5 ? -1 : 1),
    rate: SPIN_RATE[status],
    yaw: TAU * hash01(id, 5),
    wob: status === 'thinking' ? 1 : 0,
    ph: TAU * hash01(id, 6),
  }
}

/**
 * One rotation step: the spin rate eases toward the status rate (lambda 2), thinking adds a small rate and axis wobble,
 * the axis precesses slowly. `motion` (1 or 0.35) scales the angular speeds but not the targets.
 */
export function stepSpin(sp: Spin, status: AgentStatus, dt: number, time: number, motion: number): void {
  sp.rate = damp(sp.rate, SPIN_RATE[status], SPIN_LAMBDA, dt)
  sp.wob = damp(sp.wob, status === 'thinking' ? 1 : 0, SPIN_LAMBDA, dt)
  const wobble = 1 + 0.18 * sp.wob * Math.sin(time * 3.1 + sp.ph)
  sp.yaw += sp.rate * wobble * motion * dt
  if (sp.yaw > 1e4) sp.yaw -= TAU * 1000
  sp.az += sp.prec * motion * dt
}

/** Tilt including the thinking nutation (small, ~2 deg). */
export const spinTilt = (sp: Spin, time: number): number => sp.tilt + 0.035 * sp.wob * Math.sin(time * 2.3 + sp.ph * 1.3)

/**
 * Write the axis quaternion (rotates +Y onto the tilted axis), the axis itself (ring normal) and the full body
 * orientation (axis * spin about local Y) into the given arrays. No allocation.
 */
export function spinFrame(sp: Spin, time: number, axisQ: number[], ringN: number[], spinQ: number[]): void {
  const t = spinTilt(sp, time)
  const s = Math.sin(t)
  const nx = s * Math.cos(sp.az)
  const ny = Math.cos(t)
  const nz = s * Math.sin(sp.az)
  ringN[0] = nx
  ringN[1] = ny
  ringN[2] = nz
  // rotation axis k = normalize(Y x n) = (sin az, 0, -cos az), angle t
  const h = Math.sin(t / 2)
  const qx = Math.sin(sp.az) * h
  const qy = 0
  const qz = -Math.cos(sp.az) * h
  const qw = Math.cos(t / 2)
  axisQ[0] = qx
  axisQ[1] = qy
  axisQ[2] = qz
  axisQ[3] = qw
  // q * (0, sin(y/2), 0, cos(y/2))
  const sy = Math.sin(sp.yaw / 2)
  const cy = Math.cos(sp.yaw / 2)
  spinQ[0] = qx * cy - qz * sy
  spinQ[1] = qw * sy + qy * cy
  spinQ[2] = qz * cy + qx * sy
  spinQ[3] = qw * cy - qy * sy
}

/** Rotate (x, y, z) by the unit quaternion q, writing out[o..o+2]. */
export function quatRotate(q: ArrayLike<number>, x: number, y: number, z: number, out: Float32Array | number[], o = 0): void {
  const qx = q[0]
  const qy = q[1]
  const qz = q[2]
  const qw = q[3]
  // t = 2 cross(q.xyz, v); v' = v + w t + cross(q.xyz, t)
  const tx = 2 * (qy * z - qz * y)
  const ty = 2 * (qz * x - qx * z)
  const tz = 2 * (qx * y - qy * x)
  out[o] = x + qw * tx + (qy * tz - qz * ty)
  out[o + 1] = y + qw * ty + (qz * tx - qx * tz)
  out[o + 2] = z + qw * tz + (qx * ty - qy * tx)
}

/**
 * Ring-plane basis (u, v) from the axis quaternion: u = q X, v = q (-Z), so u x v = the axis (ring normal).
 * Same layout as `planeBasis`: out = [ux, uy, uz, vx, vy, vz].
 */
export function ringBasis(axisQ: ArrayLike<number>, out: Float32Array | number[]): void {
  quatRotate(axisQ, 1, 0, 0, out, 0)
  quatRotate(axisQ, 0, 0, -1, out, 3)
}

/* ───────────────────────────── exit, pulse, pick ───────────────────────────── */

/** Graceful exit (plan 6.3): the agent shrinks to 0.85 and fades over EXIT_TIME seconds, then its slot is recycled. */
export const EXIT_TIME = 0.5
export const exitScale = (t: number): number => lerp(1, 0.85, easeOut(clamp(t / EXIT_TIME)))
export const exitFade = (t: number): number => 1 - easeOut(clamp(t / EXIT_TIME))
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

/** Screen-space hit radius: 2D `max(r * 1.18 + 6, 26)` (L1884) in world units; multiply by px per unit. */
export const hitRadius = (r: number): number => Math.max(r * 1.18 + 6, 26)

/**
 * Nearest candidate whose screen distance is inside its own threshold (2D hit L1884-1890). Arrays are parallel:
 * centre x/y in px, threshold in px, `ok[i]` false skips the candidate. Returns the index or -1.
 */
export function pickNearest(n: number, sx: ArrayLike<number>, sy: ArrayLike<number>, thr: ArrayLike<number>, ok: ArrayLike<boolean | number>, px: number, py: number): number {
  let best = -1
  let bd = 1e9
  for (let i = 0; i < n; i++) {
    if (!ok[i]) continue
    const d = Math.hypot(px - sx[i], py - sy[i])
    if (d < thr[i] && d < bd) {
      best = i
      bd = d
    }
  }
  return best
}
