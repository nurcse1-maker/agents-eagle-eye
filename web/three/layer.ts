/**
 * The layer contract. A layer is one self-contained visual system (background, stars, orb, nodes, links, fx,
 * labels...). The engine owns an ordered list; layers talk to each other only through the shared
 * `ctx.world` model, the `ctx.fx` API and the camera rig, so different agents can build them in disjoint files.
 */
import { Vector3 } from 'three'
import type { Scene, Vector2, WebGLRenderer } from 'three'
import type { CameraRig } from './camera'
import type { Engine } from './engine'
import type { Fx } from './fx'
import type { Springs } from './springs'
import type { AgentWorld } from './world'

/** Shared shader uniforms. Add them to your ShaderMaterial uniforms by reference (`time: ctx.uniforms.time`). */
export interface Uniforms {
  /** Master clock `t`, world seconds (2D `t`). */
  time: { value: number }
  /** Flare clock, `0.4 * t` (2D `ft`). */
  ft: { value: number }
  /** 1, or 0.35 under prefers-reduced-motion. Live. */
  motion: { value: number }
  /** Sprung pointer parallax in -1..1, y up; (0,0) when the pointer is away. */
  pointer: { value: Vector2 }
  /** Orbit angles relative to the home view in radians (x = theta, y = phi). */
  orbit: { value: Vector2 }
  /** Quality tier: 1 = bloom wanted, 0 = bloom off (the governor drops it first). */
  tier: { value: number }
  /** Current pixel ratio (governed). Scale point sizes by it. */
  dpr: { value: number }
  /** Canvas size in CSS px. */
  resolution: { value: Vector2 }
  /**
   * Depth fog (Addendum A.8): x = camera distance to the orb, y = fade span (world units), z = brightness floor.
   * Optional because layers create it lazily: get it with `fogUniform(ctx.uniforms)`, refresh it once per frame with
   * `updateFog`, and fade in GLSL with FOG_GLSL's `fogFade(worldPos)`.
   */
  fog?: { value: Vector3 }
}

/** Fade span and floor of the depth fog: things a disc radius behind the orb keep about 45% of their brightness. */
export const FOG_SPAN = 900
export const FOG_FLOOR = 0.45

/** The shared fog uniform (created on first use, then shared by reference like every other uniform). */
export const fogUniform = (u: Uniforms): { value: Vector3 } => (u.fog ??= { value: new Vector3(2000, FOG_SPAN, FOG_FLOOR) })

/** Once per frame (idempotent, any layer may call it): the reference distance is camera to orb. */
export const updateFog = (u: Uniforms, cam: { x: number; y: number; z: number }, orb: { x: number; y: number; z: number }): void => {
  fogUniform(u).value.set(Math.hypot(cam.x - orb.x, cam.y - orb.y, cam.z - orb.z), FOG_SPAN, FOG_FLOOR)
}

/** GLSL (vertex or fragment): `uniform vec3 uFog;` plus `float fogFade(vec3 worldPos)` (1 near, FOG_FLOOR far). */
export const FOG_GLSL = /* glsl */ `
uniform vec3 uFog;
float fogFade(vec3 wp) {
  float d = distance(wp, cameraPosition);
  return mix(1.0, uFog.z, smoothstep(uFog.x - 0.4 * uFog.y, uFog.x + uFog.y, d));
}
`

export interface LayerCtx {
  engine: Engine
  renderer: WebGLRenderer
  scene: Scene
  world: AgentWorld
  fx: Fx
  rig: CameraRig
  uniforms: Uniforms
  /** Spring, damp, easeOutCubic, clamp, lerp, TAU (identical maths to 2D). */
  springs: Springs
  /** Seeded PRNG (mulberry32) for reproducible scenes. */
  rng: () => number
}

export interface Layer {
  readonly name: string
  /** Sort key for init/update order (not for drawing; set `object.renderOrder` on your meshes, see RENDER_ORDER). */
  readonly renderOrder: number
  /** Create meshes and add them to `ctx.scene`. Called once, when the layer is added. */
  init(ctx: LayerCtx): void
  /** Simulation step, called once per sub-step (dt <= 0.033 s, world seconds). Do not render here. */
  update(dt: number, ctx: LayerCtx): void
  /** Optional: once per frame right before the render (write instance buffers, labels, uniforms from final state). */
  beforeRender?(ctx: LayerCtx): void
  /** Optional: canvas size in CSS px changed. */
  onResize?(w: number, h: number, ctx: LayerCtx): void
  /** Optional: the WebGL context came back after a loss (re-flag textures, `needsUpdate = true`). */
  onContextRestored?(ctx: LayerCtx): void
  /** Remove from the scene and dispose geometries, materials, textures, listeners. */
  dispose(): void
}

export type LayerFactory = () => Layer

/**
 * Suggested `object.renderOrder` bands, back to front. All translucent layers draw additively with
 * `depthWrite: false`, so this order (not depth) decides what overlaps what.
 */
export const RENDER_ORDER = {
  background: -1000,
  stars: -900,
  dust: -200,
  orbits: -180,
  flare: -150,
  links: -100,
  packets: -90,
  orb: 0,
  nodes: 100,
  halos: 150,
  rings: 200,
  sparks: 300,
  ripples: 310,
  fx: 400,
} as const
