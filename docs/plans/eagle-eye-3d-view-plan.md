# Eagle Eye 3D view: implementation plan

Status: plan only, nothing implemented. Execute with `agent-orchestrator-executor`.
Repo: `<mods>/agents-eagle-eye` (branch `main`).

## 1. Summary

Add a **2D | 3D tab** to the Eagle Eye browser page. 2D stays exactly as it is. 3D is a Three.js (WebGL2) twin of the same live view: same data, same status semantics, and every micro-animation of the 2D canvas re-expressed in real depth (orbit camera, parallax, volumetric glows, 3D orbits, 3D supernova). It must run from `file://` (how the mod opens it) and from `http://127.0.0.1`, hold 60 fps on a laptop iGPU, fall back to 2D when WebGL is unavailable, and also get a 2D/3D switch in the Claude Code pane (command arg + button).

Decisions already made with the user:

| Question | Decision |
|---|---|
| Engine | Three.js, tree-shaken and bundled into an IIFE with bun (no addons beyond optional bloom) |
| Look | Same neon-on-dark space as 2D (`#03040f`), agents as glowing bodies floating in depth, bloom tier, orbit camera |
| Tab | 2D\|3D control in the page header, remembered (localStorage, try/catch), `#3d` hash deep link, and a switch in the pane |
| Performance | 60 fps on iGPU, adaptive quality, pause when hidden, reduced-motion respected, 2D fallback |

## 2. Context and findings (from exploration)

### 2.1 The 2D design (`web/agent-network.ts`, 2121 lines; bundled to `web/eagle-eye.js`)
- API: `mountAgentNetwork(container, opts)` L512 returning `destroy, resize, setPaused, updateAgent, addAgent, setAgents, pulse` (L72, L2073-2114). `DEFAULT_AGENTS` L93 (13 agents). Status config L123-131, `NEXT_STATUS` L141-149, `FINISHED`/`LIVE` L134-135.
- Loop L2051-2061: `dt` clamped to 0.25, sub-stepped at 0.033, master clock `t`, flare clock `ft = 0.4x`. Reduced motion sets `motion = 0.35` (L525).
- Spring helper L201 (semi-implicit Euler, 8 ms substeps). Springs: node spawn k150 c11, hover k220 c16, labelShift k200 c18, center spawn k120 c10, parallax k60 c9. `damp(a,b,lambda,dt)` is the workhorse (L162).
- Effects inventory (full numbers in section 6): nebula blobs + 170 stars + vignette (L1455-1510), dust field with orbital physics 180-900 particles (L648-669, L1136, L1512), 9 strands per agent + packets (L590-605, L1066-1120, L1540-1592), node body/rings/orbits/check/labels (L963-1031, L1622-1822), center orb with heartbeat, halo, conic rim, tick ring, moons, brain, model label (L1824-1934), plasma flare (L1210-1426), LAUNCH fx (L737-770, 807-837), NOVA fx (L772-799, 838-885), shockwave/shake/ripples/sparks (L889-904, L1936-1941), simulate mode (L915 `setStatus`, section 11 of catalog), pointer gravity/drag/click (L1979-2048).
- **Does not exist in 2D (do not build parity for it):** per-agent icon glyphs (`ICONS` L288-423 is dead code), context-fill visual in the browser, main-agent status/context, `orchestrator.name` rendering, haze wisps (`flare.wacc = 0`, L1298), per-agent exit animation (a removed agent triggers `setAgents`, a full restart).
- The 2D page ignores `state.agents` in demo mode and uses `DEFAULT_AGENTS` with its own random status simulation (`bridge.ts` L85-98).

### 2.2 Integration surface
- `web/bridge.ts` (125 lines): `LiveAgent`/`LiveState` L11-27, `toSpecs` L56-69 (portrait 1024x1536 ring, center 512/755, radius 45 for stopped/offline else 60), remount key `demo|model` L85, roster diff + `updateAgent` L99-113, 1 s `state.js` poll L116-125, badge L123-124 (stale after 8 s).
- `web/index.html`: classic scripts `eagle-eye.js`, `state.js`; `#network`, `#badge`; badge pill top-left.
- `hooks/register.tsx`: `WEB_FILES = ['index.html','eagle-eye.js']` L22, `ensurePage` L117-124 copies text files once per mod load (4 MiB cap per file, text only, no binary assets), `liveState` L133-150, command `agents-eagle-eye [demo|close]` L156-239, pane render L333-379, `OPEN_ARGS` L43.
- `hooks/model.ts`: `iconFor`, `designStatus`, `demoAgents`, formatters (no DOM deps). `hooks/mini.ts`: SMIL SVG pane renderer, `renderMini`, `MAX_NODES = 8`, 131072-char SVG cap.
- `types/index.d.ts`: `PluginState['agents-eagle-eye']` has `agents, main, demo`.
- Tests: `tests/eagle-eye.test.ts` (72 lines) via `claude plugin test .`; nothing covers `web/`. The mod tsconfig has no DOM lib and does not include `web/`.
- No `package.json`, no `node_modules`, no three. bun 1.4.2 and node available. `web/eagle-eye.js` is tracked in git. Latest three on npm: 0.186.1.

