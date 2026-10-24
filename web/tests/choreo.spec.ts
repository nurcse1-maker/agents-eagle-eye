import { expect, test } from 'bun:test'
import { DEFAULT_AGENTS } from '../shared/defaults'
import { seeded } from '../shared/rng'
import { STATUS } from '../shared/status'
import type { AgentStatus } from '../shared/status'
import {
  Choreography,
  EVENT_STALE_MS,
  LAUNCH_TOTAL,
  PAUSE_SILENT_MS,
  TRAIL_MAX,
  classifyStatus,
  isWake,
  novaChargeWhiteA,
} from '../three/choreo'
import type { ChoreoEnv, ChoreoHooks } from '../three/choreo'
import { DemoSim } from '../three/demo-sim'
import { AgentWorld, INTRO_BASE, INTRO_STEP, LAUNCH, NOVA_CHARGE, makeAgentState } from '../three/world'
import type { AgentState } from '../three/world'
import { adoptAgent, stepAppearance } from '../three/nodes-sim'

interface Log {
  ripples: { r0: number; r1: number; life: number; w: number; shell: boolean }[]
  sparks: number
  bursts: { n: number; speed: number }[]
  shocks: number[]
  shakes: number[]
  pulses: { id: string; n: number }[]
}

const setup = (seed = 3) => {
  const log: Log = { ripples: [], sparks: 0, bursts: [], shocks: [], shakes: [], pulses: [] }
  const hooks: ChoreoHooks = {
    ripple: (_x, _y, _z, r0, r1, life, _c, w, shell) => log.ripples.push({ r0, r1, life, w, shell }),
    spark: () => void log.sparks++,
    burst: (_x, _y, _z, _c, n, speed) => log.bursts.push({ n, speed }),
    shockwave: (_x, _y, _z, s) => log.shocks.push(s),
    shake: n => log.shakes.push(n),
    pulseAgent: (a, n) => log.pulses.push({ id: a.id, n }),
  }
  const rand = seeded(seed)
  const env: ChoreoEnv = { orb: { x: 0, y: 0, z: 0, r: 135, flash: 0, feed: 0 }, motion: 1, rand }
  return { log, ch: new Choreography(hooks, rand), env }
}

const mk = (i = 0, status?: AgentStatus): AgentState => {
  const spec = { ...DEFAULT_AGENTS[i], ...(status ? { status } : {}) }
  const a = makeAgentState(spec, i, seeded(7), 0.5)
  adoptAgent(a)
  a.x = 300
  a.y = 120
  a.z = -80
  a.spawn.x = 1
  a.launched = true
  // a strand that ends at the agent so the comet has somewhere to fly
  for (const s of a.strands) s.pts = [0, 0, 0, 100, 40, -20, 200, 90, -60, 300, 120, -80]
  return a
}

const run = (ch: Choreography, a: AgentState, env: ChoreoEnv, from: number, to: number, dt = 1 / 60) => {
  let t = from
  while (t < to) {
    t += dt
    ch.update(dt, t, [a], env)
  }
  return t
}

test('status classification matches 2D setStatus', () => {
  expect(classifyStatus('idle', 'running')).toBe('launch')
  expect(classifyStatus('stopped', 'thinking')).toBe('launch')
  expect(classifyStatus('waiting', 'running')).toBe('change')
  expect(classifyStatus('running', 'thinking')).toBe('change')
  expect(classifyStatus('running', 'completed')).toBe('nova')
  expect(classifyStatus('waiting', 'completed')).toBe('nova')
  expect(classifyStatus('stopped', 'completed')).toBe('change')
  expect(classifyStatus('completed', 'completed')).toBe('change')
  expect(classifyStatus('running', 'stopped')).toBe('change')
  expect(isWake('offline', 'waiting')).toBe(true)
  expect(isWake('running', 'waiting')).toBe(false)
})

test('intro timeline: spawnAt = 1.65 + 0.22 i, launch fires at spawnAt - 1.35', () => {
  expect(INTRO_BASE).toBeCloseTo(1.65, 9)
  const w = new AgentWorld()
  w.setAgents(DEFAULT_AGENTS)
  const list = w.list()
  list.forEach((a, i) => expect(a.spawnAt).toBeCloseTo(1.65 + 0.22 * i, 9))
  const { ch, env } = setup()
  const a = list[2]
  expect(a.spawnAt - LAUNCH).toBeCloseTo(0.3 + 0.44, 9)
  ch.update(0.016, a.spawnAt - LAUNCH - 0.01, [a], env)
  expect(a.launched).toBe(false)
  expect(ch.list.length).toBe(0)
  ch.update(0.016, a.spawnAt - LAUNCH + 0.001, [a], env)
  expect(a.launched).toBe(true)
  expect(ch.list.length).toBe(1)
  expect(ch.list[0].intro).toBe(true)
  expect(INTRO_STEP).toBe(0.22)
})

