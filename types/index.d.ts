export type AgentStatusWord =
  | 'running'
  | 'thinking'
  | 'waiting'
  | 'idle'
  | 'completed'
  | 'failed'
  | 'stopped'
  | 'offline'

export type AgentRec = {
  id: string
  parentId?: string
  name: string
  type: string
  model?: string
  status: AgentStatusWord
  startedAt: number
  endedAt?: number
  contextTokens: number
  outputTokens: number
  toolCalls: number
  lastTool?: string
}

export type MainRec = {
  model?: string
  status: AgentStatusWord
  startedAt: number
  contextTokens: number
  window: number
  outputTokens: number
}

declare module 'claude-code' {
  interface PluginState {
    'agents-eagle-eye': {
      agents: Record<string, AgentRec>
      main: MainRec
      /** When demo mode started, in epoch ms; 0 when off. */
      demo: number
      /** Which browser view the mod last asked for. */
      view: '2d' | '3d'
      /** Bumped on every explicit view choice; the page applies `view` only when it changes. */
      viewSeq: number
    }
  }
}
