import { expect, test } from 'bun:test'
import { Spring, clamp, damp, easeOutCubic, lerp } from '../three/springs'

test('damp approaches the target by 1-exp(-lambda*dt)', () => {
  expect(damp(0, 1, 2, 0.5)).toBeCloseTo(1 - Math.exp(-1), 12)
  expect(damp(10, 10, 5, 1)).toBe(10)
  expect(damp(0, 1, 0, 1)).toBe(0)
  expect(damp(2, 0, 3, 0.2)).toBeCloseTo(2 * Math.exp(-0.6), 12)
})

test('easeOutCubic, clamp, lerp', () => {
  expect(easeOutCubic(0)).toBe(0)
  expect(easeOutCubic(1)).toBe(1)
  expect(easeOutCubic(0.5)).toBeCloseTo(0.875, 12)
  expect(clamp(2)).toBe(1)
  expect(clamp(-1)).toBe(0)
  expect(clamp(5, 2, 4)).toBe(4)
  expect(lerp(2, 4, 0.25)).toBe(2.5)
})

test('Spring: one 8 ms sub-step, hand computed (k170 c14)', () => {
  const s = new Spring(0, 1)
  // v = (170*1 - 14*0)*0.008 = 1.36 ; x = 1.36*0.008
  expect(s.step(0.008)).toBeCloseTo(0.01088, 12)
  expect(s.v).toBeCloseTo(1.36, 12)
})

test('Spring: dt 16 ms is two 8 ms sub-steps', () => {
  const s = new Spring(0, 1)
  const x = s.step(0.016)
  // second sub-step: v = 1.36 + (170*(1-0.01088) - 14*1.36)*0.008 = 2.5528832 ; x = 0.01088 + 2.5528832*0.008
  expect(s.v).toBeCloseTo(2.5528832, 9)
  expect(x).toBeCloseTo(0.0313030656, 9)
  const t = new Spring(0, 1)
  t.step(0.008)
  t.step(0.008)
  expect(t.x).toBeCloseTo(x, 12)
})

test('Spring: custom k and c, and the signature (x, target, k, c)', () => {
  const s = new Spring(2, 0, 150, 11)
  expect([s.x, s.target, s.k, s.c, s.v]).toEqual([2, 0, 150, 11, 0])
  s.step(0.008)
  // v = (150*(0-2))*0.008 = -2.4 ; x = 2 - 2.4*0.008
  expect(s.x).toBeCloseTo(2 - 0.0192, 12)
})

test('Spring settles on the target, overshoots when under-damped', () => {
  const s = new Spring(0, 1, 150, 11)
  let max = 0
  for (let i = 0; i < 400; i++) max = Math.max(max, s.step(1 / 60))
  expect(max).toBeGreaterThan(1)
  expect(s.x).toBeCloseTo(1, 3)
  expect(Math.abs(s.v)).toBeLessThan(1e-3)
})

test('Spring is stable on a long frame (sub-stepping)', () => {
  const s = new Spring(0, 1, 220, 16)
  for (let i = 0; i < 20; i++) s.step(0.25)
  expect(Number.isFinite(s.x)).toBe(true)
  expect(s.x).toBeCloseTo(1, 3)
})
