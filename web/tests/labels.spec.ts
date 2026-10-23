import { expect, test } from 'bun:test'
import {
  BAR_HEIGHTS,
  CARD,
  CARD_H_COMPACT,
  CARD_H_FULL,
  type AxisMemory,
  type CardRect,
  barHeight,
  cardHeight,
  cardScale,
  compactCards,
  resolvePasses,
  cardTarget,
  cardWidth,
  clampRect,
  clockAngleDeg,
  countTexts,
  depthFade,
  fitTarget,
  dotRadius,
  introEase,
  introScale,
  labelVis,
  leadEase,
  leaderLine,
  nearestOnRect,
  peekOf,
  placeTooltip,
  resolveCards,
  statusAlpha,
  statusColor,
  truncName,
} from '../three/labels-logic'

const overlaps = (a: CardRect, b: CardRect, m = 0) =>
  a.x < b.x + b.w + m && b.x < a.x + a.w + m && a.y < b.y + b.h + m && b.y < a.y + a.h + m

test('finished agents are wordless until hovered (peek)', () => {
  expect(peekOf(1)).toBe(0)
  expect(peekOf(1.07)).toBe(1)
  expect(labelVis(1, 1, 1)).toBe(0)
  expect(labelVis(1, 1, 1.07)).toBe(1)
  expect(labelVis(1, 0, 1)).toBe(1)
  expect(labelVis(0.45, 0, 1)).toBe(0)
  expect(labelVis(0.9, 0, 1)).toBeCloseTo(0.99, 12)
})

test('intro: card 0.1 s after spawn for 0.9 s, scales from 0.92; leader 150 ms earlier', () => {
  expect(introEase(1.0, 1.0)).toBe(0)
  expect(introEase(2.0, 1.0)).toBe(1)
  expect(introScale(0, false)).toBeCloseTo(0.92, 12)
  expect(introScale(1, false)).toBe(1)
  expect(introScale(0, true)).toBe(1) // reduced motion: fades only
  expect(leadEase(0.95, 1)).toBe(0)
  expect(leadEase(1.1, 1)).toBeGreaterThan(0.5) // the line is half drawn when the card starts
  expect(introEase(1.1, 1)).toBeCloseTo(0, 9)
  expect(leadEase(1.45, 1)).toBe(1)
})

test('card metrics, detail morph and name ellipsis', () => {
  expect(CARD_H_COMPACT).toBe(57)
  expect(CARD_H_FULL).toBe(95)
  expect(cardHeight(0)).toBe(CARD_H_COMPACT)
  expect(cardHeight(1)).toBe(CARD_H_FULL)
  expect(cardHeight(0.5)).toBe(76)
  expect(cardWidth(10)).toBe(CARD.minInner + 24)
  expect(cardWidth(150.2)).toBe(175)
  expect(cardScale(1000, 700)).toBe(0.75) // short side 700: the normal floor
  expect(cardScale(1400, 900)).toBe(1)
  // narrow panes (short side < 700) shrink below 0.75: 0.5 at 400 px
  expect(cardScale(800, 600)).toBeCloseTo(0.5 + (0.25 * 200) / 300, 12)
  expect(cardScale(420, 800)).toBeCloseTo(0.5 + (0.25 * 20) / 300, 12)
  expect(cardScale(300, 300)).toBe(0.5)
  expect(truncName('Planner Agent')).toBe('Planner Agent')
  const t = truncName('Test Workflow Create Endpoint')
  expect(t.length).toBeLessThanOrEqual(22)
  expect(t.endsWith('...')).toBe(true)
  expect(truncName('x'.repeat(22))).toBe('x'.repeat(22))
})

test('card sits away from the orb, past the planet edge', () => {
  const w = 160
  const h = 90
  // planet right of the orb: card to the right, vertically centred
  let c = cardTarget(600, 300, 400, 300, 30, w, h)
  expect(c.x).toBe(600 + 30 + CARD.gap)
  expect(c.y).toBe(300 - h / 2)
  // planet above-left: card above-left (its bottom-right corner is the attachment point)
  c = cardTarget(200, 100, 400, 300, 30, w, h)
  const a = 200 - Math.SQRT1_2 * 70
  expect(c.x + w).toBeCloseTo(a, 9)
  expect(c.y + h).toBeCloseTo(100 - Math.SQRT1_2 * 70, 9)
  // the card never covers the planet
  for (const [px, py] of [[600, 300], [200, 100], [400, 500], [410, 290], [400, 300]]) {
    const t = cardTarget(px, py, 400, 300, 30, w, h)
    const q = nearestOnRect(px, py, t.x, t.y, w, h)
    expect(Math.hypot(q.x - px, q.y - py)).toBeGreaterThan(30)
  }
})

