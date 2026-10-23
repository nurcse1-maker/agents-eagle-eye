/**
 * Pure maths of the DOM label overlay (no DOM, no three): visibility, count-up texts, callout card placement and
 * collision avoidance (Addendum A.7), tooltip placement. The micro-animations mirror the 2D drawLabel / drawStatIcon
 * (agent-network.ts L1620-1822). Unit tested in tests/labels.spec.ts.
 */
import { fmtTime, fmtTokens } from '../shared/format'
import { clamp, easeOutCubic, lerp } from './springs'

/** Fraction of the label shown for a finished agent while hovered (2D L1645: peek = clamp((hover - 1) / 0.07)). */
export const peekOf = (hover: number) => clamp((hover - 1) / 0.07)

/** 2D L1646: visible once the node has mostly spawned; finished agents are wordless unless peeked. */
export const labelVis = (spawn: number, rest: number, hover: number) => clamp((spawn - 0.45) * 2.2) * (1 - rest * (1 - peekOf(hover)))

/** 2D L1652: ease of the intro that starts 0.1 s after spawnAt and lasts 0.9 s. */
export const introEase = (time: number, spawnAt: number) => easeOutCubic(clamp((time - spawnAt - 0.1) / 0.9))

/** Leader line draw-in: starts 150 ms before the card intro (spawnAt + 0.1 - 0.15) and lasts 0.5 s. */
export const leadEase = (time: number, spawnAt: number) => easeOutCubic(clamp((time - spawnAt + 0.05) / 0.5))

/** Card intro scale: 0.92 -> 1 with the intro ease; none under reduced motion (fades only). */
export const introScale = (intro: number, calm: boolean) => (calm ? 1 : 0.92 + 0.08 * intro)

/** Name colour channel mix (2D L1670: [188,196,228] -> white with detail). Returns an `rgb()` string. */
export const nameColor = (d: number) => {
  const m = (a: number) => Math.round(lerp(a, 255, d))
  return `rgb(${m(188)},${m(196)},${m(228)})`
}

/** Name opacity (2D L1669). */
export const nameAlpha = (d: number, alpha: number) => lerp(0.62, 1, d) * alpha

/** Status text colour (2D L1693): mix(lighten(dot, .12), [175,180,205], power < .2 ? .5 : 0). */
export const statusColor = (dot: readonly number[], power: number) => {
  const mix = power < 0.2 ? 0.5 : 0
  const ch = (i: number, g: number) => {
    const l = dot[i] + (255 - dot[i]) * 0.12
    return Math.round(l + (g - l) * mix)
  }
  return `rgb(${ch(0, 175)},${ch(1, 180)},${ch(2, 205)})`
}

/** Status text alpha (2D L1695): a small brightness bump during the first 0.8 s after a status change. */
export const statusAlpha = (alpha: number, sinceChange: number) => alpha * (0.7 + 0.3 * (sinceChange < 0.8 ? 1 : 0.9))

/** Stat row text colour (2D L1716): mix([205,214,245], white, flash). */
export const rowColor = (flash: number) => {
  const m = (a: number) => Math.round(lerp(a, 255, flash))
  return `rgb(${m(205)},${m(214)},${m(245)})`
}
export const rowAlpha = (da: number, flash: number) => da * (0.82 + flash * 0.18)

/** Icon colour (2D L1703): mix(lighten(accent, .35), [200,215,255], .2). */
export const iconColor = (accent: readonly number[]) => {
  const ch = (i: number, g: number) => {
    const l = accent[i] + (255 - accent[i]) * 0.35
    return Math.round(l + (g - l) * 0.2)
  }
  return `rgb(${ch(0, 200)},${ch(1, 215)},${ch(2, 255)})`
}

/** Count-up texts (2D L1700-1701): tokens and time climb with easeOutCubic over the 2 s intro progress. */
export const countTexts = (tokens: number, seconds: number, introCount: number) => {
  const k = easeOutCubic(clamp(introCount))
  return { tok: fmtTokens(lerp(0, tokens, k)), time: fmtTime(lerp(0, seconds, k)) }
}

/** Token bar height (2D L1627). */
export const BAR_HEIGHTS = [9, 16, 12] as const
export const barHeight = (i: number, time: number, live: boolean) =>
  live ? BAR_HEIGHTS[i] * (0.78 + 0.22 * Math.sin(time * 3 + i * 1.5)) : BAR_HEIGHTS[i]

/** Clock hand angle in degrees (2D L1638): sweeps at 1.6 rad/s when live, frozen at -45 deg otherwise. */
export const clockAngleDeg = (time: number, live: boolean) => ((live ? time * 1.6 - Math.PI / 2 : -Math.PI / 4) * 180) / Math.PI

/** Status dot (2D L1681-1692): breathing radius, ping ring radius and alpha, glow alpha. */
export const dotRadius = (time: number, phase: number, live: boolean) => 6.2 + (live ? Math.sin(time * 4 + phase) * 0.5 : 0)
export const pingPhase = (time: number, phase: number) => (time * 0.9 + phase) % 1
export const pingRadius = (ph: number) => 7 + ph * 9
export const pingAlpha = (ph: number, alpha: number) => (1 - ph) * 0.45 * alpha
export const glowAlpha = (live: boolean, alpha: number) => (live ? 0.55 : 0.2) * alpha

