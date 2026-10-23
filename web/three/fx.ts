/**
 * Shared effects API: the one place every layer fires bursts, sparks, ripples, shockwaves, shake and flashes.
 * This file is the Phase 3 contract plus a minimal CPU implementation (pools, shake decay, shockwave impulses).
 * Phase 6 adds the layers that DRAW `fx.sparks` / `fx.ripples`; nothing else needs to change for callers.
 */
import type { RGB } from '../shared/palette'
import type { AgentWorld, Vec3 } from './world'
import { damp, TAU } from './springs'

/** Pool caps (2D L587-596: ripples 60, burst 700, spark 900). */
export const MAX_RIPPLES = 60
export const MAX_BURST_SPARKS = 700
export const MAX_SPARKS = 900

/** A glowing spark (2D `Spark` L349), in world units and world seconds. */
export interface Spark {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  life: number
  max: number
  size: number
  col: RGB
}

/** An expanding ring or shell (2D `Ripple` L350). `r0 -> r1` eased with easeOutCubic over `max`. */
export interface Ripple {
  x: number
  y: number
  z: number
  r0: number
  r1: number
  life: number
  max: number
  col: RGB
  w: number
  /** 3D addition: drawn as a spherical shell (launch) instead of a camera-facing ring. */
  shell: boolean
}

export interface RippleOpts {
  pos: Vec3
  r0: number
  r1: number
  /** Seconds. */
  life: number
  color: RGB
  /** Line width (2D default 2.5). */
  width?: number
  /** Spherical shell instead of a ring (3D). */
  shell?: boolean
}

export type ShockwaveFn = (pos: Vec3, strength: number) => void

export interface Fx {
  /** Live pools. Phase 6 renders them; they are mutated in place by `step`. */
  readonly sparks: Spark[]
  readonly ripples: Ripple[]
  /** Current camera shake amount in world units (decays at lambda 4.5, 2D L631). camera.ts reads it. */
  readonly shakeValue: number

  /** n sparks flying out in random 3D directions, speed up to `speed` (2D burst L591). */
  burst(pos: Vec3, color: RGB, n: number, speed?: number): void
  /** One spark with an explicit velocity (2D sparkAt L601). */
  spark(pos: Vec3, vel: Vec3, life: number, size: number, color: RGB): void
  ripple(o: RippleOpts): void
  /** Kicks agents (<= 600 units, strength*3.2/(1+d/120)) and notifies dust listeners (<= 520 units) (2D L788-802). */
  shockwave(pos: Vec3, strength: number): void
  /** Raise the shake to at least `amount * motion` (2D `shake = max(shake, n*motion)`). */
  shake(amount: number): void
  /** Light an agent id or the orb ('orb'): sets its `flash` to at least `amount`. */
  flash(target: 'orb' | string, amount?: number): void

  /** Dust and other particle layers react to shockwaves. Returns an unsubscribe function. */
  onShockwave(fn: ShockwaveFn): () => void
  /** Engine calls this every sub-step, before the layers. */
  step(dt: number): void
  /** Empty the pools and zero the shake (scene restart). */
  clear(): void
}

export const createFx = (world: AgentWorld, getMotion: () => number, rand: () => number = Math.random): Fx => {
  const sparks: Spark[] = []
  const ripples: Ripple[] = []
  const swListeners: ShockwaveFn[] = []
  let shakeV = 0
  const rnd = (a: number, b: number) => a + rand() * (b - a)

  const fx: Fx = {
    sparks,
    ripples,
    get shakeValue() {
      return shakeV
    },
    burst(pos, color, n, speed = 60) {
      for (let i = 0; i < n && sparks.length < MAX_BURST_SPARKS; i++) {
        // uniform direction on the sphere
        const cz = rnd(-1, 1)
        const a = rnd(0, TAU)
        const sr = Math.sqrt(1 - cz * cz)
        const sp = rnd(0.2, 1) * speed
        sparks.push({
          x: pos.x,
          y: pos.y,
          z: pos.z,
          vx: Math.cos(a) * sr * sp,
          vy: Math.sin(a) * sr * sp,
          vz: cz * sp,
          life: 0,
          max: rnd(0.5, 1.3),
          size: rnd(0.8, 2.2),
          col: color,
        })
      }
    },
    spark(pos, vel, life, size, color) {
      if (sparks.length < MAX_SPARKS) {
        sparks.push({ x: pos.x, y: pos.y, z: pos.z, vx: vel.x, vy: vel.y, vz: vel.z, life: 0, max: life, size, col: color })
      }
    },
    ripple(o) {
      if (ripples.length > MAX_RIPPLES) ripples.shift()
      ripples.push({ x: o.pos.x, y: o.pos.y, z: o.pos.z, r0: o.r0, r1: o.r1, life: 0, max: o.life, col: o.color, w: o.width ?? 2.5, shell: o.shell ?? false })
    },
    shockwave(pos, strength) {
      for (const a of world.agents.values()) {
        const dx = a.x - pos.x
        const dy = a.y - pos.y
        const dz = a.z - pos.z
        const d = Math.hypot(dx, dy, dz) + 1
        if (d > 600 || d < 8) continue
        const f = (strength * 3.2) / (1 + d / 120)
        a.vx += (dx / d) * f
        a.vy += (dy / d) * f
        a.vz += (dz / d) * f
      }
      for (const fn of swListeners) fn(pos, strength)
    },
    shake(amount) {
      shakeV = Math.max(shakeV, amount * getMotion())
    },
    flash(target, amount = 1) {
      if (target === 'orb') world.orb.flash = Math.max(world.orb.flash, amount)
      else {
        const a = world.agents.get(target)
        if (a) a.flash = Math.max(a.flash, amount)
      }
    },
    onShockwave(fn) {
      swListeners.push(fn)
      return () => {
        const i = swListeners.indexOf(fn)
        if (i >= 0) swListeners.splice(i, 1)
      }
    },
    step(dt) {
      shakeV = damp(shakeV, 0, 4.5, dt)
      // sparks: drag 1 - 1.4 dt, swap-remove when spent (2D L933-939)
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]
        s.life += dt
        if (s.life >= s.max) {
          sparks[i] = sparks[sparks.length - 1]
          sparks.pop()
          continue
        }
        const k = 1 - 1.4 * dt
        s.vx *= k
        s.vy *= k
        s.vz *= k
        s.x += s.vx * dt
        s.y += s.vy * dt
        s.z += s.vz * dt
      }
      for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].life += dt
        if (ripples[i].life >= ripples[i].max) {
          ripples[i] = ripples[ripples.length - 1]
          ripples.pop()
        }
      }
    },
    clear() {
      sparks.length = 0
      ripples.length = 0
      shakeV = 0
    },
  }
  return fx
}
