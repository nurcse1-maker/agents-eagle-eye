import { ICON_COLOR } from './palette'
import type { AgentIcon } from './palette'
import type { AgentSpec } from './defaults'
import type { AgentStatus } from './status'

/** The portrait design canvas (2D L68-72). Design coordinates of agents live on it. */
export const DESIGN_W = 1024
export const DESIGN_H = 1536
export const DESIGN_CX = 512
export const DESIGN_CY = 755

export interface RingSlot {
  x: number
  y: number
  radius: number
}

/**
 * Spreads agent `i` of `n` round the orchestrator on the design canvas, from the top-left, clockwise.
 * Pure; shared by the 2D bridge and the 3D world (formerly bridge.ts toSpecs).
 */
export const ringPlacement = (i: number, n: number, status: AgentStatus): RingSlot => {
  const angle = (-110 * Math.PI) / 180 + (i / Math.max(1, n)) * Math.PI * 2
  const ring = n > 8 ? (i % 2 === 0 ? 1 : 0.8) : 0.94
  const quiet = status === 'stopped' || status === 'offline'
  return {
    x: Math.min(924, Math.max(100, DESIGN_CX + Math.cos(angle) * 380 * ring)),
    y: DESIGN_CY + Math.sin(angle) * 580 * ring,
    radius: quiet ? 45 : 60,
  }
}

/** The part of a live agent that placement needs (structurally compatible with bridge LiveAgent). */
export interface PlaceableAgent {
  id: string
  name: string
  icon: AgentIcon
  status: AgentStatus
  tokens: number
  seconds: number
}

/** Live agents -> design specs: ring position, radius and icon colour. Shared by the 2D bridge and the 3D world. */
export const toSpecs = (agents: PlaceableAgent[]): AgentSpec[] =>
  agents.map((a, i) => ({
    ...a,
    ...ringPlacement(i, agents.length, a.status),
    color: ICON_COLOR[a.icon],
  }))
