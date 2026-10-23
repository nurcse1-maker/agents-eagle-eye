import { expect, test } from 'bun:test'
import { DEFAULT_AGENTS } from '../shared/defaults'
import { seeded } from '../shared/rng'
import { makeAgentState } from '../three/world'
import type { AgentState } from '../three/world'
import {
  adoptAgent,
  agentRadius,
  arcSweep,
  exitFade,
  exitScale,
  hitRadius,
  hoverTarget,
  hash01,
  makeDeco,
  makeSpin,
  quatRotate,
  ringBasis,
  SPIN_RATE,
  spinFrame,
  stepSpin,
  TILT_MAX,
  TILT_MIN,
  makePointerRay,
  pickNearest,
  planeBasis,
  rayOnPlane,
  stepAppearance,
  stepDeco,
  stepPhysics,
} from '../three/nodes-sim'

const mk = (i = 0, status?: string): AgentState => {
  const spec = { ...DEFAULT_AGENTS[i], ...(status ? { status: status as never } : {}) }
  const a = makeAgentState(spec, i, seeded(7), 0.5)
  adoptAgent(a)
  return a
}

const run = (fn: (dt: number) => void, seconds: number, dt = 1 / 60) => {
  for (let t = 0; t < seconds; t += dt) fn(dt)
}

test('agentRadius matches the 2D radius table', () => {
  expect(agentRadius(100, 1, 0)).toBeCloseTo(110, 9) // running 1.10
  expect(agentRadius(100, 0.3, 1)).toBeCloseTo(41.9, 0) // completed ~0.42
  expect(agentRadius(100, 0.04, 1)).toBeCloseTo(36.2, 0) // stopped ~0.36
})

test('hover target: drag 1.12, hover 1.07, rest 1', () => {
  expect(hoverTarget(true, true)).toBe(1.12)
  expect(hoverTarget(false, true)).toBe(1.07)
  expect(hoverTarget(false, false)).toBe(1)
})

test('adoptAgent copies the shared status colour arrays', () => {
  const a = makeAgentState({ ...DEFAULT_AGENTS[0] }, 0, seeded(7), 0)
  const shared = a.dot
  adoptAgent(a)
  expect(a.dot).not.toBe(shared)
  expect(a.dot).toEqual(shared)
})

test('appearance dampers converge to the status of a finished agent', () => {
  const a = mk(0, 'completed')
  a.power = 1
  a.rest = 0
  run(dt => stepAppearance(a, dt, 10, false), 4)
  expect(a.power).toBeCloseTo(0.3, 2)
  expect(a.rest).toBeCloseTo(1, 2)
  expect(a.r).toBeCloseTo(agentRadius(a.baseR, 0.3, 1), 1)
  expect(a.spawned).toBe(true)
  expect(a.introCount).toBe(1)
})

test('flash decays at lambda 2.2', () => {
  const a = mk()
  a.flash = 1
  stepAppearance(a, 1, 0, false)
  expect(a.flash).toBeCloseTo(Math.exp(-2.2), 6)
})

test('status flip mid-way never snaps: radius changes continuously', () => {
  const a = mk(0, 'running')
  run(dt => stepAppearance(a, dt, 10, false), 2)
  const before = a.r
  a.spec.status = 'completed'
  stepAppearance(a, 1 / 60, 10, false)
  expect(Math.abs(a.r - before)).toBeLessThan(5)
})

test('spawn spring overshoots 1', () => {
  const a = mk()
  let max = 0
  run(dt => {
    stepAppearance(a, dt, 5, false)
    max = Math.max(max, a.spawn.x)
  }, 2)
  expect(max).toBeGreaterThan(1.01)
})

const noPtr = { motion: 1, ray: null, drag: null }

test('physics: spring settles near the floating home', () => {
  const a = mk()
  a.hx = 200
  a.hy = -100
  a.hz = 50
  a.r = 50
  run(dt => stepPhysics(a, [a], dt, 3, noPtr), 6)
  expect(Math.abs(a.x - 200)).toBeLessThan(10)
  expect(Math.abs(a.y + 100)).toBeLessThan(12)
  expect(Math.abs(a.z - 50)).toBeLessThan(10)
})

test('physics: two overlapping agents are pushed apart in 3D', () => {
  const a = mk(0)
  const b = mk(1)
  a.hx = b.hx = 0
  a.hy = b.hy = 0
  a.hz = b.hz = 0
  a.x = 5
  b.x = -5
  a.y = b.y = a.z = b.z = 0
  a.r = b.r = 50
  const all = [a, b]
  run(dt => {
    stepPhysics(a, all, dt, 0, noPtr)
    stepPhysics(b, all, dt, 0, noPtr)
  }, 1)
  expect(Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z)).toBeGreaterThan(30)
})

