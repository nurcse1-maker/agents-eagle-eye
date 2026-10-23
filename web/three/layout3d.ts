/**
 * Portrait design space -> world units. Pure (no three, no DOM), so it is unit tested.
 *
 * World: 1 unit = 1 design px, +Y up, origin at the orchestrator orb. The 2D view puts the orb at the
 * middle of the viewport and every agent at `centre + (design - DESIGN_C) * stretch` (2D L524-545).
 * 3D (Addendum A.1) keeps the 2D ring ORDER and ANGLES but lays them on a horizontal orbital disc (the XZ plane):
 * the design offset from the orb, normalised by the ring half axes (380, 580; shared/ring.ts), gives an angle and a
 * ring factor. The angle maps to the disc (x = cos * Rx, z = sin * Rz; the top of the 2D picture is the far side of
 * the disc), the ring factor picks one of three orbit bands, and a deterministic per-agent height (+/-60) keeps the
 * disc from looking flat-perfect.
 */
import { DESIGN_CX, DESIGN_CY, DESIGN_H, DESIGN_W, ringPlacement } from '../shared/ring'
import type { AgentSpec } from '../shared/defaults'
import { clamp } from './springs'

export const ORB_SCALE = 0.7
export const CENTER_R = 135 * ORB_SCALE // orb radius, 2D L72
/** Agents sit within +/-HEIGHT_RANGE world units above/below the disc plane. */
export const HEIGHT_RANGE = 60

/** Ring half axes of the 2D design (shared/ring.ts ringPlacement: cos * 380, sin * 580). */
const RING_AX = 380
const RING_AY = 580

/** Agent orbit bands (world units along x before the aspect factor): inner, middle, outer. */
export const DISC_BANDS: readonly number[] = [430, 590, 750]
/** Ring factor thresholds between the bands. ringPlacement gives 0.8 / 1.0 for n > 8 and 0.94 for n <= 8. */
export const BAND_SPLIT: readonly number[] = [0.86, 1.06]
/** Every dashed orbit guide: one decorative ring inside, one per agent band, one decorative ring outside. */
export const DISC_GUIDES: readonly number[] = [270, 430, 590, 750, 910]
/** z radius / x radius of every orbit: the disc is a slightly flattened ellipse (on top of the perspective). */
export const DISC_SQUASH = 0.9

export interface Layout {
  /** CSS px per design px (2D `S`). */
  S: number
  /** Viewport size in design px (2D `LW`/`LH`). */
  LW: number
  LH: number
  stretchX: number
  stretchY: number
}

/** 2D L524-529. */
export const computeLayout = (w: number, h: number): Layout => {
  const S = Math.max(0.05, Math.min(w / DESIGN_W, h / DESIGN_H))
  const LW = w / S
  const LH = h / S
  return {
    S,
    LW,
    LH,
    stretchX: clamp(LW / DESIGN_W, 1, 1.7),
    stretchY: clamp(LH / DESIGN_H, 1, 1.7),
  }
}

/** Design px -> world XY (y flipped so up is +Y). 2D L533-534 relative to the viewport centre. Kept for 2D parity checks. */
export const designToWorld = (x: number, y: number, l: Layout): { x: number; y: number } => ({
  x: (x - DESIGN_CX) * l.stretchX,
  y: -(y - DESIGN_CY) * l.stretchY,
})

/** Disc radii multipliers for a viewport: wider screens get a wider disc (x), z follows with DISC_SQUASH. */
export interface DiscShape {
  kx: number
  kz: number
}

export const discShape = (l: Layout): DiscShape => {
  const kx = clamp(0.62 + 0.25 * (l.LW / Math.max(1, l.LH)), 0.8, 1.1)
  return { kx, kz: kx * DISC_SQUASH }
}

/** Orbit band (0 inner, 1 middle, 2 outer) for a 2D ring factor. */
export const bandFor = (ring: number): number => (ring < BAND_SPLIT[0] ? 0 : ring < BAND_SPLIT[1] ? 1 : 2)

/** FNV-1a 32-bit hash of a string. */
export const hashId = (id: string): number => {
  let h = 0x811c9dc5
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return h >>> 0
}

/** Deterministic 0..1 for an id (a second avalanche round so near-identical ids like a1, a2 spread out). */
const unitFor = (id: string): number => {
  let h = hashId(id)
  h = Math.imul(h ^ (h >>> 16), 0x85ebca6b)
  h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35)
  h = (h ^ (h >>> 16)) >>> 0
  return h / 4294967296
}

/** Deterministic height above the disc for an agent id, in [-HEIGHT_RANGE, HEIGHT_RANGE). Stable across sessions and roster changes. */
export const heightFor = (id: string): number => unitFor(id) * 2 * HEIGHT_RANGE - HEIGHT_RANGE

/** Angle (radians, 2D screen sense: y down) and ring factor of a design position around the orb. */
export const ringCoords = (x: number, y: number): { angle: number; ring: number } => {
  const nx = (x - DESIGN_CX) / RING_AX
  const ny = (y - DESIGN_CY) / RING_AY
  return { angle: Math.atan2(ny, nx), ring: Math.hypot(nx, ny) }
}

/**
 * The home position of agent `index` of `n` on the orbital disc. Uses the spec's design position (its angle and
 * ring factor around the orb), falling back to the ring slot when the spec has none.
 */
export const homeFor = (spec: AgentSpec, l: Layout, index: number, n: number): { x: number; y: number; z: number } => {
  let { x, y } = spec
  if (!Number.isFinite(x) || !Number.isFinite(y)) {
    const slot = ringPlacement(index, n, spec.status)
    x = slot.x
    y = slot.y
  }
  const { angle, ring } = ringCoords(x, y)
  const R = DISC_BANDS[bandFor(ring)]
  const k = discShape(l)
  // 2D y grows downward: the top of the picture (sin < 0) becomes the far side of the disc (z < 0, away from the camera)
  return { x: Math.cos(angle) * R * k.kx, y: heightFor(spec.id), z: Math.sin(angle) * R * k.kz }
}

/** Camera distance at which the whole portrait design (plus a margin) fits the viewport height (the old head-on view). */
export const fitRadius = (l: Layout, fovDeg: number, margin = 1.04): number =>
  ((l.LH / 2) * margin) / Math.tan((fovDeg * Math.PI) / 360)

/**
 * Camera distance at which the outer orbit guide (plus planets and their labels) fits the viewport when the camera
 * looks down on the disc at `elevDeg` (Addendum A.2). Approximate: the near rim is pulled in by perspective, so the
 * near half of the disc is added to the distance.
 */
export const discFitRadius = (l: Layout, fovDeg: number, elevDeg = 32, margin = 1.08): number => {
  const k = discShape(l)
  const outer = DISC_GUIDES[DISC_GUIDES.length - 1]
  const rx = outer * k.kx
  const rz = outer * k.kz
  const e = (elevDeg * Math.PI) / 180
  const halfV = (fovDeg * Math.PI) / 360
  const halfH = Math.atan(Math.tan(halfV) * (l.LW / Math.max(1, l.LH)))
  const halfWidth = rx * margin
  const halfHeight = (rz * Math.sin(e) + (HEIGHT_RANGE + 120) * Math.cos(e)) * margin
  return Math.max(halfWidth / Math.tan(halfH), halfHeight / Math.tan(halfV)) + rz * Math.cos(e) * 0.5
}
