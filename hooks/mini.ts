import type { AgentRec, AgentStatusWord, MainRec } from '../types'
import type { IconKind } from './model'
import { STATUS_COLOR, STATUS_LABEL, displayName, formatDuration, formatTokens, iconFor, isLive, prettyModel } from './model'

/**
 * The pane's small picture: the browser view's idea (orchestrator in the
 * middle, agents round it, light running along the links) as one animated
 * SVG a desktop pane can draw. Few shapes, no filters, well under the limit.
 */

export const MINI_W = 640
export const MINI_H = 440
const MAX_NODES = 8
const NODE_R = 19
const CORE_R = 38

const COLOR: Record<IconKind, string> = {
  doc: '#3496ff',
  search: '#28afff',
  code: '#b252ff',
  mail: '#96a0eb',
  chart: '#ffa834',
  image: '#34f270',
  bell: '#96a0eb',
  globe: '#96e2ff',
  pencil: '#34acff',
  api: '#96a0eb',
  gear: '#58ff52',
  database: '#ffa234',
  check: '#ffac3e',
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const f = (n: number) => String(Math.round(n * 10) / 10)

/** Every live agent first, then the newest finished, in spawn order. */
export const pickNodes = (agents: AgentRec[]): { shown: AgentRec[]; hidden: number } => {
  const live = agents.filter(a => isLive(a.status))
  const done = agents.filter(a => !isLive(a.status)).sort((a, b) => (b.endedAt ?? b.startedAt) - (a.endedAt ?? a.startedAt))
  const ids = new Set([...live, ...done].slice(0, MAX_NODES).map(a => a.id))
  const shown = agents.filter(a => ids.has(a.id))
  return { shown, hidden: agents.length - shown.length }
}

/** Done with its work: drawn small, dim and wordless, and a little behind the live ones. */
const finished = (s: AgentStatusWord) => s === 'completed' || s === 'stopped' || s === 'offline'
const DONE_R = 10

const quiet = (s: AgentStatusWord) => s === 'stopped' || s === 'offline' || s === 'failed'

/** `now` phases the animations, so a redraw each second carries on instead of restarting. */
export const renderMini = (main: MainRec, agents: AgentRec[], now: number): string => {
  const sec = now / 1000
  const begin = (dur: number, off = 0) => `-${f((((sec + off) % dur) + dur) % dur)}s`
  const { shown, hidden } = pickNodes(agents)
  const cx = MINI_W / 2
  const cy = MINI_H / 2
  const window = main.window || 200_000
  const out: string[] = []

  out.push(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${MINI_W} ${MINI_H}" width="${MINI_W}" height="${MINI_H}" font-family="Inter,'Segoe UI',system-ui,sans-serif">`,
    `<defs><radialGradient id="bg" cx="50%" cy="46%" r="75%"><stop offset="0" stop-color="#101c4e"/><stop offset=".55" stop-color="#060c26"/><stop offset="1" stop-color="#03040f"/></radialGradient>` +
      `<radialGradient id="halo"><stop offset=".35" stop-color="#4f7bff" stop-opacity=".45"/><stop offset="1" stop-color="#7c3aed" stop-opacity="0"/></radialGradient>` +
      `<linearGradient id="rim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22d3ee"/><stop offset=".5" stop-color="#60a5fa"/><stop offset="1" stop-color="#a855f7"/></linearGradient></defs>`,
    `<rect width="${MINI_W}" height="${MINI_H}" rx="14" fill="url(#bg)"/>`,
  )

  // A few fixed stars, so the sky isn't flat.
  for (let i = 0; i < 46; i++) {
    const x = (i * 97 + 31) % MINI_W
    const y = (i * 61 + 17) % MINI_H
    const tw = i % 5 === 0
    out.push(
      `<circle cx="${x}" cy="${y}" r="${i % 7 === 0 ? 1.3 : 0.8}" fill="#d6e6ff" opacity="${i % 3 === 0 ? 0.7 : 0.35}">` +
        (tw ? `<animate attributeName="opacity" values=".8;.15;.8" dur="${3 + (i % 4)}s" begin="${begin(3 + (i % 4), i)}" repeatCount="indefinite"/>` : '') +
        '</circle>',
    )
  }

  // Links, then nodes, so the lines pass behind the circles.
  const n = shown.length
  const places = shown.map((a, i) => {
    const ang = -Math.PI / 2 + (i / Math.max(1, n)) * Math.PI * 2
    const reach = finished(a.status) ? 1.08 : 1
    return { a, x: cx + Math.cos(ang) * 236 * reach, y: cy + Math.sin(ang) * 140 * reach, i, done: finished(a.status) }
  })

  for (const { a, x, y, i, done } of places) {
    const col = quiet(a.status) ? '#475569' : COLOR[iconFor(a.type, a.name)]
    const rim = done ? DONE_R : NODE_R
    const dx = x - cx
    const dy = y - cy
    const len = Math.hypot(dx, dy) || 1
    const ax = cx + (dx / len) * (CORE_R + 4)
    const ay = cy + (dy / len) * (CORE_R + 4)
    const bx = x - (dx / len) * (rim + 3)
    const by = y - (dy / len) * (rim + 3)
    const bow = i % 2 === 0 ? 0.18 : -0.18
    const qx = (ax + bx) / 2 - (by - ay) * bow
    const qy = (ay + by) / 2 + (bx - ax) * bow
    const d = `M${f(ax)} ${f(ay)}Q${f(qx)} ${f(qy)} ${f(bx)} ${f(by)}`
    out.push(
      done
        ? `<path id="l${i}" d="${d}" fill="none" stroke="#475569" stroke-width="1" opacity=".22" stroke-dasharray="2 6"/>`
        : `<path id="l${i}" d="${d}" fill="none" stroke="${col}" stroke-width="${quiet(a.status) ? 1 : 1.8}" opacity="${quiet(a.status) ? 0.4 : 0.75}"${quiet(a.status) ? ' stroke-dasharray="2 6"' : ''}/>`,
    )
    const flows = a.status === 'running' ? 2 : a.status === 'thinking' ? 1 : 0
    const dur = a.status === 'running' ? 2.2 : 3.4
    for (let k = 0; k < flows; k++) {
      out.push(
        `<circle r="3.2" fill="#f0f9ff"><animateMotion dur="${dur}s" begin="${begin(dur, (k * dur) / 2 + i * 0.3)}" repeatCount="indefinite"><mpath href="#l${i}"/></animateMotion></circle>`,
      )
    }
  }

  // The orchestrator.
  out.push(
    `<circle cx="${cx}" cy="${cy}" r="86" fill="url(#halo)"><animate attributeName="r" values="80;92;80" dur="4s" begin="${begin(4)}" repeatCount="indefinite"/></circle>`,
    `<circle cx="${cx}" cy="${cy}" r="${CORE_R}" fill="#0a1442" stroke="url(#rim)" stroke-width="3.5"/>`,
    `<circle cx="${cx}" cy="${cy}" r="${CORE_R + 9}" fill="none" stroke="#a78bfa" stroke-width="1.2" stroke-dasharray="3 7" opacity=".7"><animateTransform attributeName="transform" type="rotate" from="0 ${cx} ${cy}" to="360 ${cx} ${cy}" dur="40s" begin="${begin(40)}" repeatCount="indefinite"/></circle>`,
  )
  const coreLen = 2 * Math.PI * (CORE_R + 5)
  const coreFill = Math.min(1, main.contextTokens / window)
  if (coreFill > 0.004) {
    out.push(
      `<circle cx="${cx}" cy="${cy}" r="${CORE_R + 5}" fill="none" stroke="#38bdf8" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="${f(coreFill * coreLen)} ${f(coreLen)}" transform="rotate(-90 ${cx} ${cy})"/>`,
    )
  }
  out.push(
    `<text x="${cx}" y="${cy - 2}" text-anchor="middle" font-size="13" font-weight="600" fill="#f8fafc">Orchestrator</text>`,
    `<text x="${cx}" y="${cy + 13}" text-anchor="middle" font-size="10.5" fill="#94a3b8">${esc(prettyModel(main.model).replace(/^Claude /, ''))}</text>`,
    `<text x="${cx}" y="${cy + 26}" text-anchor="middle" font-size="9.5" fill="#7dd3fc">${formatTokens(main.contextTokens)} ctx</text>`,
  )

  // The agents: finished ones first, so the live ones draw over them.
  for (const { a, x, y, done } of places.filter(p => p.done)) {
    const tone = a.status === 'completed' ? '#5f86b8' : '#475569'
    out.push(
      `<g transform="translate(${f(x)} ${f(y)})" opacity=".55"><title>${esc(displayName(a))} · ${STATUS_LABEL[a.status]} · ${formatTokens(a.contextTokens)} · ${formatDuration((a.endedAt ?? now) - a.startedAt)}</title>` +
        `<circle r="${DONE_R}" fill="#070b1f" stroke="${tone}" stroke-width="1.4"/>` +
        (a.status === 'completed' && done
          ? `<path d="M-3.6 .4l2.4 2.4 4.8-5" stroke="${tone}" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
          : '') +
        '</g>',
    )
  }
  for (const { a, x, y, i } of places.filter(p => !p.done)) {
    const dim = quiet(a.status)
    const col = a.status === 'failed' ? '#ef4444' : dim ? '#475569' : COLOR[iconFor(a.type, a.name)]
    const dot = STATUS_COLOR[a.status]
    const active = a.status === 'running' || a.status === 'thinking'
    const fill = Math.min(1, a.contextTokens / window)
    const arcLen = 2 * Math.PI * (NODE_R + 5)
    const ended = a.endedAt ?? now
    out.push(`<g transform="translate(${f(x)} ${f(y)})">`)
    if (!dim) {
      out.push(
        `<circle r="${NODE_R + 14}" fill="${col}" opacity=".13">${active ? `<animate attributeName="opacity" values=".08;.22;.08" dur="3s" begin="${begin(3, i)}" repeatCount="indefinite"/>` : ''}</circle>`,
      )
    }
    if (a.status === 'running') {
      out.push(
        `<circle r="${NODE_R}" fill="none" stroke="${col}" stroke-width="1.6"><animate attributeName="r" values="${NODE_R};${NODE_R + 14}" dur="2.2s" begin="${begin(2.2, i * 0.4)}" repeatCount="indefinite"/><animate attributeName="stroke-opacity" values=".8;0" dur="2.2s" begin="${begin(2.2, i * 0.4)}" repeatCount="indefinite"/></circle>`,
      )
    }
    out.push(`<circle r="${NODE_R}" fill="#070b1f" stroke="${col}" stroke-width="${dim ? 1.5 : 2.6}"/>`)
    if (!dim && fill > 0.004) {
      out.push(
        `<circle r="${NODE_R + 5}" fill="none" stroke="${col}" stroke-width="2" stroke-linecap="round" stroke-dasharray="${f(Math.max(1, fill * arcLen))} ${f(arcLen)}" transform="rotate(-90)" opacity=".9"/>`,
      )
    }
    if (a.status === 'thinking') {
      out.push(
        `<circle r="${NODE_R + 5}" fill="none" stroke="${dot}" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="14 ${f(arcLen - 14)}"><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="1.4s" begin="${begin(1.4)}" repeatCount="indefinite"/></circle>`,
      )
    }
    // An initial stands in for the icon: names are the point, not glyphs.
    out.push(`<text y="5.5" text-anchor="middle" font-size="15" font-weight="700" fill="${dim ? '#64748b' : col}">${esc(displayName(a).charAt(0).toUpperCase())}</text>`)
    if (a.status === 'completed') {
      out.push(`<g transform="translate(14 -14)"><circle r="7" fill="#0b1530" stroke="#60a5fa" stroke-width="1.3"/><path d="M-3 .2l2 2 4-4.2" stroke="#bfdbfe" stroke-width="1.6" fill="none" stroke-linecap="round"/></g>`)
    }
    const name = displayName(a).replace(/ Agent$/, '')
    out.push(
      `<text y="${NODE_R + 20}" text-anchor="middle" font-size="12" font-weight="600" fill="${dim ? '#94a3b8' : '#f1f5f9'}">${esc(name.length > 18 ? `${name.slice(0, 17)}…` : name)}</text>`,
      `<circle cx="${-(STATUS_LABEL[a.status].length * 2.9 + 8)}" cy="${NODE_R + 30}" r="3" fill="${dot}"/>`,
      `<text x="-${f(STATUS_LABEL[a.status].length * 2.9 + 2)}" y="${NODE_R + 33.5}" font-size="10" fill="${dim ? '#64748b' : dot}">${STATUS_LABEL[a.status]}</text>`,
    )
    if (!dim || a.contextTokens > 0) {
      out.push(
        `<text y="${NODE_R + 46}" text-anchor="middle" font-size="10" fill="#94a3b8">${formatTokens(a.contextTokens)} · ${formatDuration(ended - a.startedAt)}</text>`,
      )
    }
    out.push('</g>')
  }

  if (hidden > 0) out.push(`<text x="16" y="${MINI_H - 14}" font-size="11" fill="#64748b">+${hidden} more</text>`)
  out.push('</svg>')
  return out.join('')
}

/**
 * The pane's pseudo-3D picture: agents orbit the orchestrator on a tilted
 * ellipse. Nodes are scaled by depth (nearer is bigger) and drawn back to
 * front; the orbit itself is SMIL (translate + scale sampled round the loop).
 * A redraw each second re-sorts by depth and carries the phase on.
 */
const ORBIT_S = 48
const STEPS = 24
const RX = 236
const RY = 80

export const renderMini3D = (main: MainRec, agents: AgentRec[], now: number): string => {
  const sec = now / 1000
  const cx = MINI_W / 2
  const cy = MINI_H / 2
  const { shown, hidden } = pickNodes(agents)
  const n = shown.length
  const begin = (off: number) => `-${f((((sec + off) % ORBIT_S) + ORBIT_S) % ORBIT_S)}s`
  const out: string[] = []
  out.push(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${MINI_W} ${MINI_H}" width="${MINI_W}" height="${MINI_H}" font-family="Inter,'Segoe UI',system-ui,sans-serif">`,
    `<defs><radialGradient id="bg" cx="50%" cy="46%" r="75%"><stop offset="0" stop-color="#101c4e"/><stop offset=".55" stop-color="#060c26"/><stop offset="1" stop-color="#03040f"/></radialGradient>` +
      `<radialGradient id="halo"><stop offset=".35" stop-color="#4f7bff" stop-opacity=".45"/><stop offset="1" stop-color="#7c3aed" stop-opacity="0"/></radialGradient>` +
      `<linearGradient id="rim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22d3ee"/><stop offset=".5" stop-color="#60a5fa"/><stop offset="1" stop-color="#a855f7"/></linearGradient></defs>`,
    `<rect width="${MINI_W}" height="${MINI_H}" rx="14" fill="url(#bg)"/>`,
  )
  for (let i = 0; i < 30; i++) {
    out.push(`<circle cx="${(i * 97 + 31) % MINI_W}" cy="${(i * 61 + 17) % MINI_H}" r="${i % 7 === 0 ? 1.3 : 0.8}" fill="#d6e6ff" opacity="${i % 3 === 0 ? 0.7 : 0.35}"/>`)
  }
  out.push(`<ellipse cx="${cx}" cy="${cy}" rx="${RX}" ry="${RY}" fill="none" stroke="#3b4a8f" stroke-width="1" stroke-dasharray="3 7" opacity=".5"/>`)

  const items = shown
    .map((a, i) => {
      const off = (i / Math.max(1, n)) * ORBIT_S
      const theta = (((sec + off) % ORBIT_S) / ORBIT_S) * Math.PI * 2
      return { a, off, depth: Math.sin(theta) }
    })
    .sort((p, q) => p.depth - q.depth)

  const sampled = (fn: (th: number) => string) => Array.from({ length: STEPS + 1 }, (_, k) => fn((k / STEPS) * Math.PI * 2)).join(';')
  const scaleOf = (th: number) => 0.78 + 0.34 * Math.sin(th)

  const node = ({ a, off, depth }: (typeof items)[number]) => {
    const done = finished(a.status)
    const dim = quiet(a.status)
    const col = a.status === 'failed' ? '#ef4444' : dim ? '#475569' : COLOR[iconFor(a.type, a.name)]
    const dot = STATUS_COLOR[a.status]
    const r = done ? DONE_R : NODE_R
    const fade = f((done ? 0.55 : 1) * (0.55 + 0.45 * ((depth + 1) / 2)))
    const timing = `dur="${ORBIT_S}s" begin="${begin(off)}" repeatCount="indefinite"`
    const name = displayName(a).replace(/ Agent$/, '')
    const spoke = done
      ? ''
      : `<line x1="${cx}" y1="${cy}" stroke="${col}" stroke-width="1.2" opacity=".35"><animate attributeName="x2" values="${sampled(th => f(cx + RX * Math.cos(th)))}" ${timing}/><animate attributeName="y2" values="${sampled(th => f(cy + RY * Math.sin(th)))}" ${timing}/></line>`
    return (
      spoke +
      `<g opacity="${fade}"><animateTransform attributeName="transform" type="translate" values="${sampled(th => `${f(cx + RX * Math.cos(th))} ${f(cy + RY * Math.sin(th))}`)}" ${timing}/>` +
      `<title>${esc(displayName(a))} · ${STATUS_LABEL[a.status]} · ${formatTokens(a.contextTokens)}</title>` +
      `<g><animateTransform attributeName="transform" type="scale" values="${sampled(th => f(scaleOf(th)))}" ${timing}/>` +
      (dim || done ? '' : `<circle r="${r + 12}" fill="${col}" opacity=".14"/>`) +
      `<circle r="${r}" fill="#070b1f" stroke="${col}" stroke-width="${dim || done ? 1.4 : 2.6}"/>` +
      (done ? '' : `<text y="5.5" text-anchor="middle" font-size="15" font-weight="700" fill="${dim ? '#64748b' : col}">${esc(displayName(a).charAt(0).toUpperCase())}</text>`) +
      (done
        ? ''
        : `<text y="${r + 18}" text-anchor="middle" font-size="12" font-weight="600" fill="${dim ? '#94a3b8' : '#f1f5f9'}">${esc(name.length > 16 ? `${name.slice(0, 15)}…` : name)}</text>` +
          `<text y="${r + 32}" text-anchor="middle" font-size="10" fill="${dot}">${STATUS_LABEL[a.status]}</text>`) +
      '</g></g>'
    )
  }

  for (const it of items.filter(p => p.depth < 0)) out.push(node(it))
  const window = main.window || 200_000
  const coreFill = Math.min(1, main.contextTokens / window)
  const coreLen = 2 * Math.PI * (CORE_R + 5)
  out.push(
    `<circle cx="${cx}" cy="${cy}" r="86" fill="url(#halo)"/>`,
    `<circle cx="${cx}" cy="${cy}" r="${CORE_R}" fill="#0a1442" stroke="url(#rim)" stroke-width="3.5"/>`,
  )
  if (coreFill > 0.004) {
    out.push(
      `<circle cx="${cx}" cy="${cy}" r="${CORE_R + 5}" fill="none" stroke="#38bdf8" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="${f(coreFill * coreLen)} ${f(coreLen)}" transform="rotate(-90 ${cx} ${cy})"/>`,
    )
  }
  out.push(
    `<text x="${cx}" y="${cy - 2}" text-anchor="middle" font-size="13" font-weight="600" fill="#f8fafc">Orchestrator</text>`,
    `<text x="${cx}" y="${cy + 13}" text-anchor="middle" font-size="10.5" fill="#94a3b8">${esc(prettyModel(main.model).replace(/^Claude /, ''))}</text>`,
  )
  for (const it of items.filter(p => p.depth >= 0)) out.push(node(it))
  if (hidden > 0) out.push(`<text x="16" y="${MINI_H - 14}" font-size="11" fill="#64748b">+${hidden} more</text>`)
  out.push('</svg>')
  return out.join('')
}