test('physics: a dragged agent follows the target with the stiff spring', () => {
  const a = mk()
  a.dragging = true
  a.grabX = a.grabY = a.grabZ = 0
  const drag = { x: 120, y: 40, z: -30 }
  run(dt => stepPhysics(a, [a], dt, 0, { motion: 1, ray: null, drag }), 1.5)
  expect(a.x).toBeCloseTo(120, 0)
  expect(a.y).toBeCloseTo(40, 0)
  expect(a.z).toBeCloseTo(-30, 0)
})

test('pointer gravity pulls toward the cursor and leans', () => {
  const a = mk()
  a.power = 1
  a.x = a.y = a.z = 0
  a.hx = a.hy = a.hz = 0
  const ray = makePointerRay()
  ray.active = true
  // camera at +z looking down -z; pointer 100 units to the right at the agent plane
  ray.ox = 100
  ray.oy = 0
  ray.oz = 1000
  ray.dx = 0
  ray.dy = 0
  ray.dz = -1
  ray.nx = 0
  ray.ny = 0
  ray.nz = 1
  run(dt => stepPhysics(a, [a], dt, 0, { motion: 0, ray, drag: null }), 0.5)
  expect(a.x).toBeGreaterThan(5)
  expect(a.lean[0]).toBeLessThan(0)
})

test('rayOnPlane: intersection, parallel and behind', () => {
  const r = makePointerRay()
  r.ox = 0
  r.oy = 0
  r.oz = 100
  r.dx = 0
  r.dy = 0
  r.dz = -1
  const o = { x: 0, y: 0, z: 0 }
  expect(rayOnPlane(r, 0, 0, 0, o)).toBe(true)
  expect(o.z).toBeCloseTo(0, 9)
  expect(rayOnPlane(r, 0, 0, 500, o)).toBe(false) // behind the ray origin
  r.dz = 0
  r.dx = 1
  expect(rayOnPlane(r, 0, 0, 0, o)).toBe(false) // parallel
})

test('planeBasis is orthonormal and (0,0) faces the screen', () => {
  const o = new Float32Array(6)
  planeBasis(0.7, -1.2, o)
  const dot = o[0] * o[3] + o[1] * o[4] + o[2] * o[5]
  expect(dot).toBeCloseTo(0, 6)
  expect(Math.hypot(o[0], o[1], o[2])).toBeCloseTo(1, 6)
  expect(Math.hypot(o[3], o[4], o[5])).toBeCloseTo(1, 6)
  planeBasis(0, 0, o)
  expect(Array.from(o)).toEqual([1, 0, -0, 0, 1, 0])
})

test('decorations crossfade and the arc sweep follows the status', () => {
  const a = mk(0, 'running')
  a.power = 1
  const d = makeDeco()
  run(dt => stepDeco(d, a, dt), 2)
  expect(d.run).toBeGreaterThan(0.99)
  expect(arcSweep(d)).toBeCloseTo(0.62, 2)
  a.spec.status = 'thinking'
  run(dt => stepDeco(d, a, dt), 2)
  expect(d.think).toBeGreaterThan(0.99)
  expect(arcSweep(d)).toBeCloseTo(1.1, 2)
  // a waiting agent has dashes and no arcs
  a.spec.status = 'waiting'
  a.power = 0.62
  run(dt => stepDeco(d, a, dt), 2)
  expect(d.wait).toBeGreaterThan(0.99)
  expect(d.run + d.think).toBeLessThan(0.01)
})

test('pickNearest uses the nearest centre inside its threshold', () => {
  const sx = [100, 140]
  const sy = [100, 100]
  const thr = [30, 30]
  expect(pickNearest(2, sx, sy, thr, [1, 1], 125, 100)).toBe(1)
  expect(pickNearest(2, sx, sy, thr, [1, 1], 300, 300)).toBe(-1)
  expect(pickNearest(2, sx, sy, thr, [1, 0], 120, 100)).toBe(0)
  expect(hitRadius(10)).toBe(26)
  expect(hitRadius(100)).toBeCloseTo(124, 9)
})

test('exit animation shrinks to 0.85 and fades to 0', () => {
  expect(exitScale(0)).toBe(1)
  expect(exitScale(10)).toBeCloseTo(0.85, 9)
  expect(exitFade(0)).toBe(1)
  expect(exitFade(10)).toBe(0)
})

/* ── planet rotation (Addendum A.4) ── */

test('spin: tilt 15..25 deg, deterministic per id, distinct between ids', () => {
  const ids = DEFAULT_AGENTS.map(a => a.id)
  const tilts = ids.map(id => makeSpin(id, 'running').tilt * (180 / Math.PI))
  for (const t of tilts) {
    expect(t).toBeGreaterThanOrEqual(TILT_MIN)
    expect(t).toBeLessThanOrEqual(TILT_MAX)
  }
  expect(makeSpin(ids[0], 'idle')).toEqual(makeSpin(ids[0], 'idle'))
  expect(new Set(tilts.map(t => t.toFixed(3))).size).toBeGreaterThan(ids.length / 2)
  expect(hash01('abc', 1)).toBeGreaterThanOrEqual(0)
  expect(hash01('abc', 1)).toBeLessThan(1)
})

