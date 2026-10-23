/**
 * Dust field simulation: pure maths, no three, no DOM, so it is unit tested.
 * Port of 2D makeDust (L547-568), the count rule (L540-544), shockwave impulses (L788-795) and stepDust (L1035-1073)
 * with a third axis: gravity and the attractors are true 3D. The 2D screen plane becomes the horizontal orbital disc
 * (Addendum A.1, XZ with Y up; 2D y maps to z): particles orbit in the disc and a gentle spring pulls them toward it
 * (y = orb y) so the field reads as a flattened galaxy with some thickness, swirling in the plane of the agents.
 *
 * All state lives in one Float32Array with a fixed stride, which the layer uploads as an interleaved instance buffer.
 */
import { clamp, TAU } from './springs'

export const GM_CENTER = 260000 // 2D L568
export const DUST_MAX = 900 // 2D L541 upper clamp
export const DUST_MIN = 180 // 2D L541 lower clamp

/** Float layout of one particle. */
export const DUST_STRIDE = 12
export const D_X = 0
export const D_Y = 1
export const D_Z = 2
export const D_VX = 3
export const D_VY = 4
export const D_VZ = 5
export const D_SIZE = 6
export const D_CLS = 7
export const D_PH = 8
export const D_TF = 9
export const D_AGE = 10
export const D_BIG = 11

/** Disc thickness controls (3D only; the disc normal is +Y). */
export const DISC_SPRING = 0.05 // rad/s squared: gentle, period about 28 s
export const DISC_DAMP = 0.03 // extra exp(-DISC_DAMP dt) on vy so thickness fades slowly instead of ringing
export const DISC_THICKNESS = 70 // initial y spread (world units)

/** Particle count for a viewport in design px (2D L541). */
export const dustCountFor = (LW: number, LH: number, reduced: boolean, designW = 1024, designH = 1536): number =>
  clamp(Math.round(((LW * LH) / (designW * designH)) * 560 * (reduced ? 0.4 : 1)), DUST_MIN, DUST_MAX)

export interface DustAttractor {
  x: number
  y: number
  z: number
  power: number
  dragging: boolean
}

export interface DustEnv {
  /** Orb centre and radius (world). */
  cx: number
  cy: number
  cz: number
  R: number
  agents: ArrayLike<DustAttractor>
  /** Pointer well: 0 when the pointer is away, else 26000 (150000 pressed). */
  ptrMass: number
  px: number
  py: number
  pz: number
  motion: number
  /** Called when a particle is swallowed by the orb (feed +0.012 and a 30% spark are the layer's job). */
  onConsume: (x: number, y: number, z: number, cls: number) => void
}

export class DustSim {
  readonly data = new Float32Array(DUST_MAX * DUST_STRIDE)
  count = 0
  LW = 1024
  LH = 1536
  private classes: number

  constructor(
    private readonly rand: () => number,
    classes = 6,
  ) {
    this.classes = classes
  }

  private rnd(a: number, b: number): number {
    return a + this.rand() * (b - a)
  }

  /**
   * Viewport changed (design px). Rebuilds all particles when the wanted count differs by more than 25% (2D L542),
   * otherwise only the bounds change. Returns true when rebuilt.
   */
  setViewport(LW: number, LH: number, reduced: boolean, R: number, motion: number): boolean {
    this.LW = LW
    this.LH = LH
    const want = dustCountFor(LW, LH, reduced)
    if (this.count === 0 || Math.abs(this.count - want) / want > 0.25) {
      this.count = want
      for (let i = 0; i < want; i++) this.spawn(i, true, -1, 0, 0, 0, R, motion)
      return true
    }
    return false
  }

  /** (Re)initialise particle i. `cls < 0` draws a fresh colour class (2D L564), else the class is kept (2D L1048). */
  spawn(i: number, initial: boolean, cls: number, cx: number, cy: number, cz: number, R: number, motion: number): void {
    const d = this.data
    const o = i * DUST_STRIDE
    const ang = this.rnd(0, TAU)
    const maxR = Math.hypot(this.LW, this.LH) * 0.55
    // the 2D (x, y) field lies on the disc as (x, z)
    let x: number
    let z: number
    if (initial) {
      x = this.rnd(-this.LW / 2 - 40, this.LW / 2 + 40)
      z = this.rnd(-this.LH / 2 - 40, this.LH / 2 + 40)
    } else {
      const rr = this.rnd(R * 1.6, maxR)
      x = cx + Math.cos(ang) * rr
      z = cz + Math.sin(ang) * rr * 1.1
    }
    // disc thickness along Y: roughly gaussian (sum of three uniforms)
    const y = cy + (this.rand() + this.rand() + this.rand() - 1.5) * (DISC_THICKNESS * 1.33)
    const dx = x - cx
    const dy = y - cy
    const dz = z - cz
    const dist = Math.hypot(dx, dy, dz) + 1
    const dxz = Math.hypot(dx, dz) + 1e-6
    const vc = Math.sqrt(GM_CENTER / dist) * this.rnd(0.45, 1.05) * motion
    const dir = this.rand() < 0.88 ? 1 : -1 // 88% prograde (2D sense with z as the screen-down axis)
    d[o + D_X] = x
    d[o + D_Y] = y
    d[o + D_Z] = z
    d[o + D_VX] = (-dz / dxz) * vc * dir
    d[o + D_VY] = this.rnd(-3, 3) * motion
    d[o + D_VZ] = (dx / dxz) * vc * dir
    d[o + D_SIZE] = this.rnd(0.7, 2.3)
    d[o + D_CLS] = cls >= 0 ? cls : Math.floor(Math.pow(this.rand(), 1.5) * this.classes)
    d[o + D_PH] = this.rnd(0, TAU)
    d[o + D_TF] = this.rnd(0.8, 3)
    d[o + D_AGE] = initial ? 5 : 0
    d[o + D_BIG] = this.rand() < 0.12 ? 1 : 0
  }