/** Orb model label alpha (2D L1827). */
export const modelAlpha = (time: number) => 0.88 + 0.12 * Math.sin(time * 1.5)

/** Depth fade: full at the home distance, dimmer when the node is far from the camera. */
export const depthFade = (dist: number, homeDist: number) => clamp(1.9 - 0.9 * (dist / Math.max(1, homeDist)), 0.35, 1)

/* ----------------------------- callout cards (Addendum A.7) ----------------------------- */

/** Card metrics in unscaled CSS px (the card is then scaled by `cardScale`). Must match the CSS block in index.html. */
export const CARD = {
  padX: 12,
  padY: 9,
  nameLine: 20,
  rowLine: 19,
  minInner: 108,
  radius: 10,
  /** gap between the planet edge and the card (screen px) */
  gap: 40,
  /** collision margin between two cards and the viewport margin */
  margin: 8,
} as const
export const CARD_H_COMPACT = CARD.padY * 2 + CARD.nameLine + CARD.rowLine
export const CARD_H_FULL = CARD_H_COMPACT + CARD.rowLine * 2

/** Card height for a detail value (detail morph: finished agents shrink to name + status). */
export const cardHeight = (d: number) => lerp(CARD_H_COMPACT, CARD_H_FULL, clamp(d))

/** Card width from the measured (truncated) name width. */
export const cardWidth = (nameW: number) => Math.ceil(Math.max(nameW, CARD.minInner) + CARD.padX * 2)

/** Below this short viewport side (CSS px) the cards shrink further and, with many agents, go compact. */
export const NARROW_PX = 700
/** More agents than this on a narrow viewport: cards show name + status only. */
export const COMPACT_AGENTS = 6

/**
 * Viewport-dependent card scale: the reference proportions at ~1400x900, never below 0.75 on a normal pane. On a narrow
 * one (short side < NARROW_PX) the floor falls linearly to 0.5 at 400 px, so a phone-sized pane keeps room for the cards.
 */
export const cardScale = (vw: number, vh: number) => {
  const m = Math.min(vw, vh)
  const floor = m >= NARROW_PX ? 0.75 : clamp(0.5 + (0.25 * (m - 400)) / (NARROW_PX - 400), 0.5, 0.75)
  return clamp(Math.min(vw / 1400, vh / 900), floor, 1.05)
}

/** Narrow viewport with a crowd: every card shows only the name and the status row (like a finished agent). */
export const compactCards = (vw: number, vh: number, agents: number) => agents > COMPACT_AGENTS && Math.min(vw, vh) < NARROW_PX

/** Passes of the push-apart: more cards need more rounds to settle without overlaps (4 is enough for a handful). */
export const resolvePasses = (n: number) => clamp(4 + n, 4, 16)

