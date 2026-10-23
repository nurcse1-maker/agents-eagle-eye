/**
 * Plasma flare simulation: pure maths (no three, no DOM) so it is unit tested. Port of the 2D flare
 * (palette L93-110, state L448-456, loopAt/flareOff/strandAt L1078-1107, stepFlare L1109-1243).
 *
 * The whole loop is solved in the orb's local plane (x right, y up, origin = orb centre, radius R), exactly like 2D.
 * The layer maps those plane coordinates into 3D by tilting the plane about the axis that points at the loop
 * (`tilt` and `axis` below), a rotation about the orb centre, so the feet stay on the rim.
 */
import type { RGB } from '../shared/palette'
import { clamp, damp, lerp, TAU } from './springs'

/** Plasma palette along the flare loop (2D L94-97). */
export const FLARE_STOPS: [number, RGB][] = [
  [0, [255, 205, 255]],
  [0.14, [226, 118, 255]],
  [0.38, [168, 92, 255]],
  [0.62, [84, 152, 255]],
  [0.84, [96, 232, 255]],
  [1, [255, 215, 255]],
]

const mix = (a: RGB, b: RGB, t: number): RGB => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)]

/** 65-entry LUT (2D L98-108). */
export const FLARE_LUT: RGB[] = Array.from({ length: 65 }, (_, i) => {
  const h = i / 64
  for (let k = 1; k < FLARE_STOPS.length; k++) {
    const [h1, c1] = FLARE_STOPS[k]
    if (h <= h1) {
      const [h0, c0] = FLARE_STOPS[k - 1]
      return mix(c0, c1, (h - h0) / (h1 - h0))
    }
  }
  return FLARE_STOPS[FLARE_STOPS.length - 1][1]
})

/** Colour at hue h (2D L109). */
export const flareCol = (h: number): RGB => FLARE_LUT[Math.round(clamp(h) * 64)]

/** Particle lanes across the braid (2D L110). */
export const FLARE_RAILS = [-0.92, -0.5, -0.12, 0.18, 0.55, 0.9]

export const FLARE_SLOW = 0.4 // 2D FSLOW L475
export const FLARE_MAX = 90 // 2D L1186
export const LOOP_N = 96 // 2D L1150
/** Particle floats: u, v, lane, amp, ph, size, hj, hot. */
export const FP_STRIDE = 8
export const P_U = 0
export const P_V = 1
export const P_LANE = 2
export const P_AMP = 3
export const P_PH = 4
export const P_SIZE = 5
export const P_HJ = 6
export const P_HOT = 7

export interface FlareEnv {
  /** Orb radius (2D CENTER_R). */
  R: number
  motion: number
  /** Agents with power > 0.3 (2D L1114). */
  active: number
  /** orb.spawn.x, clamped here. */
  spawn: number
  /** orb.feed. */
  feed: number
  /** Room left in the shared spark pool (2D `sparks.length < 700`). */
  sparkRoom: boolean
  /** A loop spark in plane coordinates: position, velocity, life, size, hue u. */
  onSpark: (x: number, y: number, vx: number, vy: number, life: number, size: number, u: number) => void
}

export class FlareSim {
  // wandering shape: current values ease toward randomly re-picked targets (2D L449-451)
  th = -0.95
  thT = -0.95
  ph = -0.55
  phT = -0.55
  sc = 0.25
  scT = 0.25
  el = 1
  elT = 1
  di = 0
  diT = 0
  dn = 1
  dnT = 1
  next = 0
  k = 0
  kk = 0
  acc = 0
  sacc = 0
  // geometry
  cx = 0
  cy = 0
  A = 1
  B = 1
  c = 1
  s = 0
  a0 = 0
  sA = 0
  sB = 1
  /** feet (plane) and outward directions (2D L453-454) */
  fax = 0
  fay = 0
  fbx = 0
  fby = 0
  nax = 0
  nay = 0
  nbx = 0
  nby = 0
  /** flare clock (2D `ft`) */
  ft = 0
  /** effective anchor angle (th + wobble) and 3D tilt of the loop plane about that axis */
  thE = -0.95
  tilt = 0
  /** mid-stage of the two-stage easing (2D L456) */
  private fm = { th: -0.95, ph: -0.55, sc: 0.25, el: 1, di: 0, dn: 1 }
  private R = 135

  readonly particles = new Float32Array(FLARE_MAX * FP_STRIDE)
  count = 0
  private lp = new Float64Array(4)
  private fp = new Float64Array(2)

  constructor(private readonly rand: () => number) {}

  private rnd(a: number, b: number): number {
    return a + this.rand() * (b - a)
  }

