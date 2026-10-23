import { expect, test } from 'bun:test'
import { seeded } from '../shared/rng'
import { FLARE_LUT, FLARE_MAX, FLARE_RAILS, FlareSim, FP_STRIDE, P_LANE, P_U, flareCol } from '../three/flare-sim'
import type { FlareEnv } from '../three/flare-sim'

const mkEnv = (over: Partial<FlareEnv> = {}): FlareEnv => ({
  R: 135,
  motion: 1,
  active: 4,
  spawn: 1,
  feed: 0,
  sparkRoom: true,
  onSpark: () => {},
  ...over,
})

const run = (sim: FlareSim, secs: number, env: FlareEnv) => {
  for (let t = 0; t < secs; t += 0.033) sim.step(0.033, env)
}

test('palette: 65 entries, endpoints are the 2D hot root colour', () => {
  expect(FLARE_LUT.length).toBe(65)
  expect(flareCol(0)).toEqual([255, 205, 255])
  expect(flareCol(1)).toEqual([255, 215, 255])
  expect(flareCol(-3)).toEqual(flareCol(0))
  expect(flareCol(0.38)[0]).toBeCloseTo(168, -1)
  expect(FLARE_RAILS.length).toBe(6)
})

test('intensity: rises with active agents, rests at 0.1 without, scaled by orb spawn', () => {
  const on = new FlareSim(seeded(2))
  run(on, 8, mkEnv({ active: 6 }))
  expect(on.kk).toBeGreaterThan(0.9)
  const off = new FlareSim(seeded(2))
  run(off, 8, mkEnv({ active: 0 }))
  expect(off.kk).toBeGreaterThan(0.07)
  expect(off.kk).toBeLessThan(0.13)
  const hidden = new FlareSim(seeded(2))
  run(hidden, 8, mkEnv({ spawn: 0 }))
  expect(hidden.kk).toBe(0)
  const fed = new FlareSim(seeded(2))
  run(fed, 8, mkEnv({ spawn: 0, feed: 0.4 }))
  expect(fed.kk).toBeCloseTo(0.2, 6)
})

test('geometry: the two feet sit on the rim and sA < sB', () => {
  const sim = new FlareSim(seeded(4))
  const env = mkEnv()
  for (let i = 0; i < 400; i++) {
    sim.step(0.033, env)
    if (i > 60) {
      expect(sim.sB).toBeGreaterThan(sim.sA)
      expect(Math.hypot(sim.fax, sim.fay)).toBeGreaterThan(135 * 0.8)
      expect(Math.hypot(sim.fax, sim.fay)).toBeLessThan(135 * 1.25)
      expect(Math.hypot(sim.fbx, sim.fby)).toBeGreaterThan(135 * 0.8)
      expect(Math.hypot(sim.fbx, sim.fby)).toBeLessThan(135 * 1.25)
    }
  }
})

test('wander: the shape retargets every 2.4-5.5 flare seconds', () => {
  const sim = new FlareSim(seeded(6))
  const env = mkEnv()
  sim.step(0.033, env)
  const gap = sim.next - sim.ft
  expect(gap).toBeGreaterThanOrEqual(2.4)
  expect(gap).toBeLessThanOrEqual(5.5)
  let changes = 0
  let last = sim.next
  for (let i = 0; i < 6000; i++) {
    sim.step(0.033, env)
    if (sim.next !== last) {
      const d = sim.next - sim.ft
      expect(d).toBeGreaterThan(2.3)
      expect(d).toBeLessThan(5.6)
      last = sim.next
      changes++
    }
  }
  expect(changes).toBeGreaterThan(10)
  expect(sim.sc).toBeGreaterThan(0.09)
  expect(sim.sc).toBeLessThan(0.36)
})

test('flare clock runs at 0.4 of world time', () => {
  const sim = new FlareSim(seeded(8))
  run(sim, 10, mkEnv())
  expect(sim.ft).toBeCloseTo(10 * 0.4, 1)
})

test('particles: capped at 90, u advances to 1 and they are swap-removed, lanes within +-1.1', () => {
  const sim = new FlareSim(seeded(10))
  const env = mkEnv()
  let peak = 0
  for (let i = 0; i < 3000; i++) {
    sim.step(0.033, env)
    peak = Math.max(peak, sim.count)
    expect(sim.count).toBeLessThanOrEqual(FLARE_MAX)
    for (let k = 0; k < sim.count; k++) {
      const u = sim.particles[k * FP_STRIDE + P_U]
      const lane = sim.particles[k * FP_STRIDE + P_LANE]
      expect(u).toBeGreaterThanOrEqual(0)
      expect(u).toBeLessThan(1)
      expect(Math.abs(lane)).toBeLessThanOrEqual(1.1000001)
    }
  }
  expect(peak).toBeGreaterThan(5)
})

test('reduced motion flattens the tilt; no emission while dormant (kk 0)', () => {
  const full = new FlareSim(seeded(12))
  const calm = new FlareSim(seeded(12))
  let nf = 0
  let nc = 0
  for (let i = 0; i < 1500; i++) {
    full.step(0.033, mkEnv())
    calm.step(0.033, mkEnv({ motion: 0.35 }))
    nf += full.count
    nc += calm.count
  }
  expect(nf).toBeGreaterThan(0)
  expect(nc).toBeGreaterThan(0)
  const dead = new FlareSim(seeded(12))
  run(dead, 20, mkEnv({ spawn: 0 }))
  expect(dead.count).toBe(0)
  expect(Math.abs(calm.tilt)).toBeLessThan(0.36)
})

test('sparks: emitted along the loop only while the pool has room', () => {
  const sim = new FlareSim(seeded(14))
  let n = 0
  run(sim, 30, mkEnv({ onSpark: () => n++ }))
  expect(n).toBeGreaterThan(10)
  let m = 0
  const sim2 = new FlareSim(seeded(14))
  run(sim2, 30, mkEnv({ sparkRoom: false, onSpark: () => m++ }))
  expect(m).toBe(0)
})

test('tilt stays below edge-on', () => {
  const sim = new FlareSim(seeded(16))
  let mx = 0
  for (let i = 0; i < 6000; i++) {
    sim.step(0.033, mkEnv())
    mx = Math.max(mx, Math.abs(sim.tilt))
  }
  expect(mx).toBeLessThan(1.0)
  expect(mx).toBeGreaterThan(0.4)
})