test('spin rate by status: damped (lambda 2), interruptible, finished eases to a stop', () => {
  expect(SPIN_RATE.running).toBe(0.6)
  expect(SPIN_RATE.thinking).toBe(0.9)
  expect(SPIN_RATE.waiting).toBe(0.15)
  expect(SPIN_RATE.idle).toBe(0.08)
  expect(SPIN_RATE.completed).toBe(0)
  const sp = makeSpin('agent-x', 'running')
  expect(sp.rate).toBe(0.6)
  // one second toward completed: 0.6 e^-2
  run(dt => stepSpin(sp, 'completed', dt, 0, 1), 1, 1 / 600)
  expect(sp.rate).toBeCloseTo(0.6 * Math.exp(-2), 2)
  // interrupted mid-way: back toward thinking, continuously
  const mid = sp.rate
  stepSpin(sp, 'thinking', 1 / 60, 0, 1)
  expect(Math.abs(sp.rate - mid)).toBeLessThan(0.05)
  run(dt => stepSpin(sp, 'thinking', dt, 0, 1), 4)
  expect(sp.rate).toBeCloseTo(0.9, 2)
  expect(sp.wob).toBeGreaterThan(0.99)
  // finished: the spin angle stops advancing
  run(dt => stepSpin(sp, 'completed', dt, 0, 1), 10)
  const yaw = sp.yaw
  run(dt => stepSpin(sp, 'completed', dt, 0, 1), 1)
  expect(Math.abs(sp.yaw - yaw)).toBeLessThan(1e-3)
})

test('spin: yaw advances by rate (scaled by motion) and the axis precesses', () => {
  const sp = makeSpin('agent-y', 'running')
  const y0 = sp.yaw
  const az0 = sp.az
  run(dt => stepSpin(sp, 'running', dt, 0, 1), 2)
  expect(sp.yaw - y0).toBeCloseTo(1.2, 1)
  expect(Math.abs(sp.az - az0)).toBeGreaterThan(0.09)
  const sp2 = makeSpin('agent-y', 'running')
  run(dt => stepSpin(sp2, 'running', dt, 0, 0.35), 2)
  expect(sp2.yaw - y0).toBeCloseTo(1.2 * 0.35, 1)
})

test('spinFrame: axis quaternion maps +Y to the ring normal, tilt angle and unit quaternions', () => {
  const sp = makeSpin('agent-z', 'idle')
  const axisQ = [0, 0, 0, 1]
  const ringN = [0, 1, 0]
  const spinQ = [0, 0, 0, 1]
  spinFrame(sp, 0, axisQ, ringN, spinQ)
  const v = [0, 0, 0]
  quatRotate(axisQ, 0, 1, 0, v)
  expect(v[0]).toBeCloseTo(ringN[0], 6)
  expect(v[1]).toBeCloseTo(ringN[1], 6)
  expect(v[2]).toBeCloseTo(ringN[2], 6)
  expect(Math.acos(ringN[1])).toBeCloseTo(sp.tilt, 6)
  expect(Math.hypot(...axisQ)).toBeCloseTo(1, 6)
  expect(Math.hypot(...spinQ)).toBeCloseTo(1, 6)
  // the spin keeps the axis: spinQ also maps +Y onto the ring normal
  quatRotate(spinQ, 0, 1, 0, v)
  expect(v[0]).toBeCloseTo(ringN[0], 6)
  expect(v[1]).toBeCloseTo(ringN[1], 6)
  // ring basis is orthonormal and u x v = normal
  const b = new Float32Array(6)
  ringBasis(axisQ, b)
  const cx = b[1] * b[5] - b[2] * b[4]
  const cy = b[2] * b[3] - b[0] * b[5]
  const cz = b[0] * b[4] - b[1] * b[3]
  expect(cx).toBeCloseTo(ringN[0], 5)
  expect(cy).toBeCloseTo(ringN[1], 5)
  expect(cz).toBeCloseTo(ringN[2], 5)
  expect(b[0] * ringN[0] + b[1] * ringN[1] + b[2] * ringN[2]).toBeCloseTo(0, 5)
})

test('adoptAgent allocates the orientation arrays once', () => {
  const a = mk()
  expect(a.axisQ).toEqual([0, 0, 0, 1])
  expect(a.ringN).toEqual([0, 1, 0])
  const q = a.axisQ
  adoptAgent(a)
  expect(a.axisQ).toBe(q)
})
