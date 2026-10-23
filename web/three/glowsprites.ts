/**
 * Instanced camera-facing glow sprites: one draw call for any number of soft glows (2D drawGlow L151-155, the
 * 96 px radial sprite: alpha 1 / .55 at 20% / .14 at 50% / 0, evaluated procedurally) and hard white discs.
 * Used by the packet and spark layers. Colours are RGB 0..255 in, additive raw output.
 */
import { AdditiveBlending, BufferAttribute, DynamicDrawUsage, InstancedBufferAttribute, InstancedBufferGeometry, Mesh, ShaderMaterial } from 'three'
import type { Scene } from 'three'
import type { Uniforms } from './layer'

const VERT = /* glsl */ `
attribute vec4 aPos; // xyz centre, w = radius in world units (negative: hard disc)
attribute vec4 aCol; // rgb 0..1, alpha
uniform vec2 uRes;
varying vec2 vC;
varying vec4 vCol;
varying float vDisc;
void main() {
  vec4 mv = viewMatrix * vec4(aPos.xyz, 1.0);
  float r0 = abs(aPos.w);
  float zc = max(-mv.z, 1.0);
  float ppu = projectionMatrix[1][1] * 0.5 * uRes.y / zc; // px per world unit
  float rad = max(r0, 1.2 / ppu);
  float fade = min(1.0, (r0 * r0) / (rad * rad)); // a sprite grown to the 1.2 px floor gets dimmer, not brighter
  vec4 pos = mv;
  pos.xy += position.xy * rad;
  vC = position.xy;
  vDisc = aPos.w < 0.0 ? 1.0 : 0.0;
  vCol = vec4(aCol.rgb, aCol.a * fade * (mv.z < -1.0 ? 1.0 : 0.0));
  gl_Position = projectionMatrix * pos;
}
`

const FRAG = /* glsl */ `
precision highp float;
varying vec2 vC;
varying vec4 vCol;
varying float vDisc;
void main() {
  float d = length(vC);
  if (d >= 1.0) discard;
  float g;
  if (vDisc > 0.5) {
    g = 1.0 - smoothstep(0.6, 1.0, d);
  } else if (d < 0.2) {
    g = mix(1.0, 0.55, d / 0.2);
  } else if (d < 0.5) {
    g = mix(0.55, 0.14, (d - 0.2) / 0.3);
  } else {
    g = mix(0.14, 0.0, (d - 0.5) / 0.5);
  }
  gl_FragColor = vec4(vCol.rgb * (vCol.a * g), 1.0);
}
`

export class GlowSprites {
  readonly mesh: Mesh
  private readonly geo: InstancedBufferGeometry
  private readonly mat: ShaderMaterial
  private readonly pos: Float32Array
  private readonly col: Float32Array
  private readonly aPos: InstancedBufferAttribute
  private readonly aCol: InstancedBufferAttribute
  private n = 0
  private scene: Scene | undefined

  constructor(
    readonly capacity: number,
    renderOrder: number,
    uniforms: Uniforms,
    name: string,
  ) {
    const geo = new InstancedBufferGeometry()
    geo.setAttribute('position', new BufferAttribute(new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]), 3))
    geo.setIndex([0, 1, 2, 0, 2, 3])
    this.pos = new Float32Array(capacity * 4)
    this.col = new Float32Array(capacity * 4)
    this.aPos = new InstancedBufferAttribute(this.pos, 4)
    this.aCol = new InstancedBufferAttribute(this.col, 4)
    this.aPos.setUsage(DynamicDrawUsage)
    this.aCol.setUsage(DynamicDrawUsage)
    geo.setAttribute('aPos', this.aPos)
    geo.setAttribute('aCol', this.aCol)
    geo.instanceCount = 0
    this.geo = geo
    this.mat = new ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms: { uRes: { value: uniforms.resolution.value } },
      blending: AdditiveBlending,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
    })
    this.mesh = new Mesh(geo, this.mat)
    this.mesh.frustumCulled = false
    this.mesh.renderOrder = renderOrder
    this.mesh.name = name
  }

  attach(scene: Scene): void {
    this.scene = scene
    scene.add(this.mesh)
  }

  begin(): void {
    this.n = 0
  }

  /** radius > 0: soft glow; radius < 0: hard disc of |radius|. rgb 0..255. */
  add(x: number, y: number, z: number, radius: number, r: number, g: number, b: number, alpha: number): void {
    if (this.n >= this.capacity || alpha <= 0.004) return
    const i = this.n++ * 4
    this.pos[i] = x
    this.pos[i + 1] = y
    this.pos[i + 2] = z
    this.pos[i + 3] = radius
    this.col[i] = r / 255
    this.col[i + 1] = g / 255
    this.col[i + 2] = b / 255
    this.col[i + 3] = alpha > 1 ? 1 : alpha
  }

  end(): void {
    this.geo.instanceCount = this.n
    this.aPos.needsUpdate = true
    this.aCol.needsUpdate = true
  }

  get count(): number {
    return this.n
  }

  dispose(): void {
    this.scene?.remove(this.mesh)
    this.geo.dispose()
    this.mat.dispose()
    this.scene = undefined
  }
}
