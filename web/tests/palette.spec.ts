import { expect, test } from 'bun:test'
import { readFileSync } from 'node:fs'
import { DEFAULT_AGENTS } from '../shared/defaults'
import { ICON_COLOR } from '../shared/palette'
import type { RGB } from '../shared/palette'

const hex = (h: string): RGB => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)) as RGB

/** The pane renderer (hooks/mini.ts) keeps the same palette as hex strings; read it back out of the source. */
const miniPalette = (): Record<string, string> => {
  const src = readFileSync(new URL('../../hooks/mini.ts', import.meta.url), 'utf8')
  const block = /const COLOR: Record<IconKind, string> = \{([^}]*)\}/.exec(src)
  if (!block) throw new Error('COLOR block not found in hooks/mini.ts')
  return Object.fromEntries([...block[1].matchAll(/(\w+):\s*'(#[0-9a-fA-F]{6})'/g)].map(m => [m[1], m[2]]))
}

test('palette has the 13 icons and matches the hex palette in hooks/mini.ts', () => {
  const mini = miniPalette()
  expect(Object.keys(ICON_COLOR).sort()).toEqual(Object.keys(mini).sort())
  expect(Object.keys(ICON_COLOR)).toHaveLength(13)
  for (const [icon, rgb] of Object.entries(ICON_COLOR)) expect(rgb).toEqual(hex(mini[icon]))
})

test('default agents use their icon colour (as a copy) and are the 13 demo agents', () => {
  expect(DEFAULT_AGENTS).toHaveLength(13)
  expect(new Set(DEFAULT_AGENTS.map(a => a.id)).size).toBe(13)
  for (const a of DEFAULT_AGENTS) {
    expect(a.color).toEqual(ICON_COLOR[a.icon])
    expect(a.color).not.toBe(ICON_COLOR[a.icon])
  }
})
