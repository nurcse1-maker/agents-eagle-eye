/**
 * Draws the shared `fx.sparks` pool (2D drawEffects L1837-1840): additive glow of radius size*3.2, alpha (1-life/max)*0.8.
 * Instanced billboards, one draw call, 1500 cap. The pool itself is simulated by fx.ts.
 */
import { RENDER_ORDER } from '../layer'
import type { Layer } from '../layer'
import { GlowSprites } from '../glowsprites'

export const SPARK_DRAW_CAP = 1500

export function createSparksLayer(): Layer {
  let sprites: GlowSprites | undefined
  return {
    name: 'sparks',
    renderOrder: RENDER_ORDER.sparks,
    init(ctx) {
      sprites = new GlowSprites(SPARK_DRAW_CAP, RENDER_ORDER.sparks, ctx.uniforms, 'sparks')
      sprites.attach(ctx.scene)
    },
    update() {
      /* the pool is stepped by fx.step */
    },
    beforeRender(ctx) {
      if (!sprites) return
      const list = ctx.fx.sparks
      sprites.begin()
      for (let i = 0; i < list.length; i++) {
        const s = list[i]
        const k = 1 - s.life / s.max
        sprites.add(s.x, s.y, s.z, s.size * 3.2, s.col[0], s.col[1], s.col[2], k * 0.8)
      }
      sprites.end()
    },
    dispose() {
      sprites?.dispose()
      sprites = undefined
    },
  }
}
