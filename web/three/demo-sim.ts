/**
 * Demo "simulate" mode (2D update L950-962): once the clock passes 4 s a timer of 4.5..8.5 s picks a random agent and
 * moves it to a random next status. Agents that are off (power < 0.1) only change 30% of the time. No three, no DOM.
 * The status change itself goes through `apply` (world.setStatus), which starts the launch / nova / generic fx.
 */
import { NEXT_STATUS, STATUS } from '../shared/status'
import type { AgentStatus } from '../shared/status'
import type { AgentState } from './world'

/** 2D L479: the timer starts at 4 and counts down from the first frame. */
export const SIM_START = 4
export const SIM_AFTER = 4

export class DemoSim {
  simT = SIM_START

  /** One sub-step. Allocates only when it fires (every 4.5..8.5 s). */
  step(dt: number, time: number, agents: ReadonlyMap<string, AgentState>, rand: () => number, apply: (a: AgentState, s: AgentStatus) => void): boolean {
    this.simT -= dt
    if (this.simT > 0 || time <= SIM_AFTER) return false
    this.simT = 4.5 + rand() * 4
    if (agents.size === 0) return false
    const list = [...agents.values()]
    const a = list[Math.floor(rand() * list.length)]
    const off = STATUS[a.spec.status].power < 0.1
    if (off && rand() >= 0.3) return false
    const opts = NEXT_STATUS[a.spec.status]
    const next = opts[Math.floor(rand() * opts.length)]
    if (next === a.spec.status) return false
    apply(a, next)
    return true
  }
}
