import { expect, test } from 'bun:test'
import { FINISHED, GREY, LIVE, NEXT_STATUS, STATUS } from '../shared/status'
import type { AgentStatus } from '../shared/status'
import { seeded } from '../shared/rng'

const ALL = Object.keys(STATUS) as AgentStatus[]

test('status table: power per status', () => {
  expect(ALL).toEqual(['running', 'thinking', 'waiting', 'idle', 'completed', 'stopped', 'offline'])
  const power = Object.fromEntries(ALL.map(s => [s, STATUS[s].power]))
  expect(power).toEqual({ running: 1, thinking: 0.9, waiting: 0.62, idle: 0.7, completed: 0.3, stopped: 0.04, offline: 0.04 })
})

test('status table: flow, spin and token rates', () => {
  expect(STATUS.running).toMatchObject({ flow: 1, spin: 1, tokenRate: 300, ticks: true })
  expect(STATUS.thinking).toMatchObject({ flow: 0.6, spin: 2.2, tokenRate: 110, ticks: true })
  for (const s of ['waiting', 'idle', 'completed', 'stopped', 'offline'] as const) {
    expect(STATUS[s].tokenRate).toBe(0)
    expect(STATUS[s].ticks).toBe(false)
  }
  expect(STATUS.completed.flow).toBe(0)
  expect(STATUS.stopped.dot).toEqual(STATUS.offline.dot)
})

test('LIVE and FINISHED are disjoint, and LIVE statuses are the powered ones', () => {
  for (const s of LIVE) expect(FINISHED.has(s)).toBe(false)
  expect([...FINISHED].sort()).toEqual(['completed', 'offline', 'stopped'])
  expect([...LIVE].sort()).toEqual(['running', 'thinking', 'waiting'])
})

test('NEXT_STATUS covers every status and only leads to real ones', () => {
  expect(Object.keys(NEXT_STATUS).sort()).toEqual([...ALL].sort())
  for (const s of ALL) {
    expect(NEXT_STATUS[s].length).toBeGreaterThan(0)
    for (const n of NEXT_STATUS[s]) expect(ALL).toContain(n)
  }
})

test('GREY fade colour', () => {
  expect(GREY).toEqual([112, 120, 156])
})

test('seeded rng is deterministic and in [0, 1)', () => {
  const a = seeded(7), b = seeded(7)
  const xs = Array.from({ length: 50 }, () => a())
  expect(xs).toEqual(Array.from({ length: 50 }, () => b()))
  for (const x of xs) {
    expect(x).toBeGreaterThanOrEqual(0)
    expect(x).toBeLessThan(1)
  }
  expect(seeded(8)()).not.toBe(seeded(7)())
})
