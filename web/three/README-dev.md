# 3D view: developer notes

Parallel work map. Each later phase adds ONE file under `web/three/layers/` plus two lines in `layers/index.ts`.

## Run

```
bun run build:3d            # web/eagle-eye-3d.js (IIFE, minified, ASCII only, no import()/fetch())
PORT=8800 node scripts/dev-server.mjs
http://127.0.0.1:8800/index.html#3d           demo (13 default agents)
http://127.0.0.1:8800/__mode?demo=0&view=3d   switch the mock to live agents
?freeze=1                                      clock frozen (debug captures)
```

A tab that is not visible does not run requestAnimationFrame. In browser-use call
`cdp("Emulation.setFocusEmulationEnabled", enabled=True)` first.

## Debug API (`window.__eagleEye3D`)

- `stats()` -> `{ fps, frameMs, drawCalls, dpr, tier, triangles }`
- `setTime(t)` jump the clocks and render one frame; `step(dt)` advance with the normal sub-stepping and render
- `engine.profile = true` then `engine.layerTimings()` -> ms per frame per layer (update / beforeRender); `engine.setDpr(n)`,
  `engine.governor = false` (or `?gov=0`) to measure without the governor, `engine.bloom.setUser(on)` / `.tune(s, r, t)`
- Measuring: a hidden or background tab runs rAF at 1-2 fps, so `stats().fps` is meaningless there. Time
  `step(1/60)` x200 (JS + submit) and add `renderer.getContext().finish()` for the GPU.
- `engine` -> the running `Engine` (`world`, `fx`, `rig`, `scene`, `renderer`, `uniforms`, `getLayer(name)`)

## Layer contract (`layer.ts`)

```ts
interface Layer {
  name: string; renderOrder: number            // update/init order (sorted), also pick mesh.renderOrder from RENDER_ORDER
  init(ctx): void                              // build meshes, ctx.scene.add(...)
  update(dt, ctx): void                        // per sub-step, dt <= 0.033 world seconds. No rendering.
  beforeRender?(ctx): void                     // once per frame, write instance buffers / labels from final state
  onResize?(w, h, ctx): void                   // CSS px; also called when the governor changes DPR
  onContextRestored?(ctx): void
  dispose(): void                              // remove from scene, dispose geometry/material/textures/listeners
}
ctx = { engine, renderer, scene, world, fx, rig, uniforms, springs, rng }
```

Factories are listed in `layers/index.ts` (`layerFactories`). A factory is called once per mounted view.
Layers must not import each other; share state through `ctx.world`, `ctx.fx` and `ctx.engine.getLayer(name)`.

Shaders: `ShaderMaterial` writing RAW colour (no colorspace chunk), additive, `depthWrite:false`, `depthTest:false`,
`transparent:true`, `renderOrder` from `RENDER_ORDER`. Share clocks by reference: `uTime: ctx.uniforms.time`.
Uniforms: `time`, `ft` (0.4 t), `motion` (1 or 0.35), `pointer` (-1..1 y up, sprung), `orbit`, `tier`, `dpr`, `resolution`.
Textures: procedural only (`assets.ts`, `glowTexture(rgb)` is cached and quantised like 2D). Never load images or fonts.

## World (`world.ts`)

World units: 1 design px, +Y up, origin = orb centre, agent depth z from a hash of the id (+/-260).
`world.agents: Map<id, AgentState>` in roster order, `world.orb: OrbState`, `world.hover`, `world.selection`,
`world.layout`, `world.time`, `world.simulate` (demo), `world.model`. `AgentState` has every 2D runtime field
(see the file); `makeAgentState(spec, index, rand, spawnAt)` builds one with 2D defaults.

Roster semantics (2D bridge): `applyState(LiveState)` -> `setAgents` (first state or `demo|model` change; clocks reset),
`addAgent` (new id, spawns by itself), `removeAgent` (3D divergence: graceful exit instead of a restart),
`updateAgent(id, patch)` (name/tokens/seconds/x/y; a status change emits `status` and only records the new status).

