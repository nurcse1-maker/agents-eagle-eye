import { expect, test } from 'bun:test'
import { DEFAULT_AGENTS } from '../shared/defaults'
import { seeded } from '../shared/rng'
import { INTRO_BASE, makeAgentState } from '../three/world'
import {
  LINK_LIFT,
  STRAND_SEGMENTS,
  bez3,
  growEnd,
  linkAlphaMul,
  makePacketColors,
  packetColors,
  packetVis,
  pulsePackets,
  stepPackets,
  updateStrands,
} from '../three/links-sim'
import type { PacketHooks } from '../three/links-sim'

const orb = { x: 0, y: 0, z: 0, r: 98 }
const mk = (x: number, y: number, z: number, seed = 7) => {
  const a = makeAgentState({ ...DEFAULT_AGENTS[0] }, 0, seeded(seed), INTRO_BASE)
  a.x = x
  a.y = y
  a.z = z
  a.spawn.x = 1
  a.grow = 1
  return a
}

test('9 strands per agent, core first (w2 a.95), others in range', () => {
  const a = mk(300, 100, 0)
  expect(a.strands.length).toBe(9)
  expect(a.strands[0].w).toBe(2)
  expect(a.strands[0].alpha).toBe(0.95)
  expect(a.strands[0].off).toBe(0)
  for (const s of a.strands.slice(1)) {
    expect(s.w).toBeGreaterThanOrEqual(0.5)
    expect(s.w).toBeLessThanOrEqual(1.3)
    expect(s.alpha).toBeGreaterThanOrEqual(0.18)
    expect(s.alpha).toBeLessThanOrEqual(0.5)
  }
  expect(STRAND_SEGMENTS).toBe(26)
})

test('strand endpoints sit on the orb rim and the node rim', () => {
  const a = mk(300, 100, 50)
  updateStrands(a, orb, 1.3, 1)
  const core = a.strands[0].pts
  const d0 = Math.hypot(core[0], core[1], core[2])
  expect(d0).toBeCloseTo(orb.r * 0.985, 2)
  const dist = Math.hypot(300, 100, 50)
  const d3 = Math.hypot(core[9] - 300, core[10] - 100, core[11] - 50)
  expect(d3).toBeCloseTo(a.r * 0.97, 2)
  // core end lies on the orb side of the node
  expect(Math.hypot(core[9], core[10], core[11])).toBeLessThan(dist)
})

test('disc link: the 2D side bow lies in the disc (z), the arc bows upward by LINK_LIFT * len', () => {
  const a = mk(300, 0, 0)
  updateStrands(a, orb, 0, 1)
  const core = a.strands[0].pts
  // 2D: start (R*.985, 0), control 1 x = start + len*.36, side offset o1 along n; n = u x Y = (0, 0, 1) here
  const len = Math.max(20, 300 - 98 - a.r)
  const s = a.strands[0]
  expect(core[0]).toBeCloseTo(98 * 0.985, 2)
  expect(core[1]).toBeCloseTo(0, 6)
  expect(core[3]).toBeCloseTo(98 * 0.985 + len * 0.36, 2)
  const o1 = (s.a1 * 0.5 + Math.sin(s.p1) * 0.28) * len * 0.34
  expect(core[5]).toBeCloseTo(o1, 2)
  const q1 = (s.a2 * 0.35 + Math.sin(s.p2 + 1.3) * 0.2) * len * 0.34
  expect(core[4]).toBeCloseTo(q1 + LINK_LIFT * len, 2)
  // both inner control points are lifted: the bow is upward on average over all strands
  let up = 0
  for (const t of a.strands) up += t.pts[4] + t.pts[7]
  expect(up / a.strands.length / 2).toBeGreaterThan(LINK_LIFT * len * 0.5)
})

test('braid spreads around the tangent: strand roots leave the disc plane on both sides', () => {
  const a = mk(400, 0, 200)
  updateStrands(a, orb, 0.7, 1)
  let above = 0
  let below = 0
  for (const s of a.strands) {
    if (s.pts[1] > 2) above++
    if (s.pts[1] < -2) below++
  }
  expect(above).toBeGreaterThan(0)
  expect(below).toBeGreaterThan(0)
  // the core root stays in the disc plane
  expect(Math.abs(a.strands[0].pts[1])).toBeLessThan(1e-6)
})

test('pts are finite for a link straight along z and for coincident points', () => {
  for (const [x, y, z] of [
    [0, 0, 300],
    [0, 0, -300],
    [0, 0, 0],
  ]) {
    const a = mk(x, y, z)
    updateStrands(a, orb, 2, 0.35)
    for (const s of a.strands) for (const v of s.pts) expect(Number.isFinite(v)).toBe(true)
  }
})

