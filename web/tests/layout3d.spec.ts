import { expect, test } from 'bun:test'
import { DEFAULT_AGENTS } from '../shared/defaults'
import { DESIGN_CX, DESIGN_CY, ringPlacement } from '../shared/ring'
import { DISC_BANDS, DISC_SQUASH, HEIGHT_RANGE, bandFor, computeLayout, designToWorld, discFitRadius, discShape, fitRadius, heightFor, homeFor, ringCoords } from '../three/layout3d'

test('computeLayout: design-sized viewport has no stretch', () => {
  const l = computeLayout(1024, 1536)
  expect(l.S).toBe(1)
  expect(l.LW).toBe(1024)
  expect(l.LH).toBe(1536)
  expect(l.stretchX).toBe(1)
  expect(l.stretchY).toBe(1)
})

test('computeLayout: landscape stretches x, capped at 1.7', () => {
  const l = computeLayout(1920, 1080) // S = 1080/1536
  expect(l.S).toBeCloseTo(1080 / 1536, 12)
  expect(l.LH).toBeCloseTo(1536, 9)
  expect(l.LW).toBeCloseTo(1920 / (1080 / 1536), 9)
  expect(l.stretchX).toBe(1.7) // LW/1024 = 2.67 -> capped
  expect(l.stretchY).toBe(1)
  const mid = computeLayout(1000, 1000)
  expect(mid.stretchX).toBeCloseTo(mid.LW / 1024, 12)
  expect(mid.stretchX).toBeGreaterThan(1)
  expect(mid.stretchX).toBeLessThan(1.7)
})

test('designToWorld: orb centre is the origin, y is flipped', () => {
  const l = computeLayout(1024, 1536)
  expect(designToWorld(DESIGN_CX, DESIGN_CY, l)).toEqual({ x: 0, y: -0 })
  const top = designToWorld(DESIGN_CX, 158, l)
  expect(top.y).toBeCloseTo(DESIGN_CY - 158, 12) // above the orb -> positive Y
  const left = designToWorld(198, DESIGN_CY, l)
  expect(left.x).toBeCloseTo(198 - DESIGN_CX, 12)
  const wide = computeLayout(1920, 1080)
  expect(designToWorld(DESIGN_CX + 100, DESIGN_CY, wide).x).toBeCloseTo(170, 9)
})

test('heightFor is deterministic, bounded and spreads similar ids', () => {
  expect(heightFor('planner')).toBe(heightFor('planner'))
  const hs = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6'].map(heightFor)
  for (const h of hs) {
    expect(h).toBeGreaterThanOrEqual(-HEIGHT_RANGE)
    expect(h).toBeLessThan(HEIGHT_RANGE)
  }
  expect(new Set(hs).size).toBe(hs.length)
  expect(Math.max(...hs) - Math.min(...hs)).toBeGreaterThan(30)
})

test('bandFor: ringPlacement factors map to inner / middle bands, the 2D outer rim to the outer band', () => {
  expect(bandFor(0.8)).toBe(0) // n > 8, odd slots
  expect(bandFor(0.94)).toBe(1) // n <= 8
  expect(bandFor(1)).toBe(1) // n > 8, even slots
  expect(bandFor(1.2)).toBe(2)
  // the 13 hand placed default agents use all three bands
  const used = new Set(DEFAULT_AGENTS.map(s => bandFor(ringCoords(s.x, s.y).ring)))
  expect(used.size).toBe(3)
})

