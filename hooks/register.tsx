import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register, StateDollar } from 'claude-code'

import type { AgentRec, AgentStatusWord, MainRec } from '../types'
import { renderMini, renderMini3D } from './mini'
import {
  STATUS_COLOR,
  STATUS_LABEL,
  demoAgents,
  demoMain,
  designStatus,
  displayName,
  formatDuration,
  formatTokens,
  iconFor,
  isLive,
  prettyModel,
} from './model'

const PANE = 'agents-eagle-eye'
const COMMAND = 'agents-eagle-eye'
/** The page and its scripts, shipped in web/, copied beside the live state. */
const WEB_FILES = ['index.html', 'eagle-eye.js', 'eagle-eye-3d.js']

const agentsAtom = atom({ plugin: 'agents-eagle-eye', key: 'agents' } as const, {} as Record<string, AgentRec>)
const mainAtom = atom(
  { plugin: 'agents-eagle-eye', key: 'main' } as const,
  {
    status: 'idle',
    startedAt: 0,
    contextTokens: 0,
    window: 0,
    outputTokens: 0,
  } as MainRec,
)
const demoAtom = atom({ plugin: 'agents-eagle-eye', key: 'demo' } as const, 0)
const viewAtom = atom({ plugin: 'agents-eagle-eye', key: 'view' } as const, '2d' as '2d' | '3d')
const viewSeqAtom = atom({ plugin: 'agents-eagle-eye', key: 'viewSeq' } as const, 0)

/** Persists a view choice and bumps the counter that tells the page it was explicit. */
const setView = async ($: StateDollar, view: '2d' | '3d') => {
  await update($, viewAtom, () => view)
  await update($, viewSeqAtom, n => (n ?? 0) + 1)
}

let isOpen = false
/** Whether the browser view is on: then the state file is rewritten each second. */
let isViewing = false
let copiedTo: string | undefined

const OPEN_ARGS = { id: PANE, title: 'Eagle Eye', rows: 18, columns: 72 }

/** The agents and main record to draw: the real ones, or the demo cast. */
const current = async ($: StateDollar) => {
  const [agents, main, demo] = await Promise.all([read($, agentsAtom), read($, mainAtom), read($, demoAtom)])
  const now = Date.now()
  if (demo > 0) return { agents: demoAgents(demo, now), main: demoMain(demo, now, main.model), now }
  return { agents: Object.values(agents), main, now }
}

const patchAgent = async ($: StateDollar, id: string, fn: (a: AgentRec) => AgentRec, now: number) =>
  update($, agentsAtom, all => {
    const prev = all?.[id] ?? {
      id,
      name: '',
      type: 'agent',
      status: 'running' as AgentStatusWord,
      startedAt: now,
      contextTokens: 0,
      outputTokens: 0,
      toolCalls: 0,
    }
    return { ...(all ?? {}), [id]: fn(prev) }
  }).catch(() => undefined)

const patchMain = async ($: StateDollar, fn: (m: MainRec) => MainRec) => {
  try {
    await update($, mainAtom, m => fn(m))
  } catch {
    // Observing only: a lost update is redrawn by the next one.
  }
}

/** Tokens a request was answered over plus what it wrote: what its next request re-sends. */
const contextOf = (u: {
  input_tokens: number
  cache_read_input_tokens: number
  cache_creation_input_tokens: number
  output_tokens: number
}) => u.input_tokens + u.cache_read_input_tokens + u.cache_creation_input_tokens + u.output_tokens

const fromListStatus = (s: string): AgentStatusWord | undefined =>
  ({
    pending: 'waiting',
    running: 'running',
    waiting: 'waiting',
    idle: 'idle',
    completed: 'completed',
    failed: 'failed',
    killed: 'stopped',
  })[s] as AgentStatusWord | undefined

/**
 * Where live pages live: outside the plugin's folder, so the state files
 * rewritten each second never reload the mod (~/.claude/agents-eagle-eye-live).
 */
const liveBase = (pluginRoot: string): string => {
  const parts = pluginRoot.replace(/\\/g, '/').split('/')
  const at = parts.lastIndexOf('.claude')
  const base = at > 0 ? parts.slice(0, at + 1) : parts.slice(0, -1)
  return `${base.join('/')}/agents-eagle-eye-live`
}