### 2.3 Research conclusions (Three.js, 2026)
- Pin `three@0.186.1`, named imports only, no `import * as THREE`, no OrbitControls/CSS2DRenderer/Line2/troika. `WebGLRenderer` (not WebGPU: TSL rewrite, larger bundle, no gain for ~100-300 objects).
- Glow = additive halo quads (tier 0); `UnrealBloomPass` at half res as tier 1 behind the governor. Opaque canvas, `NoToneMapping`, sRGB output.
- Everything animated in shaders from instance attributes; one draw call per layer; instanced ribbons for links; DOM overlay for labels; hand-rolled orbit camera with `exp(-k dt)` damping and eased idle drift; critically damped / analytic springs; screen-space picking.
- `file://` rules: classic `<script>` only, no modules, no `fetch`, no image/font loading (taints WebGL), generate textures procedurally (canvas / DataTexture), workers only from blob URLs.
- Pitfalls: `gl_PointSize` driver caps on iGPUs (use quads for big halos), huge `dt` after tab resume (clamp), `setPixelRatio` oscillation (hysteresis), context loss (re-flag textures), per-frame DOM reads in label layout.
- Bundle size is an estimate (450-600 KB min, 120-150 KB gzip). **Measure** with `bun build --metafile`.

## 3. Constraints, assumptions, risks

| # | Item | Mitigation / owner |
|---|---|---|
| R1 | Page is opened via `file://`; module scripts, `fetch`, image textures blocked | IIFE classic scripts only; all textures procedural; add a CI-style check that the 3D bundle contains no `import(`/`fetch(` |
| R2 | `ensurePage` copies via text `fs.write`, 4 MiB cap, once per mod load; new session dirs get another full copy | Keep 3D bundle < 1 MB min; keep it ASCII-clean (verify `grep -P '[^\x00-\x7F]'`); document that a rebuilt bundle reaches the live dir only after mod reload |
| R3 | Lazy second bundle needs `WEB_FILES` update and a global handshake | `eagle-eye-3d.js` exposes `window.__eagleEye3D = { mount }`; shell injects the `<script>` on first 3D visit; `WEB_FILES` gains the file |
| R4 | Parity scope is big (about 60 effects) | Parity matrix (section 6) is the work breakdown; each row has an acceptance check |
| R5 | State has no parentId, context fill, main-agent status | Not required for parity (2D has none). Keep 3D data model extensible; follow-up listed in section 8 |
| R6 | Browser-automation screenshots of the 2D canvas page timed out earlier in this environment | Provide deterministic debug API (`?freeze=1`, `window.__eagleEye3D.step(dt)`, `.setTime`) and use a visible headed Chrome or the `browser-use` screenshot tool; fall back to user eyeball check on the `file://` path |
| R7 | iGPU frame budget | Draw-call budget <= 40, JS frame budget <= 3 ms, governor (section 5.3), measured on this machine |
| R8 | Demo-mode asymmetry (2D self-simulates, ignores `state.agents`) | 3D demo uses the same shared `DEFAULT_AGENTS` + `NEXT_STATUS` simulation so both views look alike |
| R9 | Palette is duplicated (bridge, mini) | Extract once into `web/shared/` and import everywhere in `web/`; leave `hooks/mini.ts` hex copy but add a test that asserts equality |
| R10 | Pane cannot run WebGL (`Svg` is script-less sandbox) | Pane gets a button + a pseudo-3D SMIL SVG variant; the real 3D lives in the browser |
| A1 | Assumption: one browser tab per session, state flows mod -> page only | Browser tab choice cannot sync back to the pane; stated in README |
| A2 | Assumption: user's Chrome supports WebGL2 | Detection with `failIfMajorPerformanceCaveat`; else 3D tab disabled with tooltip |

## 4. Architecture

```
web/
  shared/            status.ts  palette.ts  format.ts  rng.ts   (extracted, imported by 2D, 3D and bridge)
  agent-network.ts   (2D, behavior unchanged; imports shared/)
  bridge.ts          becomes the shell: view manager, state fan-out, badge, tab control wiring
  view-switch.ts     tab UI, hash/localStorage, crossfade, lazy script loader, fallback
  three/             entry.ts (window.__eagleEye3D), engine.ts (renderer, loop, governor, context loss)
                     camera.ts  springs.ts  layout3d.ts  assets.ts (procedural textures)
                     layers/ background.ts stars.ts dust.ts orb.ts nodes.ts links.ts packets.ts
                             sparks.ts ripples.ts flare.ts fx-launch.ts fx-nova.ts
                     labels.ts  interaction.ts  demo-sim.ts  shaders/*.glsl.ts
  eagle-eye.js       2D + bridge + shell bundle (existing output name)
  eagle-eye-3d.js    lazy 3D bundle (new)
package.json         three pinned, scripts: build, build:3d, typecheck, test
tsconfig.web.json    DOM lib, includes web/
```

Key decisions:
1. **Two bundles.** 2D users never parse three. Shell injects `eagle-eye-3d.js` on first 3D visit.
2. **State fan-out.** `window.__eagleEye(state)` feeds the active view and the paused one (so switching is instant and consistent). 3D receives the full `LiveState` each second and diffs roster/status itself (same semantics as bridge L99-113: new id -> `addAgent`, changed status -> `setStatus` transitions, vanished id -> exit).
3. **Lifecycle.** 2D mounted at start. 3D created on first visit. Hidden view is paused (`setPaused` / rAF stopped) and fully disposed after 120 s hidden (frees the GL context). Returning re-creates with the intro.
4. **Selection precedence.** URL hash `#3d`/`#2d` > explicit pane command (`viewSeq` bump) > localStorage > default `2d`.
5. **World mapping.** Portrait design space (1024x1536, centre 512/755, stretch caps as in L625-646) maps to the XY plane in world units; each agent gets a deterministic `z` from a hash of its id (range about +/-260) and a slow personal float in all three axes. Roster changes retarget homes and springs glide them (same as 2D).
6. **Clocks.** Identical to 2D: master `t`, sub-stepped `dt <= 0.033`, flare clock `ft = 0.4 t`, `motion = 0.35` under reduced motion.

