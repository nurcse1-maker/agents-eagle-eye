import { ICON_COLOR } from './palette';
import type { AgentIcon, RGB } from './palette';
import type { AgentStatus } from './status';

export interface AgentSpec {
  id: string;
  name: string;
  icon: AgentIcon;
  status: AgentStatus;
  /** Total tokens used so far (raw number, e.g. 312000). */
  tokens: number;
  /** Elapsed seconds. */
  seconds: number;
  /** Icon centre in the 1024x1536 design canvas. */
  x: number;
  y: number;
  radius?: number;
  /** Accent colour (RGB 0-255). */
  color: RGB;
}

/** A fresh copy of an icon's palette colour (agents never share colour arrays). */
const col = (icon: AgentIcon): RGB => [...ICON_COLOR[icon]];

export const DEFAULT_AGENTS: AgentSpec[] = [
  { id: 'planner',  name: 'Planner Agent',      icon: 'doc',      status: 'running',   tokens: 312000, seconds: 501,  x: 467, y: 158,  radius: 66, color: col('doc') },
  { id: 'research', name: 'Research Agent',     icon: 'search',   status: 'running',   tokens: 423000, seconds: 734,  x: 198, y: 298,  radius: 62, color: col('search') },
  { id: 'code',     name: 'Code Agent',         icon: 'code',     status: 'running',   tokens: 621000, seconds: 948,  x: 735, y: 315,  radius: 64, color: col('code') },
  { id: 'email',    name: 'Email Agent',        icon: 'mail',     status: 'stopped',   tokens: 0,      seconds: 0,    x: 117, y: 473,  radius: 48, color: col('mail') },
  { id: 'analysis', name: 'Analysis Agent',     icon: 'chart',    status: 'thinking',  tokens: 198000, seconds: 392,  x: 777, y: 568,  radius: 60, color: col('chart') },
  { id: 'vision',   name: 'Vision Agent',       icon: 'image',    status: 'running',   tokens: 391000, seconds: 716,  x: 101, y: 637,  radius: 60, color: col('image') },
  { id: 'notify',   name: 'Notification Agent', icon: 'bell',     status: 'stopped',   tokens: 0,      seconds: 0,    x: 815, y: 763,  radius: 42, color: col('bell') },
  { id: 'web',      name: 'Web Agent',          icon: 'globe',    status: 'completed', tokens: 154000, seconds: 462,  x: 128, y: 886,  radius: 61, color: col('globe') },
  { id: 'writer',   name: 'Writer Agent',       icon: 'pencil',   status: 'idle',      tokens: 42000,  seconds: 131,  x: 805, y: 922,  radius: 57, color: col('pencil') },
  { id: 'api',      name: 'API Agent',          icon: 'api',      status: 'offline',   tokens: 0,      seconds: 0,    x: 98,  y: 1108, radius: 43, color: col('api') },
  { id: 'executor', name: 'Executor Agent',     icon: 'gear',     status: 'running',   tokens: 512000, seconds: 1083, x: 724, y: 1084, radius: 61, color: col('gear') },
  { id: 'db',       name: 'DB Agent',           icon: 'database', status: 'running',   tokens: 287000, seconds: 557,  x: 350, y: 1170, radius: 61, color: col('database') },
  { id: 'qa',       name: 'QA Agent',           icon: 'check',    status: 'waiting',   tokens: 0,      seconds: 0,    x: 660, y: 1270, radius: 57, color: col('check') },
];