test('leader line runs from the planet edge to the nearest card point', () => {
  const l = leaderLine(100, 100, 20, 200, 50, 100, 100)
  expect(l.x1).toBe(200)
  expect(l.y1).toBe(100)
  expect(l.x0).toBe(120)
  expect(l.y0).toBe(100)
  expect(l.len).toBe(80)
  expect(l.ang).toBe(0)
  const d = leaderLine(100, 100, 20, 150, 150, 50, 50)
  expect(d.ang).toBeCloseTo(45, 9)
  expect(leaderLine(100, 100, 20, 90, 90, 50, 50).len).toBe(0)
})

test('a card that would leave the viewport mirrors to the other side of its planet', () => {
  // planet near the right edge, card wanted to the right: mirrored to the left
  const f = fitTarget(780, 250, 700, 300, 30, 150, 90, 800, 600)
  expect(f.x + 150).toBeLessThanOrEqual(700 - 30)
  expect(f.y).toBe(250)
  // fits: untouched
  expect(fitTarget(500, 250, 400, 300, 30, 150, 90, 800, 600)).toEqual({ x: 500, y: 250 })
  // near the top, card wanted above: mirrored below
  const t = fitTarget(300, -60, 330, 60, 30, 150, 90, 800, 600)
  expect(t.y).toBeGreaterThanOrEqual(60 + 30)
  // no room on the other side either: left for the clamp
  expect(fitTarget(780, 250, 120, 300, 30, 700, 90, 800, 600).x).toBe(780)
})

test('viewport clamp', () => {
  expect(clampRect(-50, -50, 100, 80, 800, 600)).toEqual({ x: 8, y: 8 })
  expect(clampRect(780, 590, 100, 80, 800, 600)).toEqual({ x: 692, y: 512 })
  expect(clampRect(10, 10, 900, 80, 800, 600).x).toBe(8)
})

test('collision avoidance separates cards and keeps them inside the viewport', () => {
  const rects: CardRect[] = [
    { id: 'a', x: 300, y: 200, w: 150, h: 90 },
    { id: 'b', x: 320, y: 220, w: 150, h: 90 },
    { id: 'c', x: 340, y: 230, w: 150, h: 90 },
    { id: 'd', x: 760, y: 560, w: 150, h: 90 },
  ]
  const mem: AxisMemory = new Map()
  resolveCards(rects, 1000, 700, mem, 1, 8)
  for (let i = 0; i < rects.length; i++) {
    const r = rects[i]
    expect(r.x).toBeGreaterThanOrEqual(8)
    expect(r.y).toBeGreaterThanOrEqual(8)
    expect(r.x + r.w).toBeLessThanOrEqual(992)
    expect(r.y + r.h).toBeLessThanOrEqual(692)
    for (let j = i + 1; j < rects.length; j++) expect(overlaps(r, rects[j])).toBe(false)
  }
  expect(mem.size).toBeGreaterThan(0)
})

test('collision axis has hysteresis', () => {
  const mem: AxisMemory = new Map()
  // overlap 40 in x (+margin), 60 in y: pushed along x
  let r: CardRect[] = [
    { id: 'a', x: 0, y: 100, w: 100, h: 100 },
    { id: 'b', x: 60, y: 140, w: 100, h: 100 },
  ]
  resolveCards(r, 2000, 2000, mem, 1, 1)
  expect(mem.get('a|b')?.axis).toBe(0)
  expect(r[0].y).toBe(100)
  // now y is a little cheaper (54 vs 58): a fresh pair would pick y, the memory stays on x
  r = [
    { id: 'a', x: 0, y: 100, w: 100, h: 100 },
    { id: 'b', x: 50, y: 154, w: 100, h: 100 },
  ]
  resolveCards(r, 2000, 2000, mem, 2, 1)
  expect(mem.get('a|b')?.axis).toBe(0)
  // y is clearly cheaper: switches
  r = [
    { id: 'a', x: 0, y: 100, w: 100, h: 100 },
    { id: 'b', x: 30, y: 180, w: 100, h: 100 },
  ]
  resolveCards(r, 2000, 2000, mem, 3, 1)
  expect(mem.get('a|b')?.axis).toBe(1)
  // stale memories are dropped
  resolveCards([], 2000, 2000, mem, 100, 1)
  expect(mem.size).toBe(0)
})

test('count-up formats', () => {
  expect(countTexts(312000, 125, 0)).toEqual({ tok: '0', time: '0:00' })
  expect(countTexts(312000, 125, 1)).toEqual({ tok: '312K', time: '2:05' })
  expect(countTexts(1500000, 3725, 1)).toEqual({ tok: '1.50M', time: '1:02:05' })
  const mid = countTexts(312000, 125, 0.5)
  expect(mid.tok).toBe('273K')
})

test('stat icons animate only when live', () => {
  expect(barHeight(1, 3.3, false)).toBe(BAR_HEIGHTS[1])
  const h = barHeight(1, 0.7, true)
  expect(h).toBeGreaterThanOrEqual(BAR_HEIGHTS[1] * 0.56)
  expect(h).toBeLessThanOrEqual(BAR_HEIGHTS[1])
  expect(clockAngleDeg(9, false)).toBe(-45)
  expect(clockAngleDeg(0, true)).toBeCloseTo(-90, 9)
  expect(dotRadius(1, 0, false)).toBe(6.2)
  expect(Math.abs(dotRadius(1, 0, true) - 6.2)).toBeLessThanOrEqual(0.5)
})