## 5. Visual and motion design

### 5.1 Camera and space
- Perspective camera, FOV about 38, default position slightly above and in front so the ring reads as 3D. Orbit by drag on empty space (theta/phi velocity, damping `exp(-6 dt)`, phi clamped 0.15..pi-0.15), wheel/pinch zoom through the same inertia, radius clamped.
- Idle drift: after 4 s of no input ease up to 0.03 rad/s plus faint vertical sway; any input ramps down immediately.
- Pointer parallax: camera target shifts 1-2 percent of radius, sprung (replaces the 2D blob/star/center parallax).
- Double-click or `R` key: spring back to the default view.
- Click on empty space without movement (< 5 px): inward ripple like 2D L2040.
- Depth cues: fog in our shaders (`alpha *= exp(-d^2 k^2)`), far stars smaller/dimmer, CSS vignette over the canvas, 1/255 dither in the background shader (no banding).

### 5.2 Rendering recipe
- Background: fullscreen shader with the 6 nebula blobs (exact table in section 6), gradient `#03040f -> #050a22 -> #030410`, drift/breathing, vignette. A second, parallax layer of 3 large soft billboards at depth gives real parallax when orbiting.
- Glow: additive quads with radial falloff `pow(1-r, 2.5)`, `depthWrite:false`, explicit `renderOrder` (stars, dust, links, halos, cores, rings, sparks). Bloom (half res, strength 0.6-0.9, radius 0.4, threshold 0.55-0.7, `HalfFloatType`, `OutputPass`) only in tier 1.
- Bodies keep a dim opaque core (readable under bloom).

### 5.3 Performance governor
- Start DPR `min(devicePixelRatio, 1.5)`. EMA frame time: >20 ms for ~30 frames -> drop bloom first, then DPR by 0.15 (floor 0.6); <12 ms for ~120 frames -> step back up, 2.5 s cooldown (hysteresis).
- `visibilitychange` stops rAF; resume resets the clock; `dt` always clamped.
- Spark/ripple/packet/dust caps match 2D (sparks 1500 combined, ripples 60, dust 180-900 by area, packets 16/agent).

### 5.4 Micro-animation craft rules (apply `emil-design-eng`, `apple-design`, `animate`)
- Every animated scalar is a spring or damper holding velocity, so everything is interruptible (hover mid-spawn, status flip mid-launch) with no jumps. Reuse 2D constants where they exist.
- Enter ease-out `cubic-bezier(0.23,1,0.32,1)`; never linear for movement; UI feedback 100-150 ms; spawn 200-400 ms; exits shorter than entrances.
- Tab thumb slides with a 220 ms ease-out; views cross-fade 200 ms (opacity only); `prefers-reduced-motion` turns slides into instant swaps/fades.
- Restraint: reserve the brightest values for state changes; neon plus additive saturates fast.

## 6. Parity matrix (the work breakdown)

Legend: **P** = pure parity, **3D+** = parity plus depth-native enhancement, **N** = new in 3D. 2D numbers are the contract; copy them into `web/three/` constants with a comment pointing at the 2D line.

### 6.1 Backdrop and ambient
| 2D effect (ref) | 3D implementation | Acceptance |
|---|---|---|
| Gradient + vignette (L1464-1510) | Fullscreen shader, same stops, vignette radial 0.35..0.62 | Same colours at three sample pixels (+/-4) |
| 6 nebula blobs, additive, drift `sin(t fx + 2i)*0.05`, radius breathing `1+sin(0.2t+i)*0.05` (L1455-1492) | Shader uniforms from the table: (.20,.10,.55,[150,70,255],.20) (.55,.50,.70,[50,90,255],.16) (.30,.88,.50,[255,140,50],.13) (.02,.45,.40,[40,255,130],.11) (.95,.28,.45,[60,200,255],.10) (.90,.78,.45,[255,150,60],.08) | Visual diff vs 2D within tolerance; drift visible over 10 s |
| 170 stars, twinkle `0.25+0.75*(0.5+0.5 sin(t f+ph))*z*0.8`, f in [0.6,2.4], size 0.4-1.6, `#cfe0ff` (L558, L1493) | 3D: 3000 stars on a far shell, same twinkle formula in vertex shader, parallax from orbit | Twinkle frequency matches; no CPU per-frame work |
| Dust field 180-900 particles, orbital physics `GM=260000`, 6-colour palette biased blue `rand^1.5`, 12% big glow, speed>70 streaks, 88% prograde, consumed inside `0.72 R^2` feeding the orb (+0.012 feed, 30% spark) (L648-669, 1136, 1512) | CPU sim in `Float32Array` in 3D (centre + agents + pointer attractors, same constants, plus a small z-spring toward z=0 to keep a flattened galaxy disc), drawn as velocity-stretched instanced quads | Particles orbit, get consumed, respawn; orb `feed` rises; count scales with viewport area |
| Pointer gravity well mass 26000 / 150000 pressed, softening 900 (L1136+) | Pointer ray intersected with the plane through the orb; same masses | Dust visibly bends toward the cursor; stronger while pressed |
| Pointer ring indicator (expanding 60->84 / shrinking 60->5, `[140,180,255]`) | Camera-facing ring at the plane hit point | Same size/alpha curve |

