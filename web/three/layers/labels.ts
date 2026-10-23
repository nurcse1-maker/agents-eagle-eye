/**
 * DOM label overlay (plan 6.4, Addendum A.7): callout cards. Each agent gets a rounded dark glass card (name, status
 * dot + text, token bars + "NNK tokens", clock + time) attached to its planet by a thin leader line in the agent
 * colour that ends in a small dot on the planet edge. The card sits away from the orb in screen space, cards push
 * each other apart (labels-logic `resolveCards`) and spring towards the result; finished agents shrink to a compact
 * card (name + status) that only shows while hovered (peek). The micro-animations are the 2D drawLabel / drawStatIcon
 * ones (agent-network.ts L1620-1722 and L1744-1822); the orb model title is L1824-1830.
 *
 * One absolutely positioned tree inside the 3D view container with pointer-events:none. Every per-frame write is a
 * transform, an opacity or (while drawing in) a stroke-dashoffset, batched in beforeRender and skipped when unchanged;
 * nothing is read back from layout (text widths come from a canvas measureText cache). Also owns the hover tooltip
 * (3D only) and a visually hidden aria-live region that announces status changes.
 *
 * Backdrop blur: an ancestor with opacity < 1 becomes the backdrop root and kills `backdrop-filter`, so the card
 * root only carries a transform and the opacity is written on the glass, edge and text children separately.
 */
import { Vector3 } from 'three'
import { STATUS } from '../../shared/status'
import { fmtTime, fmtTokens } from '../../shared/format'
import { FOV } from '../camera'
import type { Projected } from '../camera'
import type { Layer, LayerCtx } from '../layer'
import { CENTER_R } from '../layout3d'
import {
  CARD,
  CARD_H_FULL,
  type AxisMemory,
  type CardRect,
  barHeight,
  cardHeight,
  cardScale,
  compactCards,
  cardTarget,
  cardWidth,
  clampRect,
  clockAngleDeg,
  countTexts,
  depthFade,
  fitTarget,
  dotRadius,
  glowAlpha,
  iconColor,
  introEase,
  introScale,
  labelVis,
  leadEase,
  leaderLine,
  modelAlpha,
  modelTitleBox,
  nameAlpha,
  nameColor,
  nearestOnRect,
  pingAlpha,
  pingPhase,
  pingRadius,
  placeTooltip,
  resolveCards,
  resolvePasses,
  rowAlpha,
  rowColor,
  statusAlpha,
  statusColor,
  truncName,
} from '../labels-logic'
import { Spring, clamp, damp } from '../springs'
import { intro } from '../world'
import type { AgentState } from '../world'

const FONT = 'Inter, "Segoe UI", system-ui, -apple-system, Roboto, "Helvetica Neue", sans-serif' // 2D L78
const NAME_FONT = `600 15px ${FONT}` // must match .ee3d-name
const TIP_W = 204
const TIP_H = 98
const EDGE_H = 12 // .ee3d-edge height (bottom cap carrying the bottom border and the shadow)
/** Card offset spring: a touch softer and better damped than the 2D default so pushes settle without overshoot. */
const OFF_K = 120
const OFF_C = 20