/**
 * This session's own folder under it, by session id: each session writes its
 * own page and state, so two sessions never overwrite each other's view.
 */
const liveDir = async ($: EngineInterface): Promise<string> => `${liveBase($.plugin.root)}/${(await $.session.id()).replace(/[^\w-]/g, '')}`

const pageUrl = (dir: string) => (dir.startsWith('/') ? `file://${dir}/index.html` : `file:///${dir}/index.html`)

type Files = { fs: { read: (path: string) => Promise<unknown>; write: (path: string, text: string) => Promise<void> } }

/** Copies the page into the live folder, once per load so a rebuilt page reaches it. */
const ensurePage = async ($: Files, root: string, dir: string) => {
  if (copiedTo === dir) return
  for (const name of WEB_FILES) {
    // A file that cannot be read is skipped, so a missing 3D bundle never breaks the mod.
    let text: unknown
    try {
      text = await $.fs.read(`${root}/web/${name}`)
    } catch {
      continue
    }
    if (text === undefined || text === null) continue
    await $.fs.write(`${dir}/${name}`, String(text))
  }
  copiedTo = dir
}

/** The project folder's name, so a tab says whose session it shows. */
const projectName = async ($: EngineInterface) => {
  const cwd = (await $.session.cwd()).replace(/\\/g, '/').replace(/\/+$/, '')
  return cwd.slice(cwd.lastIndexOf('/') + 1) || cwd
}

/** What the page draws: the design's agent records, as of now. */
const liveState = async ($: EngineInterface) => {
  const { agents, main, now } = await current($)
  const demo = (await read($, demoAtom)) > 0
  const [view, viewSeq] = await Promise.all([read($, viewAtom), read($, viewSeqAtom)])
  return {
    view,
    viewSeq,
    model: prettyModel(main.model).replace(/^Claude /, ''),
    session: `${await projectName($)} · ${(await $.session.id()).slice(0, 8)}`,
    demo,
    updatedAt: now,
    agents: agents.map(a => ({
      id: a.id,
      name: displayName(a),
      icon: iconFor(a.type, a.name),
      status: designStatus(a.status),
      tokens: a.contextTokens,
      seconds: Math.max(0, ((a.endedAt ?? now) - a.startedAt) / 1000),
    })),
  }
}