### 6.2 Orchestrator orb (L1824-1934, update L935-960)
| 2D | 3D | Acceptance |
|---|---|---|
| Body radial gradient, R=135 | Sphere (R=135 world), fresnel shader from `rgba(12,16,70)` core to `rgba(46,60,180)` edge | Reads as lit glass sphere |
| Heartbeat `max(0,sin(2pi t bpm))^8`, `bpm = 0.55+0.04*active` | Same drives scale `1+beat*0.012+feed*0.02+press*0.03`, halo/rim alpha | Beat rate rises with active agents |
| Pulse ripples every `2.4 - min(1.2, active*0.1)` s, `0.98R->R+170`, `[110,150,255]`, life 2.4, w3 | Expanding spherical shell + camera-facing ring (3D+) | Cadence matches |
| 4 orbiting halo glows radius 1.05R offset 0.95R, `t*0.22`, colours `[170,80,255] [60,120,255] [255,150,60] [60,255,140]`; main glow 2.3R `[70,110,255]` | 3D: halos orbit on tilted planes so they pass in front of and behind the sphere | Colours/speeds match |
| Conic rim rotating `0.25 rad/s` (stops 0 `[168,88,255]`,.2 `[70,150,255]`,.38 `[60,235,255]`,.54 `[70,255,130]`,.74 `[255,170,60]`,.88 `[255,110,190]`) with 4 strokes (w26,13,5,1.6) | Equatorial torus + shell shader using `atan` for the conic colour, same stops and widths scaled | Rim colours rotate |
| 90-dot tick ring, 3 travelling lobes `wave=0.5+0.5 sin(3a - 2.2t)`, rotating 0.08 | Instanced dots on a ring, same wave in shader | Lobes travel |
| 4 satellites, radius `R+40+14i`, speed `0.55/(1+0.35i)^1.5`, alternating direction, glow 10 + 1.6 white dot | True 3D Keplerian orbits on inclined planes (3D+) | Speeds match; visible depth |
| Brain icon (9 lucide paths L278-285), back glow, two strokes, travelling dashed light `[5,34]` offset `-14t` | Canvas-drawn 256px texture on a camera-facing sprite floating at the sphere front, redrawn at 30 Hz | Dashed light visibly travels |
| Model label `400 26px Inter`, alpha `0.88+0.12 sin(1.5t)` | DOM label under the orb | Matches text and breathing |
| Spawn spring k120 c10; parallax spring k60 c9 max 12px | Same springs; parallax becomes camera/orb offset | Pops in at t=0.05 |
| Click -> `pulse()`, flash, shockwave 70 | Same, shockwave in 3D | All agents emit 5 packets |

### 6.3 Agent nodes (L590, L963-1031, L1622-1718)
| 2D | 3D | Acceptance |
|---|---|---|
| Status table (power, flow, spin, tokenRate, dot colours) L123-131 | Shared `status.ts` consumed by both | Identical object |
| Smoothed `power/flow/spin` λ2.6, `detail` λ4, `rest` λ3, radius `baseR*lerp(0.68,1.1,power)*lerp(1,0.52,rest)`, colour easing 5/6 | Same dampers | Radius per status as in table 14.1 (running 1.10, completed 0.42, stopped 0.36) |
| Float: `fl=7*motion`, x `sin(0.5 fs t+ph)`, y `cos(0.43 fs t + 1.7ph)*1.3`, finished drift out 8% and reduce to 40% | Add z float `sin(0.37 fs t + 2.3 ph)*fl*1.1` | Idle drift visible, calmer when finished |
| Physics `f = 55(target-pos) - 7v`, soft collision `d < ra+rb+60` -> `(dmin-d)*28`, pointer gravity `(650 power+120)/(1+(d/190)^2)`, lean | 3D vectors, same constants; collision in 3D | No overlap; live nodes lean to the cursor |
| Outer glow 2.4r alpha `(0.5 act+0.12)*breath`, breath `0.8+0.2 sin(1.7t+ph)` | Halo quad, same formula | Breathing at 1.7 rad/s |
| Body gradient + 4 rings (w15,8,3.2,1.4@r-9) | Sphere with fresnel rim + billboard ring quads with identical widths/alphas | Matches at default camera |
| running: 3 arcs 0.62 rad speed `0.9*spin`; thinking: 2 arcs 1.1 rad speed `2.6*spin`; alternating direction | Arcs on tilted gimbal rings (3D+) | Counts, sweeps, speeds match |
| 3 satellites radius `r+22+5i` | 3D orbits (3D+) | Speeds match |
| waiting: dashed ring `[2,9]` at r+12, offset `-8t`, alpha `0.6*(0.5+0.5 sin 2.2t)` | Dashed ring shader | Pulses |
| idle: expanding ripple `r+4+ph*34`, `ph=(0.35t+phase)%1` | Billboard ring | 0.35 Hz |
| completed: checkmark polyline (-0.34r,0.02r),(-0.1r,0.28r),(0.38r,-0.26r) fading with `rest` | Billboard sprite on the node | Appears as it shrinks |
| Inner core glow 0.62r, pulse 2.4 rad/s | Core sprite | OK |
| Spawn spring k150 c11 (overshoot), hover k220 c16 -> 1.07 (drag 1.12), labelShift k200 c18 -> 5 px | Same | Overshoot visible |
| Hit/flash/novaS/novaL/tokFlash/timeFlash dampers | Same constants | Flash decays at λ2.2 |

### 6.4 Labels (L1745-1822) - DOM overlay, `transform`-only writes
| 2D | 3D | Acceptance |
|---|---|---|
| Name `600 24px`, status `500 20px`, rows `400 20px`; `detail` morphs layout (name y -4->-46, status 28->-12) | Same typography scaled by projected size; CSS vars driven per frame | Finished agents are wordless until hover (`peek`) |
| Intro: slide 18px + fade over 0.9 s from `spawnAt+0.1` | Same, easeOutCubic | OK |
| Status dot r6.2 breathing, glow 14, ping ring `7+ph*9` for running/thinking | Inline SVG/CSS pulse | OK |
| Count-up over 2 s (`fmtTokens`, `fmtTime`), flash on change (+2 px lift, brighten) | Same | `312K`, `m:ss`, `h:mm:ss` formats |
| Stat icons: token bars `[9,16,12]` modulated `0.78+0.22 sin(3t+1.5i)`, clock sweep `1.6t` | SVG driven by JS (no layout reads) | Bars/clock animate only when live |
| Flip label side when near right edge | Choose side from projected x relative to the orb; fade by depth, hide if behind camera | No clipping |

