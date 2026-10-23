import { expect, test } from 'bun:test'
import { failFallback, paneChanged, parseHash, resolveView } from '../view-switch'

const base = { webgl2: true }

test('hash wins over pane, storage and default', () => {
  expect(resolveView({ ...base, hash: '#3d', view: '2d', viewSeq: 5, lastSeq: 1, stored: '2d' })).toBe('3d')
  expect(resolveView({ ...base, hash: '#2d', view: '3d', viewSeq: 5, lastSeq: 1, stored: '3d' })).toBe('2d')
  expect(resolveView({ ...base, hash: '#3D' })).toBe('3d')
})

test('pane applies only when viewSeq changed', () => {
  expect(resolveView({ ...base, view: '3d', viewSeq: 2, lastSeq: 1, stored: '2d' })).toBe('3d')
  expect(resolveView({ ...base, view: '3d', viewSeq: 2, lastSeq: 2, stored: '2d' })).toBe('2d')
  expect(resolveView({ ...base, view: '2d', viewSeq: 3, lastSeq: undefined, stored: '3d' })).toBe('2d')
  expect(resolveView({ ...base, view: '3d', viewSeq: 0, lastSeq: undefined, stored: null })).toBe('2d')
})

test('storage then default', () => {
  expect(resolveView({ ...base, stored: '3d' })).toBe('3d')
  expect(resolveView({ ...base, stored: 'bogus' })).toBe('2d')
  expect(resolveView({ ...base, stored: null })).toBe('2d')
  expect(resolveView({ ...base })).toBe('2d')
})

test('invalid hash falls through; invalid pane view falls through', () => {
  expect(resolveView({ ...base, hash: '#foo', stored: '3d' })).toBe('3d')
  expect(resolveView({ ...base, view: 'x', viewSeq: 4, lastSeq: 1, stored: '3d' })).toBe('3d')
})

test('without WebGL2 the result is never 3d', () => {
  const nogl = { webgl2: false }
  expect(resolveView({ ...nogl, hash: '#3d' })).toBe('2d')
  expect(resolveView({ ...nogl, view: '3d', viewSeq: 2, lastSeq: 1 })).toBe('2d')
  expect(resolveView({ ...nogl, stored: '3d' })).toBe('2d')
})

test('helpers', () => {
  expect(parseHash('')).toBeUndefined()
  expect(parseHash(null)).toBeUndefined()
  expect(parseHash('3d')).toBe('3d')
  expect(paneChanged(undefined, 1)).toBe(false)
  expect(paneChanged(1, 1)).toBe(false)
  expect(paneChanged(2, 1)).toBe(true)
  expect(paneChanged(1, undefined)).toBe(true)
})

test('a 3D failure falls back to 2D without persisting it (stored choice and hash stay)', () => {
  expect(failFallback('3d')).toEqual({ view: '2d', persist: false })
  expect(failFallback('2d')).toBeUndefined()
  expect(failFallback(null)).toBeUndefined()
})
