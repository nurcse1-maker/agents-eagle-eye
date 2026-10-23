/**
 * 3000 twinkling stars on a far shell (2D: 170 on screen, L457-459 and L1392-1399). One Points draw call,
 * twinkle in the vertex shader, no per-frame CPU work. They are real 3D, so orbiting gives true parallax.
 */
import { AdditiveBlending, BufferGeometry, Float32BufferAttribute, Points, ShaderMaterial, Sphere, Vector3 } from 'three'
import { RENDER_ORDER } from '../layer'
import type { Layer, LayerCtx } from '../layer'
import { TAU } from '../springs'

export const STAR_COUNT = 3000
/** Shell radius range in world units: nearer = brighter (z near 1), farther = dimmer. */
const SHELL_NEAR = 6000
const SHELL_FAR = 14000

const VERT = /* glsl */ `
attribute vec4 aStar; // size, phase, frequency, z (brightness depth 0.2..1)
uniform float uTime;
uniform float uMotion;
uniform float uDpr;
varying float vAlpha;
void main() {
  float s = aStar.x;
  // twinkle (2D L1395): a = (0.25 + 0.75 * (0.5 + 0.5 sin(t f + ph))) * z * 0.8 ; frozen at its mean when motion is reduced
  float tw = uMotion < 0.5 ? 0.5 : 0.5 + 0.5 * sin(uTime * aStar.z + aStar.y);
  float a = (0.25 + 0.75 * tw) * aStar.w * 0.8;
  float px = s * uDpr;
  gl_PointSize = max(px, 1.0);
  vAlpha = a * min(px, 1.0); // sub-pixel stars become dimmer instead of vanishing
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const FRAG = /* glsl */ `
precision highp float;
varying float vAlpha;
uniform vec3 uColor;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float soft = 1.0 - smoothstep(0.25, 0.5, length(c));
  gl_FragColor = vec4(uColor * vAlpha * soft, 1.0);
}
`

export function createStarsLayer(): Layer {
  let points: Points | undefined
  let geometry: BufferGeometry | undefined
  let material: ShaderMaterial | undefined
  let scene: LayerCtx['scene'] | undefined

  return {
    name: 'stars',
    renderOrder: RENDER_ORDER.stars,
    init(ctx) {
      const rng = ctx.rng
      const pos = new Float32Array(STAR_COUNT * 3)
      const attr = new Float32Array(STAR_COUNT * 4)
      for (let i = 0; i < STAR_COUNT; i++) {
        // uniform direction on the sphere
        const cz = rng() * 2 - 1
        const a = rng() * TAU
        const sr = Math.sqrt(1 - cz * cz)
        const z = 0.2 + rng() * 0.8
        const R = SHELL_FAR + (SHELL_NEAR - SHELL_FAR) * z
        pos[i * 3] = Math.cos(a) * sr * R
        pos[i * 3 + 1] = cz * R
        pos[i * 3 + 2] = Math.sin(a) * sr * R
        attr[i * 4] = 0.4 + rng() * 1.2 // size 0.4..1.6
        attr[i * 4 + 1] = rng() * TAU // phase
        attr[i * 4 + 2] = 0.6 + rng() * 1.8 // frequency 0.6..2.4
        attr[i * 4 + 3] = z
      }
      geometry = new BufferGeometry()
      geometry.setAttribute('position', new Float32BufferAttribute(pos, 3))
      geometry.setAttribute('aStar', new Float32BufferAttribute(attr, 4))
      geometry.boundingSphere = new Sphere(new Vector3(0, 0, 0), 1e6)
      material = new ShaderMaterial({
        vertexShader: VERT,
        fragmentShader: FRAG,
        uniforms: {
          uTime: ctx.uniforms.time,
          uMotion: ctx.uniforms.motion,
          uDpr: ctx.uniforms.dpr,
          uColor: { value: new Vector3(207, 224, 255).divideScalar(255) }, // #cfe0ff
        },
        blending: AdditiveBlending,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        toneMapped: false,
      })
      points = new Points(geometry, material)
      points.frustumCulled = false
      points.renderOrder = RENDER_ORDER.stars
      points.name = 'stars'
      scene = ctx.scene
      scene.add(points)
    },
    update() {
      /* GPU only */
    },
    dispose() {
      if (points) scene?.remove(points)
      geometry?.dispose()
      material?.dispose()
      points = undefined
      geometry = undefined
      material = undefined
    },
  }
}