  /** Point (x, y) and outward normal (nx, ny) on the loop; s runs 0..1 around the full ellipse (2D L1079-1091). Returns the scratch. */
  loopAt(s: number): Float64Array {
    const lp = this.lp
    const a = this.a0 + s * TAU
    const ca = Math.cos(a)
    const sa = Math.sin(a)
    const lx = this.A * ca
    const ly = this.B * sa
    lp[0] = this.cx + lx * this.c - ly * this.s
    lp[1] = this.cy + lx * this.s + ly * this.c
    const gx = this.B * ca
    const gy = this.A * sa
    const gl = Math.hypot(gx, gy) || 1
    lp[2] = (gx * this.c - gy * this.s) / gl
    lp[3] = (gx * this.s + gy * this.c) / gl
    const wd =
      this.R * this.sc * (0.1 * Math.sin(s * TAU * 2 + this.ft * 0.7) + 0.05 * Math.sin(s * TAU * 4 - this.ft * 0.6)) * (0.4 + 0.6 * this.kk)
    lp[0] += lp[2] * wd
    lp[1] += lp[3] * wd
    return lp
  }

  /** Sideways offset of a strand from the spine (2D L1094-1099). */
  flareOff(u: number, lane: number, amp: number, ph: number, kk: number, time: number): number {
    const width = this.R * this.sc * 0.5 * (0.55 + 0.45 * kk) * (0.1 + 0.9 * Math.pow(Math.sin(Math.PI * u), 0.75))
    const sway = Math.sin(u * TAU * 1.4 + ph + time * 0.45) * amp
    const turb = (Math.sin(u * 7 - time * 0.8 + ph * 1.3) + 0.5 * Math.sin(u * 15 + time * 1.2 + ph * 2.1)) * 0.15
    return (lane * 0.35 + sway * 0.75 + turb) * width
  }

  /** Plane position of a strand at loop parameter u (2D L1102-1107). Returns the scratch (x, y). */
  strandAt(u: number, lane: number, amp: number, ph: number, kk: number, time: number): Float64Array {
    const q = this.loopAt(lerp(this.sA, this.sB, u))
    const off = this.flareOff(u, lane, amp, ph, kk, time)
    this.fp[0] = q[0] + q[2] * off
    this.fp[1] = q[1] + q[3] * off
    return this.fp
  }

