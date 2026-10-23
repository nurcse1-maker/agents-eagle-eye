/**
 * The shared model of the 3D scene: agents, the orchestrator orb, selection, events.
 * Pure data and small pure helpers, no rendering, no three. Layers READ and WRITE these objects:
 * the node layer owns per-agent status logic and physics, the orb layer owns the orb, and so on.
 * Every field name follows the 2D `AgentState` (2D L365-392) with z added to each position.
 */
import { DEFAULT_AGENTS } from '../shared/defaults'
import type { AgentSpec } from '../shared/defaults'
import { GREY, FINISHED, HALTED, STATUS } from '../shared/status'
import type { AgentStatus } from '../shared/status'
import type { RGB } from '../shared/palette'
import { toSpecs } from '../shared/ring'
import { seeded } from '../shared/rng'
import type { LiveState } from '../bridge'
import { CENTER_R, computeLayout, homeFor } from './layout3d'
import type { Layout } from './layout3d'
import { Spring, TAU, lerp } from './springs'

export type Vec3 = { x: number; y: number; z: number }

/* Timeline constants (2D L74-76). */
export const LAUNCH_CHARGE = 0.55
export const LAUNCH_FLY = 0.8
export const LAUNCH = LAUNCH_CHARGE + LAUNCH_FLY
export const NOVA_CHARGE = 1.15
/** An agent's intro: `spawnAt = INTRO_BASE + i * INTRO_STEP`, launch fires at `spawnAt - LAUNCH` (2D L485). */
export const INTRO_BASE = LAUNCH + 0.3
export const INTRO_STEP = 0.22

export const mixRGB = (a: RGB, b: RGB, t: number): RGB => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)]
export const lightenRGB = (c: RGB, t: number): RGB => mixRGB(c, [255, 255, 255], t)

/** One of the 9 braided strands of an agent link (2D L343-347, built in makeAgent L493-504). */
export interface Strand {
  off: number
  a1: number
  a2: number
  f1: number
  f2: number
  p1: number
  p2: number
  w: number
  alpha: number
  /** Cubic Bezier control points x0,y0,z0, x1,y1,z1, x2,y2,z2, x3,y3,z3 (2D has 8 numbers, no z). */
  pts: number[]
}

/** A light packet riding a strand (2D L348). */
export interface Packet {
  si: number
  t: number
  spd: number
  dir: 1 | -1
  size: number
  sparkT: number
}

export interface AgentState {
  spec: AgentSpec
  id: string
  index: number
  accent: RGB
  /** Current and base radius in world units. */
  r: number
  baseR: number
  /** Home (layout target), position and velocity. World units, +Y up. */
  hx: number
  hy: number
  hz: number
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  col: RGB
  dot: RGB
  power: number
  flow: number
  spin: number
  detail: number
  /** 0 = live, 1 = finished (eases between). */
  rest: number
  spawn: Spring
  spawnAt: number
  spawned: boolean
  hover: Spring
  labelShift: Spring
  tokens: number
  seconds: number
  introCount: number
  grow: number
  hit: number
  flash: number
  statusT: number
  tokText: string
  timeText: string
  tokFlash: number
  timeFlash: number
  /** Lean toward the pointer (x, y), 2D L516. */
  lean: [number, number]
  phase: number
  fs: number
  side: number
  flip: boolean
  strands: Strand[]
  packets: Packet[]
  spawnAcc: number
  /** launch / supernova choreography */
  launched: boolean
  launchGrow: number
  charging: boolean
  novaS: number
  novaL: number
  fade: number
  dragging: boolean
  grabX: number
  grabY: number
  grabZ: number
  /**
   * Planet orientation, written by the nodes layer every sub-step (Addendum A.4). `axisQ` (x, y, z, w) rotates +Y onto
   * the tilted, precessing spin axis (no spin); `ringN` is the unit ring-plane normal (= the axis); `spinQ` is the full
   * body orientation incl. the spin about the axis. Undefined until the nodes layer adopts the agent.
   */
  axisQ?: [number, number, number, number]
  ringN?: [number, number, number]
  spinQ?: [number, number, number, number]
}

/** The orchestrator at the centre (2D `center`, L461-466). */
export interface OrbState {
  x: number
  y: number
  z: number
  /** World radius (2D CENTER_R). */
  r: number
  px: Spring
  py: Spring
  spawn: Spring
  feed: number
  flash: number
  press: number
  beat: number
  pulseT: number
  shimmerT: number
  /** Number of live agents; drives heartbeat rate (set by the node/status code). */
  activeCount: number
  /** Orchestrator model label text (mirrors world.model; the DOM label layer reads it). */
  model: string
  /** World position of the model label anchor (2D: 0, R*0.2+44 below the centre, scaled by the spawn pop). Written by the orb layer. */
  labelAnchor: { x: number; y: number; z: number }
}

