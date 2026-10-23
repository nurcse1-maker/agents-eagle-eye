/**
 * The page's view manager. Feeds the session's agents into the 2D agent-network design
 * (unchanged) and into the lazy 3D view, and switches between the two.
 *
 * The mod rewrites `state.js` beside this page once a second; the page loads
 * it again each second as a script (works over file://, no server), which
 * calls `window.__eagleEye(state)`.
 */
import { mountAgentNetwork } from './agent-network'
import type { AgentNetwork } from './agent-network'
import type { AgentSpec } from './shared/defaults'
import type { AgentIcon } from './shared/palette'
import { toSpecs } from './shared/ring'
import type { AgentStatus } from './shared/status'
import {
  SEQ_KEY,
  VIEW_KEY,
  asView,
  detectWebGL2,
  failFallback,
  load3DScript,
  paneChanged,
  parseHash,
  readStored,
  resolveView,
  writeHash,
  writeStored,
} from './view-switch'
import type { View } from './view-switch'

export type LiveAgent = {
  id: string
  name: string
  icon: AgentIcon
  status: AgentStatus
  tokens: number
  seconds: number
}

export type LiveState = {
  model: string
  /** Which session this page shows: project folder and short id. */
  session: string
  demo: boolean
  agents: LiveAgent[]
  updatedAt: number
  /** The view the pane asked for; applied only when `viewSeq` changes. */
  view?: '2d' | '3d'
  viewSeq?: number
}

/** What a mounted 3D view gives the shell. */
export interface View3DHandle {
  update(state: LiveState): void
  setPaused(paused: boolean): void
  destroy(): void
}

/** The contract of the lazy 3D bundle (eagle-eye-3d.js). */
export interface EagleEye3D {
  mount(
    container: HTMLElement,
    opts: {
      reducedMotion: boolean
      /** Optional: an agent was clicked (2D onAgentClick). */
      onAgentClick?: (agent: AgentSpec) => void
      /** Optional: the orchestrator orb was clicked (2D onOrchestratorClick). */
      onOrbClick?: () => void
    },
  ): View3DHandle
  /** Debug: frame rate and draw calls of the running view. */
  stats?(): { fps: number; frameMs?: number; drawCalls: number; dpr?: number; tier?: number; triangles?: number }
  /** Debug (also ?freeze=1): jump the clocks to t seconds, or advance by dt seconds, and render one frame. */
  setTime?(t: number): void
  step?(dt: number): void
  /** Debug: the running engine, for tests and the browser console. */
  engine?: unknown
}

declare global {
  interface Window {
    __eagleEye?: (state: LiveState) => void
    __eagleEye3D?: EagleEye3D
  }
}

const root = document.getElementById('network')!
const root3d = document.getElementById('network3d')!
const badge = document.getElementById('badge')!
const tabsEl = document.getElementById('tabs')!
const noticeEl = document.getElementById('notice')!
let net: AgentNetwork | undefined
let mountKey = ''
let rosterKey = ''
let lastUpdate = 0
let sessionLabel = ''

/* ───────────────────────────── 2D (unchanged logic) ───────────────────────────── */

const apply2D = (state: LiveState) => {
  const nextMount = `${state.demo}|${state.model}`
  const nextRoster = state.agents.map(a => a.id).join(',')
  if (!net || nextMount !== mountKey) {
    net?.destroy()
    mountKey = nextMount
    rosterKey = nextRoster
    net = mountAgentNetwork(root, {
      simulate: state.demo,
      orchestrator: { name: 'Orchestrator', model: state.model },
      agents: state.demo ? undefined : toSpecs(state.agents),
    })
    // Mounted while the 3D view is showing: hold the intro until 2D is shown.
    if (current !== '2d') net.setPaused(true)
    return
  }
  if (state.demo) return
  const specs = toSpecs(state.agents)
  if (nextRoster !== rosterKey) {
    const had = new Set(rosterKey ? rosterKey.split(',') : [])
    rosterKey = nextRoster
    // An agent left (a fresh session, /clear): start the picture over.
    if ([...had].some(id => !specs.some(s => s.id === id))) {
      net.setAgents(specs)
      return
    }
    // New agents spawn on their own; the rest keep running and glide to their new places.
    for (const s of specs) if (!had.has(s.id)) net.addAgent(s)
  }
  for (const s of specs) {
    net.updateAgent(s.id, { status: s.status, tokens: s.tokens, seconds: s.seconds, name: s.name, x: s.x, y: s.y })
  }
}