### 6.5 Links (L590-605, 1066-1120, 1540-1592)
| 2D | 3D | Acceptance |
|---|---|---|
| 9 strands per agent: core (w2,a.95) + 8 (w .5-1.3, a .18-.5), cubic Bezier, wobble `sin(t f + p)*0.28*wob*len*0.34`, 26 segments, growth `floor(26 grow)`, gradient violet->blue->col | Instanced ribbon shader, Bezier control points in instance attributes written per frame (genuinely 3D curves via z), screen-space width, soft cross-section, gradient along u | 9 strands visible, braided, grow from the orb after spawn |
| Glow pass width 7, alpha .055 | Wider low-alpha ribbon | OK |
| Alpha mult `(0.1+0.9 power)*(1+hl*0.8+hit*0.25)`, width +40% on hover | Same | Dead links nearly invisible |
| Packets: rate `flow*2.4*grow`/s, max 16, 55% out / 45% in, speed `(0.16..0.34)*(0.7+0.5 flow)`, trail spark every 0.045 s, arrival -> `hit+0.28`, burst; head glow 14*size + white dot | Instanced points evaluated on the Bezier, same rules | Out=agent colour, in=violet-mixed |
| Pulse packets from `pulseAgent` (speed .45-.8, up to 22 total) | Same | OK |

### 6.6 Choreography
| 2D | 3D | Acceptance |
|---|---|---|
| Intro: `spawnAt = 1.65+0.22i`, launch fires at `spawnAt-1.35`, strands grow behind comet | Same timeline | 13-agent demo intro matches in timing |
| LAUNCH: charge 0.55 s (centre flash, rim glow `24+70e^2`, inward sparks `70+160e`/s), fly 0.8 s with `u^1.6`, 44-pt trail, impact (3 ripples, 46 sparks, shake 5, shockwave 60), afterglow to 2.35 s | Comet flies the 3D Bezier; shock rings become spherical shells (3D+) | Same durations/spark counts |
| NOVA: charge 1.15 s (`novaS = 1-0.26e^2 + shudder sin(70k)*0.014e^2`, converging rings, inward sparks `40+220e^2`), blast (shake 16, shockwave 210, 3 ripples, 120 sparks), after 3.6 s (flash, 2 shock rings, 18 rays, 26 debris clumps) | Expanding spherical shock shells, rays and debris fly in true 3D directions; camera shake | Total 4.75 s; the node shrinks to 0.42 and dims after the blast |
| Generic status change: flash, `pulseAgent(5/12)`, burst 12/26, ripple, `statusT` reset | Same | OK |
| Shockwave kicks dust (<=520 px) and agents (<=600 px), not the orb | 3D distances (spherical) | Same strengths: 45/60/210/55/70 |
| Screen shake `damp(shake,0,4.5)`, random translation | Camera-position shake (background excluded) | Decays in ~1 s |
| Sparks: additive glow `size*3.2`, drag `1-1.4dt`; ripples ring `easeOutCubic` alpha `(1-k)*.55` | Instanced pools | Caps respected |
| Plasma flare: wandering loop (retarget every 2.4-5.5 flare-s, 72/16/12% size mix, density 75/18/7%), ellipse geometry, 6 rails, 90 particles, palette LUT, haze, threads, roots with spikes | Loop lives on a tilted plane that rotates slowly (3D+), particles as instanced quads, palette `DataTexture`, same timing law `ft = 0.4t`, intensity from active count | Loop appears when agents live, dims at 0.1 otherwise |
| Simulate mode: after 4 s random agent every 4.5-8.5 s from `NEXT_STATUS`; 30% for off agents | Shared sim module | Launch and nova fire continuously in demo |
| Drag/hover/click on agents, `pulseAgent(10)`, burst 22, shockwave 55 | Drag on a camera-facing plane through the node; same springs (280/26); drag ends with no click if moved > 5 px | Matches |

### 6.7 3D-only (N)
- Graceful per-agent exit (shrink to 0.85, halo fade, small burst, slot recycled; a departing agent no longer restarts the scene). Documented divergence from 2D.
- Orbit/zoom camera, idle drift, home-view reset, keyboard orbit (arrow keys) and `aria-label`.
- Hover tooltip (name, status, tokens, elapsed) near the cursor for finished agents too.
- View tab thumb and crossfade.

## 7. Workspace setup (do this first)

1. Use the `using-git-worktrees` skill. The mod repo is `<mods>/agents-eagle-eye`; create the worktree OUTSIDE `.claude/mods` (e.g. `<worktree>/agents-eagle-eye-3d`) on branch `feat/3d-view` so Claude Code does not load two copies of the mod.
2. Test the worktree copy with `claude --plugin-dir <worktree>/agents-eagle-eye-3d`; never edit the live `~/.claude/mods/...` copy during development.
3. No commits to `main`. Commits follow the global rules in `~/.claude/CLAUDE.md` (no co-author trailer, no session link, no AI signature).

## 8. Phases

Skills to invoke per phase are noted. Phases 3-7 can be split between parallel agents once Phase 2 is merged (disjoint files under `web/three/layers/`).