export const makeOrbState = (): OrbState => ({
  x: 0,
  y: 0,
  z: 0,
  r: CENTER_R,
  px: new Spring(0, 0, 60, 9),
  py: new Spring(0, 0, 60, 9),
  spawn: new Spring(0, 0, 120, 10),
  feed: 0,
  flash: 0,
  press: 0,
  beat: 0,
  pulseT: 0.8,
  shimmerT: 0,
  activeCount: 0,
  model: '',
  labelAnchor: { x: 0, y: 0, z: 0 },
})

/**
 * Builds the runtime state of one agent (2D makeAgent L489-520). `rand` should be `seeded(7 + n)` so the
 * strands are reproducible; `spawnAt` is the intro time in world seconds. Homes are filled by the world.
 */
export const makeAgentState = (spec: AgentSpec, index: number, rand: () => number, spawnAt: number): AgentState => {
  const cfg = STATUS[spec.status]
  const rnd = (a: number, b: number) => a + rand() * (b - a)
  const K = 9
  const side = rand() > 0.5 ? 1 : -1
  const strands: Strand[] = []
  for (let j = 0; j < K; j++) {
    const core = j === 0
    strands.push({
      off: core ? 0 : (j / (K - 1)) * 2 - 1 + (rand() - 0.5) * 0.3,
      a1: (core ? 0.5 : rnd(0.25, 0.95)) * (rand() > 0.3 ? 1 : -1) * side,
      a2: (core ? 0.5 : rnd(0.25, 0.95)) * (rand() > 0.3 ? -1 : 1) * side,
      f1: rnd(0.4, 1.1),
      f2: rnd(0.4, 1.1),
      p1: rnd(0, TAU),
      p2: rnd(0, TAU),
      w: core ? 2 : rnd(0.5, 1.3),
      alpha: core ? 0.95 : rnd(0.18, 0.5),
      pts: new Array(12).fill(0),
    })
  }
  const accent: RGB = [spec.color[0], spec.color[1], spec.color[2]]
  const r = spec.radius ?? 58
  return {
    spec,
    id: spec.id,
    index,
    accent,
    r,
    baseR: r,
    hx: 0,
    hy: 0,
    hz: 0,
    x: 0,
    y: 0,
    z: 0,
    vx: 0,
    vy: 0,
    vz: 0,
    col: mixRGB(accent, GREY, 1 - cfg.power),
    dot: cfg.dot,
    power: cfg.power,
    flow: cfg.flow,
    spin: cfg.spin,
    detail: cfg.power > 0.15 ? 1 : 0,
    rest: FINISHED.has(spec.status) ? 1 : 0,
    spawn: new Spring(0, 0, 150, 11),
    spawnAt,
    spawned: false,
    hover: new Spring(1, 1, 220, 16),
    labelShift: new Spring(0, 0, 200, 18),
    tokens: spec.tokens,
    seconds: spec.seconds,
    introCount: 0,
    grow: 0,
    hit: 0,
    flash: 0,
    statusT: 99,
    tokText: '',
    timeText: '',
    tokFlash: 0,
    timeFlash: 0,
    lean: [0, 0],
    phase: rnd(0, TAU),
    fs: rnd(0.8, 1.25),
    side,
    flip: false,
    strands,
    packets: [],
    spawnAcc: rnd(0, 1),
    launched: false,
    launchGrow: 0,
    charging: false,
    novaS: 1,
    novaL: 0,
    fade: HALTED.has(spec.status) ? 0 : 1,
    dragging: false,
    grabX: 0,
    grabY: 0,
    grabZ: 0,
  }
}

/** Pure per-agent damper values that every status needs (2D L880-890): used by the node layer, here so it is shared. */
export const intro = {
  /** Strand growth 0..1 after spawn (2D L889). */
  grow: (time: number, spawnAt: number, launchGrow: number) => Math.max(Math.min(1, Math.max(0, (time - (spawnAt + 0.2)) / 1.3)), launchGrow),
  /** Count-up progress of the stat numbers (2D L890). */
  count: (time: number, spawnAt: number) => Math.min(1, Math.max(0, (time - spawnAt) / 2.0)),
}

/* ───────────────────────────── events ───────────────────────────── */

