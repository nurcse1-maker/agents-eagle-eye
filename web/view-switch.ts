/**
 * 2D | 3D selection for the Eagle Eye page: the pure precedence rule, WebGL2 detection,
 * the persisted choice and the lazy loader of the 3D bundle. No top-level side effects,
 * so the pure parts are testable without a DOM.
 */
export type View = '2d' | '3d'

export const VIEW_KEY = 'eagleEye.view'
export const SEQ_KEY = 'eagleEye.viewSeq'

export const asView = (v: unknown): View | undefined => (v === '2d' || v === '3d' ? v : undefined)

/** `#2d` / `#3d` (case-insensitive, with or without the `#`). */
export const parseHash = (hash: string | null | undefined): View | undefined => asView((hash ?? '').replace(/^#/, '').toLowerCase())

/** The pane asked for a view since the page last looked: a positive counter that moved. */
export const paneChanged = (viewSeq: number | null | undefined, lastSeq: number | null | undefined): boolean =>
  typeof viewSeq === 'number' && Number.isFinite(viewSeq) && viewSeq > 0 && viewSeq !== lastSeq

export type ResolveInput = {
  /** location.hash */
  hash?: string | null
  /** The pane's view (state.view). */
  view?: string | null
  /** The pane's counter (state.viewSeq) and the last value this page applied. */
  viewSeq?: number | null
  lastSeq?: number | null
  /** localStorage value. */
  stored?: string | null
  webgl2: boolean
}

/** hash > pane (only when viewSeq changed) > localStorage > '2d'. Never '3d' without WebGL2. */
export const resolveView = (i: ResolveInput): View => {
  const pick: View =
    parseHash(i.hash) ?? (paneChanged(i.viewSeq, i.lastSeq) ? asView(i.view) : undefined) ?? asView(i.stored) ?? '2d'
  return pick === '3d' && !i.webgl2 ? '2d' : pick
}

/**
 * What to show when 3D fails (load error, mount error, lost context): 2D, but a transient failure must not overwrite
 * the remembered choice or the hash, so it is never persisted. undefined when 3D was not the shown view.
 */
export const failFallback = (current: View | null | undefined): { view: View; persist: false } | undefined =>
  current === '3d' ? { view: '2d', persist: false } : undefined

/** WebGL2 without a major performance caveat; `?renderer=2d` forces it off (debug). */
export const detectWebGL2 = (search: string = location.search): boolean => {
  try {
    if (new URLSearchParams(search).get('renderer') === '2d') return false
    const gl = document.createElement('canvas').getContext('webgl2', { failIfMajorPerformanceCaveat: true })
    if (!gl) return false
    gl.getExtension('WEBGL_lose_context')?.loseContext()
    return true
  } catch {
    return false
  }
}

export const readStored = (key: string): string | null => {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

export const writeStored = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* private mode, blocked storage: the choice just is not remembered */
  }
}

/** Updates the hash without adding history or scrolling. */
export const writeHash = (view: View): void => {
  try {
    history.replaceState(null, '', `#${view}`)
  } catch {
    /* sandboxed contexts */
  }
}

let loading: Promise<boolean> | undefined

/** Injects the 3D bundle once; resolves false (and allows a retry) when it fails to load. */
export const load3DScript = (src = 'eagle-eye-3d.js'): Promise<boolean> => {
  if (window.__eagleEye3D) return Promise.resolve(true)
  if (loading) return loading
  loading = new Promise<boolean>(resolve => {
    const s = document.createElement('script')
    s.src = src
    s.onload = () => {
      s.onload = s.onerror = null
      const ok = !!window.__eagleEye3D
      if (!ok) loading = undefined
      resolve(ok)
    }
    s.onerror = () => {
      s.remove()
      loading = undefined
      resolve(false)
    }
    document.head.appendChild(s)
  })
  return loading
}
