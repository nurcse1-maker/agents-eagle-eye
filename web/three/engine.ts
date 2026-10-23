/**
 * The 3D engine: renderer, scene, loop, clocks, quality governor, context-loss handling, disposal.
 * Everything visual lives in layers (see layer.ts); the engine only owns the frame.
 *
 * Clocks are identical to 2D (L1950-1960): wall dt clamped to [0.001, 0.25], split into
 * ceil(raw / 0.033) equal sub-steps, master clock `t`, flare clock `ft = 0.4 t`.
 */
import { Color, NoToneMapping, Scene, SRGBColorSpace, Vector2, Vector3, WebGLRenderer } from 'three'
import type { LiveState } from '../bridge'
import { disposeAssets, reuploadAssets } from './assets'
import { bloomZoomScale, createBloom } from './bloom'
import type { Bloom } from './bloom'
import { createCameraRig } from './camera'
import type { CameraRig } from './camera'
import { createFx } from './fx'
import type { Fx } from './fx'
import { fogUniform, updateFog } from './layer'
import type { Layer, LayerCtx, Uniforms } from './layer'
import { seeded } from '../shared/rng'
import { springs } from './springs'
import { AgentWorld } from './world'

export const BACKGROUND_HEX = 0x03040f
const FLARE_SLOW = 0.4 // 2D FSLOW L475
const MAX_STEP = 0.033
const MAX_DT = 0.25
const RESTORE_TIMEOUT_MS = 3000
/**
 * Camera fit margins around every agent home (world units): a planet plus its callout card sideways, the planet plus
 * the card height vertically (Addendum A.2, A.7).
 */
const FIT_PAD_H = 230
const FIT_PAD_V = 150

/* governor (plan 5.3) */
const SLOW_MS = 20
const FAST_MS = 12
const SLOW_FRAMES = 30
const FAST_FRAMES = 120
const COOLDOWN_MS = 2500
const DPR_STEP = 0.15
const DPR_FLOOR = 0.6
/**
 * Frames whose wall interval exceeds this are not a measure of our cost: a background or occluded tab runs rAF at
 * 1-2 fps, a returning tab delivers one huge gap, a debugger pause or a GC hitch is a single outlier. They are skipped
 * (counters and EMA untouched), as are frames while the document is hidden. A tab that is merely throttled therefore
 * never lowers quality. Known limit: a steady 30 Hz rAF (battery saver, throttled iframe) looks like a slow machine.
 */
const GOV_MAX_DT_MS = 100
/** After the governor dropped bloom, going back needs this many times FAST_FRAMES of calm (doubles per drop, max 8). */
const MAX_BLOOM_BACKOFF = 8

export interface EngineOptions {
  reducedMotion: boolean
  /** Unrecoverable (context not restored in 3 s, renderer creation failed): the shell falls back to 2D. */
  onFatal?: (why: string) => void
  /** Freeze the clock (debug; also `?freeze=1`). */
  freeze?: boolean
}

/** Per-layer cost in ms per frame since the last call (dev tool, see Engine.layerTimings). */
export interface LayerTiming {
  name: string
  updateMs: number
  renderMs: number
}

export interface EngineStats {
  fps: number
  frameMs: number
  drawCalls: number
  dpr: number
  tier: number
  triangles: number
}

export interface Engine {
  readonly container: HTMLElement
  readonly canvas: HTMLCanvasElement
  readonly renderer: WebGLRenderer
  readonly scene: Scene
  readonly rig: CameraRig
  readonly world: AgentWorld
  readonly fx: Fx
  readonly uniforms: Uniforms
  readonly ctx: LayerCtx
  /** Master clock, world seconds. */
  readonly t: number
  /** Flare clock (0.4 t). */
  readonly ft: number
  /** 1, or 0.35 under prefers-reduced-motion. */
  readonly motion: number
  /** 1 = bloom wanted, 0 = off. Dropped first by the governor. */
  readonly tier: number
  readonly dpr: number
  /** Set true once a bloom pass exists (Phase 8); until then a tier drop is followed by a DPR step. */
  hasBloom: boolean
  /** The bloom tier and its toggle (bloom.ts). */
  readonly bloom: Bloom
  /** Dev: set the pixel ratio directly (the governor does the same). */
  setDpr(dpr: number): void
  /** Dev: false pauses the quality governor (also `?gov=0`), for measuring in a throttled or contended browser. */
  governor: boolean
  /** Dev: while true every layer's update and beforeRender are timed with performance.now (small overhead). */
  profile: boolean
  /** Dev: ms per frame spent in each layer since the last call (needs `profile`); resets the accumulators. */
  layerTimings(): LayerTiming[]
  readonly width: number
  readonly height: number
  readonly frozen: boolean

