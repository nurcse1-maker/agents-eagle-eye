/**
 * Entry of the lazy 3D bundle (eagle-eye-3d.js). Registers the handshake the shell looks for:
 * window.__eagleEye3D = { mount, stats, setTime, step, engine }.
 *
 * mount(container, { reducedMotion }) builds the engine, creates every layer in layers/index.ts and returns
 * the { update, setPaused, destroy } handle the shell (bridge.ts) drives.
 * Keep this bundle ASCII-only; it runs from file:// (no import(), no fetch()).
 */
import type { EagleEye3D, View3DHandle } from '../bridge'
import { createEngine } from './engine'
import type { Engine } from './engine'
import { layerFactories } from './layers'

let active: Engine | undefined

const mount: EagleEye3D['mount'] = (container, opts) => {
  const engine = createEngine(container, {
    reducedMotion: opts.reducedMotion,
    // The shell listens for this event on the container and falls back to 2D (bridge.ts).
    onFatal: why => {
      console.error('eagle-eye 3D: fatal,', why)
      container.dispatchEvent(new CustomEvent('eagle-eye-3d-fatal', { detail: why, bubbles: true }))
    },
  })
  for (const make of layerFactories) engine.addLayer(make())
  // forward clicks to the shell (optional, no-op by default)
  const offClicks = [
    engine.world.on('agentClick', ({ agent }) => opts.onAgentClick?.(agent.spec)),
    engine.world.on('orbClick', () => opts.onOrbClick?.()),
  ]
  active = engine
  api.engine = engine

  return {
    update(state) {
      engine.update(state)
    },
    setPaused: p => engine.setPaused(p),
    destroy() {
      for (const off of offClicks) off()
      engine.dispose()
      if (active === engine) {
        active = undefined
        api.engine = undefined
      }
    },
  } satisfies View3DHandle
}

const api: EagleEye3D = {
  mount,
  stats: () => active?.stats() ?? { fps: 0, drawCalls: 0 },
  setTime: t => active?.setTime(t),
  step: dt => active?.step(dt),
  engine: undefined,
}
window.__eagleEye3D = api
