/**
 * Pure link simulation: strand geometry (2D updateStrands L965-987), Bezier evaluation (L989-993),
 * packet spawning / travel / arrival (2D stepPackets L996-1033) and pulse packets (2D pulseAgent L804-813).
 * No three, no DOM: unit-tested in web/tests/links.spec.ts.
 */
import type { RGB } from '../shared/palette'
import type { AgentState } from './world'

/** Segments per strand (2D N = 26, L1449). */
export const STRAND_SEGMENTS = 26
export const MAX_PACKETS = 16
export const MAX_PULSE_PACKETS = 22

export interface OrbLike {
  x: number
  y: number
  z: number
  r: number
}

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v)

/** Upward bow of a link (Addendum A.6): both inner control points are lifted along +Y by this fraction of the length. */
export const LINK_LIFT = 0.15
/** Braid spread around the arc tangent (radians): strand j rotates its side axis by sin(p1) * BRAID_SPREAD. */
export const BRAID_SPREAD = 1.05

/**
 * Writes the 12-number cubic Bezier (x y z for 4 control points) of every strand of `a`, in 3D.
 * Same maths as 2D L965-987 in the frame of the orb->node axis `u`, a side axis `n` that lies in the orbital disc
 * (n = u x Y, horizontal) and the up-ish axis b = n x u. Addendum A.6: links arc along the disc with an upward
 * bow (both inner control points + Y * LINK_LIFT * len), and each strand's side axis is rotated around the tangent
 * by sin(p1) * BRAID_SPREAD so the braid is spread in 3D (the core, off = 0, keeps the in-disc frame; the comet rides it).
 */
export function updateStrands(a: AgentState, orb: OrbLike, time: number, motion: number): void {
  const dx = a.x - orb.x
  const dy = a.y - orb.y
  const dz = a.z - orb.z
  const dist = Math.hypot(dx, dy, dz) + 0.001 // 2D L967
  const ux = dx / dist
  const uy = dy / dist
  const uz = dz / dist
  // n = u x Y = (-uz, 0, ux): horizontal, so the 2D side bow stays in the disc
  let nx = -uz
  let ny = 0
  let nz = ux
  let nl = Math.hypot(nx, nz)
  if (nl < 1e-3) {
    // link straight up or down: any horizontal axis
    nx = 1
    nz = 0
    nl = 1
  }
  nx /= nl
  ny /= nl
  nz /= nl
  // b = n x u (points up for a horizontal link)
  const bx = ny * uz - nz * uy
  const by = nz * ux - nx * uz
  const bz = nx * uy - ny * ux
  const rn = a.r * a.spawn.x // 2D L970
  const len = Math.max(20, dist - orb.r - rn) // 2D L971
  const wob = 0.6 + 0.4 * motion // 2D L972
  const R = orb.r * 0.985 // 2D L975
  const lift = len * LINK_LIFT
  for (let j = 0; j < a.strands.length; j++) {
    const s = a.strands[j]
    // per-strand frame rotated around u: side m, out-of-plane k
    // sign independent of off (off * off would tilt every strand the same way); the core (off = 0) keeps phi = 0
    const phi = s.off === 0 ? 0 : Math.sin(s.p1) * BRAID_SPREAD
    const cp = Math.cos(phi)
    const sp = Math.sin(phi)
    const mx = nx * cp + bx * sp
    const my = ny * cp + by * sp
    const mz = nz * cp + bz * sp
    const kx = bx * cp - nx * sp
    const ky = by * cp - ny * sp
    const kz = bz * cp - nz * sp
    const d = s.off * 0.2 // sa = ang + off*0.2 (L974): rotate u toward m by d
    const cd = Math.cos(d)
    const sd = Math.sin(d)
    const sdx = ux * cd + mx * sd
    const sdy = uy * cd + my * sd
    const sdz = uz * cd + mz * sd
    const sx = orb.x + sdx * R
    const sy = orb.y + sdy * R
    const sz = orb.z + sdz * R
    const ex = a.x - ux * rn * 0.97 + mx * s.off * rn * 0.22 // L977
    const ey = a.y - uy * rn * 0.97 + my * s.off * rn * 0.22
    const ez = a.z - uz * rn * 0.97 + mz * s.off * rn * 0.22
    const o1 = (s.a1 * 0.5 + Math.sin(time * s.f1 + s.p1) * 0.28 * wob) * len * 0.34 // L979
    const o2 = (s.a2 * 0.5 + Math.sin(time * s.f2 + s.p2) * 0.28 * wob) * len * 0.34 // L980
    const q1 = (s.a2 * 0.35 + Math.sin(time * s.f2 * 0.8 + s.p2 + 1.3) * 0.2 * wob) * len * 0.34
    const q2 = (s.a1 * 0.35 + Math.sin(time * s.f1 * 0.8 + s.p1 + 2.1) * 0.2 * wob) * len * 0.34
    const p = s.pts
    p[0] = sx
    p[1] = sy
    p[2] = sz
    p[3] = sx + sdx * len * 0.36 + mx * o1 + kx * q1 // L983
    p[4] = sy + sdy * len * 0.36 + my * o1 + ky * q1 + lift
    p[5] = sz + sdz * len * 0.36 + mz * o1 + kz * q1
    p[6] = ex - ux * len * 0.36 + mx * o2 + kx * q2 // L984
    p[7] = ey - uy * len * 0.36 + my * o2 + ky * q2 + lift
    p[8] = ez - uz * len * 0.36 + mz * o2 + kz * q2
    p[9] = ex
    p[10] = ey
    p[11] = ez
  }
}

