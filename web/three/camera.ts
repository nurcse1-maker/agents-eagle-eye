/**
 * Orbit camera rig, hand rolled (no OrbitControls): inertial orbit and zoom, idle drift, pointer parallax,
 * home-view reset, keyboard orbit, shake from fx. The camera orbits the orb at the world origin.
 *
 * Addendum A.2: the home view looks down on the XZ orbital disc (Y up) at HOME_ELEV degrees with a slight yaw, and
 * the home radius is fitted to the agents (`fitDisc`). A refit springs in only while the user has left the view
 * alone for REFIT_IDLE seconds, or after a reset; the user's zoom ratio is kept. Elevation is clamped to
 * [ELEV_MIN, ELEV_MAX]: never more than ~10 deg below the disc, never past ~80 deg (top-down).
 *
 * Layers use: `rig.pointerNDC`, `rig.pointerActive`, `rig.pointerWorldOnPlane(point, normal?)`,
 * `rig.rayFromNDC(...)`, `rig.project(v, out?)` (CSS px, for DOM labels), and the hooks
 * `rig.shouldOrbit` (return false to keep a pointerdown for your own drag) and `rig.onTap`.
 */
import { PerspectiveCamera, Vector2, Vector3 } from 'three'
import type { Fx } from './fx'
import { Spring, TAU, clamp, damp } from './springs'

export const FOV = 38
const DEG = Math.PI / 180
/** Elevation above the disc plane (degrees) of the default view; the reference composition (Addendum A.2). */
export const HOME_ELEV = 32
/** Elevation limits: a little below the disc at most, never quite top-down. phi is the polar angle from +Y. */
export const ELEV_MIN = -10
export const ELEV_MAX = 80
export const PHI_MIN = (90 - ELEV_MAX) * DEG
export const PHI_MAX = (90 - ELEV_MIN) * DEG
/** Default view: elevated over the disc with a slight yaw (camera a little to the right of +Z), orb at the centre. */
export const HOME_THETA = 0.24
export const HOME_PHI = (90 - HOME_ELEV) * DEG
/** A roster or viewport refit waits until the user has not touched the view for this long (or a reset). */
export const REFIT_IDLE = 8
const REFIT_RATE = 1.6 // damp rate of the home radius toward a new fit (about 2 s to settle)
const ORBIT_DAMP = 6 // exp(-6 dt) inertia
const IDLE_AFTER = 4 // seconds without input
const IDLE_SPEED = 0.03 // rad/s
const DRAG_RAD_PER_PX = 0.0052
const TAP_SLOP = 5 // px, same as 2D

export interface Projected {
  x: number
  y: number
  z: number
  visible: boolean
}

export interface CameraRig {
  readonly camera: PerspectiveCamera
  /** Pointer in NDC (-1..1, y up) over the canvas; last known position when it leaves. */
  readonly pointerNDC: Vector2
  pointerActive: boolean
  /** Sprung pointer parallax, -1..1 on both axes (0 when the pointer is away). */
  readonly parallax: Vector2
  /** Orbit angles relative to home (theta wrapped to -pi..pi); for backdrop parallax. */
  readonly orbit: Vector2
  theta: number
  phi: number
  radius: number
  /** Radius of the home view (fits the portrait design); the layout sets it. */
  homeRadius: number
  /** True while a pointer drags the view or a pinch is on. */
  readonly dragging: boolean
  /** Seconds since the last user input. */
  readonly idleFor: number
  /** Return false from this to leave a pointerdown to the caller (e.g. dragging a node). */
  shouldOrbit: (e: PointerEvent) => boolean
  /** A press-and-release on empty space that moved < 5 px. */
  onTap?: (e: PointerEvent) => void
  /** Motion off (reduced-motion preference of Phase 8): no idle drift. */
  idleDriftEnabled: boolean

