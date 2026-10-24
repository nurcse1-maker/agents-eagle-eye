import { expect, test } from 'bun:test'
import { discOrbitPos, HALO_CAP, HALO_INNER, haloAlpha, MAIN_GLOW_CAP, mainGlowAlpha, softClip, orbBeat, orbBpm, orbitPos, ORB_YAW_SPEED, orbScale, satelliteSpeed, tiltDisc } from '../three/layers/orb'

test('bpm rises with active agents', () => {
  expect(orbBpm(0)).toBeCloseTo(0.55)
  expect(orbBpm(5)).toBeCloseTo(0.75)
})

test('beat is a sharp pulse in 0..1', () => {
  expect(orbBeat(0, 1)).toBe(0)
  expect(orbBeat(0.25, 1)).toBeCloseTo(1)
  expect(orbBeat(0.75, 1)).toBe(0)
  expect(orbBeat(0.125, 1)).toBeLessThan(0.1)
})

test('satellite speeds match 2D', () => {
  expect(satelliteSpeed(0)).toBeCloseTo(0.55)
  expect(satelliteSpeed(1)).toBeCloseTo(0.55 / Math.pow(1.35, 1.5))
  expect(satelliteSpeed(3)).toBeLessThan(satelliteSpeed(2))
})

test('orb scale', () => {
  expect(orbScale(1, 0, 0, 0)).toBe(1)
  expect(orbScale(0.5, 1, 1, 1)).toBeCloseTo(0.5 * (1 + 0.012 + 0.02 + 0.03))
})

test('orbitPos keeps the radius and is planar at zero inclination', () => {
  const o = { x: 0, y: 0, z: 0 }
  for (const inc of [0, 0.4, -0.9]) {
    for (let a = 0; a < 6.3; a += 0.7) {
      orbitPos(o, a, 100, inc, 1.3)
      expect(Math.hypot(o.x, o.y, o.z)).toBeCloseTo(100, 6)
    }
  }
  orbitPos(o, 0, 100, 0, 0)
  expect(o.x).toBeCloseTo(100)
  expect(o.y).toBeCloseTo(0)
  expect(o.z).toBeCloseTo(0)
})

test('discOrbitPos keeps the radius and lies on the XZ disc at zero inclination', () => {
  const o = { x: 0, y: 0, z: 0 }
  for (const inc of [0, 0.12, -0.3]) {
    for (let a = 0; a < 6.3; a += 0.7) {
      discOrbitPos(o, a, 100, inc, 0.9)
      expect(Math.hypot(o.x, o.y, o.z)).toBeCloseTo(100, 6)
      // a small inclination keeps the orbit near the disc: |y| <= rad * sin(inc)
      expect(Math.abs(o.y)).toBeLessThanOrEqual(100 * Math.abs(Math.sin(inc)) + 1e-9)
    }
  }
  discOrbitPos(o, Math.PI / 2, 100, 0, 0)
  expect(o.x).toBeCloseTo(0)
  expect(o.y).toBeCloseTo(0)
  expect(o.z).toBeCloseTo(100)
})

test('tiltDisc rotates about the node axis: points on the axis stay put', () => {
  const o = { x: 0, y: 0, z: 0 }
  const node = 1.1
  tiltDisc(o, Math.cos(node) * 50, Math.sin(node) * 50, 0.4, node)
  expect(o.x).toBeCloseTo(Math.cos(node) * 50)
  expect(o.y).toBeCloseTo(0)
  expect(o.z).toBeCloseTo(Math.sin(node) * 50)
})

test('surface yaw is slow and scales with motion', () => {
  expect(ORB_YAW_SPEED).toBeCloseTo(0.05)
})

test('softClip is ~linear for small x and saturates at the cap', () => {
  expect(softClip(0)).toBe(0)
  expect(softClip(0.01, 1)).toBeCloseTo(0.01, 3)
  expect(softClip(100, 0.6)).toBeCloseTo(0.6, 6)
  expect(softClip(0.5, 1)).toBeLessThan(0.5)
  expect(softClip(2, 1)).toBeGreaterThan(softClip(1, 1))
})

test('halo and main glow alpha never exceed their caps, however hard the orb is fed', () => {
  for (const beat of [0, 0.5, 1]) {
    for (const feed of [0, 0.5, 1, 5]) {
      expect(haloAlpha(beat, feed)).toBeLessThan(HALO_CAP)
      expect(mainGlowAlpha(beat, feed)).toBeLessThan(MAIN_GLOW_CAP)
    }
  }
})

test('feed and beat still brighten the glow monotonically, and it recovers when they decay', () => {
  expect(haloAlpha(1, 1)).toBeGreaterThan(haloAlpha(0, 0))
  expect(haloAlpha(0, 1)).toBeGreaterThan(haloAlpha(0, 0.5))
  expect(mainGlowAlpha(0, 1)).toBeGreaterThan(mainGlowAlpha(0, 0))
  // resting level stays close to the 2D look (0.38 / 0.36 before the clip)
  expect(haloAlpha(0, 0)).toBeGreaterThan(0.28)
  expect(haloAlpha(0, 0)).toBeLessThan(0.38)
  expect(HALO_INNER).toBeLessThan(0.6)
})