### Phase 1 - Foundation and safe refactor
Scope: tooling, shared modules, zero 2D behavior change. Skills: `safe-refactor`, `lean-build`.
1. Add `package.json` (`three` pinned `0.186.1` exact, `typescript`, scripts: `build:2d`, `build:3d`, `build`, `typecheck`, `test`). Commit lockfile. `node_modules/` is already ignored.
2. Add `tsconfig.web.json` (DOM + ES2023, includes `web/`, strict). Fix only the type errors surfaced in code that will be touched; do not rewrite 2D.
3. Extract `web/shared/{status,palette,format,rng}.ts` (STATUS config, `NEXT_STATUS`, `FINISHED`/`LIVE`, 13-colour palette, `fmtTokens`, `fmtTime`, `seeded`, `DEFAULT_AGENTS`). `agent-network.ts` and `bridge.ts` import them.
4. Build scripts: 2D keeps `bun build bridge.ts --format=iife --target=browser --outfile=eagle-eye.js` (add `--minify` only if the diff is acceptable); 3D: `bun build three/entry.ts --format=iife --target=browser --minify --define process.env.NODE_ENV='"production"' --metafile=...`. Confirm `--format=iife` works in the installed bun, else use esbuild.
5. Add `web/tests/` (run with `bun test`) for pure helpers: formatters, palette equality with `hooks/mini.ts`, status table.
Acceptance:
- `bun run build:2d` output behaves like before: open the 2D demo and compare against the earlier run (13 agents, launches, nova) with no console errors.
- `bun run typecheck` and `bun test` pass; `claude plugin test .` still passes.
- Palette/status are defined in exactly one place under `web/`.

### Phase 2 - Shell: tab control, view manager, lazy loading, fallback
Scope: the 2D|3D UI and plumbing, with a placeholder 3D module that draws a cube so the switching can be verified. Skills: `animate`, `emil-design-eng`, `apple-design`.
1. `index.html`: segmented control top-right (the badge is top-left, z-index 1), `role="tablist"`, arrow-key navigation, thumb slides 220 ms `cubic-bezier(0.23,1,0.32,1)`, view container cross-fade 200 ms.
2. `view-switch.ts`: precedence (hash > pane `viewSeq` > localStorage > default 2d); localStorage in try/catch; update hash without scrolling; WebGL2 detection with `failIfMajorPerformanceCaveat`; if unavailable the 3D tab is `aria-disabled` with a tooltip and the hash is ignored.
3. `bridge.ts`: becomes view manager; remount key stays `demo|model` per view; fan state out to active and paused view; 3D lazy script injection with error handling (on failure stay on 2D and show a one-line notice).
4. `register.tsx`: add `eagle-eye-3d.js` to `WEB_FILES`; tolerate a missing file.
5. Badge keeps working in both views; document title unchanged.
Acceptance:
- Clicking the tabs, pressing arrows, loading `#3d`, reloading (persistence) and disabling WebGL (`?renderer=2d` debug flag) all behave as specified.
- 2D never loses its roster or timeline when you tab away and back (paused, then resumed without a time jump).
- 3D script is not requested until the 3D tab is first selected (verify in the network panel).
- `prefers-reduced-motion` replaces the thumb slide and cross-fade with an instant swap.

### Phase 3 - 3D engine core and space
Scope: renderer, loop, governor, camera, background, stars, springs, layout mapping. Skills: `animate`, `emil-design-eng`; optional external `threejs-fundamentals` (ask the user before installing).
1. `engine.ts`: renderer options (`antialias:false`, `alpha:false`, `powerPreference:'default'`, sRGB, `NoToneMapping`), loop with clamped sub-steps, visibility pause, resize observer, context-loss/restore (`preventDefault`, re-flag textures, fall back to 2D if not restored in 3 s), full `dispose()`.
2. `springs.ts` (semi-implicit spring with 8 ms substeps, plus `damp`), identical maths to 2D L162/L201.
3. `camera.ts` (orbit, inertia, idle drift, parallax, reset, shake hook, keyboard).
4. `layout3d.ts` (portrait mapping, deterministic z from id hash, roster-change retargeting).
5. `layers/background.ts`, `layers/stars.ts`, dither, CSS vignette.
6. Governor and the debug API: `?freeze=1`, `__eagleEye3D.setTime(t)`, `.step(dt)`, `.stats()` (draw calls, frame time, tier).
Acceptance:
- Empty scene renders the nebula + stars at 60 fps with the camera orbiting and drifting.
- Tab hidden: rAF stops; returning does not jump (dt clamp).
- Forced context loss (`WEBGL_lose_context`) recovers or falls back to 2D without errors.
- Governor lowers tier under a throttled GPU (verify with `__eagleEye3D.stats()` and CPU throttling).

### Phase 4 - Orchestrator orb
Scope: section 6.2 in full. Skills: `animate`, `apple-design`, `animation-vocabulary` (to name each effect correctly in code comments); optional external `threejs-shaders`.
Acceptance: every row of 6.2 passes its check; heartbeat tracks active count; click triggers the pulse; brain light travels; no per-frame allocations (verify with the memory timeline).

### Phase 5 - Agent nodes, statuses and physics
Scope: sections 6.3 and 6.4 minus label DOM (Phase 8). Skills: `animate`, `emil-design-eng`.
Acceptance: all seven statuses render with the radii and decorations in the 2D table; hover/drag springs overshoot; collisions and pointer lean work in 3D; status flips mid-animation are interruptible (no snapping).

### Phase 6 - Links, packets, sparks, ripples
Scope: section 6.5 and generic sparks/ripples (6.6 last rows). Skills: `animate`; optional external `threejs-animation`.
Acceptance: 9 braided strands per live agent growing from the orb, packets in both directions with trails and arrival bursts; dead agents' strands nearly invisible; draw calls for this layer <= 6 regardless of agent count.

