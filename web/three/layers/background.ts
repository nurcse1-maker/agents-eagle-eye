/**
 * Backdrop: gradient, six drifting nebula blobs, vignette and dither in one fullscreen shader.
 * Port of 2D drawBackground (L1354-1409) minus the stars, which have their own layer.
 * Drawn first, ignores the camera (so camera shake never moves it), depth off.
 */
import { Mesh, PlaneGeometry, ShaderMaterial, Vector2, Vector3, Vector4 } from 'three'
import { RENDER_ORDER } from '../layer'
import type { Layer, LayerCtx } from '../layer'

/** 2D BLOBS L1354-1361: x, y, r (fractions of the viewport), colour, alpha, drift frequencies. */
export const BLOBS = [
  { x: 0.2, y: 0.1, r: 0.55, c: [150, 70, 255], a: 0.2, fx: 0.07, fy: 0.05 },
  { x: 0.55, y: 0.5, r: 0.7, c: [50, 90, 255], a: 0.16, fx: 0.05, fy: 0.06 },
  { x: 0.3, y: 0.88, r: 0.5, c: [255, 140, 50], a: 0.13, fx: 0.06, fy: 0.04 },
  { x: 0.02, y: 0.45, r: 0.4, c: [40, 255, 130], a: 0.11, fx: 0.05, fy: 0.07 },
  { x: 0.95, y: 0.28, r: 0.45, c: [60, 200, 255], a: 0.1, fx: 0.04, fy: 0.05 },
  { x: 0.9, y: 0.78, r: 0.45, c: [255, 150, 60], a: 0.08, fx: 0.05, fy: 0.05 },
] as const

/** 2D L1368-1371 gradient stops (top to bottom). */
export const GRADIENT = ['#03040f', '#050a22', '#030410'] as const

const rgb = (hex: string) => new Vector3(parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)).divideScalar(255)

const VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`

const FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform float uMotion;
uniform vec2 uPointer;   // -1..1, y up
uniform vec2 uOrbit;     // theta, phi relative to home
uniform vec2 uRes;       // CSS px
uniform vec3 uG0;
uniform vec3 uG1;
uniform vec3 uG2;
uniform vec4 uBlob[6];   // x, y, r, alpha
uniform vec3 uBlobC[6];  // colour 0..1
uniform vec2 uBlobF[6];  // fx, fy

float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }

void main() {
  vec2 res = uRes;
  float W = res.x;
  float H = res.y;
  vec2 p = vec2(vUv.x * W, (1.0 - vUv.y) * H); // CSS px, y down like the 2D canvas
  float gy = 1.0 - vUv.y;

  // gradient: top -> middle -> bottom (2D L1368-1371)
  vec3 col = gy < 0.5 ? mix(uG0, uG1, gy / 0.5) : mix(uG1, uG2, (gy - 0.5) / 0.5);

  // pointer / orbit parallax (2D pxo,pyo L1377-1378; blobs move by 0.03 of it)
  float pxo = uPointer.x * 0.5;
  float pyo = -uPointer.y * 0.5;
  float ox = pxo * 0.03 - sin(uOrbit.x) * 0.06;
  float oy = pyo * 0.03 + sin(uOrbit.y) * 0.06;

  float M = max(W, H);
  for (int k = 0; k < 6; k++) {
    float i = float(k);
    vec4 b = uBlob[k];
    vec2 f = uBlobF[k];
    float bx = (b.x + sin(uTime * f.x * uMotion + i * 2.0) * 0.05 - ox) * W;
    float by = (b.y + cos(uTime * f.y * uMotion + i * 3.0) * 0.04 - oy) * H;
    float r = b.z * M * (1.0 + sin(uTime * 0.2 + i) * 0.05);
    float d = length(p - vec2(bx, by));
    float a = b.w * clamp(1.0 - d / r, 0.0, 1.0);
    col += uBlobC[k] * a; // additive, like 'lighter'
  }

  // vignette (2D L1403-1407): radial 0.35 min(W,H) .. 0.62 hypot(W,H), rgba(0,0,8,0.6) at the rim
  float r0 = min(W, H) * 0.35;
  float r1 = length(res) * 0.62;
  float v = clamp((length(p - res * 0.5) - r0) / (r1 - r0), 0.0, 1.0) * 0.6;
  col = mix(col, vec3(0.0, 0.0, 8.0 / 255.0), v);

  // one 8-bit step of triangular-ish dither so the gradients do not band
  col += (ign(gl_FragCoord.xy) - 0.5) / 255.0;
  gl_FragColor = vec4(col, 1.0);
}
`

export function createBackgroundLayer(): Layer {
  let mesh: Mesh | undefined
  let material: ShaderMaterial | undefined
  let scene: LayerCtx['scene'] | undefined

  return {
    name: 'background',
    renderOrder: RENDER_ORDER.background,
    init(ctx) {
      const u = ctx.uniforms
      material = new ShaderMaterial({
        vertexShader: VERT,
        fragmentShader: FRAG,
        uniforms: {
          uTime: u.time,
          uMotion: u.motion,
          uPointer: u.pointer,
          uOrbit: u.orbit,
          uRes: u.resolution,
          uG0: { value: rgb(GRADIENT[0]) },
          uG1: { value: rgb(GRADIENT[1]) },
          uG2: { value: rgb(GRADIENT[2]) },
          uBlob: { value: BLOBS.map(b => new Vector4(b.x, b.y, b.r, b.a)) },
          uBlobC: { value: BLOBS.map(b => new Vector3(b.c[0], b.c[1], b.c[2]).divideScalar(255)) },
          uBlobF: { value: BLOBS.map(b => new Vector2(b.fx, b.fy)) },
        },
        depthTest: false,
        depthWrite: false,
        transparent: false,
        toneMapped: false,
      })
      mesh = new Mesh(new PlaneGeometry(2, 2), material)
      mesh.frustumCulled = false
      mesh.renderOrder = RENDER_ORDER.background
      mesh.name = 'background'
      scene = ctx.scene
      scene.add(mesh)
    },
    update() {
      /* all motion is in the shader, driven by the shared time/motion/pointer uniforms */
    },
    dispose() {
      if (mesh) {
        scene?.remove(mesh)
        mesh.geometry.dispose()
      }
      material?.dispose()
      mesh = undefined
      material = undefined
    },
  }
}