/** Cubic Bezier point of a 12-number strand at u (2D bez L989, with z). */
export function bez3(p: number[], u: number, out: number[]): void {
  const m = 1 - u
  const a = m * m * m
  const b = 3 * m * m * u
  const c = 3 * m * u * u
  const d = u * u * u
  out[0] = a * p[0] + b * p[3] + c * p[6] + d * p[9]
  out[1] = a * p[1] + b * p[4] + c * p[7] + d * p[10]
  out[2] = a * p[2] + b * p[5] + c * p[8] + d * p[11]
}

/** Cached packet colours (2D L1476, L1018). Updated in place so nothing is allocated per frame. */
export interface PacketColors {
  out: RGB
  inn: RGB
  spOut: RGB
  spIn: RGB
}

export const makePacketColors = (): PacketColors => ({
  out: [0, 0, 0],
  inn: [0, 0, 0],
  spOut: [0, 0, 0],
  spIn: [0, 0, 0],
})

const mixTo = (o: RGB, a: RGB, b: RGB, t: number) => {
  o[0] = a[0] + (b[0] - a[0]) * t
  o[1] = a[1] + (b[1] - a[1]) * t
  o[2] = a[2] + (b[2] - a[2]) * t
}
const VIOLET: RGB = [200, 160, 255]
const SPARK_VIOLET: RGB = [190, 150, 255]
const WHITE: RGB = [255, 255, 255]
const lightenTo = (o: RGB, c: RGB, t: number) => mixTo(o, c, WHITE, t)

/** Packet head colours: out = lighten(col, .35); in = mix(lighten(col, .2), [200,160,255], .5) (2D L1476). */
export function packetColors(col: RGB, o: PacketColors): void {
  lightenTo(o.out, col, 0.35)
  lightenTo(o.inn, col, 0.2)
  mixTo(o.inn, o.inn, VIOLET, 0.5)
  o.spOut[0] = col[0]
  o.spOut[1] = col[1]
  o.spOut[2] = col[2]
  mixTo(o.spIn, col, SPARK_VIOLET, 0.5) // trail spark colour (2D L1018)
}

/** Side effects of packets on the rest of the scene; the layer wires these to fx / orb. */
export interface PacketHooks {
  sparkCount(): number
  spark(x: number, y: number, z: number, vx: number, vy: number, vz: number, life: number, size: number, col: RGB): void
  burst(x: number, y: number, z: number, col: RGB, n: number, speed: number): void
  feed(amount: number): void
}