const writeState = async ($: EngineInterface, dir: string) =>
  $.fs.write(`${dir}/state.js`, `window.__eagleEye && window.__eagleEye(${JSON.stringify(await liveState($))})\n`)

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: COMMAND,
      description: 'Eagle Eye: watch the main agent and every subagent live (args: demo | 3d | 2d | close)',
      argumentHint: '[demo|3d|2d|close]',
    })

    const usage = await $.session.usage()
    await patchMain($, m => ({
      ...m,
      startedAt: m.startedAt || usage.startedAt,
      window: usage.context.window || m.window || 200_000,
      contextTokens: usage.context.tokens ?? m.contextTokens,
    }))

    // Once a second: reconcile with the engine's agent list, rewrite the live
    // view's state, and redraw the pane so its timers tick.
    $.clock.every(1000, () => {
      void (async () => {
        const u = await $.session.usage()
        await patchMain($, m => ({
          ...m,
          window: u.context.window || m.window,
          contextTokens: u.context.tokens ?? m.contextTokens,
        }))
        const listed = await $.agent.list()
        const now = Date.now()
        for (const info of listed) {
          const status = fromListStatus(info.status)
          await patchAgent(
            $,
            info.id,
            a => ({
              ...a,
              name: a.name || info.name || info.description,
              type: a.type === 'agent' ? info.type : a.type,
              parentId: a.parentId ?? info.parentId,
              // Ours is finer while it lives (thinking vs running); the list wins once it ends.
              status: status && (!isLive(status) || !isLive(a.status) || status !== 'running') ? status : a.status,
              endedAt: status && !isLive(status) ? (a.endedAt ?? now) : a.endedAt,
            }),
            now,
          )
        }
        if (isViewing) {
          const dir = await liveDir($)
          await ensurePage($, $.plugin.root, dir)
          await writeState($, dir)
        }
        if (isOpen) $.ui.invalidate('ui.render')
      })().catch(() => undefined)
    })

    return next(e)
  })

  on('command.run', { command: COMMAND }, async ($, e) => {
    const arg = e.args.trim().toLowerCase()
    if (arg === 'close') {
      await $.ui.close({ id: PANE })
      isOpen = false
      isViewing = false
      return { text: 'Eagle Eye closed. The browser tab stops updating.' }
    }
    if (arg === 'demo') {
      const isDemo = (await read($, demoAtom)) === 0
      await update($, demoAtom, () => (isDemo ? Date.now() : 0))
    }
    if (arg === '3d' || arg === '2d') await setView($, arg)
    const dir = await liveDir($)
    await ensurePage($, $.plugin.root, dir)
    await writeState($, dir)
    // Open the browser only when the view was off; a demo toggle reaches an open tab by itself.
    if (!isViewing) await openInBrowser($, dir)
    isViewing = true
    const opened = await $.ui.open(OPEN_ARGS)
    isOpen = opened.isPlaced
    const demo = (await read($, demoAtom)) > 0
    return {
      text:
        arg === '3d' || arg === '2d'
          ? `Eagle Eye view: ${arg.toUpperCase()}.`
          : arg === 'demo'
          ? `Eagle Eye demo ${demo ? 'on: the sample cast' : 'off: your real agents'}.`
          : `Eagle Eye live view opened in your browser: ${pageUrl(dir)}`,
    }
  })

  on('ui.close', { id: PANE }, ($, e, next) => {
    isOpen = false
    return next(e)
  }).catch(($, e, next) => (next.called ? undefined : next(e)))

  // A subagent starts: record who it is and who spawned it.
  on('agent.spawn', async ($, e, next) => {
    const started = await next(e)
    if ('agentId' in started && started.agentId) {
      const now = Date.now()
      await patchAgent(
        $,
        started.agentId,
        a => ({
          ...a,
          name: e.name || e.description || a.name,
          type: e.subagentType || a.type,
          model: started.model,
          parentId: e.parentAgentId,
          status: a.status === 'thinking' ? 'thinking' : 'running',
          startedAt: Math.min(a.startedAt, now),
        }),
        now,
      )
    }
    return started
  }).catch(($, e, next) => (next.called ? Promise.reject(new Error('agents-eagle-eye: agent.spawn observer failed')) : next(e)))

  // Each model request: thinking while it streams, then its context size.
  on('turn.step', async function* ($, e, next) {
    const now = Date.now()
    if (e.agentId) {
      await patchAgent($, e.agentId, a => ({ ...a, status: 'thinking', endedAt: undefined, model: a.model ?? e.model }), now)
    } else {
      await patchMain($, m => ({ ...m, status: 'thinking', model: e.model }))
    }
    const res = yield* next(e)
    const usage = res.usage
    const status: AgentStatusWord = res.toolUses.length > 0 ? 'running' : 'thinking'
    if (e.agentId) {
      await patchAgent(
        $,
        e.agentId,
        a => ({
          ...a,
          status: isLive(a.status) ? status : a.status,
          contextTokens: usage ? contextOf(usage) : a.contextTokens,
          outputTokens: a.outputTokens + (usage?.output_tokens ?? 0),
          model: usage?.model ?? a.model,
        }),
        now,
      )
    } else {
      await patchMain($, m => ({
        ...m,
        status,
        model: usage?.model ?? m.model,
        contextTokens: usage ? contextOf(usage) : m.contextTokens,
        outputTokens: m.outputTokens + (usage?.output_tokens ?? 0),
      }))
    }
    return res
  })

  // Each tool call: running, and which tool.
  on('tool.call', async ($, e, next) => {
    const now = Date.now()
    if (e.agentId) {
      await patchAgent($, e.agentId, a => ({ ...a, status: 'running', toolCalls: a.toolCalls + 1, lastTool: e.tool }), now)
    } else {
      await patchMain($, m => ({ ...m, status: 'running' }))
    }
    return next(e)
  }).catch(($, e, next) => (next.called ? Promise.reject(new Error('agents-eagle-eye: tool.call observer failed')) : next(e)))

  on('turn.start', async ($, e, next) => {
    await patchMain($, m => ({ ...m, status: 'thinking' }))
    return next(e)
  })

  // A turn ends: a subagent's run is over; the main agent goes idle.
  on('turn.complete', async ($, e, next) => {
    const now = Date.now()
    const status: AgentStatusWord = e.reason === 'answer' ? 'completed' : e.reason === 'aborted' ? 'stopped' : 'failed'
    if (e.agentId) {
      await patchAgent($, e.agentId, a => ({ ...a, status, endedAt: now }), now)
    } else {
      await patchMain($, m => ({ ...m, status: e.reason === 'answer' ? 'idle' : status === 'failed' ? 'failed' : 'idle' }))
    }
    return next(e)
  })

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e) => {
    isOpen = true
    const { Box, Text, Button } = $.ui.resolve(e)
    // Only the remote surfaces have an Svg element; the terminal's table does not.
    const Svg = e.surface === 'terminal' ? undefined : $.ui.resolve(e).Svg
    // A breadcrumb for debugging an empty pane: what the last draw was and whether it threw.
    const note = (line: string) =>
      void liveDir($)
        .then(dir => $.fs.write(`${dir}/render.log`, `${new Date().toISOString()} ${line}
`))
        .catch(() => undefined)
    try {
      const { agents, main, now } = await current($)
      const view = await read($, viewAtom)
      const room = Math.max(3, (e.props.scroll?.bodyRows ?? 24) - (e.surface === 'terminal' ? 3 : 22))
      const rows = [...agents].sort((a, b) => Number(isLive(b.status)) - Number(isLive(a.status))).slice(0, room)
      const live = agents.filter(a => isLive(a.status)).length
      note(`ok surface=${e.surface} agents=${agents.length} bodyColumns=${e.props.bodyColumns} bodyRows=${e.props.scroll?.bodyRows}`)
      return (
        <Box flexDirection="column">
          <Text bold>{`Eagle Eye · ${prettyModel(main.model).replace(/^Claude /, '')} · ${live} live / ${agents.length} agents`}</Text>
          {Svg && (
            <Svg
              source={view === '3d' ? renderMini3D(main, agents, now) : renderMini(main, agents, now)}
              alt={`Orchestrator with ${agents.length} agents, ${live} live`}
              isInteractive
            />
          )}
          <Button
            key="view"
            plain
            onPress={() => {
              // Persist on press, never during render; the next redraw shows it.
              void setView($, view === '3d' ? '2d' : '3d')
                .then(() => $.ui.invalidate('ui.render'))
                .catch(() => undefined)
            }}
          >
            {view === '3d' ? 'View: 3D · switch to 2D' : 'View: 2D · switch to 3D'}
          </Button>
          {rows.map(a => (
            <Box flexDirection="row" gap={1}>
              <Text color={STATUS_COLOR[a.status]}>{`● ${STATUS_LABEL[a.status].padEnd(9)}`}</Text>
              <Text bold wrap="truncate">
                {displayName(a).padEnd(18)}
              </Text>
              <Text dimColor wrap="truncate">
                {`${formatTokens(a.contextTokens).padStart(5)} · ${formatDuration((a.endedAt ?? now) - a.startedAt)}${a.lastTool ? ` · ${a.lastTool}` : ''}`}
              </Text>
            </Box>
          ))}
          {agents.length === 0 && <Text dimColor>{`No subagents yet. /${COMMAND} demo shows a sample cast.`}</Text>}
        </Box>
      )
    } catch (err) {
      const why = err instanceof Error ? err.message : String(err)
      note(`error surface=${e.surface} ${why}`)
      return <Text color="#f87171">{`Eagle Eye could not draw: ${why}`}</Text>
    }
  })
}

/** Opens the live page in the default browser. */
const openInBrowser = async ($: { process: { run: (argv: readonly string[]) => Promise<unknown> } }, dir: string) => {
  const tries: string[][] = /^[A-Za-z]:/.test(dir)
    ? [['explorer.exe', `${dir.replace(/\//g, '\\')}\\index.html`]]
    : [
        ['open', pageUrl(dir)],
        ['xdg-open', pageUrl(dir)],
      ]
  for (const argv of tries) {
    try {
      await $.process.run(argv)
      return
    } catch {
      // Not on this platform: try the next opener.
    }
  }
}