  /** Register a layer: it is initialised now and updated/disposed in `renderOrder` order. */
  addLayer(layer: Layer): void
  getLayer<T extends Layer = Layer>(name: string): T | undefined
  /** Feed a LiveState (every second). */
  update(state: LiveState): void
  setPaused(paused: boolean): void
  resize(): void
  /** Debug: jump the clocks to `t` seconds and render one frame. Does not simulate the way there. */
  setTime(t: number): void
  /** Debug: advance the simulation by `dt` seconds with the normal sub-stepping and render one frame. */
  step(dt: number): void
  stats(): EngineStats
  dispose(): void
}

export const createEngine = (container: HTMLElement, opts: EngineOptions): Engine => {
  const params = new URLSearchParams(location.search)
  const frozen = opts.freeze ?? params.get('freeze') === '1'

  const renderer = new WebGLRenderer({ antialias: false, alpha: false, powerPreference: 'default' })
  renderer.outputColorSpace = SRGBColorSpace
  renderer.toneMapping = NoToneMapping
  renderer.setClearColor(new Color(BACKGROUND_HEX), 1)
  const maxDpr = Math.min(window.devicePixelRatio || 1, 1.5)
  let dpr = maxDpr
  renderer.setPixelRatio(dpr)

  const canvas = renderer.domElement
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block'
  if (getComputedStyle(container).position === 'static') container.style.position = 'relative'
  container.appendChild(canvas)

  const rand = seeded(0xe4e1)
  const scene = new Scene()
  const world = new AgentWorld()
  const mq = typeof window.matchMedia === 'function' ? window.matchMedia('(prefers-reduced-motion: reduce)') : null
  let motion = opts.reducedMotion || mq?.matches ? 0.35 : 1
  const fx = createFx(world, () => motion, rand)
  const rig = createCameraRig({ canvas, fx, motion: () => motion, rand })
  rig.idleDriftEnabled = motion >= 0.5 // reduced motion: the view only moves when the user moves it
  renderer.info.autoReset = false

  const uniforms: Uniforms = {
    time: { value: 0 },
    ft: { value: 0 },
    motion: { value: motion },
    pointer: { value: new Vector2() },
    orbit: { value: new Vector2() },
    tier: { value: 1 },
    dpr: { value: dpr },
    resolution: { value: new Vector2(1, 1) },
  }
  fogUniform(uniforms) // created before any layer so every layer shares the same object (Addendum A.8)

  let t = 0
  let ft = 0
  let tier = 1
  let w = 0
  let h = 0
  let fitted = false // the camera has been fitted to a non-empty roster once
  let fitDirty = true
  let paused = false
  let destroyed = false
  let lost = false
  let raf = 0
  let last = 0
  let restoreTimer: ReturnType<typeof setTimeout> | undefined

  /* governor + stats */
  let emaMs = 16.7
  let slow = 0
  let fast = 0
  let lastChange = -Infinity
  let calls = 0
  let tris = 0

  const layers: Layer[] = []
  let profiling = false
  let accUpdate: number[] = []
  let accRender: number[] = []
  let accSim = 0
  let accFrames = 0
  let frameDt = 0.016
  let backoff = 1

  const engine: Engine = {
    container,
    canvas,
    renderer,
    scene,
    rig,
    world,
    fx,
    uniforms,
    get ctx() {
      return ctx
    },
    get t() {
      return t
    },
    get ft() {
      return ft
    },
    get motion() {
      return motion
    },
    get tier() {
      return tier
    },
    get dpr() {
      return dpr
    },
    hasBloom: true,
    get bloom() {
      return bloom
    },
    get profile() {
      return profiling
    },
    set profile(v: boolean) {
      profiling = v
    },
    layerTimings,
    setDpr: (v: number) => setDpr(v, performance.now()),
    governor: params.get('gov') !== '0',
    get width() {
      return w
    },
    get height() {
      return h
    },
    frozen,
    addLayer,
    getLayer: <T extends Layer = Layer>(name: string) => layers.find(l => l.name === name) as T | undefined,
    update: state => world.applyState(state),
    setPaused,
    resize,
    setTime,
    step: dt => {
      advance(dt)
      render()
    },
    stats,
    dispose,
  }

  const bloom = createBloom({
    renderer,
    scene,
    camera: rig.camera,
    container,
    clearHex: BACKGROUND_HEX,
    tier: () => tier,
    allowTier: () => {
      tier = 1
      uniforms.tier.value = 1
      slow = 0
      lastChange = performance.now() // the cooldown protects the user's choice for a moment
    },
  })

  const ctx: LayerCtx = { engine, renderer, scene, world, fx, rig, uniforms, springs, rng: rand }

  function addLayer(layer: Layer) {
    // keep layers sorted by renderOrder; equal keys keep insertion order
    let i = layers.length
    while (i > 0 && layers[i - 1].renderOrder > layer.renderOrder) i--
    layers.splice(i, 0, layer)
    layer.init(ctx)
    if (w > 0) layer.onResize?.(w, h, ctx)
  }

  /* ───────── sizing ───────── */
  function resize() {
    if (destroyed) return
    const cw = container.clientWidth
    const ch = container.clientHeight
    if (cw < 2 || ch < 2 || (cw === w && ch === h)) return // hidden or collapsed: keep the last size
    w = cw
    h = ch
    renderer.setSize(w, h, false)
    bloom.setSize(w, h, dpr)
    uniforms.resolution.value.set(w, h)
    rig.resize(w, h)
    world.setViewport(w, h)
    refit() // new aspect and homes; immediate until the first fit with agents, sprung after that
    for (const l of layers) l.onResize?.(w, h, ctx)
    if (!lost && !destroyed && last) render()
  }

  /* --------- camera fit (Addendum A.2) --------- */
  const homePts: { x: number; y: number; z: number }[] = []
  /** Fit the home radius to the agents' home positions; the first fit is immediate, later ones spring in (camera.ts). */
  function refit() {
    fitDirty = false
    if (w < 2) return
    let n = 0
    for (const a of world.agents.values()) {
      const p = homePts[n] ?? (homePts[n] = { x: 0, y: 0, z: 0 })
      p.x = a.hx
      p.y = a.hy
      p.z = a.hz
      n++
    }
    homePts.length = n
    if (n === 0) {
      // nothing to frame yet: the inner orbit band, so the orb is not huge
      const p = homePts[0] ?? (homePts[0] = { x: 0, y: 0, z: 0 })
      p.x = 430
      p.y = 0
      p.z = 0
      homePts.length = 1
    }
    rig.fitDisc(homePts, FIT_PAD_H, FIT_PAD_V, !fitted)
    if (!fitted) rig.radius = rig.homeRadius
    if (n > 0) fitted = true
  }
  const markFit = () => {
    fitDirty = true
  }
  world.on('layout', markFit)
  world.on('reset', markFit)
  world.on('agentAdded', markFit)
  world.on('agentRemoved', markFit)

  /* ───────── simulation ───────── */
  function simStep(dt: number) {
    t += dt
    ft += dt * FLARE_SLOW
    uniforms.time.value = t
    uniforms.ft.value = ft
    uniforms.motion.value = motion
    world.time = t
    const t0 = profiling ? performance.now() : 0
    fx.step(dt)
    if (fitDirty) refit()
    rig.update(dt, t)
    uniforms.pointer.value.copy(rig.parallax)
    uniforms.orbit.value.copy(rig.orbit)
    if (profiling) {
      accSim += performance.now() - t0
      for (let i = 0; i < layers.length; i++) {
        const a = performance.now()
        layers[i].update(dt, ctx)
        accUpdate[i] = (accUpdate[i] ?? 0) + performance.now() - a
      }
    } else for (const l of layers) l.update(dt, ctx)
  }

  /** The 2D sub-stepping: n equal steps of at most 0.033 s. */
  function advance(raw: number) {
    const r = Math.min(MAX_DT, Math.max(0.001, raw))
    const n = Math.ceil(r / MAX_STEP)
    frameDt = r
    for (let i = 0; i < n; i++) simStep(r / n)
  }

  function render() {
    updateFog(uniforms, rig.camera.position, world.orb)
    if (profiling) {
      accFrames++
      for (let i = 0; i < layers.length; i++) {
        const a = performance.now()
        layers[i].beforeRender?.(ctx)
        accRender[i] = (accRender[i] ?? 0) + performance.now() - a
      }
    } else for (const l of layers) l.beforeRender?.(ctx)
    bloom.zoomScale = bloomZoomScale(rig.radius / rig.homeRadius)
    bloom.tick(frameDt)
    renderer.info.reset() // autoReset is off: the composer renders several passes per frame, count them all
    if (!(bloom.active && bloom.render(frameDt))) renderer.render(scene, rig.camera)
    calls = renderer.info.render.calls
    tris = renderer.info.render.triangles
  }

  function layerTimings(): LayerTiming[] {
    const n = Math.max(1, accFrames)
    const out: LayerTiming[] = [{ name: 'engine(fx,camera)', updateMs: accSim / n, renderMs: 0 }]
    for (let i = 0; i < layers.length; i++) out.push({ name: layers[i].name, updateMs: (accUpdate[i] ?? 0) / n, renderMs: (accRender[i] ?? 0) / n })
    accUpdate = []
    accRender = []
    accSim = 0
    accFrames = 0
    return out
  }

  function setTime(next: number) {
    t = Math.max(0, next)
    ft = t * FLARE_SLOW
    uniforms.time.value = t
    uniforms.ft.value = ft
    world.time = t
    rig.update(0.0001, t)
    uniforms.pointer.value.copy(rig.parallax)
    uniforms.orbit.value.copy(rig.orbit)
    render()
  }

  /* ───────── governor ───────── */
  function govern(ms: number, now: number) {
    emaMs += (ms - emaMs) * 0.1
    if (emaMs > SLOW_MS) {
      slow++
      fast = 0
    } else if (emaMs < FAST_MS) {
      fast++
      slow = 0
    } else {
      slow = fast = 0
    }
    if (now - lastChange < COOLDOWN_MS) return
    if (slow >= SLOW_FRAMES) {
      slow = 0
      if (tier > 0) {
        const wasBloom = bloom.active
        tier = 0
        uniforms.tier.value = 0
        lastChange = now
        if (wasBloom) {
          backoff = Math.min(MAX_BLOOM_BACKOFF, backoff * 2)
          return // bloom was the cost; give it a chance before touching resolution
        }
      }
      if (dpr > DPR_FLOOR + 1e-6) setDpr(Math.max(DPR_FLOOR, dpr - DPR_STEP), now)
    } else if (fast >= FAST_FRAMES) {
      if (dpr < maxDpr - 1e-6) {
        fast = 0
        setDpr(Math.min(maxDpr, dpr + DPR_STEP), now)
      } else if (tier === 0 && fast >= FAST_FRAMES * backoff) {
        fast = 0
        tier = 1
        uniforms.tier.value = 1
        lastChange = now
      }
    }
  }

  function setDpr(next: number, now: number) {
    dpr = next
    lastChange = now
    renderer.setPixelRatio(dpr)
    bloom.setSize(w, h, dpr)
    uniforms.dpr.value = dpr
    for (const l of layers) l.onResize?.(w, h, ctx)
  }

  /* ───────── loop ───────── */
  function frame(now: number) {
    if (destroyed || paused || lost) return
    raf = requestAnimationFrame(frame)
    resize() // robust against missed ResizeObserver callbacks
    const wallMs = last ? now - last : 16.7
    const raw = ((now - (last || now)) / 1000) * 1
    last = now
    if (engine.governor && wallMs <= GOV_MAX_DT_MS && !document.hidden) govern(wallMs, now)
    if (!frozen) advance(raw)
    else rig.update(Math.min(MAX_DT, Math.max(0.001, raw)), t) // the camera stays interactive
    render()
  }

  function start() {
    cancelAnimationFrame(raf)
    last = 0 // resets the clock: the first frame after a pause steps by the 1 ms minimum
    if (!destroyed && !paused && !lost && !document.hidden) raf = requestAnimationFrame(frame)
  }

  function setPaused(p: boolean) {
    if (p === paused) return
    paused = p
    world.setPaused(paused || document.hidden, performance.now())
    if (p) cancelAnimationFrame(raf)
    else start()
  }

  const onVisibility = () => {
    world.setPaused(paused || document.hidden, performance.now())
    if (document.hidden) cancelAnimationFrame(raf)
    else start()
  }
  document.addEventListener('visibilitychange', onVisibility)

  const ro = typeof ResizeObserver === 'function' ? new ResizeObserver(() => resize()) : null
  ro?.observe(container)

  const onMotion = () => {
    motion = mq?.matches ? 0.35 : 1
    uniforms.motion.value = motion
    rig.idleDriftEnabled = motion >= 0.5
  }
  mq?.addEventListener?.('change', onMotion)

  /* ───────── context loss ───────── */
  const onLost = (e: Event) => {
    e.preventDefault()
    lost = true
    cancelAnimationFrame(raf)
    clearTimeout(restoreTimer)
    restoreTimer = setTimeout(() => {
      if (lost && !destroyed) opts.onFatal?.('WebGL context was lost and not restored')
    }, RESTORE_TIMEOUT_MS)
  }
  const onRestored = () => {
    clearTimeout(restoreTimer)
    lost = false
    reuploadAssets()
    for (const l of layers) l.onContextRestored?.(ctx)
    start()
  }
  canvas.addEventListener('webglcontextlost', onLost)
  canvas.addEventListener('webglcontextrestored', onRestored)

  /* scene restart: clocks and pools back to zero, like 2D setAgents (L2004-2005) */
  world.on('reset', () => {
    t = 0
    ft = 0
    uniforms.time.value = 0
    uniforms.ft.value = 0
    fx.clear()
  })

  /* a press-and-release on empty space: inward gravity-well ripple (2D L1916, L2040) */
  const tapPoint = { x: 0, y: 0, z: 0 }
  const planePoint = new Vector3()
  const planeNormal = new Vector3(0, 0, 1)
  rig.onTap = () => {
    const hit = rig.pointerWorldOnPlane(planePoint.set(world.orb.x, world.orb.y, world.orb.z), planeNormal)
    if (!hit) return
    tapPoint.x = hit.x
    tapPoint.y = hit.y
    tapPoint.z = hit.z
    fx.ripple({ pos: tapPoint, r0: 70, r1: 6, life: 0.7, color: [150, 180, 255], width: 2 })
  }

  /* ───────── stats / dispose ───────── */
  function stats(): EngineStats {
    return {
      fps: Math.round((1000 / Math.max(1, emaMs)) * 10) / 10,
      frameMs: Math.round(emaMs * 100) / 100,
      drawCalls: calls,
      dpr: Math.round(dpr * 100) / 100,
      tier,
      triangles: tris,
    }
  }

  function dispose() {
    if (destroyed) return
    destroyed = true
    cancelAnimationFrame(raf)
    clearTimeout(restoreTimer)
    ro?.disconnect()
    bloom.dispose()
    document.removeEventListener('visibilitychange', onVisibility)
    mq?.removeEventListener?.('change', onMotion)
    canvas.removeEventListener('webglcontextlost', onLost)
    canvas.removeEventListener('webglcontextrestored', onRestored)
    for (let i = layers.length - 1; i >= 0; i--) {
      try {
        layers[i].dispose()
      } catch (err) {
        console.error('eagle-eye 3D: layer dispose failed', layers[i].name, err)
      }
    }
    layers.length = 0
    rig.dispose()
    fx.clear()
    disposeAssets()
    renderer.dispose()
    renderer.forceContextLoss()
    canvas.remove()
  }

  // first size + first frame
  resize()
  if (w > 0) render()
  start()
  return engine
}