### Phase 7 - Choreography: launch, nova, generic, flare, dust, demo
Scope: remaining 6.1 (dust, pointer well), 6.6 (launch, nova, shockwave, shake, flare, simulate). Skills: `animate`, `emil-design-eng`, `find-animation-opportunities` (read-only audit afterwards).
Acceptance: 13-agent demo shows the same intro timeline; launches and novas fire continuously; total nova duration 4.75 s with 120 sparks, 18 rays, 26 clumps; shake decays; flare brightens with active agents and dims at 0.1 with none; dust consumed by the orb raises `feed`; added/removed agents use `addAgent`/graceful exit, never a full restart.

### Phase 8 - Labels, tooltip, badge integration, interaction polish, a11y
Scope: 6.4, hover tooltip, picking, drag, keyboard orbit, reduced motion everywhere, bloom tier. Skills: `emil-design-eng`, `apple-design`.
1. DOM label overlay: `pointer-events:none`, only `transform`/`opacity` writes, batched; skip updates < 0.1 px.
2. Screen-space picking (nearest within `r+8` px), tooltip positioned with `transform`, cursor states, dimming of non-hovered nodes to 0.35 via uniform.
3. Reduced motion: `motion = 0.35` equivalents, no idle drift, no twinkle, packets static dashes, overshoot removed.
4. Bloom tier 1 behind the governor and a user toggle (persisted).
Acceptance: labels crisp at DPR 1 and 2, no layout thrash (Performance panel shows no forced reflow), finished agents reveal their words on hover, tooltip never leaves the viewport, `prefers-reduced-motion` verified, bloom toggle works and degrades under load.

### Phase 9 - Mod side: pane switch, command, types, README
Scope: `hooks/register.tsx`, `hooks/mini.ts`, `types/index.d.ts`, `README.md`. Skills: `surgical-patch`, `lean-build`.
1. New atom `view` (`'2d'|'3d'`, persisted) and `viewSeq` counter; add to `PluginState`.
2. Command arg `3d` / `2d` (update `description`, `argumentHint`, README); sets the atom, bumps `viewSeq`, opens the browser if not open.
3. `liveState` emits `view` and `viewSeq`; page applies it only when `viewSeq` changes (explicit user command), so a local tab choice is not overridden every second.
4. Pane: a `Button` (`onPress` persists the atom; no writes during render) that toggles. In 3D mode `renderMini` gets a pseudo-3D SMIL SVG variant (perspective-scaled nodes, depth-sorted, orbit motion via `animateTransform`), staying under the 131072-char cap and the 8-node limit. Terminal surface stays free of `Svg`.
5. Tests: extend `tests/eagle-eye.test.ts` (command arg toggles atom, `liveState` shape includes `view/viewSeq`, pane renders on terminal and desktop with the button, pseudo-3D SVG length < cap).
Acceptance: `claude plugin test .` passes; `/agents-eagle-eye 3d` switches an open page to 3D within 2 s; the pane button toggles and renders on both surfaces; the browser's own tab choice does not fight the pane (documented one-way sync).

## 9. Cross-Validation Phase (final)

1. Full checks: `bun run typecheck`, `bun test`, `claude plugin test .`, both builds from clean; record bundle sizes (`eagle-eye.js`, `eagle-eye-3d.js` raw and gzip, via metafile). Targets: 3D bundle < 700 KB min (hard cap 1 MB), ASCII-only, no `import(`/`fetch(`.
2. End to end (`run` and `verify-and-stop` skills, Chrome via `claude-in-chrome`; serve `web/` over a local node server since the automation tool blocks `file://`):
   - Demo in 2D and 3D; walk the parity matrix row by row with frozen-time captures (`?freeze=1`, `setTime`) at t = 0.5, 2, 5, 8 s and at a launch and a nova instant.
   - Live mode against a real session: spawn/finish/stop a subagent and confirm launch, nova and greyed-out states in both views.
   - True `file://` pass done manually by the user (open the live-dir page via the real `/agents-eagle-eye 3d`), since automation cannot; the plan's report must say what was and was not verified.
   - Edge cases: WebGL unavailable, context loss, hidden tab 5 min then resume, window resize and portrait/landscape, reduced motion, 1 and 0 agents, 20 agents, rapid status flapping, demo toggle while in 3D, mod reload after rebuild.
3. Performance on this machine: 60 fps in demo (13 agents) with bloom off, governor behavior with CPU/GPU throttle, draw calls <= 40, no growth in `renderer.info.memory` over 10 min, 120 s hidden disposes the context.
4. Motion audit: run `improve-animations` (read-only) on `web/three/` and fix high-priority findings; tune against the `emil-design-eng` checklist (easing, durations, interruptibility).
5. Reconcile against every acceptance criterion above and the original request: tab to pick 2D/3D, whole functionality in 3D, all micro-animations kept, runnable in the browser, beautiful.
6. One overall `code-review` of the full branch diff (`git diff main...feat/3d-view`), then fix. Review is not repeated per phase.
7. Update README (usage, build, rebuild steps for both bundles, one-way sync note, reload-after-rebuild note).

## 10. Skill inventory (for the executor)

