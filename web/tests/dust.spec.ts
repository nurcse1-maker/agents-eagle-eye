import { expect, test } from 'bun:test'
import { seeded } from '../shared/rng'
import {
  D_AGE,
  D_CLS,
  D_VX,
  D_VY,
  D_VZ,
  D_X,
  D_Y,
  D_Z,
  DUST_MAX,
  DUST_MIN,
  DUST_STRIDE,
  DustSim,
  GM_CENTER,
  dustCountFor,
} from '../three/dust-sim'
import type { DustEnv } from '../three/dust-sim'

const mkEnv = (over: Partial<DustEnv> = {}): DustEnv => ({
  cx: 0,
  cy: 0,
  cz: 0,
  R: 135,
  agents: [],
  ptrMass: 0,
  px: 0,
  py: 0,
  pz: 0,
  motion: 1,
  onConsume: () => {},
  ...over,
})

test('dustCountFor: 560 per design area, reduced 0.4, clamped 180..900', () => {
  expect(dustCountFor(1024, 1536, false)).toBe(560)
  expect(dustCountFor(1024, 1536, true)).toBe(224)
  expect(dustCountFor(100, 100, false)).toBe(DUST_MIN)
  expect(dustCountFor(4000, 4000, false)).toBe(DUST_MAX)
})

test('setViewport rebuilds only when the wanted count differs by more than 25%', () => {
  const sim = new DustSim(seeded(1))
  expect(sim.setViewport(1024, 1536, false, 135, 1)).toBe(true)
  expect(sim.count).toBe(560)
  expect(sim.setViewport(1100, 1536, false, 135, 1)).toBe(false) // 7% more
  expect(sim.count).toBe(560)
  expect(sim.setViewport(1500, 1536, false, 135, 1)).toBe(true) // 46% more
  expect(sim.count).toBe(dustCountFor(1500, 1536, false))
})

test('initial orbit: tangential in the XZ disc, speed sqrt(GM/d) * [0.45, 1.05], about 88% prograde', () => {
  const sim = new DustSim(seeded(3))
  sim.setViewport(1024, 1536, false, 135, 1)
  const a = sim.data
  let pro = 0
  for (let i = 0; i < sim.count; i++) {
    const o = i * DUST_STRIDE
    const x = a[o + D_X]
    const y = a[o + D_Y]
    const z = a[o + D_Z]
    const d = Math.hypot(x, y, z) + 1
    const v = Math.hypot(a[o + D_VX], a[o + D_VZ]) // the orbit lies in the XZ disc
    const ratio = v / Math.sqrt(GM_CENTER / d)
    expect(ratio).toBeGreaterThan(0.44)
    expect(ratio).toBeLessThan(1.06)
    if (x * a[o + D_VZ] - z * a[o + D_VX] > 0) pro++
    expect(Math.abs(y)).toBeLessThan(150) // disc thickness is along Y
    expect(a[o + D_AGE]).toBe(5) // initial particles are already faded in
  }
  expect(pro / sim.count).toBeGreaterThan(0.82)
  expect(pro / sim.count).toBeLessThan(0.94)
})

test('motion scales the initial speed', () => {
  const full = new DustSim(seeded(5))
  const calm = new DustSim(seeded(5))
  full.setViewport(1024, 1536, false, 135, 1)
  calm.setViewport(1024, 1536, false, 135, 0.35)
  const sp = (s: DustSim) => {
    let t = 0
    for (let i = 0; i < s.count; i++) t += Math.hypot(s.data[i * DUST_STRIDE + D_VX], s.data[i * DUST_STRIDE + D_VZ])
    return t
  }
  expect(sp(calm) / sp(full)).toBeCloseTo(0.35, 2)
})

test('a particle inside 0.72 R^2 is consumed and respawned with the same class', () => {
  const sim = new DustSim(seeded(9))
  sim.setViewport(1024, 1536, false, 135, 1)
  const o = 0
  sim.data[o + D_X] = 50
  sim.data[o + D_Y] = 30
  sim.data[o + D_Z] = 10
  sim.data[o + D_CLS] = 4
  let eaten = 0
  let cls = -1
  sim.step(0.033, mkEnv({ onConsume: (_x, _y, _z, c) => { if (eaten++ === 0) cls = c } }))
  expect(eaten).toBeGreaterThanOrEqual(1)
  expect(cls).toBe(4)
  expect(sim.data[o + D_CLS]).toBe(4)
  expect(sim.data[o + D_AGE]).toBe(0) // new life fades in again
  expect(Math.hypot(sim.data[o + D_X], sim.data[o + D_Z])).toBeGreaterThan(135 * 1.5)
})

test('gravity bends a resting particle toward the orb and a speed cap of 240 holds', () => {
  const sim = new DustSim(seeded(11))
  sim.setViewport(1024, 1536, false, 135, 1)
  const o = 0
  sim.data.set([300, 0, 0, 0, 0, 0], o)
  sim.step(0.033, mkEnv())
  expect(sim.data[o + D_VX]).toBeLessThan(0)
  sim.data.set([300, 0, 0, 5000, 0, 0], o)
  sim.step(0.001, mkEnv())
  expect(Math.hypot(sim.data[o + D_VX], sim.data[o + D_VY], sim.data[o + D_VZ])).toBeLessThanOrEqual(240.001)
})

test('disc spring pulls toward the XZ plane (Y up)', () => {
  const sim = new DustSim(seeded(13))
  sim.setViewport(1024, 1536, false, 135, 1)
  const o = 0
  sim.data.set([600, 100, 0, 0, 0, 0], o)
  sim.step(0.033, mkEnv())
  expect(sim.data[o + D_VY]).toBeLessThan(0)
  // a particle in the plane is not pushed out of it
  sim.data.set([600, 0, 0, 0, 0, 0], o)
  sim.step(0.033, mkEnv())
  expect(Math.abs(sim.data[o + D_VY])).toBeLessThan(1e-6)
})

test('shockwave pushes outward within 520 and ignores the rest', () => {
  const sim = new DustSim(seeded(15))
  sim.setViewport(1024, 1536, false, 135, 1)
  sim.data.set([100, 0, 0, 0, 0, 0], 0)
  sim.data.set([900, 0, 0, 0, 0, 0], DUST_STRIDE)
  sim.shockwave(0, 0, 0, 60, 1)
  // strength / (1 + d/90), d = 101
  expect(sim.data[D_VX]).toBeCloseTo((60 / (1 + 101 / 90)) * (100 / 101), 3)
  expect(sim.data[DUST_STRIDE + D_VX]).toBe(0)
})

test('pointer well attracts, more when pressed', () => {
  const accel = (mass: number) => {
    const sim = new DustSim(seeded(17))
    sim.setViewport(1024, 1536, false, 135, 1)
    sim.data.set([0, 400, 0, 0, 0, 0], 0)
    sim.step(0.001, mkEnv({ ptrMass: mass, px: 200, py: 400, pz: 0 }))
    return sim.data[D_VX]
  }
  const rest = accel(0)
  const soft = accel(26000)
  const hard = accel(150000)
  expect(soft).toBeGreaterThan(rest)
  expect(hard).toBeGreaterThan(soft)
})

test('out of bounds respawns inside the field', () => {
  const sim = new DustSim(seeded(19))
  sim.setViewport(1024, 1536, false, 135, 1)
  sim.data.set([5000, 0, 0, 0, 0, 0], 0)
  sim.step(0.033, mkEnv())
  expect(Math.abs(sim.data[D_X])).toBeLessThan(5000)
  expect(sim.data[D_AGE]).toBe(0)
})