/* ───────────────────────────── view switching ───────────────────────────── */

const FADE_MS = 220
/** A hidden 3D view is destroyed after this long (frees the GL context); it re-mounts on return. */
const DESTROY_3D_AFTER_MS = 120_000

const reducedMotion = () => !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
const webgl2 = detectWebGL2()
const tabButtons: Record<View, HTMLButtonElement> = {
  '2d': document.getElementById('tab-2d') as HTMLButtonElement,
  '3d': document.getElementById('tab-3d') as HTMLButtonElement,
}
const viewEls: Record<View, HTMLElement> = { '2d': root, '3d': root3d }

let current: View | undefined
let lastState: LiveState | undefined
let view3d: View3DHandle | undefined
let pause2dTimer: ReturnType<typeof setTimeout> | undefined
let destroy3dTimer: ReturnType<typeof setTimeout> | undefined
let noticeTimer: ReturnType<typeof setTimeout> | undefined
let loadToken = 0

const notice = (text: string) => {
  noticeEl.textContent = text
  noticeEl.classList.add('show')
  clearTimeout(noticeTimer)
  noticeTimer = setTimeout(() => noticeEl.classList.remove('show'), 6000)
}

if (!webgl2) {
  const forced = new URLSearchParams(location.search).get('renderer') === '2d'
  tabButtons['3d'].setAttribute('aria-disabled', 'true')
  tabButtons['3d'].title = forced ? '3D view is switched off (?renderer=2d)' : '3D view needs WebGL2, which this browser does not provide'
}

const destroy3D = () => {
  clearTimeout(destroy3dTimer)
  try {
    view3d?.destroy()
  } catch (err) {
    console.error('eagle-eye: 3D destroy failed', err)
  }
  view3d = undefined
  root3d.replaceChildren()
}

const fail3D = (why: string) => {
  destroy3D()
  notice(why)
  const fb = failFallback(current)
  if (fb) setView(fb.view, fb.persist) // transient: the stored choice and the hash stay as they were
}

// The engine could not recover its WebGL context: leave 3D for 2D.
root3d.addEventListener('eagle-eye-3d-fatal', () => fail3D('3D view lost its graphics context. Back to 2D.'))

const ensure3D = async () => {
  const token = ++loadToken
  if (view3d) {
    view3d.setPaused(false)
    return
  }
  const ok = await load3DScript()
  if (token !== loadToken || current !== '3d') return // the user moved on while it loaded
  if (!ok || !window.__eagleEye3D) return fail3D('3D view could not load. Staying on 2D.')
  if (view3d) return
  try {
    view3d = window.__eagleEye3D.mount(root3d, { reducedMotion: reducedMotion() })
    if (lastState) view3d.update(lastState)
  } catch (err) {
    console.error('eagle-eye: 3D mount failed', err)
    fail3D('3D view failed to start. Staying on 2D.')
  }
}