test('addAgent spawns after LAUNCH and launches at once', () => {
  const w = new AgentWorld()
  w.setAgents(DEFAULT_AGENTS.slice(0, 3))
  w.time = 10
  w.addAgent({ ...DEFAULT_AGENTS[5] })
  const a = w.agents.get(DEFAULT_AGENTS[5].id)!
  expect(a.spawnAt).toBeCloseTo(10 + LAUNCH, 9)
  expect(a.x).toBe(a.hx)
  const { ch, env } = setup()
  ch.update(0.016, 10.001, [a], env)
  expect(ch.list.length).toBe(1)
})

test('launch timeline: charge 0.55, fly 0.8 (u^1.6), no impact blast for intro, gone at 2.35', () => {
  const { ch, log, env } = setup()
  const a = mk(0)
  a.launched = true
  const f = ch.startLaunch(a, true)
  run(ch, a, env, 0, 0.3)
  expect(log.ripples.length).toBe(0)
  expect(log.shocks).toEqual([])
  expect(log.sparks).toBeGreaterThan(20)
  expect(env.orb.flash).toBeGreaterThan(0.2)
  expect(f.trailN).toBe(0)
  expect(a.launchGrow).toBe(0)
  // mid flight: k = 0.55 + 0.4 -> u = 0.5^1.6
  run(ch, a, env, 0.3, 0.95)
  expect(f.u).toBeCloseTo(Math.pow((f.t - 0.55) / 0.8, 1.6), 1)
  expect(f.trailN).toBeGreaterThan(10)
  expect(f.trailN).toBeLessThanOrEqual(TRAIL_MAX)
  expect(a.launchGrow).toBeCloseTo(f.u, 6)
  expect(log.pulses.length).toBe(0)
  run(ch, a, env, 0.95, 1.36)
  expect(a.launchGrow).toBe(1)
  expect(log.pulses).toEqual([])
  expect(log.shocks).toEqual([])
  expect(log.shakes).toEqual([])
  expect(log.ripples.length).toBe(0)
  expect(a.flash).toBe(0)
  expect(a.hit).toBe(0)
  expect(ch.list.length).toBe(1)
  run(ch, a, env, 1.36, LAUNCH_TOTAL + 0.05)
  expect(ch.list.length).toBe(0)
  expect(LAUNCH_TOTAL).toBeCloseTo(2.35, 9)
})

test('non-intro launch never drives the strand growth', () => {
  const { ch, env } = setup()
  const a = mk(1)
  ch.startLaunch(a, false)
  run(ch, a, env, 0, 1.2)
  expect(a.launchGrow).toBe(0)
})

test('launch ends at the 3D strand end', () => {
  const { ch, env } = setup()
  const a = mk(0)
  const f = ch.startLaunch(a, true)
  run(ch, a, env, 0, 1.34)
  expect(Math.hypot(f.hx - 300, f.hy - 120, f.hz + 80)).toBeLessThan(15)
})

test('generic status change: flash, pulse 5 or 12, burst 12 or 26 at speed 90, ripple 0.8r -> r + 120', () => {
  const { ch, log } = setup()
  const a = mk(0)
  expect(ch.onStatus(a, 'running', 'waiting')).toBe('change')
  expect(a.flash).toBe(1)
  expect(log.pulses).toEqual([{ id: a.id, n: 5 }])
  expect(log.bursts).toEqual([{ n: 12, speed: 90 }])
  expect(log.ripples[0].r0).toBeCloseTo(a.r * 0.8, 9)
  expect(log.ripples[0].r1).toBeCloseTo(a.r + 120, 9)
  expect(log.ripples[0].life).toBe(1.4)
  expect(log.ripples[0].w).toBe(3)
  expect(log.ripples[0].shell).toBe(false)
  expect(ch.list.length).toBe(0)
  ch.onStatus(a, 'offline', 'waiting') // wake
  expect(log.pulses[1].n).toBe(12)
  expect(log.bursts[1].n).toBe(26)
  // stopped/offline: no launch/nova
  const before = log.pulses.length + log.bursts.length + log.ripples.length
  expect(ch.onStatus(a, 'running', 'stopped')).toBe('change')
  expect(ch.onStatus(a, 'running', 'offline')).toBe('change')
  expect(log.pulses.length + log.bursts.length + log.ripples.length).toBe(before)
  expect(ch.list.length).toBe(0)
})

