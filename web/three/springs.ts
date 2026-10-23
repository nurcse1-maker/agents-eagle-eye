/**
 * Motion maths shared by every 3D layer. Identical to the 2D design so the two views feel the same.
 */

export const TAU = Math.PI * 2
export const clamp = (v: number, a = 0, b = 1) => (v < a ? a : v > b ? b : v)
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t

/** Frame-rate independent exponential approach (2D L85). The workhorse for smoothed values. */
export const damp = (a: number, b: number, lambda: number, dt: number) => a + (b - a) * (1 - Math.exp(-lambda * dt))

/** Ease-out for entrances and growth (2D L86). */
export const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

/** Damped spring, semi-implicit Euler sub-stepped at 8 ms (2D L113-125). Holds velocity, so it is interruptible. */
export class Spring {
  v = 0
  constructor(
    public x = 0,
    public target = 0,
    public k = 170,
    public c = 14,
  ) {}
  step(dt: number): number {
    const n = Math.max(1, Math.ceil(dt / 0.008))
    const h = dt / n
    for (let i = 0; i < n; i++) {
      this.v += (this.k * (this.target - this.x) - this.c * this.v) * h
      this.x += this.v * h
    }
    return this.x
  }
}

/** What layers get as `ctx.springs`. */
export const springs = { Spring, damp, easeOutCubic, clamp, lerp, TAU }
export type Springs = typeof springs