export interface WorldEvents {
  /** A status changed through `updateAgent` (the node layer runs the transition: flash, pulse, launch, nova). */
  status: { agent: AgentState; prev: AgentStatus; next: AgentStatus }
  /** Added after the first build: spawns on its own (2D addAgent). */
  agentAdded: { agent: AgentState }
  /** Gone from the roster. The state object is passed so a layer can play a graceful exit (the world forgets it). */
  agentRemoved: { agent: AgentState }
  /** The whole picture restarts (first state, model/demo change, an agent vanished): clocks reset to 0. */
  reset: { agents: AgentState[] }
  /** Viewport or layout changed; homes were recomputed. */
  layout: { layout: Layout }
  /** Hover or selection changed (an agent id, 'orb' or null). */
  hover: { id: string | 'orb' | null }
  selection: { id: string | 'orb' | null }
  /** The orb was clicked (2D L1926-1931): pulse, flash, shockwave 70. */
  orbClick: undefined
  /** Emit a pulse packet on every link (id undefined) or one agent (2D api.pulse, L2008). Dispatched by the orb layer; links/nodes layers listen. */
  pulse: { id?: string }
  /** Name/tokens/seconds/position of an agent changed without a status change. */
  agentUpdated: { agent: AgentState }
  /** An agent was clicked (press and release, moved < 5 px; 2D onAgentClick L1932). Emitted by the nodes layer. */
  agentClick: { agent: AgentState }
  /** n light packets down one agent's strands + hit + ripple (2D pulseAgent L804). Handled by the packets layer. */
  pulseAgent: { agent: AgentState; n: number }
  /** The view was paused or resumed (engine.setPaused, or the tab hidden). `at` is wall ms (performance.now). */
  pause: { paused: boolean; at: number }
}

type Listener<K extends keyof WorldEvents> = (payload: WorldEvents[K]) => void

export type AgentPatch = Partial<Pick<AgentSpec, 'name' | 'tokens' | 'seconds' | 'status' | 'x' | 'y'>>

export class AgentWorld {
  /** Insertion ordered: the roster order is the ring order. */
  readonly agents = new Map<string, AgentState>()
  readonly orb: OrbState = makeOrbState()
  layout: Layout = computeLayout(1024, 1536)
  /** Orchestrator model label, from the live state. */
  model = ''
  session = ''
  /** True in demo mode: the 3D view simulates statuses itself (demo-sim, a later phase). */
  simulate = false
  /** World seconds; the engine writes it every sub-step. */
  time = 0
  selection: string | 'orb' | null = null
  hover: string | 'orb' | null = null
  lastState: LiveState | undefined
  /** True while the loop is stopped (paused view or hidden tab); status flips then wait for the resume. */
  paused = false

  private mountKey = ''
  private rosterKey = ''
  private built = false
  private listeners: { [K in keyof WorldEvents]?: Listener<K>[] } = {}
  private w = 0
  private h = 0

  on<K extends keyof WorldEvents>(ev: K, fn: Listener<K>): () => void {
    const list = (this.listeners[ev] ??= []) as Listener<K>[]
    list.push(fn)
    return () => {
      const i = list.indexOf(fn)
      if (i >= 0) list.splice(i, 1)
    }
  }

  emit<K extends keyof WorldEvents>(ev: K, payload: WorldEvents[K]): void {
    const list = this.listeners[ev] as Listener<K>[] | undefined
    if (!list) return
    for (const fn of [...list]) fn(payload)
  }

  /** Idempotent. Emits `pause` on a change; the choreography uses it to queue and then replay or silence flips. */
  setPaused(paused: boolean, at: number): void {
    if (paused === this.paused) return
    this.paused = paused
    this.emit('pause', { paused, at })
  }

  setHover(id: string | 'orb' | null): void {
    if (id === this.hover) return
    this.hover = id
    this.emit('hover', { id })
  }

  setSelection(id: string | 'orb' | null): void {
    if (id === this.selection) return
    this.selection = id
    this.emit('selection', { id })
  }

  /** The agents as an array in roster order. */
  list(): AgentState[] {
    return [...this.agents.values()]
  }

  /** Viewport size in CSS px; recomputes the layout and every agent's home (2D `layout()` L524-545). */
  setViewport(w: number, h: number): void {
    if (w < 2 || h < 2 || (w === this.w && h === this.h)) return
    this.w = w
    this.h = h
    this.relayout(false)
  }

  /** Recompute homes from the specs; `snap` also teleports agents there. */
  relayout(snap: boolean): void {
    this.layout = computeLayout(this.w || 1024, this.h || 1536)
    const n = this.agents.size
    let i = 0
    for (const a of this.agents.values()) {
      const home = homeFor(a.spec, this.layout, i++, n)
      a.hx = home.x
      a.hy = home.y
      a.hz = home.z
      if (snap) {
        a.x = a.hx
        a.y = a.hy
        a.z = a.hz
      }
    }
    this.emit('layout', { layout: this.layout })
  }