test('bez3 hits the endpoints', () => {
  const p = [0, 0, 0, 1, 2, 3, 4, 5, 6, 10, 20, 30]
  const o = [0, 0, 0]
  bez3(p, 0, o)
  expect(o).toEqual([0, 0, 0])
  bez3(p, 1, o)
  expect(o).toEqual([10, 20, 30])
})

test('alpha multiplier, growth and visibility formulas', () => {
  expect(linkAlphaMul(0, 0, 0)).toBeCloseTo(0.1, 6)
  expect(linkAlphaMul(1, 0, 0)).toBeCloseTo(1, 6)
  expect(linkAlphaMul(1, 1, 1)).toBeCloseTo(1 * (1 + 0.8 + 0.25), 6)
  expect(growEnd(0)).toBeCloseTo(2 / 26, 6)
  expect(growEnd(0.5)).toBe(0.5)
  expect(growEnd(3)).toBe(1)
  expect(packetVis(0)).toBeCloseTo(0.1, 6)
  expect(packetVis(1)).toBe(1)
})

const hooks = () => {
  const log = { sparks: 0, bursts: [] as number[], feed: 0, sparkTotal: 0 }
  const h: PacketHooks = {
    sparkCount: () => log.sparkTotal,
    spark: () => {
      log.sparks++
      log.sparkTotal++
    },
    burst: (_x, _y, _z, _c, n) => log.bursts.push(n),
    feed: v => (log.feed += v),
  }
  return { h, log }
}

test('packets spawn at flow*2.4*grow per second, capped at 16, and arrive', () => {
  const a = mk(300, 100, 0)
  a.flow = 1
  updateStrands(a, orb, 0, 1)
  a.spawnAcc = 0
  const { h, log } = hooks()
  const c = makePacketColors()
  packetColors(a.col, c)
  const rand = seeded(3)
  let spawned = 0
  let seen = new Set<unknown>()
  for (let i = 0; i < 100; i++) {
    stepPackets(a, 0.01, rand, h, c)
    for (const k of a.packets) if (!seen.has(k)) (seen.add(k), spawned++)
  }
  // 1 s at 2.4/s -> 2 or 3 spawns (accumulator started at 0)
  expect(spawned).toBeGreaterThanOrEqual(2)
  expect(spawned).toBeLessThanOrEqual(3)
  expect(a.packets.length).toBeLessThanOrEqual(16)
  for (let i = 0; i < 1200; i++) stepPackets(a, 0.01, rand, h, c)
  expect(log.bursts.length).toBeGreaterThan(0)
  expect(log.sparks).toBeGreaterThan(10)
  expect(a.hit).toBeGreaterThan(0)
  for (const n of log.bursts) expect([2, 3]).toContain(n)
  // incoming arrivals feed the orb by 0.06 each
  expect(log.feed).toBeCloseTo(log.bursts.filter(n => n === 2).length * 0.06, 6)
})

test('no packets spawn while grow is 0', () => {
  const a = mk(300, 100, 0)
  a.grow = 0
  updateStrands(a, orb, 0, 1)
  const { h } = hooks()
  const c = makePacketColors()
  for (let i = 0; i < 300; i++) stepPackets(a, 0.02, seeded(1), h, c)
  expect(a.packets.length).toBe(0)
})

test('pulse packets alternate out/in, cap at 22 and raise hit to at most 1.4', () => {
  const a = mk(300, 100, 0)
  pulsePackets(a, 10, seeded(5))
  expect(a.packets.length).toBe(10)
  expect(a.packets[0].dir).toBe(1)
  expect(a.packets[1].dir).toBe(-1)
  expect(a.packets[1].t).toBe(1)
  for (const k of a.packets) {
    expect(k.spd).toBeGreaterThanOrEqual(0.45)
    expect(k.spd).toBeLessThanOrEqual(0.8)
  }
  pulsePackets(a, 10, seeded(6))
  pulsePackets(a, 10, seeded(7))
  expect(a.packets.length).toBe(22)
  expect(a.hit).toBe(1.4)
})

test('packet colours: out = lighten .35, in = violet mixed', () => {
  const c = makePacketColors()
  packetColors([100, 100, 100], c)
  expect(c.out[0]).toBeCloseTo(100 + 155 * 0.35, 6)
  const l = 100 + 155 * 0.2
  expect(c.inn[0]).toBeCloseTo((l + 200) / 2, 6)
  expect(c.inn[2]).toBeCloseTo((l + 255) / 2, 6)
})