/** Name ellipsis like the reference ("Test Workflow Create ..."): at most `max` characters including the dots. ASCII only. */
export const truncName = (s: string, max = 22) => (s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...')

/**
 * Top-left of a card for a planet at (px, py) with screen radius pr, pushed away from the projected orb (ox, oy).
 * The point `pr + gap` along the orb->planet direction is the card's attachment point; the card extends away from
 * the orb with a continuous (no flip) alignment: straight right of the orb the card is vertically centred, above it
 * the card sits fully above the attachment point, and so on.
 */
export const cardTarget = (px: number, py: number, ox: number, oy: number, pr: number, w: number, h: number, gap: number = CARD.gap) => {
  let dx = px - ox
  let dy = py - oy
  const len = Math.hypot(dx, dy)
  if (len < 1e-3) {
    dx = Math.SQRT1_2
    dy = -Math.SQRT1_2
  } else {
    dx /= len
    dy /= len
  }
  const tx = px + dx * (pr + gap)
  const ty = py + dy * (pr + gap)
  const sx = clamp(dx * 2.5, -1, 1)
  const sy = clamp(dy * 2.5, -1, 1)
  return { x: tx - w * (0.5 - 0.5 * sx), y: ty - h * (0.5 - 0.5 * sy), dx, dy }
}

/**
 * When the preferred card spot overflows the viewport on a side, mirror the card to the other side of the planet
 * on that axis (instead of letting the clamp push it onto the planet). Only mirrors when the mirrored spot fits.
 */
export const fitTarget = (
  x: number,
  y: number,
  px: number,
  py: number,
  pr: number,
  w: number,
  h: number,
  vw: number,
  vh: number,
  gap: number = CARD.gap,
  margin: number = CARD.margin,
) => {
  const g = pr + gap * 0.6
  if (x + w > vw - margin && px - g - w >= margin && x > px - w / 2) x = px - g - w
  else if (x < margin && px + g + w <= vw - margin && x < px - w / 2) x = px + g
  if (y + h > vh - margin && py - g - h >= margin && y > py - h / 2) y = py - g - h
  else if (y < margin && py + g + h <= vh - margin && y < py - h / 2) y = py + g
  return { x, y }
}

/** The point of a rect nearest to (px, py) (a corner when the point is diagonal to it, else an edge point). */
export const nearestOnRect = (px: number, py: number, x: number, y: number, w: number, h: number) => ({
  x: clamp(px, x, x + w),
  y: clamp(py, y, y + h),
})

/** Keep a w x h rect inside the viewport with a margin (pinned to the left/top margin when it cannot fit). */
export const clampRect = (x: number, y: number, w: number, h: number, vw: number, vh: number, margin: number = CARD.margin) => ({
  x: clamp(x, margin, Math.max(margin, vw - margin - w)),
  y: clamp(y, margin, Math.max(margin, vh - margin - h)),
})

/**
 * Leader line from the planet edge to the card: start on the planet circle towards the card's nearest point, the end
 * at that point. `len` 0 means the card covers the planet (no line).
 */
export const leaderLine = (px: number, py: number, pr: number, x: number, y: number, w: number, h: number) => {
  const q = nearestOnRect(px, py, x, y, w, h)
  const dx = q.x - px
  const dy = q.y - py
  const d = Math.hypot(dx, dy)
  if (d <= pr + 2) return { x0: q.x, y0: q.y, x1: q.x, y1: q.y, len: 0, ang: 0 }
  const ux = dx / d
  const uy = dy / d
  const x0 = px + ux * pr
  const y0 = py + uy * pr
  return { x0, y0, x1: q.x, y1: q.y, len: d - pr, ang: (Math.atan2(uy, ux) * 180) / Math.PI }
}

export interface CardRect {
  id: string
  x: number
  y: number
  w: number
  h: number
}

/** Per pair push-axis memory (hysteresis): `axis` 0 = x, 1 = y; `seen` = the frame it was last used. */
export type AxisMemory = Map<string, { axis: number; seen: number }>

/**
 * Simple screen-space collision avoidance: a few passes of pairwise pushes along the axis of least overlap, each
 * card moving half the overlap, followed by a viewport clamp. The chosen axis per pair is remembered and only
 * switched when the other axis becomes clearly cheaper (30 %), so cards do not jump between solutions while the
 * camera moves. Rects are mutated in place; the caller springs its cards towards the result.
 */
export const resolveCards = (
  rects: CardRect[],
  vw: number,
  vh: number,
  mem: AxisMemory,
  frame: number,
  passes = 4,
  margin: number = CARD.margin,
) => {
  const n = rects.length
  for (let pass = 0; pass < passes; pass++) {
    let moved = false
    for (let i = 0; i < n; i++) {
      const a = rects[i]
      for (let j = i + 1; j < n; j++) {
        const b = rects[j]
        const ox = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x) + margin
        if (ox <= 0) continue
        const oy = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y) + margin
        if (oy <= 0) continue
        const key = a.id < b.id ? a.id + '|' + b.id : b.id + '|' + a.id
        const m = mem.get(key)
        let axis = ox <= oy ? 0 : 1
        if (m) {
          axis = m.axis
          if (axis === 0 && oy < ox * 0.7) axis = 1
          else if (axis === 1 && ox < oy * 0.7) axis = 0
          m.axis = axis
          m.seen = frame
        } else mem.set(key, { axis, seen: frame })
        if (axis === 0) {
          const s = a.x + a.w / 2 <= b.x + b.w / 2 ? 1 : -1
          a.x -= (s * ox) / 2
          b.x += (s * ox) / 2
        } else {
          const s = a.y + a.h / 2 <= b.y + b.h / 2 ? 1 : -1
          a.y -= (s * oy) / 2
          b.y += (s * oy) / 2
        }
        moved = true
      }
    }
    for (const r of rects) {
      const c = clampRect(r.x, r.y, r.w, r.h, vw, vh, margin)
      r.x = c.x
      r.y = c.y
    }
    if (!moved) break
  }
  for (const [k, m] of mem) if (frame - m.seen > 30) mem.delete(k)
}

/** Place a w x h box at the pointer with an offset, flipping and clamping so it stays inside the viewport. */
export const placeTooltip = (px: number, py: number, w: number, h: number, vw: number, vh: number, off = 16, margin = 8) => {
  let x = px + off
  let y = py + off
  if (x + w > vw - margin) x = px - off - w
  if (y + h > vh - margin) y = py - off - h
  x = clamp(x, margin, Math.max(margin, vw - margin - w))
  y = clamp(y, margin, Math.max(margin, vh - margin - h))
  return { x, y }
}

/**
 * Top-left of the orb model title box (2D L1824-1830: `400 26px`, textAlign centre, alphabetic baseline at the anchor).
 * `anchorX/Y` is the projected baseline point, `textW` the unscaled text width, `baseOff` the baseline distance from the
 * box top in a 30 px line, `k` the screen px per design px. The text is centred on the anchor and its baseline sits on it.
 */
export const modelTitleBox = (anchorX: number, anchorY: number, textW: number, baseOff: number, k: number) => ({
  x: anchorX - (textW * k) / 2,
  y: anchorY - baseOff * k,
})