test('launch status starts only the launch (no generic fx); nova only the nova', () => {
  const { ch, log } = setup()
  const a = mk(0)
  expect(ch.onStatus(a, 'idle', 'running')).toBe('launch')
  expect(ch.list.length).toBe(1)
  expect(ch.list[0].kind).toBe('launch')
  expect(ch.list[0].intro).toBe(false)
  expect(log.pulses.length + log.bursts.length + log.ripples.length).toBe(0)
  const b = mk(1)
  expect(ch.onStatus(b, 'running', 'completed')).toBe('nova')
  expect(ch.list.length).toBe(2)
  expect(log.pulses.length + log.bursts.length).toBe(0)
})

test('nova: duplicate ignored, charge 1.15 keeps the rest target, the blast only settles the planet', () => {
  const { ch, log, env } = setup()
  const a = mk(0, 'completed')
  const f = ch.startNova(a)!
  expect(ch.startNova(a)).toBeUndefined()
  expect(ch.list.length).toBe(1)
  expect(f.kind).toBe('nova')
  // charge: the finished agent must not settle to rest while charging (stepAppearance reads a.charging)
  let t = 0
  const dt = 1 / 60
  a.rest = 0
  while (t < 1.0) {
    t += dt
    stepAppearance(a, dt, t, false)
    ch.update(dt, t, [a], env)
  }
  expect(a.charging).toBe(true)
  expect(a.rest).toBeLessThan(0.05)
  const e2 = Math.pow(t / NOVA_CHARGE, 2)
  expect(a.novaL).toBeCloseTo(0.3 * (0.2 + 1.4 * e2), 9)
  expect(a.novaS).toBeCloseTo(1 - 0.9 * e2, 9)
  expect(log.shocks.length).toBe(0)
  while (t + dt < NOVA_CHARGE) {
    t += dt
    ch.update(dt, t, [a], env)
  }
  const charged = log.sparks
  while (t < NOVA_CHARGE + 0.05) {
    t += dt
    ch.update(dt, t, [a], env)
  }
  expect(a.charging).toBe(false)
  expect(a.novaS).toBe(1)
  expect(a.novaL).toBe(0)
  expect(a.flash).toBe(0)
  expect(a.hit).toBe(0)
  expect(log.sparks).toBe(charged)
  expect(log.shakes).toEqual([])
  expect(log.shocks).toEqual([])
  expect(log.ripples).toEqual([])
  expect(log.bursts).toEqual([])
  expect(log.pulses).toEqual([])
  expect(ch.list.length).toBe(0)
})

test('nova charge: planet shrinks to 10% with no wobble, whatever the motion', () => {
  const calm = setup()
  const a = mk(0)
  calm.env.motion = 0.35
  calm.ch.startNova(a)
  const t = run(calm.ch, a, calm.env, 0, 1.1)
  expect(a.novaS).toBeCloseTo(1 - 0.9 * Math.pow(t / NOVA_CHARGE, 2), 9)
})

test('drop and clear release the charging flag', () => {
  const { ch, env } = setup()
  const a = mk(0)
  ch.startNova(a)
  run(ch, a, env, 0, 0.5)
  expect(a.charging).toBe(true)
  ch.drop(a)
  expect(a.charging).toBe(false)
  expect(ch.list.length).toBe(0)
})

test('demo sim: nothing before 4 s, then a timer of 4.5..8.5 s, off agents change 30%, equal status is a no-op', () => {
  const w = new AgentWorld()
  w.setAgents(DEFAULT_AGENTS)
  const sim = new DemoSim()
  const rand = seeded(11)
  const changed: [string, AgentStatus][] = []
  const apply = (a: AgentState, s: AgentStatus) => changed.push([a.id, s])
  let t = 0
  const dt = 0.033
  while (t < 3.9) {
    t += dt
    sim.step(dt, t, w.agents, rand, apply)
  }
  expect(changed.length).toBe(0)
  let fires = 0
  let last = 0
  const gaps: number[] = []
  while (t < 200) {
    t += dt
    const before = sim.simT
    sim.step(dt, t, w.agents, rand, apply)
    if (sim.simT > before) {
      fires++
      if (last) gaps.push(t - last)
      last = t
      expect(sim.simT).toBeGreaterThanOrEqual(4.5)
      expect(sim.simT).toBeLessThanOrEqual(8.5)
    }
  }
  expect(fires).toBeGreaterThan(15)
  for (const g of gaps) {
    expect(g).toBeGreaterThanOrEqual(4.4)
    expect(g).toBeLessThanOrEqual(8.6)
  }
  expect(changed.length).toBeGreaterThan(5)
  expect(changed.length).toBeLessThan(fires)
  for (const [, s] of changed) expect(Object.keys(STATUS)).toContain(s)
})

