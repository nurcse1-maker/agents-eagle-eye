import { expect, test } from 'bun:test'
import { discFitDistance, ELEV_MAX, ELEV_MIN, FOV, HOME_ELEV, HOME_PHI, HOME_THETA, PHI_MAX, PHI_MIN, REFIT_IDLE } from '../three/camera'

const DEG = Math.PI / 180

/** Brute force: smallest distance at which every swept point (plus pads) is inside the frustum. */
const brute = (pts: { x: number; y: number; z: number }[], phi: number, aspect: number, padH: number, padV: number) => {
  const tanV = Math.tan((FOV * Math.PI) / 360)
  const tanH = tanV * aspect
  let need = 0
  for (const p of pts) {
    const rho = Math.hypot(p.x, p.z)
    for (let i = 0; i < 3600; i++) {
      const a = (i / 3600) * Math.PI * 2
      const x = rho * Math.cos(a)
      const y = p.y * Math.sin(phi) - rho * Math.cos(phi) * Math.sin(a)
      const off = p.y * Math.cos(phi) + rho * Math.sin(phi) * Math.sin(a) // depth = d - off
      need = Math.max(need, off + (Math.abs(x) + padH) / tanH, off + (Math.abs(y) + padV) / tanV)
    }
  }
  return need
}

test('home view looks down on the disc at about 32 degrees with a slight yaw', () => {
  expect(HOME_ELEV).toBeGreaterThanOrEqual(30)
  expect(HOME_ELEV).toBeLessThanOrEqual(35)
  expect(HOME_PHI).toBeCloseTo((90 - HOME_ELEV) * DEG)
  expect(Math.abs(HOME_THETA)).toBeGreaterThan(0.05)
  expect(Math.abs(HOME_THETA)).toBeLessThan(0.6)
  expect(FOV).toBeGreaterThanOrEqual(35)
  expect(FOV).toBeLessThanOrEqual(40)
})

test('elevation is clamped to [-10, 80] degrees', () => {
  expect(ELEV_MIN).toBe(-10)
  expect(ELEV_MAX).toBe(80)
  expect(PHI_MIN).toBeCloseTo(10 * DEG)
  expect(PHI_MAX).toBeCloseTo(100 * DEG)
})

test('the refit waits 8 s of no input', () => {
  expect(REFIT_IDLE).toBe(8)
})

test('discFitDistance matches a brute-force sweep', () => {
  const pts = [
    { x: 600, y: 40, z: 0 },
    { x: -200, y: -55, z: 520 },
    { x: 100, y: 10, z: -750 },
  ]
  for (const aspect of [0.6, 1, 1.8]) {
    for (const phi of [HOME_PHI, 0.3, 1.5]) {
      const d = discFitDistance(pts, phi, aspect, 200, 140)
      expect(d / brute(pts, phi, aspect, 200, 140)).toBeCloseTo(1, 3)
    }
  }
})

test('discFitDistance grows with the disc and the pads, and wide screens need less distance', () => {
  const ring = (r: number) => [{ x: r, y: 0, z: 0 }]
  const a = discFitDistance(ring(400), HOME_PHI, 1.6, 200, 140)
  const b = discFitDistance(ring(750), HOME_PHI, 1.6, 200, 140)
  expect(b).toBeGreaterThan(a)
  expect(discFitDistance(ring(750), HOME_PHI, 0.8, 300, 140)).toBeGreaterThan(discFitDistance(ring(750), HOME_PHI, 0.8, 200, 140))
  expect(discFitDistance(ring(750), HOME_PHI, 1.6, 200, 240)).toBeGreaterThan(b)
  expect(discFitDistance(ring(750), HOME_PHI, 0.6, 200, 140)).toBeGreaterThan(b)
  expect(discFitDistance([], HOME_PHI, 1.6, 200, 140)).toBe(0)
})