/** Shows a view: tabs, cross-fade, pause/resume of the other one, hash and remembered choice. */
const setView = (next: View, persist = true) => {
  if (next === '3d' && !webgl2) return
  if (next === current) return
  current = next
  tabsEl.classList.toggle('is-3d', next === '3d')
  for (const v of ['2d', '3d'] as const) {
    const on = v === next
    tabButtons[v].setAttribute('aria-selected', String(on))
    tabButtons[v].tabIndex = on ? 0 : -1
    viewEls[v].classList.toggle('active', on)
  }
  if (persist) {
    writeStored(VIEW_KEY, next)
    writeHash(next)
  }
  clearTimeout(pause2dTimer)
  clearTimeout(destroy3dTimer)
  const delay = reducedMotion() ? 0 : FADE_MS
  if (next === '2d') {
    net?.setPaused(false)
    // Pause the hidden 3D view once the cross-fade is done.
    loadToken++
    pause2dTimer = setTimeout(() => view3d?.setPaused(true), delay)
    if (view3d) destroy3dTimer = setTimeout(destroy3D, DESTROY_3D_AFTER_MS)
  } else {
    // Pause 2D after the fade; the roster and timeline stay, and resume without a time jump.
    pause2dTimer = setTimeout(() => net?.setPaused(true), delay)
    void ensure3D()
  }
}

const onTabKey = (e: KeyboardEvent) => {
  const order: View[] = ['2d', '3d']
  const enabled = order.filter(v => tabButtons[v].getAttribute('aria-disabled') !== 'true')
  const at = enabled.indexOf(current ?? '2d')
  let to: View | undefined
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') to = enabled[(at + 1) % enabled.length]
  else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') to = enabled[(at - 1 + enabled.length) % enabled.length]
  else if (e.key === 'Home') to = enabled[0]
  else if (e.key === 'End') to = enabled[enabled.length - 1]
  if (!to) return
  e.preventDefault()
  tabButtons[to].focus()
  setView(to)
}

for (const v of ['2d', '3d'] as const) {
  tabButtons[v].addEventListener('click', () => {
    if (tabButtons[v].getAttribute('aria-disabled') === 'true') return
    setView(v)
  })
}
tabsEl.addEventListener('keydown', onTabKey)
window.addEventListener('hashchange', () => {
  const v = parseHash(location.hash)
  if (v) setView(v, false)
})

// Selection at load: hash > localStorage > 2d (the pane's choice arrives with the first state).
setView(resolveView({ hash: location.hash, stored: readStored(VIEW_KEY), webgl2 }), false)
requestAnimationFrame(() => requestAnimationFrame(() => tabsEl.classList.add('ready')))

let lastSeq = Number(readStored(SEQ_KEY)) || undefined
let firstState = true

/** The pane's choice (`/agents-eagle-eye 3d`): applied only when its counter moved since this page last looked. */
const applyPane = (state: LiveState) => {
  if (paneChanged(state.viewSeq, lastSeq)) {
    setView(
      resolveView({
        hash: firstState ? location.hash : null,
        view: asView(state.view),
        viewSeq: state.viewSeq,
        lastSeq,
        stored: current,
        webgl2,
      }),
    )
    lastSeq = state.viewSeq
    writeStored(SEQ_KEY, String(lastSeq))
  }
  firstState = false
}

/* ───────────────────────────── state in ───────────────────────────── */

window.__eagleEye = state => {
  lastUpdate = state.updatedAt
  lastState = state
  if (state.session !== sessionLabel) {
    sessionLabel = state.session
    document.title = `Eagle Eye · ${state.session}`
  }
  applyPane(state)
  apply2D(state)
  // The paused view gets the state too, so switching is instant and consistent.
  view3d?.update(state)
}

// Load the latest state once a second; say so when the session stops writing it.
setInterval(() => {
  const s = document.createElement('script')
  s.src = `state.js?t=${Date.now()}`
  s.onload = s.onerror = () => s.remove()
  document.head.appendChild(s)
  const stale = lastUpdate > 0 && Date.now() - lastUpdate > 8000
  badge.textContent = `${sessionLabel || 'Eagle Eye'} · ${lastUpdate === 0 ? 'connecting…' : stale ? 'session idle' : 'live'}`
  badge.className = stale || lastUpdate === 0 ? 'badge' : 'badge live'
}, 1000)