test('demo sim changes go through the world status event', () => {
  const w = new AgentWorld()
  w.setAgents(DEFAULT_AGENTS)
  const seen: string[] = []
  w.on('status', ({ agent, prev, next }) => seen.push(`${agent.id}:${prev}>${next}`))
  const a = w.agents.get('planner')!
  w.setStatus(a, 'running') // equal: no event
  w.setStatus(a, 'completed')
  expect(seen).toEqual(['planner:running>completed'])
  expect(a.statusT).toBe(0)
})

test('nova charge white glow is 0.15 e2, and nothing flashes, shakes or pushes after the blast', () => {
  expect(novaChargeWhiteA(1)).toBe(0.15)
  expect(novaChargeWhiteA(0.25)).toBeCloseTo(0.0375, 12)
  const { ch, log, env } = setup()
  const a = mk(0, 'completed')
  ch.startNova(a)
  run(ch, a, env, 0, NOVA_CHARGE + 0.05)
  expect(a.flash).toBe(0)
  expect(a.hit).toBe(0)
  expect(log.shakes.length + log.shocks.length + log.ripples.length + log.pulses.length).toBe(0)
  expect(ch.list.length).toBe(0)
})

// review M3: status flips queued while a 3D view is paused must not all replay on resume.
test('paused view: short pause replays the flips, a long one applies them silently', () => {
  const run1 = () => {
    const { ch, log } = setup()
    const a = mk(0, 'running')
    const b = mk(1, 'idle')
    const c = mk(2, 'running')
    return { ch, log, a, b, c }
  }
  // short pause (1.5 s): played as normal
  {
    const { ch, log, a, b } = run1()
    ch.setPaused(true, 1000)
    a.spec.status = 'completed'
    ch.onStatusEvent(a, 'running', 'completed', 1200)
    b.spec.status = 'running'
    ch.onStatusEvent(b, 'idle', 'running', 2300)
    expect(ch.list.length).toBe(0) // nothing starts while paused
    ch.setPaused(false, 2500)
    expect(ch.list.map(f => f.kind).sort()).toEqual(['launch', 'nova'])
    expect(log.shakes.length).toBe(0)
  }
  // long pause: no launch, nova or burst; status look is snapped
  {
    const { ch, log, a, b, c } = run1()
    ch.setPaused(true, 1000)
    a.spec.status = 'completed'
    ch.onStatusEvent(a, 'running', 'completed', 1500)
    b.spec.status = 'running'
    ch.onStatusEvent(b, 'idle', 'running', 3000)
    c.spec.status = 'thinking'
    ch.onStatusEvent(c, 'running', 'thinking', 3100)
    ch.setPaused(false, 1000 + PAUSE_SILENT_MS + 1)
    expect(ch.list.length).toBe(0)
    expect(log.bursts.length).toBe(0)
    expect(log.pulses.length).toBe(0)
    expect(log.ripples.length).toBe(0)
    expect(a.rest).toBe(1)
    expect(a.power).toBe(STATUS.completed.power)
    expect(a.flash).toBe(0)
    expect(b.power).toBe(STATUS.running.power)
    expect(b.rest).toBe(0)
    expect(a.charging).toBe(false)
    // later flips are live again
    ch.onStatusEvent(b, 'running', 'idle', 9000)
    expect(log.bursts.length).toBe(1)
  }
})

test('paused view: a flip that went back, a stale flip and an agent that left', () => {
  const { ch, log } = setup()
  const a = mk(0, 'running')
  const b = mk(1, 'idle')
  const c = mk(2, 'running')
  ch.setPaused(true, 0)
  // running -> thinking -> running while paused: nothing to play
  ch.onStatusEvent(a, 'running', 'thinking', 100)
  ch.onStatusEvent(a, 'thinking', 'running', 200)
  // an old flip (first seen long before the resume) is not played even in a short pause
  b.spec.status = 'running'
  ch.onStatusEvent(b, 'idle', 'running', 100)
  // dropped while paused
  c.spec.status = 'completed'
  ch.onStatusEvent(c, 'running', 'completed', 1900)
  ch.drop(c)
  ch.setPaused(false, 100 + EVENT_STALE_MS + 1) // pause lasted 2.101 s: silent anyway
  expect(ch.list.length).toBe(0)
  expect(log.bursts.length + log.pulses.length).toBe(0)
  expect(b.power).toBe(STATUS.running.power)
  // idempotent
  ch.setPaused(false, 99999)
  expect(ch.list.length).toBe(0)
})

test('world emits pause once per change', () => {
  const w = new AgentWorld()
  const seen: Array<[boolean, number]> = []
  w.on('pause', e => seen.push([e.paused, e.at]))
  w.setPaused(false, 1)
  w.setPaused(true, 2)
  w.setPaused(true, 3)
  w.setPaused(false, 4)
  expect(seen).toEqual([
    [true, 2],
    [false, 4],
  ])
  expect(w.paused).toBe(false)
})