/** A DOM node whose transform/opacity are written only when they changed. */
class Tn {
  x = NaN
  y = NaN
  s = NaN
  o = -1
  constructor(readonly el: HTMLElement | SVGElement) {}
  set(x: number, y: number, s: number, o: number) {
    const st = this.el.style
    if (!(Math.abs(x - this.x) < 0.1 && Math.abs(y - this.y) < 0.1 && Math.abs(s - this.s) < 0.001)) {
      this.x = x
      this.y = y
      this.s = s
      st.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)${s === 1 ? '' : ` scale(${s.toFixed(3)})`}`
    }
    this.op(o)
  }
  op(o: number) {
    const oo = o < 0.004 ? 0 : o > 0.996 ? 1 : o
    if (Math.abs(oo - this.o) > 0.004 || (oo === 0) !== (this.o === 0)) {
      this.o = oo
      this.el.style.opacity = oo.toFixed(3)
    }
  }
  hide() {
    if (this.o !== 0) {
      this.o = 0
      this.el.style.opacity = '0'
    }
  }
}

/** Sets a style property / text / attribute only when the value changed. */
const cache = new WeakMap<object, Record<string, string>>()
const setProp = (el: HTMLElement | SVGElement, key: string, v: string) => {
  let c = cache.get(el)
  if (!c) cache.set(el, (c = {}))
  if (c[key] === v) return
  c[key] = v
  if (key === 'text') el.textContent = v
  else if (key.startsWith('--')) el.style.setProperty(key, v)
  else if (key.startsWith('@')) el.setAttribute(key.slice(1), v)
  else (el.style as unknown as Record<string, string>)[key] = v
}
const setOpacity = (el: HTMLElement, o: number) => setProp(el, 'opacity', (Math.round(o * 250) / 250).toString())

const ROW_HTML = (icon: string, unit = '') =>
  `<span class="ee3d-iw">${icon}</span><span class="ee3d-t"></span>${unit ? `<span class="ee3d-u">${unit}</span>` : ''}`
const TOK_ICON =
  '<svg viewBox="-10 -10 20 20" width="15" height="15" fill="currentColor"><rect x="-7" width="3.8" rx="1.6"/><rect x="-1.2" width="3.8" rx="1.6"/><rect x="4.6" width="3.8" rx="1.6"/></svg>'
const TIME_ICON =
  '<svg viewBox="-10 -10 20 20" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><circle cx="0" cy="1.5" r="6.8"/><path d="M-2.6 -8H2.6"/><path class="hand" d="M0 1.5H4.4"/></svg>'
const SVG_NS = 'http://www.w3.org/2000/svg'

interface Label {
  id: string
  root: HTMLElement
  clip: HTMLElement
  bg: Tn
  edge: Tn
  name: Tn
  stat: Tn
  tok: Tn
  time: Tn
  lead: Tn
  leadLine: SVGElement
  ldot: Tn
  nameEl: HTMLElement
  statText: HTMLElement
  ring: HTMLElement
  glow: HTMLElement
  dot: HTMLElement
  tokText: HTMLElement
  timeText: HTMLElement
  tokIcon: HTMLElement
  timeIcon: HTMLElement
  bars: SVGElement[]
  hand: SVGElement
  tokStr: string
  timeStr: string
  tokFlash: number
  timeFlash: number
  changedAt: number
  occ: number
  /** 0 = full card, 1 = compact (name + status only); eased, driven by the viewport and the roster size */
  cmp: number
  /** full (untruncated) name the card was built for, and the card width in unscaled px */
  fullName: string
  w: number
  /** sprung offset of the card's top-left from the projected planet centre (screen px) */
  ox: Spring
  oy: Spring
  shown: boolean
  /** frame data written in pass 1 */
  px: number
  py: number
  pr: number
  h: number
  alpha: number
  fade: number
  rect: CardRect
  rootKey: string
  leadKey: string
}

export function createLabelsLayer(): Layer {
  let ctx: LayerCtx
  let host: HTMLElement
  let layerRoot: HTMLElement
  let leadRoot: HTMLElement
  let sr: HTMLElement
  let tipEl: HTMLElement
  let tip: Tn
  let modelEl: HTMLElement
  let model: Tn
  const labels = new Map<string, Label>()
  const offs: Array<() => void> = []
  const v3 = new Vector3()
  const proj: Projected = { x: 0, y: 0, z: 0, visible: false }
  const orbP: Projected = { x: 0, y: 0, z: 0, visible: false }
  const anchorP: Projected = { x: 0, y: 0, z: 0, visible: false }
  const axisMem: AxisMemory = new Map()
  const rects: CardRect[] = []
  const live: Label[] = []
  let frame = 0
  let lastTime = 0
  let tipId = ''
  let tipName = ''
  let tipStatus = ''
  let tipAt = -1
  const pending: string[] = []
  let lastSay = -9
  const mctx = document.createElement('canvas').getContext('2d')
  const widths = new Map<string, number>()
  const measure = (font: string, s: string) => {
    const k = font + '|' + s
    let w = widths.get(k)
    if (w === undefined) {
      if (mctx) mctx.font = font
      w = mctx ? mctx.measureText(s).width : s.length * 8
      if (widths.size > 400) widths.clear()
      widths.set(k, w)
    }
    return w
  }

  /** Distance from the top of the 30 px model line box to the alphabetic baseline of the 26 px font. */
  let modelBaseCache = -1
  const modelBase = () => {
    if (modelBaseCache >= 0) return modelBaseCache
    let asc = 26 * 0.97
    let desc = 26 * 0.24
    if (mctx) {
      mctx.font = `400 26px ${FONT}`
      const m = mctx.measureText('Sonnet 5.5')
      if (m.fontBoundingBoxAscent > 0) {
        asc = m.fontBoundingBoxAscent
        desc = m.fontBoundingBoxDescent
      }
    }
    modelBaseCache = (30 - (asc + desc)) / 2 + asc
    return modelBaseCache
  }

  const el = (cls: string, html = '') => {
    const d = document.createElement('div')
    d.className = cls
    if (html) d.innerHTML = html
    return d
  }

  const make = (a: AgentState): Label => {
    const root = el('ee3d-lab')
    root.dataset.id = a.id
    const clip = el('ee3d-clip')
    const bg = el('ee3d-bg')
    clip.appendChild(bg)
    const edge = el('ee3d-edge')
    const nameEl = el('ee3d-it ee3d-name')
    const stat = el(
      'ee3d-it ee3d-row ee3d-srow',
      '<span class="ee3d-dw"><i class="ee3d-ring"></i><i class="ee3d-glow"></i><i class="ee3d-dot"></i></span><span class="ee3d-t ee3d-st"></span>',
    )
    const tok = el('ee3d-it ee3d-row ee3d-stat ee3d-r3', ROW_HTML(TOK_ICON, 'tokens'))
    const time = el('ee3d-it ee3d-row ee3d-stat ee3d-r4', ROW_HTML(TIME_ICON))
    root.append(clip, edge, nameEl, stat, tok, time)
    layerRoot.appendChild(root)

    const lead = document.createElementNS(SVG_NS, 'svg')
    lead.setAttribute('class', 'ee3d-lead')
    lead.setAttribute('width', '100')
    lead.setAttribute('height', '6')
    lead.setAttribute('viewBox', '0 -3 100 6')
    lead.setAttribute('aria-hidden', 'true')
    lead.dataset.id = a.id
    const line = document.createElementNS(SVG_NS, 'line')
    line.setAttribute('x1', '0')
    line.setAttribute('y1', '0')
    line.setAttribute('x2', '100')
    line.setAttribute('y2', '0')
    line.setAttribute('pathLength', '1')
    line.setAttribute('stroke-dasharray', '1 1')
    line.setAttribute('stroke-dashoffset', '1')
    lead.appendChild(line)
    const ldot = el('ee3d-ldot')
    leadRoot.append(lead, ldot)

    const q = <T extends Element>(p: Element, s: string) => p.querySelector(s) as unknown as T
    const ac = `${a.accent[0] | 0},${a.accent[1] | 0},${a.accent[2] | 0}`
    root.style.setProperty('--ac', ac)
    lead.style.setProperty('--ac', ac)
    ldot.style.setProperty('--ac', ac)
    return {
      id: a.id,
      root,
      clip,
      bg: new Tn(bg),
      edge: new Tn(edge),
      name: new Tn(nameEl),
      stat: new Tn(stat),
      tok: new Tn(tok),
      time: new Tn(time),
      lead: new Tn(lead),
      leadLine: line,
      ldot: new Tn(ldot),
      nameEl,
      statText: q(stat, '.ee3d-st'),
      ring: q(stat, '.ee3d-ring'),
      glow: q(stat, '.ee3d-glow'),
      dot: q(stat, '.ee3d-dot'),
      tokText: q(tok, '.ee3d-t'),
      timeText: q(time, '.ee3d-t'),
      tokIcon: q(tok, '.ee3d-iw'),
      timeIcon: q(time, '.ee3d-iw'),
      bars: Array.from(tok.querySelectorAll('rect')) as unknown as SVGElement[],
      hand: q(time, '.hand'),
      tokStr: '',
      timeStr: '',
      tokFlash: 0,
      timeFlash: 0,
      changedAt: -99,
      occ: 1,
      cmp: 0,
      fullName: '',
      w: cardWidth(0),
      ox: new Spring(0, 0, OFF_K, OFF_C),
      oy: new Spring(0, 0, OFF_K, OFF_C),
      shown: false,
      px: 0,
      py: 0,
      pr: 0,
      h: CARD_H_FULL,
      alpha: 0,
      fade: 1,
      rect: { id: a.id, x: 0, y: 0, w: 0, h: 0 },
      rootKey: '',
      leadKey: '',
    }
  }

  const hideLabel = (l: Label) => {
    l.shown = false
    l.bg.hide()
    l.edge.hide()
    l.name.hide()
    l.stat.hide()
    l.tok.hide()
    l.time.hide()
    l.lead.hide()
    l.ldot.hide()
  }

  const drop = (l: Label) => {
    l.root.remove()
    l.lead.el.remove()
    l.ldot.el.remove()
    labels.delete(l.id)
  }

  const say = (msg: string) => {
    pending.push(msg)
    if (pending.length > 8) pending.shift()
  }

  return {
    name: 'labels',
    renderOrder: 900,
    init(c) {
      ctx = c
      host = c.engine.container
      layerRoot = el('ee3d-labels')
      layerRoot.setAttribute('data-ee3d', 'labels')
      leadRoot = el('ee3d-leads')
      sr = el('ee3d-sr')
      sr.setAttribute('role', 'status')
      sr.setAttribute('aria-live', 'polite')
      sr.setAttribute('aria-atomic', 'true')
      tipEl = el('ee3d-tip', '<b></b><span class="s"><i></i><u></u></span><span class="k">Tokens <em></em></span><span class="k">Elapsed <em></em></span>')
      modelEl = el('ee3d-model')
      modelEl.style.translate = 'none' // centred in beforeRender
      tip = new Tn(tipEl)
      model = new Tn(modelEl)
      layerRoot.append(leadRoot, modelEl)
      host.append(layerRoot, sr)
      tip.hide()
      model.hide()

      offs.push(
        c.world.on('status', ({ agent, next }) => {
          const l = labels.get(agent.id)
          if (l) l.changedAt = c.world.time
          say(`${agent.spec.name}: ${STATUS[next].label}`)
        }),
        c.world.on('agentAdded', ({ agent }) => say(`${agent.spec.name} joined`)),
        c.world.on('agentRemoved', ({ agent }) => {
          const l = labels.get(agent.id)
          if (l) drop(l)
          say(`${agent.spec.name} left`)
        }),
        c.world.on('reset', () => {
          for (const l of [...labels.values()]) drop(l)
          pending.length = 0
          lastTime = 0
          axisMem.clear()
        }),
      )
    },
    update() {
      /* DOM only, written in beforeRender */
    },
    beforeRender(c) {
      const world = c.world
      const rig = c.rig
      const time = world.time
      const dt = clamp(time - lastTime, 0, 0.1)
      lastTime = time
      frame++
      const W = c.engine.width
      const H = c.engine.height
      if (W < 2 || H < 2) return
      const motion = c.uniforms.motion.value
      const calm = motion < 0.5
      const camPos = rig.camera.position
      const tanH = Math.tan((FOV * Math.PI) / 360)
      const homeDist = rig.homeRadius
      const k = cardScale(W, H)
      const cmpTarget = compactCards(W, H, world.agents.size) ? 1 : 0

      // roster sync (agents that appeared without an event, e.g. after setTime); the tooltip stays on top
      for (const a of world.agents.values()) if (!labels.has(a.id)) labels.set(a.id, make(a))
      for (const l of labels.values()) if (!world.agents.has(l.id)) drop(l) // deleting the current entry while iterating a Map is safe
      if (layerRoot.lastChild !== tipEl) layerRoot.appendChild(tipEl)

      // orb projection (anchor for the title, card direction and occlusion)
      v3.set(world.orb.x, world.orb.y, world.orb.z)
      rig.project(v3, orbP)
      const orbDist = camPos.distanceTo(v3)
      const orbPx = H / 2 / (tanH * orbDist)
      const orbR = CENTER_R * orbPx

      // pass 1: project, target rects
      rects.length = 0
      live.length = 0
      for (const a of world.agents.values()) {
        const l = labels.get(a.id)
        if (!l) continue
        const vis = labelVis(a.spawn.x, a.rest, a.hover.x)
        v3.set(a.x, a.y, a.z)
        rig.project(v3, proj)
        const behindCam = !proj.visible || proj.z >= 1
        if (vis <= 0.01 || behindCam || proj.x < -200 || proj.x > W + 200 || proj.y < -200 || proj.y > H + 200) {
          hideLabel(l)
          continue
        }
        const dist = camPos.distanceTo(v3)
        const pxPerUnit = H / 2 / (tanH * dist)
        if (a.spec.name !== l.fullName) {
          l.fullName = a.spec.name
          const short = truncName(a.spec.name)
          l.nameEl.textContent = short
          l.w = cardWidth(measure(NAME_FONT, short))
          l.root.style.setProperty('--w', `${l.w}px`)
        }
        // occlusion by the orb: planets behind the orb disc keep a faint card
        const behind = dist > orbDist && Math.hypot(proj.x - orbP.x, proj.y - orbP.y) < orbR * 0.9
        l.occ = damp(l.occ, behind ? 0.3 : 1, 8, dt)
        l.px = proj.x
        l.py = proj.y
        l.pr = Math.max(2, a.r * a.spawn.x * a.hover.x * pxPerUnit)
        l.cmp = damp(l.cmp, cmpTarget, 6, dt)
        l.h = cardHeight(a.detail * (1 - l.cmp))
        l.alpha = vis
        l.fade = depthFade(dist, homeDist) * l.occ
        const t = cardTarget(l.px, l.py, orbP.x, orbP.y, l.pr, l.w * k, l.h * k)
        const r = l.rect
        r.x = t.x
        r.y = t.y
        r.w = l.w * k
        r.h = l.h * k
        const ft = fitTarget(r.x, r.y, l.px, l.py, l.pr, r.w, r.h, W, H)
        const cr = clampRect(ft.x, ft.y, r.w, r.h, W, H)
        r.x = cr.x
        r.y = cr.y
        rects.push(r)
        live.push(l)
      }

      // collision avoidance between the cards (screen space, hysteresis per pair)
      resolveCards(rects, W, H, axisMem, frame, resolvePasses(rects.length))

      // pass 2: spring the card offsets and write the DOM
      for (const l of live) {
        const a = world.agents.get(l.id) as AgentState
        const r = l.rect
        l.ox.target = r.x - l.px
        l.oy.target = r.y - l.py
        if (!l.shown) {
          l.ox.x = l.ox.target
          l.oy.x = l.oy.target
          l.ox.v = l.oy.v = 0
          l.shown = true
        } else {
          l.ox.step(dt)
          l.oy.step(dt)
        }
        const cp = clampRect(l.px + l.ox.x, l.py + l.oy.x, r.w, r.h, W, H)
        writeLabel(l, a, cp.x, cp.y, r.w, r.h)
      }

      function writeLabel(l: Label, a: AgentState, x: number, y: number, w: number, h: number) {
        const cfg = STATUS[a.spec.status]
        const isLive = cfg.ticks
        const animate = isLive && !calm
        const ie = introEase(time, a.spawnAt)
        const sc = introScale(ie, calm)
        const alpha = l.alpha * ie * l.fade

        // card root: scale around the attachment point (nearest card point to the planet)
        const q = nearestOnRect(l.px, l.py, x, y, w, h)
        const S = k * sc
        const tx = x + (q.x - x) * (1 - sc)
        const ty = y + (q.y - y) * (1 - sc)
        const rk = `translate(${tx.toFixed(1)}px,${ty.toFixed(1)}px) scale(${S.toFixed(3)})`
        if (rk !== l.rootKey) {
          l.rootKey = rk
          l.root.style.transform = rk
        }

        // glass: the clip window shows the top `h` px of the full-height glass (detail morph without layout)
        const ch = l.h
        setProp(l.clip, 'transform', `translateY(${(ch - CARD_H_FULL).toFixed(1)}px)`)
        l.bg.set(0, CARD_H_FULL - ch, 1, alpha)
        l.edge.set(0, ch - EDGE_H, 1, alpha)

        // leader line: planet edge -> card attachment point, drawn in 150 ms before the card
        const ll = leaderLine(l.px, l.py, l.pr, x, y, w, h)
        const lp = leadEase(time, a.spawnAt)
        const draw = calm ? 1 : lp
        const lineA = l.alpha * l.fade * (calm ? lp : Math.min(1, lp * 3)) * 0.85
        if (ll.len > 3) {
          const L = ll.len * draw
          const st = l.lead.el.style
          const key = `${ll.x0.toFixed(1)},${ll.y0.toFixed(1)},${ll.ang.toFixed(2)},${ll.len.toFixed(1)}`
          if (key !== l.leadKey) {
            l.leadKey = key
            st.transform = `translate(${ll.x0.toFixed(1)}px,${ll.y0.toFixed(1)}px) rotate(${ll.ang.toFixed(2)}deg) scaleX(${(ll.len / 100).toFixed(4)})`
          }
          setProp(l.leadLine, '@stroke-dashoffset', (1 - Math.round(draw * 200) / 200).toFixed(3))
          l.lead.op(L > 0.5 ? lineA : 0)
          l.ldot.set(ll.x0, ll.y0, 1, lineA)
        } else {
          l.lead.hide()
          l.ldot.hide()
        }

        // name
        const d = a.detail * (1 - l.cmp)
        setProp(l.nameEl, 'color', nameColor(d))
        l.name.op(nameAlpha(0.6 + 0.4 * d, alpha))

        // status row
        const dotC = `${Math.round(a.dot[0])},${Math.round(a.dot[1])},${Math.round(a.dot[2])}`
        setProp(l.stat.el, '--dot', dotC)
        setProp(l.statText, 'text', cfg.label)
        setProp(l.statText, 'color', statusColor(a.dot, a.power))
        setOpacity(l.statText, statusAlpha(1, time - l.changedAt))
        l.stat.op(alpha)
        const ph = pingPhase(time, a.phase)
        const pr = animate ? pingRadius(ph) / 7 : 1
        setProp(l.ring, 'transform', `translate(-50%,-50%) scale(${pr.toFixed(2)})`)
        setOpacity(l.ring, animate ? pingAlpha(ph, 1) : 0)
        setOpacity(l.glow, glowAlpha(isLive, 1))
        const dr = dotRadius(time, a.phase, animate) / 6.2
        setProp(l.dot, 'transform', `translate(-50%,-50%) scale(${dr.toFixed(3)})`)

        // detail rows (fade out faster than the glass shrinks so they never spill out of it)
        const dd = clamp((d - 0.35) / 0.65)
        if (dd > 0.01) {
          const da = alpha * dd
          const ic = intro.count(time, a.spawnAt)
          const t = countTexts(a.tokens, a.seconds, ic)
          if (t.tok !== l.tokStr) {
            if (l.tokStr) l.tokFlash = 1
            l.tokStr = t.tok
          }
          if (t.time !== l.timeStr) {
            if (l.timeStr && ic >= 1) l.timeFlash = 1
            l.timeStr = t.time
          }
          l.tokFlash = damp(l.tokFlash, 0, 3.2, dt) // 2D L887
          l.timeFlash = damp(l.timeFlash, 0, 5, dt) // 2D L888
          const ico = iconColor(a.accent)
          setProp(l.tokIcon, 'color', ico)
          setProp(l.timeIcon, 'color', ico)
          setProp(l.tokText, 'text', l.tokStr)
          setProp(l.timeText, 'text', l.timeStr)
          setProp(l.tokText, 'color', rowColor(l.tokFlash))
          setProp(l.timeText, 'color', rowColor(l.timeFlash))
          setOpacity(l.tokText, rowAlpha(1, l.tokFlash))
          setOpacity(l.timeText, rowAlpha(1, l.timeFlash))
          // 2D L1716: the row lifts 2 px while it flashes; the morph slides the rows up 4 px as they fade
          const lift = (1 - dd) * -4
          l.tok.set(0, lift - l.tokFlash * 1.5, 1, da)
          l.time.set(0, lift - l.timeFlash * 1.5, 1, da)
          // icons (2D drawStatIcon): bars breathe and the clock hand sweeps only while live
          for (let i = 0; i < 3; i++) {
            const bh = Math.round(barHeight(i, time, animate) * 20) / 20
            const b = l.bars[i]
            setProp(b, '@height', String(bh))
            setProp(b, '@y', String(8 - bh))
          }
          const ang = Math.round(clockAngleDeg(time, animate) * 4) / 4
          setProp(l.hand, '@transform', `rotate(${ang} 0 1.5)`)
        } else {
          l.tok.hide()
          l.time.hide()
        }
      }

      // orb model title (2D L1824-1830): `400 26px`, centred, alphabetic baseline (0, R*0.2 + 44) below the orb centre.
      // The CSS `translate: -50% 0` is switched off in init (it is applied outside the scale, so the text drifted);
      // centring is done here from the cached text width and the box top is baseline - baseline offset of a 30 px line.
      if (world.model && orbP.visible) {
        const o = world.orb
        const txt = world.model
        setProp(modelEl, 'text', txt)
        v3.set(o.labelAnchor.x, o.labelAnchor.y, o.labelAnchor.z)
        rig.project(v3, anchorP)
        const tw = measure(`400 26px ${FONT}`, txt)
        const mb = modelTitleBox(anchorP.x, anchorP.y, tw, modelBase(), orbPx)
        model.set(mb.x, mb.y, orbPx, clamp((o.spawn.x - 0.3) * 1.5) * modelAlpha(time))
      } else model.hide()

      // hover tooltip
      const hid = world.hover
      const ha = hid && hid !== 'orb' ? world.agents.get(hid) : undefined
      if (ha && rig.pointerActive) {
        const cfg = STATUS[ha.spec.status]
        // names and status are compared as they are; the counters are re-formatted at most 4 times a second (no per-frame string)
        if (ha.spec.name !== tipName || cfg.label !== tipStatus || hid !== tipId || time - tipAt >= 0.25 || time < tipAt) {
          tipName = ha.spec.name
          tipStatus = cfg.label
          tipAt = time
          tipId = hid as string
          const b = tipEl.querySelector('b') as HTMLElement
          const dotI = tipEl.querySelector('i') as HTMLElement
          const lab = tipEl.querySelector('u') as HTMLElement
          const em = tipEl.querySelectorAll('em')
          b.textContent = ha.spec.name
          lab.textContent = cfg.label
          dotI.style.background = `rgb(${ha.dot[0] | 0},${ha.dot[1] | 0},${ha.dot[2] | 0})`
          em[0].textContent = fmtTokens(ha.tokens)
          em[1].textContent = fmtTime(ha.seconds)
        }
        const px = (rig.pointerNDC.x + 1) * 0.5 * W
        const py = (1 - rig.pointerNDC.y) * 0.5 * H
        const p = placeTooltip(px, py, TIP_W, TIP_H, W, H)
        tip.set(p.x, p.y, 1, 1)
      } else {
        tip.hide()
        tipId = ''
      }

      // aria-live: at most one announcement per 0.6 s, batched
      if (pending.length && performance.now() / 1000 - lastSay > 0.6) {
        lastSay = performance.now() / 1000
        sr.textContent = pending.splice(0).join('. ')
      }
    },
    dispose() {
      for (const off of offs.splice(0)) off()
      labels.clear()
      axisMem.clear()
      layerRoot?.remove()
      sr?.remove()
    },
  }
}
