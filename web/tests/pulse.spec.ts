import { describe, expect, test } from 'bun:test'
import { Scene, Vector2 } from 'three'
import { DEFAULT_AGENTS } from '../shared/defaults'
import { seeded } from '../shared/rng'
import { createFx } from '../three/fx'
import { createPacketsLayer } from '../three/layers/packets'
import type { LayerCtx } from '../three/layer'
import { AgentWorld } from '../three/world'
import { FOV } from '../three/camera'
import { bloomActive } from '../three/bloom'
import { modelTitleBox } from '../three/labels-logic'

const setup = () => {
  const world = new AgentWorld()
  world.setAgents(DEFAULT_AGENTS.map(s => ({ ...s, color: [...s.color] as [number, number, number] })))
  const rng = seeded(3)
  const fx = createFx(world, () => 1, rng)
  const uniforms = {
    time: { value: 0 },
    ft: { value: 0 },
    motion: { value: 1 },
    pointer: { value: new Vector2() },
    orbit: { value: new Vector2() },
    tier: { value: 1 },
    dpr: { value: 1 },
    resolution: { value: new Vector2(800, 600) },
  }
  const ctx = { scene: new Scene(), world, fx, rng, uniforms } as unknown as LayerCtx
  const layer = createPacketsLayer()
  layer.init(ctx)
  return { world, fx, layer }
}

describe('pulse wiring: exactly one set of packets per click', () => {
  test('world pulse (orb click) gives every agent 5 packets and one ripple each', () => {
    const { world, fx, layer } = setup()
    world.emit('pulse', {})
    for (const a of world.agents.values()) expect(a.packets.length).toBe(5)
    expect(fx.ripples.length).toBe(world.agents.size)
    layer.dispose()
  })

  test('pulse with an id is one agent only, 5 packets', () => {
    const { world, layer } = setup()
    const first = [...world.agents.values()][0]
    world.emit('pulse', { id: first.id })
    expect(first.packets.length).toBe(5)
    for (const a of [...world.agents.values()].slice(1)) expect(a.packets.length).toBe(0)
    layer.dispose()
  })

  test('agent click (pulseAgent 10) gives that agent exactly 10 packets and one ripple, nobody else', () => {
    const { world, fx, layer } = setup()
    const a = [...world.agents.values()][3]
    world.emit('pulseAgent', { agent: a, n: 10 })
    expect(a.packets.length).toBe(10)
    expect(fx.ripples.length).toBe(1)
    for (const b of world.agents.values()) if (b !== a) expect(b.packets.length).toBe(0)
    layer.dispose()
  })

  test('dispose unsubscribes: no packets after the layer is gone', () => {
    const { world, layer } = setup()
    layer.dispose()
    world.emit('pulse', {})
    for (const a of world.agents.values()) expect(a.packets.length).toBe(0)
  })
})

describe('camera home', () => {
  test('fitSphere bound is the sphere seen at the tighter half angle', () => {
    const half = Math.tan((FOV * Math.PI) / 360)
    const r = 300
    // square view: R sin(fov/2) = bound
    expect(r / Math.sin(Math.atan(half))).toBeGreaterThan(r / half)
  })
})

test('bloom runs only at tier 1 with the user toggle on', () => {
  expect(bloomActive(true, 1, true)).toBe(true)
  expect(bloomActive(true, 0, true)).toBe(false)
  expect(bloomActive(false, 1, true)).toBe(false)
  expect(bloomActive(true, 1, false)).toBe(false)
})

test('model title box centres on the anchor and sits the baseline on it', () => {
  const b = modelTitleBox(960, 600, 120, 24, 0.5)
  expect(b.x).toBe(960 - 30)
  expect(b.y).toBe(600 - 12)
})