  update(dt: number, time: number): void
  resize(w: number, h: number): void
  /** Spring back to the home view. */
  reset(): void
  /** Re-fit the home radius after a layout change; keeps the current zoom ratio. */
  setHomeRadius(r: number): void
  /** Change the default view (any field optional). Resets the current view to it when `apply` is true (default). */
  setHome(home: { theta?: number; phi?: number; radius?: number }, apply?: boolean): void
  /** Home radius at which a sphere (centre relative to the orbit target, radius) fills the view; returns it. */
  fitSphere(center: { x: number; y: number; z: number }, radius: number, margin?: number): number
  /**
   * Fit the home radius to points on the disc (agent homes) at the home elevation, for any yaw (each point is swept
   * around Y, so idle drift and user yaw keep them in view). `padH`/`padV` are world margins around each point
   * (planet + label card). `immediate` applies at once (first fit); otherwise the home radius springs to it once the
   * user has not touched the view for REFIT_IDLE s, or after a reset. Returns the target radius.
   */
  fitDisc(points: Iterable<{ x: number; y: number; z: number }>, padH: number, padV: number, immediate?: boolean): number
  /** The home radius the last fitDisc asked for (0 before any fit). */
  readonly fitTarget: number
  /** Ray from the camera through NDC; fills `origin` and `dir` (normalised). */
  rayFromNDC(nx: number, ny: number, origin: Vector3, dir: Vector3): void
  /** Intersect the pointer ray with a plane (default normal: toward the camera). Null if parallel or behind. */
  pointerWorldOnPlane(planePoint: Vector3, normal?: Vector3, out?: Vector3): Vector3 | null
  /** World point -> CSS px. `visible` is false behind the camera or beyond the far plane. */
  project(v: Vector3, out?: Projected): Projected
  dispose(): void
}

export interface RigOptions {
  canvas: HTMLCanvasElement
  fx: Fx
  motion: () => number
  rand?: () => number
}

const wrapPi = (a: number) => a - Math.round(a / TAU) * TAU

/**
 * Pure: the camera distance (looking at the origin from polar angle `phi`, any azimuth) at which every point, swept
 * around world Y, plus a world margin `padH` sideways / `padV` vertically, fits a `fovDeg` frustum of `aspect`.
 *
 * A point at horizontal distance rho and height y, at azimuth a relative to the camera, has camera coordinates
 * x = rho cos a, y' = y sin(phi) - rho cos(phi) sin a and depth d - (y cos(phi) + rho sin(phi) sin a). Fitting
 * |x| + padH <= depth tanH over every a gives d >= y cos + rho sqrt(sin^2 + 1/tanH^2) + padH / tanH; the vertical
 * condition is convex in sin a, so its maximum is at sin a = +-1.
 */
export const discFitDistance = (
  points: Iterable<{ x: number; y: number; z: number }>,
  phi: number,
  aspect: number,
  padH: number,
  padV: number,
  fovDeg = FOV,
): number => {
  const tanV = Math.tan((fovDeg * Math.PI) / 360)
  const tanH = tanV * Math.max(0.05, aspect)
  const sp = Math.sin(phi)
  const cp = Math.cos(phi)
  const kH = Math.sqrt(sp * sp + 1 / (tanH * tanH))
  let d = 0
  for (const p of points) {
    const rho = Math.hypot(p.x, p.z)
    const yc = p.y * cp
    const dH = yc + rho * kH + padH / tanH
    const far = Math.abs(p.y * sp - rho * cp) + padV // far side of the sweep (sin a = 1): higher on screen
    const near = Math.abs(p.y * sp + rho * cp) + padV // near side (sin a = -1)
    const dV = Math.max(yc + rho * sp + far / tanV, yc - rho * sp + near / tanV)
    d = Math.max(d, dH, dV)
  }
  return d
}

