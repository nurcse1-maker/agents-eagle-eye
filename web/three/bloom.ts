/**
 * Bloom tier (plan 5.3, Phase 8): EffectComposer + RenderPass + UnrealBloomPass + OutputPass, imported by name so the
 * bundler keeps only those modules. The scene renders into a HalfFloat target (additive layers accumulate above 1.0,
 * which is what makes the bloom bright), the bloom runs at half resolution (UnrealBloomPass starts its mip chain at
 * 1/2 of the size it is given) and OutputPass writes the opaque canvas.
 *
 * The layers write RAW display colours (no colour-space chunk), so the output stage must not encode again: while bloom
 * is active the renderer's outputColorSpace is Linear (OutputPass then copies the values through) and the clear colour
 * is given as raw linear numbers, so both paths show the same picture.
 *
 * Active only when: user toggle on AND uniforms.tier === 1 (the governor drops the tier first under load).
 * The composer is created on first use and freed again after FREE_AFTER_S seconds of being inactive.
 */
import { Color, HalfFloatType, LinearSRGBColorSpace, SRGBColorSpace, Vector2, WebGLRenderTarget } from 'three'
import type { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'

export const BLOOM_STRENGTH = 0.6 // plan: 0.6-0.9 (the orb stacks many additive layers; more than this whites it out)
export const BLOOM_RADIUS = 0.4
export const BLOOM_THRESHOLD = 0.7 // plan: 0.55-0.7
const FREE_AFTER_S = 4
const KEY = 'eagle-eye-3d-bloom'

/**
 * Pure: bloom strength multiplier from the zoom (`ratio` = camera radius / home radius). 1 at the home view or further out,
 * smoothly down to 0.5 when zoomed in to a quarter of it, so the orb alone does not blow out when the camera is close.
 */
export const bloomZoomScale = (ratio: number): number => {
  if (!(ratio > 0)) return 1
  const t = Math.min(1, Math.max(0, (ratio - 0.25) / 0.75))
  return 0.5 + 0.5 * t * t * (3 - 2 * t)
}

/** Pure: should the bloom pass run this frame? */
export const bloomActive = (user: boolean, tier: number, supported: boolean) => supported && user && tier === 1

export const readBloomPref = (): boolean => {
  try {
    return localStorage.getItem(KEY) !== '0' // default on; the governor decides if it may run
  } catch {
    return true
  }
}
const writeBloomPref = (on: boolean) => {
  try {
    localStorage.setItem(KEY, on ? '1' : '0')
  } catch {
    /* private mode, blocked storage: the choice just is not remembered */
  }
}

export interface BloomDeps {
  renderer: WebGLRenderer
  scene: Scene
  camera: PerspectiveCamera
  container: HTMLElement
  /** Raw display colour behind the scene (0xRRGGBB). */
  clearHex: number
  /** Current governor tier (1 = bloom allowed). */
  tier: () => number
  /** The user pressed the toggle while the governor had dropped bloom: ask the engine to allow it again. */
  allowTier: () => void
}

export interface Bloom {
  /** The preference of the user (persisted). */
  user: boolean
  /** Strength multiplier written by the engine (zoom); 1 = none. */
  zoomScale: number
  /** True when the composer drives this frame. */
  readonly active: boolean
  /** Renders the frame through the composer. Call only when `active`; returns false if it failed and bloom is off now. */
  render(dt: number): boolean
  /** Call once per frame before render decisions (frees the composer after a while, refreshes the toggle). */
  tick(dt: number): void
  setSize(w: number, h: number, dpr: number): void
  setUser(on: boolean): void
  /** Dev: live-tune the pass (strength, radius, threshold). */
  tune(strength: number, radius: number, threshold: number): void
  dispose(): void
}

export const createBloom = (d: BloomDeps): Bloom => {
  const { renderer } = d
  const clear = new Color()
  const clearRaw = new Color().setRGB(((d.clearHex >> 16) & 255) / 255, ((d.clearHex >> 8) & 255) / 255, (d.clearHex & 255) / 255, LinearSRGBColorSpace)
  const clearScreen = new Color(d.clearHex)
  let composer: EffectComposer | undefined
  let bloomPass: UnrealBloomPass | undefined
  let w = 0
  let h = 0
  let dpr = 1
  let idle = 0
  let failed = false
  let routed = false // renderer currently set up for the composer path
  let last = false
  let baseStrength = BLOOM_STRENGTH

  /* ───── the toggle: a pill like the 2D / 3D tabs, bottom right of the 3D view ───── */
  const style = document.createElement('style')
  style.textContent =
    '.ee3d-bloom{position:absolute;right:16px;bottom:14px;z-index:3;margin:0;padding:7px 12px 7px 24px;border:1px solid rgba(120,140,220,.18);border-radius:999px;' +
    'font:500 12px/1 Inter,"Segoe UI",system-ui,sans-serif;letter-spacing:.02em;color:#8a93b8;background:rgba(10,14,40,.55);cursor:pointer;' +
    'transition:color 120ms ease-out,background-color 120ms ease-out,transform 120ms ease-out}' +
    '.ee3d-bloom::before{content:"";position:absolute;left:10px;top:50%;width:6px;height:6px;margin-top:-3px;border-radius:50%;background:#707898;transition:background-color 120ms ease-out,box-shadow 120ms ease-out}' +
    '.ee3d-bloom:active{transform:scale(.97)}' +
    '.ee3d-bloom[aria-pressed="true"]{color:#e8ecff;background:rgba(120,140,220,.2)}' +
    '.ee3d-bloom[aria-pressed="true"]::before{background:#8fb0ff;box-shadow:0 0 8px #8fb0ff}' +
    '.ee3d-bloom:focus-visible{outline:2px solid rgba(140,170,255,.7);outline-offset:1px}' +
    '@media (hover:hover){.ee3d-bloom:hover:not([aria-pressed="true"]){color:#c4cbea}}' +
    '@media (prefers-reduced-motion:reduce){.ee3d-bloom,.ee3d-bloom::before{transition:none}.ee3d-bloom:active{transform:none}}'
  const btn = document.createElement('button')
  btn.type = 'button'
  btn.className = 'ee3d-bloom'
  btn.textContent = 'Bloom'
  btn.setAttribute('aria-pressed', 'false')
  d.container.append(style, btn)
  let shown = ''
  const paint = () => {
    const on = bloomActive(api.user, d.tier(), !failed)
    const key = `${on}|${api.user}`
    if (key === shown) return
    shown = key
    btn.setAttribute('aria-pressed', String(on))
    btn.title = on ? 'Bloom glow is on' : api.user && !failed ? 'Bloom glow is paused: the frame rate dropped. Press to try again' : 'Bloom glow is off'
  }
  const onClick = () => {
    const on = bloomActive(api.user, d.tier(), !failed)
    if (on) api.setUser(false)
    else {
      api.setUser(true)
      d.allowTier()
    }
  }
  btn.addEventListener('click', onClick)
  // the canvas must not see presses on the button (orbit, empty-space ripple)
  const stop = (e: Event) => e.stopPropagation()
  btn.addEventListener('pointerdown', stop)
  btn.addEventListener('dblclick', stop)

  /* ───── composer ───── */
  const build = (): boolean => {
    try {
      const target = new WebGLRenderTarget(Math.max(1, w * dpr), Math.max(1, h * dpr), { type: HalfFloatType })
      const c = new EffectComposer(renderer, target)
      c.setPixelRatio(dpr)
      c.setSize(w, h)
      c.addPass(new RenderPass(d.scene, d.camera))
      bloomPass = new UnrealBloomPass(new Vector2(w * dpr, h * dpr), BLOOM_STRENGTH, BLOOM_RADIUS, BLOOM_THRESHOLD)
      c.addPass(bloomPass)
      c.addPass(new OutputPass())
      composer = c
      return true
    } catch (err) {
      console.error('eagle-eye 3D: bloom unavailable', err)
      failed = true
      composer = undefined
      return false
    }
  }

  const free = () => {
    composer?.dispose()
    bloomPass?.dispose()
    composer = undefined
    bloomPass = undefined
  }

  const route = (on: boolean) => {
    if (on === routed) return
    routed = on
    renderer.outputColorSpace = on ? LinearSRGBColorSpace : SRGBColorSpace
    renderer.setClearColor(on ? clearRaw : clear.copy(clearScreen), 1)
  }

  const api: Bloom = {
    user: readBloomPref(),
    zoomScale: 1,
    get active() {
      return bloomActive(api.user, d.tier(), !failed)
    },
    render(dt) {
      if (!composer && !build()) {
        route(false)
        paint()
        return false
      }
      route(true)
      if (bloomPass) bloomPass.strength = baseStrength * api.zoomScale
      composer!.render(dt)
      return true
    },
    tick(dt) {
      const on = bloomActive(api.user, d.tier(), !failed)
      if (on) idle = 0
      else {
        idle += dt
        if (routed) route(false)
        if (composer && idle > FREE_AFTER_S) free()
      }
      if (on !== last) {
        last = on
        paint()
      }
    },
    setSize(nw, nh, ndpr) {
      w = nw
      h = nh
      dpr = ndpr
      if (composer) {
        composer.setPixelRatio(dpr)
        composer.setSize(w, h)
      }
    },
    tune(st, ra, th) {
      baseStrength = st
      if (bloomPass) {
        bloomPass.strength = st
        bloomPass.radius = ra
        bloomPass.threshold = th
      }
    },
    setUser(on) {
      api.user = on
      writeBloomPref(on)
      if (!on) free()
      paint()
    },
    dispose() {
      btn.removeEventListener('click', onClick)
      btn.removeEventListener('pointerdown', stop)
      btn.removeEventListener('dblclick', stop)
      btn.remove()
      style.remove()
      route(false)
      free()
    },
  }
  paint()
  return api
}