  /** Shockwave impulse (2D L788-795): `strength/(1 + d/90) * motion` within 520 units, spherical in 3D. */
  shockwave(x: number, y: number, z: number, strength: number, motion: number): void {
    const a = this.data
    for (let i = 0; i < this.count; i++) {
      const o = i * DUST_STRIDE
      const dx = a[o + D_X] - x
      const dy = a[o + D_Y] - y
      const dz = a[o + D_Z] - z
      const d = Math.hypot(dx, dy, dz) + 1
      if (d > 520) continue
      const f = (strength / (1 + d / 90)) * motion
      a[o + D_VX] += (dx / d) * f
      a[o + D_VY] += (dy / d) * f
      a[o + D_VZ] += (dz / d) * f
    }
  }

  /** One sub-step (2D stepDust L1035-1073). */
  step(dt: number, env: DustEnv): void {
    const a = this.data
    const { cx, cy, cz, R, agents, ptrMass, motion } = env
    const R2 = R * R * 0.72
    const halfW = this.LW / 2 + 260
    const halfH = this.LH / 2 + 260 // along z (the 2D y extent lies on the disc)
    const drag = Math.exp(-0.05 * dt)
    const ydrag = Math.exp(-DISC_DAMP * dt)
    const na = agents.length
    for (let i = 0; i < this.count; i++) {
      const o = i * DUST_STRIDE
      a[o + D_AGE] += dt
      const x = a[o + D_X]
      const y = a[o + D_Y]
      const z = a[o + D_Z]
      let dx = cx - x
      let dy = cy - y
      let dz = cz - z
      const dc2 = dx * dx + dy * dy + dz * dz
      let d2 = dc2 + 1200
      let inv = GM_CENTER / (d2 * Math.sqrt(d2))
      let ax = dx * inv
      let ay = dy * inv
      let az = dz * inv
      if (dc2 < R2) {
        env.onConsume(x, y, z, a[o + D_CLS])
        this.spawn(i, false, a[o + D_CLS], cx, cy, cz, R, motion)
        continue
      }
      for (let k = 0; k < na; k++) {
        const g = agents[k]
        dx = g.x - x
        dy = g.y - y
        dz = g.z - z
        d2 = dx * dx + dy * dy + dz * dz + 500
        inv = (9000 * (0.25 + g.power) * (g.dragging ? 3 : 1)) / (d2 * Math.sqrt(d2))
        ax += dx * inv
        ay += dy * inv
        az += dz * inv
      }
      if (ptrMass) {
        dx = env.px - x
        dy = env.py - y
        dz = env.pz - z
        d2 = dx * dx + dy * dy + dz * dz + 900
        inv = ptrMass / (d2 * Math.sqrt(d2))
        ax += dx * inv
        ay += dy * inv
        az += dz * inv
      }
      ay -= (y - cy) * DISC_SPRING // 3D: keep the field a flattened disc in the XZ plane
      let vx = a[o + D_VX] + ax * dt * motion
      let vy = a[o + D_VY] + ay * dt * motion
      let vz = a[o + D_VZ] + az * dt * motion
      vx *= drag
      vy *= drag * ydrag
      vz *= drag
      const sp = Math.hypot(vx, vy, vz)
      if (sp > 240) {
        const k = 240 / sp
        vx *= k
        vy *= k
        vz *= k
      }
      a[o + D_VX] = vx
      a[o + D_VY] = vy
      a[o + D_VZ] = vz
      const nx = x + vx * dt
      const ny = y + vy * dt
      const nz = z + vz * dt
      a[o + D_X] = nx
      a[o + D_Y] = ny
      a[o + D_Z] = nz
      if (nx < cx - halfW || nx > cx + halfW || nz < cz - halfH || nz > cz + halfH || ny < cy - 900 || ny > cy + 900) {
        this.spawn(i, false, a[o + D_CLS], cx, cy, cz, R, motion)
      }
    }
  }
}