export const createCameraRig = (o: RigOptions): CameraRig => {
  const { canvas, fx } = o
  const rand = o.rand ?? Math.random
  const camera = new PerspectiveCamera(FOV, 1, 10, 30000)
  let width = 1
  let height = 1

  const pointerNDC = new Vector2(0, 0)
  const parallax = new Vector2(0, 0)
  const orbit = new Vector2(0, 0)
  const pxS = new Spring(0, 0, 60, 9) // same spring as the 2D parallax (L462)
  const pyS = new Spring(0, 0, 60, 9)

  let vTheta = 0
  let vPhi = 0
  let vLogR = 0
  let idleT = 0
  let drift = 0 // 0..1 gain of the idle drift
  let homeTheta = HOME_THETA
  let homePhi = HOME_PHI
  let aspect = 1
  let returning: { t: Spring; p: Spring; r: Spring } | undefined
  let dragging = false
  let fitTarget = 0
  let refitOk = false // set by reset(), cleared by user input: a refit may spring in before REFIT_IDLE

  const rig: CameraRig = {
    camera,
    pointerNDC,
    pointerActive: false,
    parallax,
    orbit,
    theta: HOME_THETA,
    phi: HOME_PHI,
    radius: 1800,
    homeRadius: 1800,
    get dragging() {
      return dragging
    },
    get idleFor() {
      return idleT
    },
    get fitTarget() {
      return fitTarget
    },
    shouldOrbit: () => true,
    idleDriftEnabled: true,
    update,
    resize,
    reset,
    setHomeRadius,
    setHome,
    fitSphere,
    fitDisc,
    rayFromNDC,
    pointerWorldOnPlane,
    project,
    dispose,
  }

  const minR = () => rig.homeRadius * 0.3
  const maxR = () => rig.homeRadius * 2.4

  /** Any user input: stop drift immediately and cancel a running reset. */
  function touch() {
    idleT = 0
    drift = 0
    returning = undefined
    refitOk = false
  }

  /* ───────── pointer: orbit by drag on empty space, pinch zoom ───────── */
  const pointers = new Map<number, { x: number; y: number }>()
  let downId = -1
  let startX = 0
  let startY = 0
  let moved = false
  let lastX = 0
  let lastY = 0
  let lastT = 0
  let pinchDist = 0

  const setNDC = (e: PointerEvent) => {
    const r = canvas.getBoundingClientRect()
    if (r.width < 1 || r.height < 1) return
    pointerNDC.set(((e.clientX - r.left) / r.width) * 2 - 1, -(((e.clientY - r.top) / r.height) * 2 - 1))
    rig.pointerActive = true
  }

  const onDown = (e: PointerEvent) => {
    setNDC(e)
    if (e.pointerType === 'mouse' && e.button !== 0) return
    if (pointers.size === 0 && !rig.shouldOrbit(e)) return
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY })
    try {
      canvas.setPointerCapture(e.pointerId)
    } catch {
      /* noop */
    }
    touch()
    if (pointers.size === 1) {
      downId = e.pointerId
      startX = lastX = e.clientX
      startY = lastY = e.clientY
      lastT = e.timeStamp
      moved = false
      vTheta = vPhi = 0
    } else if (pointers.size === 2) {
      const [a, b] = [...pointers.values()]
      pinchDist = Math.hypot(a.x - b.x, a.y - b.y)
      moved = true
    }
    dragging = true
  }

  const onMove = (e: PointerEvent) => {
    setNDC(e)
    const p = pointers.get(e.pointerId)
    if (!p) return
    touch()
    p.x = e.clientX
    p.y = e.clientY
    if (pointers.size >= 2) {
      const [a, b] = [...pointers.values()]
      const d = Math.hypot(a.x - b.x, a.y - b.y)
      if (pinchDist > 0 && d > 0) rig.radius = clamp(rig.radius * (pinchDist / d), minR(), maxR())
      pinchDist = d
      return
    }
    if (e.pointerId !== downId) return
    if (!moved && Math.hypot(e.clientX - startX, e.clientY - startY) > TAP_SLOP) moved = true
    if (!moved) return
    const dx = e.clientX - lastX
    const dy = e.clientY - lastY
    const dtEv = Math.max(0.008, (e.timeStamp - lastT) / 1000)
    lastX = e.clientX
    lastY = e.clientY
    lastT = e.timeStamp
    const dTheta = -dx * DRAG_RAD_PER_PX
    const dPhi = -dy * DRAG_RAD_PER_PX
    rig.theta += dTheta
    rig.phi = clamp(rig.phi + dPhi, PHI_MIN, PHI_MAX)
    // remember the release velocity so the view keeps coasting
    vTheta += (dTheta / dtEv - vTheta) * 0.5
    vPhi += (dPhi / dtEv - vPhi) * 0.5
  }

  const onUp = (e: PointerEvent) => {
    if (!pointers.has(e.pointerId)) return
    try {
      canvas.releasePointerCapture(e.pointerId)
    } catch {
      /* noop */
    }
    const wasDown = e.pointerId === downId
    pointers.delete(e.pointerId)
    if (pointers.size < 2) pinchDist = 0
    if (pointers.size === 0) {
      dragging = false
      downId = -1
      if (wasDown && !moved && e.type === 'pointerup') rig.onTap?.(e)
      // a stopped hand does not fling: only keep velocity if the last move was recent
      if (e.timeStamp - lastT > 90) vTheta = vPhi = 0
    } else if (pointers.size === 1) {
      // pinch ended with one finger left: continue as an orbit from there
      const [id, p] = [...pointers.entries()][0]
      downId = id
      lastX = p.x
      lastY = p.y
      lastT = e.timeStamp
      vTheta = vPhi = 0
    }
  }

  const onLeave = () => {
    if (!dragging) rig.pointerActive = false
  }

  const onWheel = (e: WheelEvent) => {
    e.preventDefault()
    touch()
    const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 400 : 1
    // integral of an exp(-6 t) velocity is v/6, so v = 6 * wanted change in log-radius
    vLogR += clamp(e.deltaY * unit, -300, 300) * 0.0011 * ORBIT_DAMP
  }

  const onDblClick = (e: MouseEvent) => {
    if (!rig.shouldOrbit(e as PointerEvent)) return
    reset()
  }

  const onKey = (e: KeyboardEvent) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return
    let handled = true
    switch (e.key) {
      case 'ArrowLeft':
        touch()
        vTheta -= 0.9
        break
      case 'ArrowRight':
        touch()
        vTheta += 0.9
        break
      case 'ArrowUp':
        touch()
        vPhi -= 0.7
        break
      case 'ArrowDown':
        touch()
        vPhi += 0.7
        break
      case '+':
      case '=':
        touch()
        vLogR -= 0.5 * ORBIT_DAMP * 0.3
        break
      case '-':
      case '_':
        touch()
        vLogR += 0.5 * ORBIT_DAMP * 0.3
        break
      case 'r':
      case 'R':
        reset()
        break
      default:
        handled = false
    }
    if (handled) e.preventDefault()
  }

  canvas.style.touchAction = 'none'
  canvas.tabIndex = 0
  canvas.setAttribute('role', 'application')
  canvas.setAttribute('aria-label', 'Agent network 3D view')
  canvas.setAttribute('aria-roledescription', 'orbit view. Arrow keys orbit, plus and minus zoom, R resets.')
  canvas.style.outline = 'none'
  canvas.addEventListener('pointerdown', onDown)
  canvas.addEventListener('pointermove', onMove)
  canvas.addEventListener('pointerup', onUp)
  canvas.addEventListener('pointercancel', onUp)
  canvas.addEventListener('pointerleave', onLeave)
  canvas.addEventListener('wheel', onWheel, { passive: false })
  canvas.addEventListener('dblclick', onDblClick)
  canvas.addEventListener('keydown', onKey)

  /* ───────── per-step update ───────── */
  const right = new Vector3()
  const up = new Vector3()
  const fwd = new Vector3()
  const pos = new Vector3()
  const look = new Vector3()
  const WORLD_UP = new Vector3(0, 1, 0)

  function update(dt: number, time: number) {
    const motion = o.motion()
    idleT += dt
    if (returning) {
      const r = returning
      rig.theta = r.t.step(dt)
      rig.phi = clamp(r.p.step(dt), PHI_MIN, PHI_MAX)
      rig.radius = clamp(r.r.step(dt), minR(), maxR())
      const settled =
        Math.abs(r.t.x - r.t.target) + Math.abs(r.p.x - r.p.target) + Math.abs(r.r.x - r.r.target) / rig.homeRadius < 2e-3 &&
        Math.abs(r.t.v) + Math.abs(r.p.v) < 2e-3
      if (settled) {
        rig.theta = r.t.target
        rig.phi = r.p.target
        rig.radius = r.r.target
        returning = undefined
      }
      vTheta = vPhi = vLogR = 0
    } else {
      if (!dragging) {
        rig.theta += vTheta * dt
        rig.phi = clamp(rig.phi + vPhi * dt, PHI_MIN, PHI_MAX)
        if (rig.phi <= PHI_MIN || rig.phi >= PHI_MAX) vPhi = 0
        const k = Math.exp(-ORBIT_DAMP * dt)
        vTheta *= k
        vPhi *= k
      }
      rig.radius = clamp(rig.radius * Math.exp(vLogR * dt), minR(), maxR())
      vLogR *= Math.exp(-ORBIT_DAMP * dt)
      if (Math.abs(vTheta) < 1e-4) vTheta = 0
      if (Math.abs(vPhi) < 1e-4) vPhi = 0
      if (Math.abs(vLogR) < 1e-5) vLogR = 0
    }

    // roster / viewport refit: spring the home radius only while the user leaves the view alone (or after a reset)
    if (fitTarget > 0 && !dragging && (idleT >= REFIT_IDLE || refitOk) && Math.abs(rig.homeRadius - fitTarget) > 0.5) {
      const next = damp(rig.homeRadius, fitTarget, REFIT_RATE, dt)
      const ratio = rig.radius / rig.homeRadius // keep the user's zoom relative to home
      rig.homeRadius = next
      if (returning) returning.r.target = next
      else rig.radius = next * ratio
    }

    // idle drift: eased in after IDLE_AFTER s, a slow yaw about world Y (0.03 rad/s); input zeroes it at once
    const idle = rig.idleDriftEnabled && !dragging && idleT > IDLE_AFTER && !returning
    drift = damp(drift, idle ? 1 : 0, idle ? 0.7 : 20, dt)
    if (drift > 1e-4) rig.theta += IDLE_SPEED * drift * motion * dt
    void time

    // pointer parallax: 1.5% of the radius, sprung
    pxS.target = rig.pointerActive ? pointerNDC.x : 0
    pyS.target = rig.pointerActive ? pointerNDC.y : 0
    parallax.set(pxS.step(dt), pyS.step(dt))

    orbit.set(wrapPi(rig.theta - homeTheta), rig.phi - homePhi)

    const phi = clamp(rig.phi, PHI_MIN, PHI_MAX)
    const sp = Math.sin(phi)
    pos.set(sp * Math.sin(rig.theta), Math.cos(phi), sp * Math.cos(rig.theta)).multiplyScalar(rig.radius)
    // camera basis from the orbit position toward the origin
    fwd.copy(pos).negate().normalize()
    right.crossVectors(fwd, WORLD_UP).normalize()
    up.crossVectors(right, fwd).normalize()
    const par = rig.radius * 0.015 * motion
    let ox = parallax.x * par
    let oy = parallax.y * par
    const sh = fx.shakeValue
    if (sh > 0.2) {
      ox += (rand() * 2 - 1) * sh
      oy += (rand() * 2 - 1) * sh
    }
    // truck the camera and its target together: real parallax between depth layers, no roll
    pos.addScaledVector(right, ox).addScaledVector(up, oy)
    look.set(0, 0, 0).addScaledVector(right, ox).addScaledVector(up, oy)
    camera.position.copy(pos)
    camera.up.copy(WORLD_UP)
    camera.lookAt(look)
    camera.updateMatrixWorld()
  }

  function resize(w: number, h: number) {
    width = Math.max(1, w)
    height = Math.max(1, h)
    camera.aspect = width / height
    aspect = camera.aspect
    camera.updateProjectionMatrix()
  }

  function reset() {
    idleT = 0
    drift = 0
    refitOk = true
    const homeT = Math.round(rig.theta / TAU) * TAU + homeTheta
    const t = new Spring(rig.theta, homeT, 70, 13)
    const p = new Spring(rig.phi, homePhi, 70, 13)
    const r = new Spring(rig.radius, rig.homeRadius, 70, 13)
    t.v = vTheta
    p.v = vPhi
    returning = { t, p, r }
    vTheta = vPhi = vLogR = 0
  }

  function setHomeRadius(r: number) {
    if (!(r > 0)) return
    const ratio = rig.homeRadius > 0 ? rig.radius / rig.homeRadius : 1
    rig.homeRadius = r
    rig.radius = clamp(r * ratio, minR(), maxR())
    if (returning) returning.r.target = r
  }

  function setHome(home: { theta?: number; phi?: number; radius?: number }, apply = true) {
    if (home.theta !== undefined) homeTheta = home.theta
    if (home.phi !== undefined) homePhi = clamp(home.phi, PHI_MIN, PHI_MAX)
    if (home.radius !== undefined && home.radius > 0) rig.homeRadius = home.radius
    if (apply) {
      rig.theta = homeTheta
      rig.phi = homePhi
      rig.radius = clamp(rig.homeRadius, minR(), maxR())
      returning = undefined
      vTheta = vPhi = vLogR = 0
    }
  }

  function fitSphere(center: { x: number; y: number; z: number }, radius: number, margin = 1.06): number {
    const halfV = (FOV * Math.PI) / 360
    const halfH = Math.atan(Math.tan(halfV) * aspect)
    const bound = (Math.hypot(center.x, center.y, center.z) + radius) * margin
    const r = bound / Math.sin(Math.min(halfV, halfH))
    setHomeRadius(r)
    return r
  }

  function fitDisc(points: Iterable<{ x: number; y: number; z: number }>, padH: number, padV: number, immediate = false): number {
    const r = discFitDistance(points, homePhi, aspect, padH, padV)
    if (!(r > 0)) return fitTarget
    fitTarget = r
    if (immediate) setHomeRadius(r)
    return r
  }

  const tmpA = new Vector3()
  const tmpB = new Vector3()
  function rayFromNDC(nx: number, ny: number, origin: Vector3, dir: Vector3) {
    origin.copy(camera.position)
    dir.set(nx, ny, 0.5).unproject(camera).sub(origin).normalize()
  }

  const rayO = new Vector3()
  const rayD = new Vector3()
  function pointerWorldOnPlane(planePoint: Vector3, normal?: Vector3, out: Vector3 = new Vector3()): Vector3 | null {
    rayFromNDC(pointerNDC.x, pointerNDC.y, rayO, rayD)
    // default normal: the camera's backward axis (the plane faces the camera)
    const n = normal ?? tmpA.setFromMatrixColumn(camera.matrixWorld, 2)
    const denom = n.dot(rayD)
    if (Math.abs(denom) < 1e-6) return null
    const t = tmpB.copy(planePoint).sub(rayO).dot(n) / denom
    if (t < 0) return null
    return out.copy(rayO).addScaledVector(rayD, t)
  }

  const scratch = new Vector3()
  function project(v: Vector3, out: Projected = { x: 0, y: 0, z: 0, visible: false }): Projected {
    scratch.copy(v).project(camera)
    out.x = (scratch.x * 0.5 + 0.5) * width
    out.y = (-scratch.y * 0.5 + 0.5) * height
    out.z = scratch.z
    out.visible = scratch.z > -1 && scratch.z < 1
    return out
  }

  function dispose() {
    canvas.removeEventListener('pointerdown', onDown)
    canvas.removeEventListener('pointermove', onMove)
    canvas.removeEventListener('pointerup', onUp)
    canvas.removeEventListener('pointercancel', onUp)
    canvas.removeEventListener('pointerleave', onLeave)
    canvas.removeEventListener('wheel', onWheel)
    canvas.removeEventListener('dblclick', onDblClick)
    canvas.removeEventListener('keydown', onKey)
    pointers.clear()
  }

  return rig
}
