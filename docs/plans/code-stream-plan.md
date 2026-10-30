# Code Stream: implementation plan

Status: executing. Repo `agents-eagle-eye`, branch `code-stream` (worktree `.claude/worktrees/code-stream`).
Visual and behavioural spec: the approved mockup `code-stream-mockup.html` (copied to `docs/plans/assets/code-stream-mockup.html` in Phase 4).

House rules for every phase: no code comments of any kind; no attribution trailers in commits; small pure modules with tests; never edit the live `~/.claude` copy of the mod.

## 1. Goal and non-goals

Goal: a "Code Stream" panel in the Eagle Eye browser page showing what code the agents are changing, fed by real `tool.call` events (Edit, Write, MultiEdit, NotebookEdit), in both the 2D and 3D views. When an edit lands, the originating agent's node pulses and a beam travels from that node to the panel edge; then a card (diff with typed-in added lines) is born at the bottom of the panel and drifts upward, fading at top and bottom.

Non-goals: no code from Bash, Read, Grep or MCP tools; no redaction (lengths are capped only); no syncing of panel prefs back to the Claude Code pane; no re-centring of the 2D scene or 3D camera; no git integration; no persistence of the stream across reloads; no new runtime dependency; no per-view duplicate panels.

## 2. Requirements

| Id | Requirement |
|---|---|
| R1 | Entries come only from successful `tool.call` events of Edit, Write, MultiEdit, NotebookEdit (not denied, errored or staged). Unknown shapes are ignored, never thrown on. |
| R2 | Each entry carries monotonic `seq`, `at`, `agentId` (absent for the main loop), `tool`, `path`, `adds`, `dels`, a bounded list of diff lines (`add`, `del`, `ctx`) with line numbers, and `more`. |
| R3 | State is bounded: at most 24 entries, 40 lines per entry, 200 chars per line, `edits` field under about 120 KB serialized. Truncation is reported via `more`. |
| R4 | De-duplication across the 1 s polling by `epoch` + monotonic `seq`; an `epoch` change resets the panel. |
| R5 | `/agents-eagle-eye demo` feeds a deterministic sample stream whose agent ids map onto the page's demo agents (`DEFAULT_AGENTS`). |
| R6 | Panel docked right by default, Left/Right toggle; styles Cards, Terminal, Holo; speed slow/normal/fast; density compact/comfy; persisted in localStorage; paused/hover/expanded are transient. |
| R7 | Entries are born at the bottom and drift upward with top and bottom fade; drift pauses on hover and via a pause button; added lines type in; click or Enter/Space expands and collapses the diff; header shows live dot, title, counter "N edits · M files/min". |
| R8 | On spawn the originating agent's node pulses and a beam plus particle travels from the node to the panel edge, then the card appears with an edge flash. Identical in 2D and 3D through one view interface. Main-loop edits originate from the orchestrator orb. |
| R9 | The panel never covers the 2D/3D tabs, badge, notice or Bloom button: `top: 60px`, `bottom: 56px` clearance on both sides. |
| R10 | Reduced motion: no drift, typing, beam or holo flicker; cards appear settled. |
| R11 | Pure logic is unit-tested. Panel DOM uses `createElement` and `textContent`, never `innerHTML` with file content. |
| R12 | Both committed bundles are rebuilt; `bun run verify` and `claude plugin test .` pass; `scripts/check-bundle.mjs` also guards `eagle-eye.js`. |

## 3. Verified findings vs assumptions

