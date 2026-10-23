import type { RGB } from './palette';

export type AgentStatus =
  | 'running'
  | 'thinking'
  | 'waiting'
  | 'idle'
  | 'completed'
  | 'stopped'
  | 'offline';

export interface StatusCfg {
  label: string;
  dot: RGB;
  /** how "alive" the node looks (glow, strands, colour saturation) */
  power: number;
  /** packet traffic multiplier */
  flow: number;
  /** ring spin multiplier */
  spin: number;
  /** token/time rates per second (0 = frozen) */
  tokenRate: number;
  ticks: boolean;
}

export const STATUS: Record<AgentStatus, StatusCfg> = {
  running:   { label: 'Running',   dot: [46, 255, 150],  power: 1,    flow: 1,    spin: 1,   tokenRate: 300, ticks: true },
  thinking:  { label: 'Thinking',  dot: [255, 196, 78],  power: 0.9,  flow: 0.6,  spin: 2.2, tokenRate: 110, ticks: true },
  waiting:   { label: 'Waiting',   dot: [255, 184, 82],  power: 0.62, flow: 0.25, spin: 0.35, tokenRate: 0,  ticks: false },
  idle:      { label: 'Idle',      dot: [44, 200, 255],  power: 0.7,  flow: 0.2,  spin: 0.3, tokenRate: 0,   ticks: false },
  completed: { label: 'Completed', dot: [118, 228, 255], power: 0.3,  flow: 0,    spin: 0,   tokenRate: 0,   ticks: false },
  stopped:   { label: 'Stopped',   dot: [118, 126, 160], power: 0.04, flow: 0,    spin: 0,   tokenRate: 0,   ticks: false },
  offline:   { label: 'Offline',   dot: [118, 126, 160], power: 0.04, flow: 0,    spin: 0,   tokenRate: 0,   ticks: false },
};

/** Done with their work: drawn small, dim and wordless, a little behind the live agents. */
export const FINISHED = new Set<AgentStatus>(['completed', 'stopped', 'offline']);
export const LIVE = new Set<AgentStatus>(['running', 'thinking', 'waiting']);
export const HALTED = new Set<AgentStatus>(['stopped', 'offline']);

export const NEXT_STATUS: Record<AgentStatus, AgentStatus[]> = {
  running:   ['thinking', 'completed', 'waiting', 'running'],
  thinking:  ['running', 'completed'],
  waiting:   ['running', 'thinking'],
  idle:      ['running', 'waiting'],
  completed: ['idle', 'running'],
  stopped:   ['running'],
  offline:   ['running'],
};

/** Colour a node fades toward as its power drops. */
export const GREY: RGB = [112, 120, 156];
