/**
 * Procedural textures. No image or font loading anywhere in the 3D bundle (file:// taints WebGL and
 * blocks fetch), so everything is drawn into a canvas or built as a DataTexture.
 *
 * Colour handling: textures are left in NoColorSpace (sampled raw) and our ShaderMaterials write raw
 * values, so additive blending happens in gamma space exactly like the 2D canvas.
 */
import { CanvasTexture, LinearFilter } from 'three'
import type { RGB } from '../shared/palette'

const rgbaCss = (c: RGB, a: number) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${a.toFixed(3)})`

const glowCache = new Map<string, CanvasTexture>()

/** Colour quantisation of the 2D glow sprite cache (2D L131): 5 bits per channel, centred. */
export const quantizeColor = (c: RGB): RGB => [((c[0] as number) >> 3 << 3) + 4, ((c[1] as number) >> 3 << 3) + 4, ((c[2] as number) >> 3 << 3) + 4]

/**
 * The 2D radial glow sprite (L130-148) as a 96 px texture: alpha 1 at the centre, 0.55 at 20%, 0.14 at 50%, 0 at the
 * edge, colour constant. Cached per quantised colour, so a glowing agent changing colour does not make a new texture
 * every frame. Shared by all layers; do not dispose it yourself (the engine does, via disposeAssets()).
 */
export function glowTexture(c: RGB): CanvasTexture {
  const q = quantizeColor(c)
  const key = q.join(',')
  let tex = glowCache.get(key)
  if (!tex) {
    const s = document.createElement('canvas')
    s.width = s.height = 96
    const g = s.getContext('2d')!
    const grad = g.createRadialGradient(48, 48, 0, 48, 48, 48)
    grad.addColorStop(0, rgbaCss(q, 1))
    grad.addColorStop(0.2, rgbaCss(q, 0.55))
    grad.addColorStop(0.5, rgbaCss(q, 0.14))
    grad.addColorStop(1, rgbaCss(q, 0))
    g.fillStyle = grad
    g.fillRect(0, 0, 96, 96)
    tex = new CanvasTexture(s)
    tex.minFilter = LinearFilter
    tex.magFilter = LinearFilter
    tex.generateMipmaps = false
    glowCache.set(key, tex)
  }
  return tex
}

/** Number of cached glow textures (debug/tests). */
export const glowCacheSize = () => glowCache.size

/** Flag every cached texture for re-upload (after a context restore). */
export function reuploadAssets(): void {
  for (const t of glowCache.values()) t.needsUpdate = true
}

/** Free all cached textures. Called by the engine on dispose. */
export function disposeAssets(): void {
  for (const t of glowCache.values()) t.dispose()
  glowCache.clear()
}