Events (`world.on(name, fn)` returns an unsubscribe): `status {agent, prev, next}`, `agentAdded`, `agentRemoved`
(state object still usable for an exit animation), `reset`, `layout`, `hover`, `selection`, `orbClick`, `agentUpdated`.
Nobody emits `orbClick` yet (interaction phase). Status transitions (power/flow/spin dampers, flash, launch, nova)
belong to the nodes/choreography layers: subscribe to `status` and `reset`.

## FX (`fx.ts`)

`fx.burst(pos, rgb, n, speed?)`, `fx.spark(pos, vel, life, size, rgb)`, `fx.ripple({pos, r0, r1, life, color, width?})`,
`fx.shockwave(pos, strength)` (kicks agents now; dust subscribes via `fx.onShockwave`), `fx.shake(amount)`
(multiplied by motion, decays at 4.5, camera reads `fx.shakeValue`), `fx.flash('orb' | agentId, amount?)`.
Pools `fx.sparks` and `fx.ripples` are simulated for you; Phase 6 only has to draw them.

## Camera (`camera.ts`)

`rig.pointerNDC`, `rig.pointerActive`, `rig.pointerWorldOnPlane(point, normal?)`, `rig.rayFromNDC`,
`rig.project(v, out?)` -> CSS px `{x, y, z, visible}`. Hooks: `rig.shouldOrbit = e => boolean` (return false to keep a
pointerdown for node dragging), `rig.onTap` (engine already adds the empty-space ripple). Keys: arrows orbit, `+`/`-`
zoom, `R` or double click reset. `rig.idleDriftEnabled` is false under reduced motion. `rig.setHome({theta, phi, radius}, apply?)`
changes the default view; `rig.fitSphere(center, radius, margin?)` sets the home radius so that sphere fills the view.

## Motion maths

`springs.ts`: `damp`, `easeOutCubic`, `Spring(x, target, k=170, c=14)` identical to 2D. Every animated scalar is a spring
or damper. Cite the 2D line in a comment next to each copied constant.

## Governor

Start DPR `min(devicePixelRatio, 1.5)`; EMA frame > 20 ms for 30 frames -> tier 1->0, then DPR -0.15 (floor 0.6); < 12 ms
for 120 frames -> DPR +0.15 then tier back; 2.5 s cooldown. Frames with a wall interval > 100 ms or a hidden document are ignored (a
throttled tab never lowers quality; a steady 30 Hz rAF still looks slow). Bloom (`bloom.ts`) runs only at tier 1 with the
user toggle on (bottom-right pill, `localStorage['eagle-eye-3d-bloom']`, default on); a tier drop while bloom was on waits
out the cooldown before touching DPR, and each such drop doubles the calm needed to bring bloom back (max 8x).

## Choreography (`choreo.ts`, `demo-sim.ts`, `layers/choreo.ts`)

- `choreo.ts`: pure `Choreography` state machines (launch comet, nova, generic status reaction, intro launches). Side effects go through `ChoreoHooks` (ripple/spark/burst/shockwave/shake/pulseAgent); unit tested in `tests/choreo.spec.ts`.
- `layers/choreo.ts` subscribes to world `status` (launch: new status running/thinking and prev not live; nova: completed and prev not finished; otherwise flash + pulseAgent + burst + ripple), `agentRemoved` (drops its fx) and `reset` (clears). It also fires the intro launch at `spawnAt - LAUNCH` for every agent with `launched === false` (so `addAgent` launches at once) and drives `launchGrow`.
- Trigger by hand: `engine.world.setStatus(agent, 'completed')` (nova), `setStatus(agent, 'running')` from idle/stopped (launch). `world.simulate` (demo) runs `DemoSim` (first change after 4 s, then every 4.5..8.5 s).
- Drawing: soft glows (GlowSprites), rings and spherical shells and 3D ray segments (own instanced batches, 3 draw calls). Sparks/ripples go to the shared fx pools. Shake is `fx.shake(n)` (camera translation, decay 4.5, scaled by motion).