Verified from the typings of a sibling dev mod (`C:\Users\Farazi-desktop\.claude\dev-mods\067ddd7f-a99b-4881-a928-e8c2655f1c5a\agent-eagle-view\.claude-plugin\types\`):
- `tool.call` arguments are spread on the event: `e.tool`, `e.agentId?` (absent on the main loop), `file_path`, `old_string`, `new_string` (Edit); `file_path`, `content` (Write); `notebook_path`, `new_source` (NotebookEdit). `next(e)` resolves to `{ deny }` or `{ result, text, isError?, ... }`.
- Results: Edit and Write carry `structuredPatch: { oldStart, newStart, lines: string[] }[]` with lines prefixed `+`, `-`, space; Write has `type: create|update`, `originalFile`; NotebookEdit has `new_source`. Handle the patch under both `result.structuredPatch` and `result.result.structuredPatch`, and check `isError` and `staged` at both levels.
- That build has no `MultiEdit`; its input shape `{ file_path, edits: [{ old_string, new_string }] }` is assumed. No "deny" flag is defined in the typings; treat `denied === true` or `behavior === 'deny'` as deny (assumption).
- The hook already handles `tool.call` at `hooks/register.tsx:327-335`. State reaches the page as `state.js` written once a second while viewing (`hooks/register.tsx:148-225`); the page reloads it each second (`web/bridge.ts:296-318`).
- In demo mode the page ignores `state.agents` and uses `DEFAULT_AGENTS` ids (`web/shared/defaults.ts`), so demo edits must use those ids.
- 2D: screen = `canvasRect.left + a.x*S`; `S = min(W/DESIGN_W, H/DESIGN_H)` (`web/agent-network.ts:513`). The existing `pulse(id)` also ripples the orchestrator, so a new `pulseAgent` method is needed.
- 3D: `engine.rig.project(Vector3, out)` returns CSS px with a `visible` flag (`web/three/camera.ts:558`); agents in `engine.world.agents`, orb in `world.orb`; pulse via `world.emit('pulseAgent', ...)` and `engine.fx.flash`.
- Tooling: `bun run test` runs `bun test web/tests`; `bun run typecheck` is `tsc -p tsconfig.web.json` (includes only `web/**/*`), so `hooks/edits.ts` is type-checked through the test import.

Unverified (design defends against each): U1 payload shapes differ in another build; U2 the test host may not mock a core `tool.call`; U4 MultiEdit shape; U5 pure modules shared by `bun test web/tests` and the mod must not import `claude-code` at runtime.

Channel: a new bounded `edits` field on the existing state.

```ts
type EditLine = { k: 'add' | 'del' | 'ctx'; n: number; t: string }
type EditRec = { seq: number; at: number; agentId?: string; tool: string; path: string; adds: number; dels: number; lines: EditLine[]; more: number }
type EditsWire = { epoch: string; total: number; items: EditRec[] }
```

`epoch` is the session start time (demo: `demo-<since>`); `seq` increments atomically inside the atom update. The page ingests `seq > lastSeq`, clears on epoch change; on first ingest items older than 4 s are seeded settled. `demoEdits(since, now)` is a pure deterministic function returning the last 12 entries.

## 4. Baseline (2026-10-30, before any change)

`bun run typecheck` pass; `bun run test` 142 pass / 15 files; `bun run build` ok; `bun run check:bundle` ok (691 KB 3D); `claude plugin test .` 9 pass. Mod typecheck (`tsconfig.json`) is not runnable outside Claude Code. `bun install` rewrites 2 lines of `bun.lock`: revert before committing.

Gate per phase: `bun run typecheck && bun run test`, plus `claude plugin test .` when `hooks/`, `types/` or `tests/` change, plus `bun run verify` when bundle-relevant files change.

## 5. Architecture

```
tool.call (hooks/register.tsx) -> res = await next(e)
  -> hooks/edits.ts extractEdit(e, res) -> EditDraft | undefined   (pure, defensive)
  -> capDraft -> editsAtom { epoch, seq, items[<=24] }             (demo: demoEdits, no atom)
  -> liveState().edits (budget-trimmed) -> state.js once per second
  -> page window.__eagleEye -> stream.ingest (dedupe, seed, cap 48)
  -> web/stream/controller.ts (one rAF loop)
       anchors.getAgentScreenPosition(id) / anchors.pulseAgent(id)  (2D and 3D implement)
       overlay.ts beam -> panel.spawn(entry) -> typing, drift, fade
```

Beam: quadratic bezier from node to panel edge, control point `((sx+ex)/2, min(sy,ey) - 90*scale)`, head eased in-out cubic over 0.75 s, 18-segment tail, additive blending.

View interface: `StreamAnchors { getAgentScreenPosition(agentId: string | null): { x: number; y: number } | undefined; pulseAgent(agentId: string | null): void }`; `null` is the orchestrator. If the position is undefined the beam starts at the orchestrator, then at the panel edge.

z-order: views < labels/tabs z2 < Bloom z3 < beam overlay z4 < panel z5. The overlay canvas is `pointer-events: none`.

Modules: `hooks/edits.ts`; `web/stream/{types,ingest,motion,tokenize,stats,prefs,anchors,overlay,panel,controller}.ts`; edits to `hooks/register.tsx`, `types/index.d.ts`, `web/bridge.ts`, `web/agent-network.ts`, `web/three/entry.ts`, `web/index.html`, `scripts/dev-server.mjs`, `scripts/check-bundle.mjs`, `README.md`; tests in `web/tests/` and `tests/eagle-eye.test.ts`.

## 6. Phases

### Phase 1: payload extraction, wire types, tests
Files: `hooks/edits.ts`, `types/index.d.ts` (types), `web/tests/edits.spec.ts`.
- `extractEdit(e, result): EditDraft | undefined` using result `structuredPatch` first (validated hunks, at most 2 context lines), input fields second, else undefined; undefined on `isError`, deny, `staged`. `capDraft` (40 lines, 200 chars, path 300, `more`), `splitPath`.
- AC: new spec passes, 20 hostile inputs never throw, `bun run typecheck` and `bun run test` pass, `claude plugin test .` 9 pass.

### Phase 2: ring in hook state, hook wiring, demo feed
Files: `hooks/edits.ts`, `hooks/register.tsx`, `types/index.d.ts`, `tests/eagle-eye.test.ts`, `web/tests/edits.spec.ts`.
- `appendEdit` (seq, cap 24, total), `trimToBudget`, `demoEdits` (deterministic, <=12, page demo ids); recorder in `tool.call` inside try/catch returning the exact `next(e)` result; `liveState.edits`.
- AC: a recorded Edit appears in `state.js` `edits.items[0]`; denied adds nothing; 30 calls leave 24 items with `total` 30; throwing recorder does not fail the call; worst-case state under budget; 9 existing mod tests pass.

### Phase 3: bridge plumbing and page-side buffer
Files: `web/stream/{types,ingest,stats,prefs}.ts`, `web/bridge.ts` (debug hook `window.__eagleEyeStream`), specs, `scripts/dev-server.mjs`.
- Ingest dedupe/seed/epoch reset/cap 48; stats (`formatAge`, `formatClock`, files/min, counter text); prefs defaults `{ side: 'right', style: 'cards', speed: 'normal', density: 'comfy' }` with tolerant parse; producer/consumer wire test; dev-server mock `edits`.
- AC: typecheck and tests pass; dev server `/state.js` shows growing `edits.seq`.

### Phase 4: shell panel, Cards style, drift, fade, hover pause, typing, expand
Files: `web/stream/{motion,tokenize,panel,controller}.ts`, `web/index.html`, `web/bridge.ts`, specs, `docs/plans/assets/code-stream-mockup.html`.
- Pure motion (drift 12/24/42 px/s plus backlog catch-up, stacking gaps 11/7/0, removal 40 px above top, typing, spawn spacing 220 ms, settle-all when backlog > 6, easing, bezier) and tokenizer (concatenated text equals input).
- Panel with `createElement`/`textContent`, accessible cards (`tabindex`, `role="button"`, `aria-expanded`), header with live dot, pause button; controller with one rAF loop, `dt` clamp, hidden-tab stop, ResizeObserver; CSS from the mockup with R9 clearance and width `clamp(330px, 29vw, 400px)`.
- AC: specs pass; browser check in 2D (drift, fade, hover pause, typing, expand) with screenshots; no `innerHTML` with entry data under `web/stream/`; no overlap with tabs/badge/notice/Bloom at 1280x720 and 800x600.

### Phase 5: Terminal and Holo styles, controls, persistence
- Terminal and Holo markup/CSS from the mockup; settings popover from a header gear button (Side/Style/Speed/Density, `aria-pressed`, Escape closes); side slide; one storage key `eagleEye.stream`; paused never persisted.
- AC: prefs round trip and garbage tolerance, per-style gap table, terminal line selection tests; reload keeps prefs; disabled localStorage does not throw.

### Phase 6: 2D integration (pulse and beam)
Files: `web/agent-network.ts`, `web/stream/{anchors,overlay,controller}.ts`, `web/bridge.ts`, specs.
- `designToScreen`; `getAgentScreenPosition` and `pulseAgent` on `AgentNetwork` (`null` is the center); beam overlay with arrival ring and edge glow; queue spacing 220 ms, hard timeout 1.2 s, >6 queued settles without beams.
- AC: tests pass; each card preceded by a pulse on the right agent and a beam ending at the panel edge; start stays within 4 px of the node after resize; no extra packets or ripples elsewhere.

### Phase 7: 3D integration
Files: `web/three/entry.ts`, `web/bridge.ts`, spec for the projection helper, `web/three/README-dev.md`.
- Same two methods on the 3D handle via `engine.rig.project`; anchors resolver picks the active view; fallbacks while 3D loads.
- AC: tests, `build:3d`, `check:bundle` pass (3D under 1 MB); beams start at moving planets; off-screen agents fall back; switching views mid-stream loses and duplicates nothing.

### Phase 8: reduced motion, caps, polish
- Reduced-motion branch of motion functions; 48 DOM entries; 8 visible lines collapsed; clipping; hidden tab settle; state-gap grey dot after 8 s; epoch change fade; focus rings; `aria-label="Code stream"`; budgets recorded (frame time < 1.5 ms, hook overhead < 1 ms typical).
- AC: reduced-motion tests; a 5000-entry burst keeps DOM at 48; `claude plugin test .` and `bun run verify` pass.

### Phase 9: bundles, docs, final checks
- `bun run build`; `check-bundle.mjs` also validates `eagle-eye.js` (ASCII, no dynamic loading); README Code Stream section and layout list; final gate with `bun.lock` reverted.
- AC: `bun run verify`, `claude plugin test .`, `bun run check:bundle` pass; rebuilding produces no further diff.

## 7. Cross-validation (after Phase 9)

One pass over the full branch diff: no `innerHTML` with entry data; no unbounded growth (atom, `state.js`, DOM, history); `tool.call` returns `next(e)` unchanged and recording never throws; demo ids match `DEFAULT_AGENTS`; no new code comments; bundles ASCII and rebuilt.

## 8. Risks

| # | Risk | Mitigation |
|---|---|---|
| K1 | Payload shapes verified in one build only | Layered extraction, hostile-input tests, live check |
| K2 | Awaiting `next(e)` could break tool calls | try/catch, return exact result, mod test |
| K3 | `state.js` growth | Hard caps and byte budget |
| K4 | Demo ids differ between mod and page | Demo uses page ids, cross-import test |
| K5 | Anchor unavailable (3D loading, behind camera) | Orb, then panel-edge, then direct spawn |
| K6 | Panel clearance differs from mockup | Collapse below 420 px height; follow-up for sideways shifting |
| K7 | Panel can hide agents on narrow windows | Width clamp, pause control |
| K8 | No DOM in `bun test`; browser tooling can hang | Logic in pure modules; `__eagleEyeStream` hooks |
| K9 | Unredacted content over `file://` | Same trust boundary as existing state; documented |
| K10 | `bun.lock` rewritten by `bun install` | Revert before commit |

## Execution Progress
_Last updated: 2026-10-30. Worktree: .claude/worktrees/code-stream. Branch: code-stream._

| Phase | Status | Commit | Notes |
|---|---|---|---|
| 1. Payload extraction | pending | none | |
| 2. Ring, hook wiring, demo feed | pending | none | |
| 3. Bridge plumbing, page buffer | pending | none | |
| 4. Panel, Cards style | pending | none | |
| 5. Terminal, Holo, controls | pending | none | |
| 6. 2D pulse and beam | pending | none | |
| 7. 3D pulse and beam | pending | none | |
| 8. Reduced motion, caps | pending | none | |
| 9. Bundles, docs, final checks | pending | none | |
