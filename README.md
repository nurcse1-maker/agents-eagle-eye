# agents-eagle-eye

A Claude Code mod that shows the main agent and every subagent live: status, context window fill and run time.

- `/agents-eagle-eye` opens an animated live view in your browser (one page per session) and a small pane in Claude Code.
- `/agents-eagle-eye demo` toggles a sample cast of agents.
- `/agents-eagle-eye 3d` or `/agents-eagle-eye 2d` picks the view. The pane has a View button that does the same.
- `/agents-eagle-eye close` stops the live updates.

Finished agents (completed, stopped, offline) are drawn small, dim and wordless, behind the live ones.

## 2D and 3D views

The browser page has two views of the same agents, switched with the 2D | 3D tab at the top right:

- 2D is the flat canvas design.
- 3D is an orbiting scene: the orchestrator is an orb in the middle and the agents are planets around it. It needs WebGL2. Without it, the 3D tab is disabled and the page stays on 2D.

Which view you see at load, in order of priority:

1. The URL hash: `#3d` or `#2d` (for example `index.html#3d`). Deep links to either view work.
2. A view the pane asked for since this page last looked (`/agents-eagle-eye 3d|2d` or the View button).
3. The view you used last time (remembered in the browser).
4. 2D.

The sync is one way. The pane and the slash command tell the browser page which view to show, but a tab you click in the browser does not go back to the pane, so the pane's View button can say 2D while the tab shows 3D.

If 3D cannot start (no WebGL2, the bundle fails to load, or the graphics context is lost and does not come back), the page shows 2D and a short notice. That fallback is not remembered, so the next load tries 3D again.

### 3D controls

- Drag to orbit.
- Mouse wheel (or pinch) to zoom.
- Double-click, or press R, to reset to the default view.
- Arrow keys orbit; plus and minus zoom (click the scene first so it has focus).
- Click a planet or the orb, hover for a tooltip. A Bloom button at the bottom right turns the glow on or off.

### Debug flags (query string)

- `?renderer=2d` forces the 2D view and disables 3D.
- `?axes=1` draws each planet's spin axis, spin direction and precession.
- `?freeze=1` freezes the 3D clock (the camera still moves), for screenshots.
- `?gov=0` turns off the 3D quality governor, for measuring.

### How it works

`web/three/` is a small layered engine. The shell (`web/bridge.ts`) loads `eagle-eye-3d.js` on demand and gives it the live state once a second. The engine owns the renderer, camera rig, clocks and quality governor, and runs a list of layers (background, stars, orb, planets, links, packets, choreography, labels, and so on). Each layer is one file in `web/three/layers/` that reads and writes a shared world model, so layers do not import each other. See `web/three/README-dev.md` for the layer contract, the debug API and the file map.

## Layout

- `hooks/register.tsx`: tracking, the commands and the pane.
- `hooks/mini.ts`: the pane's animated SVGs (desktop and VS Code): 2D and the pseudo-3D variant.
- `hooks/model.ts`: formatting, icon and status helpers.
- `web/agent-network.ts`: the browser design (canvas).
- `web/bridge.ts`: feeds live agents into the design and switches 2D | 3D. `web/eagle-eye.js` is its bundle.
- `web/three/`: the 3D view (engine, layers). `web/eagle-eye-3d.js` is its bundle.
- `tests/`: run with `claude plugin test .`

## Install

Load it from a folder:

```
claude --plugin-dir /path/to/agents-eagle-eye
```

or set `CLAUDE_CODE_PLUGIN_DIRS` to its path in the `env` block of `~/.claude/settings.json`.

## Rebuild the browser bundles

Both bundles (`web/eagle-eye.js` for 2D, `web/eagle-eye-3d.js` for 3D) are built from the repo root:

```
bun install
bun run build         # build:2d + build:3d
bun run typecheck     # tsc -p tsconfig.web.json
bun test              # web/tests
bun run check:bundle  # web/eagle-eye-3d.js: ASCII only, no import(), fetch(), eval(), workers, under 1 MB
bun run verify        # typecheck + test + build + check:bundle
```

`bun run build:2d` or `bun run build:3d` builds one of them. `node scripts/dev-server.mjs` (set `PORT`, default 8765) serves `web/` with a mock state for local work, for example `http://127.0.0.1:8765/index.html#3d`.

The page files are copied into the live folder once per mod load, so after a rebuild you must reload the mod (or restart the session) for the browser to get the new bundles.