| Skill | When |
|---|---|
| `using-git-worktrees` | Workspace setup |
| `safe-refactor` | Phase 1 extraction (behavior-preserving) |
| `lean-build` | Phases 1, 2, 9 (reuse before inventing) |
| `animate`, `emil-design-eng`, `apple-design` | Phases 2-8 motion decisions and tuning |
| `animation-vocabulary` | Naming effects in code/comments |
| `find-animation-opportunities` | After Phase 7 (read-only audit of missing motion) |
| `improve-animations` | Cross-validation motion audit (read-only) |
| `surgical-patch` | Phase 9 hook changes |
| `run`, `verify-and-stop`, `claude-in-chrome` | Verification |
| `code-review` | Once, in Cross-Validation |
| External, optional, **ask the user before installing**: `cloudai-x/threejs-skills@threejs-fundamentals`, `@threejs-animation` (19.5K), `@threejs-shaders` (14.9K), `@threejs-postprocessing` (12.9K); `emalorenzo/three-agent-skills@three-best-practices` (1.4K) | Phases 3, 4, 6, 8 |

## 11. Out of scope
- Changing 2D visuals or behavior (aside from the shared-module extraction).
- Context-fill rings, parent/child hierarchy links, main-agent status in the browser views (needs `liveState` extension; a natural follow-up: add `ctx`, `window`, `parentId`, main status).
- WebGPU/TSL renderer, VR/XR, audio, screenshots/GIF export.
- Cleanup of old per-session live dirs.
- Reverse sync from the browser tab choice to the pane.

## 12. Rollback
All work is on `feat/3d-view` in a separate worktree. Rollback = delete the branch/worktree; `main` and the live mod are untouched. Shipped risk is isolated: `eagle-eye-3d.js` is lazy-loaded, so removing the tab/`WEB_FILES` entry restores the previous behavior; the only shared change is the Phase 1 extraction, covered by its own acceptance check.

## Execution Progress
_Last updated: 2026-10-23 - Worktree: <worktree>/agents-eagle-eye-3d - Branch: feat/3d-view_

| Phase | Status | Commit | Notes |
|---|---|---|---|
| 1. Foundation and safe refactor | done | 73ff886 | typecheck, 10 bun tests, claude plugin test, builds verified; specs named *.spec.ts (plugin test globs *.test.ts) |
| 2. Shell: tab, view manager, lazy load | done | 5f3ba30 | live-verified in Chrome via browser-use: 2D renders, tabs, lazy 3D script, hash, localStorage, arrows, ?renderer=2d; scripts/dev-server.mjs for testing; Chrome extension MCP hangs on 127.0.0.1 so use browser-use harness |
| 3. 3D engine core and space | done | 84c0b51 | live 75fps empty scene; context-loss tested |
| 4. Orchestrator orb | done | 04ac168 | live-verified |
| 5. Agent nodes | done | 04ac168 | live-verified; click/hover/drag work |
| 6. Links, packets, sparks | done | 04ac168 | live-verified |
| 7. Choreography, flare, dust, demo | done | 1d4cf66 | live-verified via step(); dust+flare in 04ac168 |
| 8. Labels, interaction, a11y | done | 1a43d4f | label centring, single pulse, orb hover, bloom toggle, governor ignores throttled frames; 0.85 ms/frame DPR1, 28 draw calls (41 with bloom) |
| 9. Mod side: pane, command | done | 93409ef | plugin test 9 pass; page-side viewSeq not live-tested yet |
| Cross-Validation | pending | - | - |

## Addendum A - 3D space grammar (user reference, 2026-10-23)

Reference: `the design reference image (not included)`. The current 3D view reads as the 2D layout seen head-on. The user wants real 3D grammar:

1. **Orbital disc, Y up.** Agents live on (or close to) a horizontal XZ disc around the orb, not on the screen plane. Elliptical dashed orbit guides (several concentric, thin, faint, slowly dashing) lie on the disc. Agents keep a small per-agent height offset (+/- 60) so the disc is not flat-perfect.
2. **Elevated camera.** Default view looks down on the disc at about 30-35 degrees elevation, so orbits read as ellipses and near agents are visibly larger than far ones (true perspective, FOV ~35-40). Orbit/zoom/idle drift stay; idle drift is a slow yaw around Y.
3. **Agents are planets.** Each node is a sphere with a procedural surface (noise-based continents/clouds in the agent colour, generated in the shader, no textures), a fresnel atmosphere glow, terminator lighting from the orb (the orb is the light source: lit side faces the orb), and a tilted equatorial ring (Saturn-like) carrying the status decorations (running arcs, satellites, waiting dashes).
4. **Rotation grammar per agent.** Each planet has its own spin: yaw (spin about its tilted axis, speed from status: running fast, thinking faster with wobble, waiting slow, idle very slow, finished stopped), pitch/roll as a slow axial precession (axis tilt ~15-25 degrees, precessing). Spin speed eases with dampers on status change (interruptible). Rotation must be visible through the surface pattern and ring tilt.
5. **The orb is a glowing world.** Sphere with a lat/long wireframe grid and a fine particle network on the surface, slowly yawing about Y, with its equatorial tick ring and halo rings tilted on the disc plane; brain icon remains as a camera-facing core glyph.
6. **Links are 3D arcs.** Strands rise from the orb and arc along the disc to each planet (slight upward bow), carrying packets; the braid stays.
7. **Labels are callout cards.** Rounded dark glass cards (name, status dot + text, tokens with bar icon, time with clock icon) attached by a thin leader line in the agent colour to the planet, placed away from the orb; depth-faded; finished agents stay compact.
8. **Depth cues.** Fog/dim by distance, size by perspective, occlusion by the orb (agents behind the orb are hidden by it), soft starfield + nebula behind.
9. **Not literal:** the X/Y/Z axis gizmo, the Yaw/Pitch/Roll arrows and the legend box in the reference are explanatory annotations, not features. Optional: a debug overlay `?axes=1` that draws them.

All 2D micro-animations from section 6 stay; this addendum changes geometry, camera, node/orb materials and label style.