  /* ── roster operations. Phases 4-7 hang their behaviour on the events; the data side is here. ── */

  /** Restart the picture with these specs (2D setAgents/buildAgents L483-487, L2003-2007). */
  setAgents(specs: AgentSpec[]): void {
    this.agents.clear()
    this.time = 0
    const rand = seeded(7)
    specs.forEach((s, i) => {
      const spec = { ...s }
      this.agents.set(spec.id, makeAgentState(spec, i, rand, INTRO_BASE + i * INTRO_STEP))
    })
    this.relayout(true)
    this.built = true
    this.emit('reset', { agents: this.list() })
  }

  /** A new agent spawns on its own (2D addAgent L1995-2002). */
  addAgent(spec: AgentSpec): void {
    if (this.agents.has(spec.id)) return
    const n = this.agents.size
    const a = makeAgentState({ ...spec }, n, seeded(7 + n), this.time + LAUNCH)
    this.agents.set(a.id, a)
    this.relayout(false)
    a.x = a.hx
    a.y = a.hy
    a.z = a.hz
    this.emit('agentAdded', { agent: a })
  }

  /** Patch name/tokens/seconds/position; a status change emits `status` for the node layer (2D updateAgent L1982-1994). */
  updateAgent(id: string, patch: AgentPatch): void {
    const a = this.agents.get(id)
    if (!a) return
    if (patch.name !== undefined) a.spec.name = patch.name
    if (patch.tokens !== undefined) {
      a.tokens = patch.tokens
      a.spec.tokens = patch.tokens
    }
    if (patch.seconds !== undefined) {
      a.seconds = patch.seconds
      a.spec.seconds = patch.seconds
    }
    let moved = false
    if ((patch.x !== undefined && patch.x !== a.spec.x) || (patch.y !== undefined && patch.y !== a.spec.y)) {
      a.spec.x = patch.x ?? a.spec.x
      a.spec.y = patch.y ?? a.spec.y
      moved = true
    }
    if (patch.status !== undefined && patch.status !== a.spec.status) {
      const prev = a.spec.status
      a.spec.status = patch.status
      a.statusT = 0
      this.emit('status', { agent: a, prev, next: patch.status })
    }
    if (moved) this.relayout(false)
    this.emit('agentUpdated', { agent: a })
  }

  /** The status hook (2D setStatus L814): records the status, restarts `statusT`, emits `status`. Choreography listens. */
  setStatus(a: AgentState, status: AgentStatus): void {
    if (a.spec.status === status) return
    const prev = a.spec.status
    a.spec.status = status
    a.statusT = 0
    this.emit('status', { agent: a, prev, next: status })
  }

  /** Remove one agent. The 2D view restarts instead; 3D lets a layer play an exit from the emitted state. */
  removeAgent(id: string): void {
    const a = this.agents.get(id)
    if (!a) return
    this.agents.delete(id)
    if (this.hover === id) this.setHover(null)
    if (this.selection === id) this.setSelection(null)
    this.relayout(false)
    this.emit('agentRemoved', { agent: a })
  }

  /**
   * Feed one LiveState (arrives every second). Same semantics as bridge.ts L99-113 (2D apply2D):
   * first state or a changed `demo|model` key rebuilds; demo ignores the roster; a new id spawns; a
   * vanished id is a full restart in 2D (here: removeAgent, a graceful exit, the documented divergence);
   * then every agent gets its latest status/tokens/seconds/name/position.
   */
  applyState(state: LiveState): void {
    this.lastState = state
    this.model = state.model
    this.session = state.session
    const nextMount = `${state.demo}|${state.model}`
    const specs = state.demo ? DEFAULT_AGENTS.map(s => ({ ...s, color: [...s.color] as RGB })) : toSpecs(state.agents)
    const nextRoster = state.demo ? '' : specs.map(s => s.id).join(',')
    if (!this.built || nextMount !== this.mountKey) {
      this.mountKey = nextMount
      this.rosterKey = nextRoster
      this.simulate = state.demo
      this.setAgents(specs)
      return
    }
    if (state.demo) return
    if (nextRoster !== this.rosterKey) {
      const had = new Set(this.rosterKey ? this.rosterKey.split(',') : [])
      this.rosterKey = nextRoster
      const now = new Set(specs.map(s => s.id))
      for (const id of had) if (!now.has(id)) this.removeAgent(id)
      for (const s of specs) if (!had.has(s.id)) this.addAgent(s)
      // The ring is re-spread for the new roster: every agent glides to its new place.
    }
    for (const s of specs) {
      this.updateAgent(s.id, { status: s.status, tokens: s.tokens, seconds: s.seconds, name: s.name, x: s.x, y: s.y })
    }
  }
}