test('homeFor puts agents on the XZ disc, keeping the 2D angle and order', () => {
  const l = computeLayout(1024, 1536)
  const k = discShape(l)
  const spec = DEFAULT_AGENTS[1]
  const h = homeFor(spec, l, 1, 13)
  const { angle, ring } = ringCoords(spec.x, spec.y)
  const R = DISC_BANDS[bandFor(ring)]
  expect(h.x).toBeCloseTo(Math.cos(angle) * R * k.kx, 9)
  expect(h.z).toBeCloseTo(Math.sin(angle) * R * k.kz, 9)
  expect(h.y).toBe(heightFor(spec.id))
  // the elliptical radius is exactly the band radius: agents ride their orbit guide
  expect(Math.hypot(h.x / k.kx, h.z / k.kz)).toBeCloseTo(R, 9)
  // top of the 2D picture -> far side of the disc (negative z), left stays left
  const planner = homeFor(DEFAULT_AGENTS[0], l, 0, 13)
  expect(planner.z).toBeLessThan(-300)
  const left = homeFor({ ...spec, x: 100, y: DESIGN_CY }, l, 0, 1)
  expect(left.x).toBeLessThan(0)
  expect(Math.abs(left.z)).toBeLessThan(1e-9)
  // the ring slot fallback keeps the ring angle
  const bare = { ...spec, x: NaN, y: NaN }
  const slot = ringPlacement(1, 13, spec.status)
  const g = homeFor(bare, l, 1, 13)
  const sa = ringCoords(slot.x, slot.y)
  expect(Math.atan2(g.z / k.kz, g.x / k.kx)).toBeCloseTo(sa.angle, 9)
  // ring order: live rosters keep the clockwise 2D order as increasing disc angle
  const n = 6
  let prev = -Infinity
  for (let i = 0; i < n; i++) {
    const p = homeFor({ ...spec, id: 'a' + i, x: NaN, y: NaN }, l, i, n)
    let a = Math.atan2(p.z / k.kz, p.x / k.kx)
    if (i > 0 && a < prev) a += Math.PI * 2
    expect(a).toBeGreaterThan(prev)
    prev = a
  }
})

test('discShape: wider viewports get a wider disc, z is squashed', () => {
  const tall = discShape(computeLayout(1024, 1536))
  const wide = discShape(computeLayout(1920, 1080))
  expect(wide.kx).toBeGreaterThan(tall.kx)
  expect(tall.kz).toBeCloseTo(tall.kx * DISC_SQUASH, 12)
  expect(tall.kx).toBeGreaterThanOrEqual(0.8)
  expect(wide.kx).toBeLessThanOrEqual(1.1)
})

test('discFitRadius frames the outer guide: wider screens need less distance', () => {
  const wide = discFitRadius(computeLayout(1920, 1080), 38, 32)
  const tall = discFitRadius(computeLayout(1080, 1920), 38, 32)
  expect(wide).toBeGreaterThan(1000)
  expect(tall).toBeGreaterThan(wide)
})

test('ringPlacement matches the old bridge toSpecs maths', () => {
  const a = ringPlacement(0, 5, 'running')
  const ang = (-110 * Math.PI) / 180
  expect(a.x).toBeCloseTo(512 + Math.cos(ang) * 380 * 0.94, 9)
  expect(a.y).toBeCloseTo(755 + Math.sin(ang) * 580 * 0.94, 9)
  expect(a.radius).toBe(60)
  expect(ringPlacement(1, 5, 'stopped').radius).toBe(45)
  expect(ringPlacement(1, 5, 'offline').radius).toBe(45)
  // more than 8 agents alternate between two rings
  const big = ringPlacement(1, 12, 'running')
  const ang1 = (-110 * Math.PI) / 180 + (1 / 12) * Math.PI * 2
  expect(big.y).toBeCloseTo(755 + Math.sin(ang1) * 580 * 0.8, 9)
  // x is clamped to the canvas
  for (let i = 0; i < 20; i++) {
    const p = ringPlacement(i, 20, 'running')
    expect(p.x).toBeGreaterThanOrEqual(100)
    expect(p.x).toBeLessThanOrEqual(924)
  }
})

test('fitRadius frames the design height', () => {
  const l = computeLayout(1024, 1536)
  const r = fitRadius(l, 38, 1)
  expect(2 * r * Math.tan((38 * Math.PI) / 360)).toBeCloseTo(1536, 6)
})
