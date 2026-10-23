// Dev server for the Eagle Eye page: serves web/ and a mock /state.js. No dependencies.
//
//   node scripts/dev-server.mjs            demo mode (DEMO=1, default)
//   DEMO=0 node scripts/dev-server.mjs     live mock: 5 agents whose statuses cycle
//   PORT=9000 ...                          other port (default 8765)
//
// /state.js?demo=1|0 overrides the server default per request.
// /state.js?view=3d&viewSeq=2 adds the pane's view fields.
// /__mode?demo=0&view=3d switches the server default at runtime (a view change bumps viewSeq).
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { dirname, extname, join, normalize, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'web')
const HOST = '127.0.0.1'
const PORT = Number(process.env.PORT) || 8765

const config = {
  demo: process.env.DEMO !== '0',
  view: undefined,
  viewSeq: 0,
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
}

const CYCLE = ['running', 'thinking', 'waiting', 'idle', 'completed', 'stopped', 'running', 'thinking']
const MOCK = [
  { id: 'a1', name: 'Planner', icon: 'doc' },
  { id: 'a2', name: 'Researcher', icon: 'search' },
  { id: 'a3', name: 'Coder', icon: 'code' },
  { id: 'a4', name: 'Reviewer', icon: 'chart' },
  { id: 'a5', name: 'Tester', icon: 'gear' },
]

/** Same shape as LiveState in web/bridge.ts. */
const buildState = (demo, view, viewSeq) => {
  const now = Date.now()
  const state = {
    model: 'Sonnet 5.5',
    session: 'dev-server · 00000000',
    demo,
    updatedAt: now,
    agents: demo
      ? []
      : MOCK.map((a, i) => {
          const step = Math.floor(now / 4000 + i * 1.7)
          const status = CYCLE[step % CYCLE.length]
          const live = status === 'running' || status === 'thinking'
          return {
            ...a,
            status,
            tokens: Math.round(40000 + ((now / 1000) * (live ? 900 : 200) + i * 31000) % 600000),
            seconds: Math.round(((now / 1000) % 3600) + i * 40),
          }
        }),
  }
  if (view === '2d' || view === '3d') {
    state.view = view
    state.viewSeq = viewSeq
  }
  return state
}

const send = (res, status, type, body) => {
  res.writeHead(status, { 'content-type': type, 'cache-control': 'no-store' })
  res.end(body)
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? '/', `http://${HOST}:${PORT}`)
    if (url.pathname === '/state.js') {
      const q = url.searchParams
      const demo = q.has('demo') ? q.get('demo') !== '0' : config.demo
      const view = q.get('view') ?? config.view
      const seq = q.has('viewSeq') ? Number(q.get('viewSeq')) || 0 : config.viewSeq
      const body = `window.__eagleEye && window.__eagleEye(${JSON.stringify(buildState(demo, view, seq))})\n`
      return send(res, 200, MIME['.js'], body)
    }
    if (url.pathname === '/__mode') {
      const q = url.searchParams
      if (q.has('demo')) config.demo = q.get('demo') !== '0'
      const view = q.get('view')
      if (view === '2d' || view === '3d') {
        config.view = view
        config.viewSeq += 1
      }
      return send(res, 200, MIME['.json'], JSON.stringify(config))
    }
    let rel = decodeURIComponent(url.pathname)
    if (rel.endsWith('/')) rel += 'index.html'
    const file = normalize(join(ROOT, rel))
    if (file !== ROOT && !file.startsWith(ROOT + sep)) return send(res, 403, 'text/plain', 'forbidden')
    const data = await readFile(file).catch(() => undefined)
    if (!data) return send(res, 404, 'text/plain', 'not found')
    send(res, 200, MIME[extname(file).toLowerCase()] ?? 'application/octet-stream', data)
  } catch (err) {
    send(res, 500, 'text/plain', String(err))
  }
})

server.listen(PORT, HOST, () => {
  console.log(`Eagle Eye dev server: http://${HOST}:${PORT}/index.html (state.js default: ${config.demo ? 'demo' : 'live mock'})`)
})