const tmp = [0, 0, 0]

/** One sub-step of packet life for one agent: spawn, travel, trail sparks, arrival (2D stepPackets L996-1033). */
export function stepPackets(a: AgentState, dt: number, rand: () => number, hooks: PacketHooks, colors: PacketColors): void {
  const rnd = (lo: number, hi: number) => lo + rand() * (hi - lo)
  a.spawnAcc += dt * a.flow * 2.4 * a.grow
  while (a.spawnAcc >= 1) {
    a.spawnAcc -= 1
    if (a.packets.length < MAX_PACKETS) {
      const out = rand() < 0.55
      a.packets.push({
        si: Math.floor(rand() * a.strands.length),
        t: out ? 0 : 1,
        dir: out ? 1 : -1,
        spd: rnd(0.16, 0.34) * (0.7 + a.flow * 0.5),
        size: rnd(0.8, 1.4),
        sparkT: 0,
      })
    }
  }
  for (let i = a.packets.length - 1; i >= 0; i--) {
    const k = a.packets[i]
    k.t += k.spd * k.dir * dt
    bez3(a.strands[k.si].pts, clamp01(k.t), tmp)
    k.sparkT -= dt
    if (k.sparkT <= 0 && hooks.sparkCount() < 600) {
      k.sparkT = 0.045
      hooks.spark(tmp[0], tmp[1], tmp[2], rnd(-14, 14), rnd(-14, 14), rnd(-14, 14), rnd(0.5, 1.2), rnd(0.6, 1.4), k.dir > 0 ? colors.spOut : colors.spIn)
    }
    if (k.t >= 1 && k.dir > 0) {
      a.hit = Math.min(1.2, a.hit + 0.28)
      hooks.burst(tmp[0], tmp[1], tmp[2], a.col, 3, 40)
      a.packets.splice(i, 1)
    } else if (k.t <= 0 && k.dir < 0) {
      hooks.feed(0.06)
      hooks.burst(tmp[0], tmp[1], tmp[2], a.col, 2, 30)
      a.packets.splice(i, 1)
    } else if (k.t > 1.01 || k.t < -0.01) {
      a.packets.splice(i, 1)
    }
  }
}

/** Pulse packets (2D pulseAgent L804-811): n packets alternating out/in, total up to 22, hit +0.5 (cap 1.4). */
export function pulsePackets(a: AgentState, n: number, rand: () => number): void {
  for (let i = 0; i < n && a.packets.length < MAX_PULSE_PACKETS; i++) {
    a.packets.push({
      si: Math.floor(rand() * a.strands.length),
      t: i % 2 ? 1 : 0,
      dir: i % 2 ? -1 : 1,
      spd: 0.45 + rand() * 0.35,
      size: 1 + rand() * 0.5,
      sparkT: 0,
    })
  }
  a.hit = Math.min(1.4, a.hit + 0.5)
}

/** Strand alpha multiplier (2D L1442): (0.1 + 0.9 power) * (1 + hl * 0.8 + hit * 0.25). `hl` is already clamped. */
export const linkAlphaMul = (power: number, hl: number, hit: number) => (0.1 + 0.9 * clamp01(power)) * (1 + hl * 0.8 + hit * 0.25)

/** Hover highlight (2D L1441): (hover - 1) / 0.07, clamped 0..1. */
export const hoverHl = (hoverX: number) => clamp01((hoverX - 1) / 0.07)

/** Visible strand fraction (2D maxI = max(2, floor(26 grow)) / 26, L1450), continuous in 3D. */
export const growEnd = (grow: number) => Math.max(2 / STRAND_SEGMENTS, Math.min(1, grow))

/** Packet visibility (2D L1477): clamp(power * 1.2 + 0.1). */
export const packetVis = (power: number) => clamp01(power * 1.2 + 0.1)