test('status colour and bump', () => {
  expect(statusColor([46, 255, 150], 1)).toBe('rgb(71,255,163)')
  expect(statusColor([118, 126, 160], 0.04)).toBe('rgb(155,161,188)')
  expect(statusAlpha(1, 0.1)).toBe(1)
  expect(statusAlpha(1, 2)).toBeCloseTo(0.97, 12)
})

test('depth fade', () => {
  expect(depthFade(1800, 1800)).toBeCloseTo(1, 12)
  expect(depthFade(1000, 1800)).toBe(1)
  expect(depthFade(2700, 1800)).toBeCloseTo(0.55, 12)
  expect(depthFade(2000, 1800)).toBeCloseTo(0.9, 12)
})

test('tooltip stays inside the viewport', () => {
  const vw = 800
  const vh = 600
  const w = 190
  const h = 90
  for (const [px, py] of [[0, 0], [799, 599], [400, 300], [790, 10], [10, 590], [-50, 900]]) {
    const p = placeTooltip(px, py, w, h, vw, vh)
    expect(p.x).toBeGreaterThanOrEqual(8)
    expect(p.y).toBeGreaterThanOrEqual(8)
    expect(p.x + w).toBeLessThanOrEqual(vw - 8)
    expect(p.y + h).toBeLessThanOrEqual(vh - 8)
  }
  expect(placeTooltip(100, 100, w, h, vw, vh)).toEqual({ x: 116, y: 116 })
  expect(placeTooltip(700, 100, w, h, vw, vh).x).toBe(700 - 16 - w)
})

test('compact cards: more than 6 agents on a narrow viewport only', () => {
  expect(compactCards(420, 800, 7)).toBe(true)
  expect(compactCards(1000, 520, 7)).toBe(true)
  expect(compactCards(420, 800, 6)).toBe(false)
  expect(compactCards(1400, 900, 12)).toBe(false)
  expect(compactCards(700, 700, 12)).toBe(false)
  expect(resolvePasses(0)).toBe(4)
  expect(resolvePasses(8)).toBe(12)
  expect(resolvePasses(40)).toBe(16)
})

/** What the labels layer does per frame, on a ring of planets seen from the home camera (an ellipse around the orb). */
const layOut = (vw: number, vh: number, n: number, seed: number) => {
  let st = seed
  const rnd = () => ((st = (st * 1664525 + 1013904223) >>> 0) / 4294967296)
  const k = cardScale(vw, vh)
  const compact = compactCards(vw, vh, n)
  const ox = vw / 2
  const oy = vh / 2
  const rx = vw * 0.36
  const ry = Math.min(vh * 0.3, rx * 0.7)
  const rects: CardRect[] = []
  for (let i = 0; i < n; i++) {
    const an = (i / n) * Math.PI * 2 + rnd() * 0.25
    const px = ox + Math.cos(an) * rx * (0.85 + rnd() * 0.3)
    const py = oy + Math.sin(an) * ry * (0.85 + rnd() * 0.3)
    const pr = 8 + rnd() * 10
    const w = cardWidth(60 + rnd() * 60) * k
    const h = cardHeight(compact ? 0 : rnd() < 0.5 ? 1 : 0) * k
    const t = cardTarget(px, py, ox, oy, pr, w, h)
    const f = fitTarget(t.x, t.y, px, py, pr, w, h, vw, vh)
    const c = clampRect(f.x, f.y, w, h, vw, vh)
    rects.push({ id: 'a' + i, x: c.x, y: c.y, w, h })
  }
  resolveCards(rects, vw, vh, new Map(), 1, resolvePasses(n))
  return rects
}

test('cards never overlap and stay on screen: portrait 420x800 and landscape 1000x520, 4..12 agents', () => {
  for (const [vw, vh] of [[420, 800], [1000, 520], [800, 600], [1400, 900]]) {
    for (let n = 4; n <= 12; n++) {
      for (let seed = 1; seed <= 6; seed++) {
        const rects = layOut(vw, vh, n, seed * 7919 + n)
        for (let i = 0; i < rects.length; i++) {
          const r = rects[i]
          expect(r.x).toBeGreaterThanOrEqual(CARD.margin - 1e-6)
          expect(r.y).toBeGreaterThanOrEqual(CARD.margin - 1e-6)
          expect(r.x + r.w).toBeLessThanOrEqual(vw - CARD.margin + 1e-6)
          expect(r.y + r.h).toBeLessThanOrEqual(vh - CARD.margin + 1e-6)
          for (let j = i + 1; j < rects.length; j++) {
            if (overlaps(r, rects[j])) throw new Error(`overlap ${vw}x${vh} n=${n} seed=${seed} ${r.id} ${rects[j].id}`)
          }
        }
      }
    }
  }
})