  /** One sub-step (2D stepFlare). `dt` is world seconds; the flare clock advances by dt * 0.4. */
  step(dt: number, env: FlareEnv): void {
    const R = env.R
    this.R = R
    const m = env.motion
    const fd = dt * FLARE_SLOW
    this.ft += fd
    const time = this.ft
    const active = env.active
    const target = active > 0 ? clamp(0.78 + active * 0.05) : 0.1
    this.k = damp(this.k, target, active > 0 ? 1.4 : 0.8, dt)
    const kk = (this.kk = clamp(this.k * clamp(env.spawn) + env.feed * 0.5))

    // wander: every few seconds pick a new anchor angle, size, tilt, stretch and particle density (2D L1120-1130)
    if (time >= this.next) {
      this.next = time + this.rnd(2.4, 5.5)
      this.thT = clamp(this.th + this.rnd(-1.6, 1.6), -2.6, 0.6)
      this.phT = this.thT + this.rnd(-0.6, 1.2)
      const r = this.rand()
      this.scT = 0.35 * (r < 0.72 ? this.rnd(0.5, 0.8) : r < 0.88 ? this.rnd(0.85, 1.0) : this.rnd(0.3, 0.45)) // normal / surge / shrink
      this.elT = this.rnd(0.8, 1.25)
      this.diT = this.rnd(-0.12, 0.12)
      const q = this.rand()
      this.dnT = q < 0.75 ? this.rnd(0.6, 1.3) : q < 0.93 ? this.rnd(0.12, 0.3) : 0.03 // full / thin / nearly dormant
    }
    const fm = this.fm
    fm.th = damp(fm.th, this.thT, 1.4, fd)
    this.th = damp(this.th, fm.th, 1.4, fd)
    fm.ph = damp(fm.ph, this.phT, 1.3, fd)
    this.ph = damp(this.ph, fm.ph, 1.3, fd)
    fm.sc = damp(fm.sc, this.scT, 1.8, fd)
    this.sc = damp(this.sc, fm.sc, 1.8, fd)
    fm.el = damp(fm.el, this.elT, 1.4, fd)
    this.el = damp(this.el, fm.el, 1.4, fd)
    fm.di = damp(fm.di, this.diT, 1.4, fd)
    this.di = damp(this.di, fm.di, 1.4, fd)
    fm.dn = damp(fm.dn, this.dnT, 1.2, fd)
    this.dn = damp(this.dn, fm.dn, 1.2, fd)

    // geometry (2D L1138-1147)
    const sc = this.sc * (1 + 0.05 * Math.sin(time * 0.8))
    const th = this.th + Math.sin(time * 0.35) * 0.06
    this.thE = th
    const D = R * (0.65 + 1.4 * sc + this.di)
    this.cx = Math.cos(th) * D
    this.cy = Math.sin(th) * D
    this.A = R * sc * (1.45 + 0.36 * kk) * this.el
    this.B = (R * sc * (1.0 + 0.2 * kk)) / Math.sqrt(this.el)
    const phi = this.ph + Math.sin(time * 0.31) * 0.12
    this.c = Math.cos(phi)
    this.s = Math.sin(phi)

    // 3D only: the loop plane tips about the axis pointing at the loop, slowly and never edge-on
    this.tilt = m * (0.7 * Math.sin(time * 0.9 + 1.3) + 0.25 * Math.sin(time * 0.37 + 4.1))

    // anchor s=0 at the point nearest the core, then find where the loop leaves / re-enters the body (2D L1149-1182)
    const N = LOOP_N
    const a0Prev = this.a0
    this.a0 = 0
    let best = 1e9
    let bi = 0
    for (let i = 0; i < N; i++) {
      const p = this.loopAt(i / N)
      const d = Math.hypot(p[0], p[1])
      if (d < best) {
        best = d
        bi = i
      }
    }
    const a0T = (bi / N) * TAU
    this.a0 = a0Prev + ((((a0T - a0Prev + Math.PI) % TAU) + TAU) % TAU - Math.PI) * (1 - Math.exp(-8 * dt))
    let sA = -1
    let sB = -1
    let pd = 0
    for (let i = 0; i <= N; i++) {
      const q = this.loopAt(i / N)
      const d = Math.hypot(q[0], q[1]) - R * 0.985
      if (i > 0) {
        if (pd <= 0 && d > 0) {
          const f = -pd / (d - pd)
          sA = (i - 1 + f) / N
        }
        if (pd > 0 && d <= 0) {
          const f = pd / (pd - d)
          sB = (i - 1 + f) / N
        }
      }
      pd = d
    }
    if (sA < 0 || sB < 0 || sB <= sA) {
      sA = 0
      sB = 1
    }
    const k10 = 1 - Math.exp(-10 * dt)
    this.sA += (Math.max(0, sA - 1.5 / N) - this.sA) * k10
    this.sB += (Math.min(1, sB + 1.5 / N) - this.sB) * k10
    let e = this.loopAt(this.sA)
    this.fax = e[0]
    this.fay = e[1]
    let dl = Math.hypot(e[0], e[1]) || 1
    this.nax = e[0] / dl
    this.nay = e[1] / dl
    e = this.loopAt(this.sB)
    this.fbx = e[0]
    this.fby = e[1]
    dl = Math.hypot(e[0], e[1]) || 1
    this.nbx = e[0] / dl
    this.nby = e[1] / dl

    // emit filaments (2D L1185-1195)
    this.acc = Math.min(8, this.acc + dt * 20 * kk * this.dn * (0.5 + 0.5 * this.sc) * m)
    const P = this.particles
    while (this.acc >= 1 && this.count < FLARE_MAX) {
      this.acc -= 1
      const rail = FLARE_RAILS[Math.floor(this.rand() * FLARE_RAILS.length)]
      const o = this.count++ * FP_STRIDE
      P[o + P_U] = this.rnd(0, 0.04)
      P[o + P_V] = this.rnd(0.09, 0.24)
      P[o + P_LANE] = clamp(rail + (this.rand() + this.rand() + this.rand() - 1.5) * 0.22, -1.1, 1.1)
      P[o + P_AMP] = this.rnd(0.25, 1)
      P[o + P_PH] = this.rnd(0, TAU)
      P[o + P_SIZE] = this.rnd(0.8, 2.4)
      P[o + P_HJ] = this.rnd(-0.12, 0.12)
      P[o + P_HOT] = this.rand() < 0.12 ? 1 : 0
    }
    // haze wisps are disabled in 2D (L1197: wacc = 0) and therefore here

    // loop sparks (2D L1212-1222)
    this.sacc = Math.min(3, this.sacc + dt * 1.2 * kk * this.dn * (0.5 + 0.5 * this.sc) * m)
    while (this.sacc >= 1 && env.sparkRoom) {
      this.sacc -= 1
      const u = this.rnd(0.05, 0.95)
      const p = this.loopAt(lerp(this.sA, this.sB, u))
      const sp = this.rnd(20, 90)
      env.onSpark(p[0], p[1], p[2] * sp + this.rnd(-20, 20), p[3] * sp + this.rnd(-20, 20), this.rnd(0.6, 1.5), this.rnd(0.8, 2), u)
    }

    // advance (2D L1230-1231): u += v fd (1.55 - 0.85 u) (0.55 + 0.9 kk) m ; swap-remove when it reaches the far foot
    for (let i = this.count - 1; i >= 0; i--) {
      const o = i * FP_STRIDE
      P[o + P_U] += P[o + P_V] * fd * (1.55 - P[o + P_U] * 0.85) * (0.55 + kk * 0.9) * m
      if (P[o + P_U] >= 1) {
        const last = --this.count * FP_STRIDE
        if (last !== o) for (let j = 0; j < FP_STRIDE; j++) P[o + j] = P[last + j]
      }
    }
  }
}
