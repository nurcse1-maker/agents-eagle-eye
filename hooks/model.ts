import type { AgentRec, AgentStatusWord, MainRec } from '../types'

/** The agent-network design's icons. */
export type IconKind =
  | 'doc' | 'search' | 'code' | 'mail' | 'chart' | 'image' | 'bell'
  | 'globe' | 'pencil' | 'api' | 'gear' | 'database' | 'check'

/** The design's statuses: it has no 'failed', so a failed agent shows as stopped. */
export type DesignStatus = 'running' | 'thinking' | 'waiting' | 'idle' | 'completed' | 'stopped' | 'offline'

export const designStatus = (s: AgentStatusWord): DesignStatus => (s === 'failed' ? 'stopped' : s)

export const STATUS_LABEL: Record<AgentStatusWord, string> = {
  running: 'Running',
  thinking: 'Thinking',
  waiting: 'Waiting',
  idle: 'Idle',
  completed: 'Completed',
  failed: 'Failed',
  stopped: 'Stopped',
  offline: 'Offline',
}

export const STATUS_COLOR: Record<AgentStatusWord, string> = {
  running: '#22c55e',
  thinking: '#fbbf24',
  waiting: '#fb923c',
  idle: '#eab308',
  completed: '#60a5fa',
  failed: '#f87171',
  stopped: '#64748b',
  offline: '#475569',
}

const ICON_RULES: [RegExp, IconKind][] = [
  [/explor|research|search|find|locat|investigat/, 'search'],
  [/plan|architect|spec/, 'doc'],
  [/test|qa\b|verif|check/, 'check'],
  [/web|fetch|browser|http|url|chrome/, 'globe'],
  [/\bdb\b|sql|database|data\b|query/, 'database'],
  [/review|audit|inspect/, 'search'],
  [/vision|image|screenshot|design|figma|visual/, 'image'],
  [/analy|stat|metric|perf|bench/, 'chart'],
  [/mail|gmail|inbox/, 'mail'],
  [/notif|alert|push|bell/, 'bell'],
  [/\bapi\b|endpoint|graphql/, 'api'],
  [/write|writer|doc|readme|copy/, 'pencil'],
  [/code|codewright|implement|build|fix|refactor|edit|builder/, 'code'],
  [/exec|run|deploy|shell|general|task|worker/, 'gear'],
]

export const iconFor = (type: string, name: string): IconKind => {
  const words = `${type} ${name}`.toLowerCase()
  return ICON_RULES.find(([re]) => re.test(words))?.[1] ?? 'gear'
}

export const isLive = (s: AgentStatusWord) =>
  s === 'running' || s === 'thinking' || s === 'waiting' || s === 'idle'

export const formatTokens = (n: number): string => {
  if (n < 1000) return `${Math.round(n)}`
  if (n < 1_000_000) return `${Math.round(n / 1000)}K`
  return `${(n / 1_000_000).toFixed(n < 10_000_000 ? 2 : 1)}M`
}

export const formatDuration = (ms: number): string => {
  const s = Math.max(0, Math.floor(ms / 1000))
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  const two = (n: number) => String(n).padStart(2, '0')
  if (h > 0) return `${h}:${two(m)}:${two(sec)}`
  return `${m}:${two(sec)}`
}

/** `claude-opus-5-5` -> `Claude Opus 5.5`; anything else passes through. */
export const prettyModel = (id: string | undefined): string => {
  if (!id) return 'Claude'
  const m = /^claude-([a-z]+)-(\d+)(?:-(\d{1,2}))?(?:-\d{8})?/.exec(id)
  if (!m) return id
  const [, name = '', major = '', minor] = m
  const family = name.charAt(0).toUpperCase() + name.slice(1)
  return `Claude ${family} ${major}${minor ? `.${minor}` : ''}`
}

/** A subagent's name: its own, else its description, else its type, title-cased. */
export const displayName = (rec: Pick<AgentRec, 'name' | 'type'>): string => {
  const raw = (rec.name || rec.type || 'Agent').trim()
  const titled = raw.replace(/(^|[\s_-])([a-z])/g, (_, sep: string, c: string) =>
    (sep === '_' || sep === '-' ? ' ' : sep) + c.toUpperCase(),
  )
  return titled.length > 22 ? `${titled.slice(0, 21)}…` : titled
}

type DemoSpec = [name: string, type: string, status: AgentStatusWord, tokensK: number, elapsedS: number]

// The reference picture's cast, clockwise from the top-left.
const DEMO: DemoSpec[] = [
  ['Research Agent', 'research', 'running', 423, 734],
  ['Planner Agent', 'Plan', 'running', 312, 501],
  ['Code Agent', 'code', 'running', 621, 948],
  ['Analysis Agent', 'analysis', 'thinking', 198, 392],
  ['Notification Agent', 'notification', 'stopped', 0, 0],
  ['Writer Agent', 'writer', 'idle', 42, 131],
  ['Executor Agent', 'executor', 'running', 512, 1083],
  ['QA Agent', 'qa', 'waiting', 0, 0],
  ['DB Agent', 'db', 'running', 287, 557],
  ['API Agent', 'api', 'offline', 0, 0],
  ['Web Agent', 'web', 'completed', 154, 462],
  ['Vision Agent', 'vision', 'running', 391, 716],
  ['Email Agent', 'email', 'stopped', 0, 0],
]

/** The demo cast as of `now`: running agents keep growing context while it runs. */
export const demoAgents = (since: number, now: number): AgentRec[] => {
  const ran = (now - since) / 1000
  return DEMO.map(([name, type, status, tokensK, elapsedS], i) => {
    const grows = status === 'running' || status === 'thinking'
    const startedAt = since - elapsedS * 1000 + i
    return {
      id: `demo-${i}`,
      name,
      type,
      status,
      startedAt,
      endedAt: grows || status === 'idle' || status === 'waiting' ? undefined : startedAt + elapsedS * 1000,
      contextTokens: tokensK * 1000 + (grows ? Math.round(ran * (180 + i * 37)) : 0),
      outputTokens: 0,
      toolCalls: 0,
    }
  })
}

export const demoMain = (since: number, now: number, model: string | undefined): MainRec => ({
  model: model ?? 'claude-opus-5-5',
  status: 'running',
  startedAt: since - 1_402_000,
  contextTokens: 412_000 + Math.round((now - since) / 1000) * 90,
  window: 1_000_000,
  outputTokens: 0,
})
