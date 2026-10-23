/**
 * Light packets riding the strands (2D stepPackets L996-1033, draw L1472-1491).
 * Simulation lives in links-sim.ts; this layer steps it every sub-step, listens for world 'pulseAgent' events
 * (2D pulseAgent L804-813: packets + hit + ripple) and draws head glow, white dot and a 5 step trail as instanced
 * billboards evaluated on the 3D Bezier. One draw call.
 */
import { RENDER_ORDER } from '../layer'
import type { Layer, LayerCtx } from '../layer'
import { GlowSprites } from '../glowsprites'
import { bez3, makePacketColors, packetColors, packetVis, pulsePackets, stepPackets } from '../links-sim'
import type { PacketColors, PacketHooks } from '../links-sim'
import type { AgentState, Vec3 } from '../world'

const CAP = 4096
const TRAIL = 5

export function createPacketsLayer(): Layer {
  let sprites: GlowSprites | undefined
  let off: (() => void) | undefined
  const colors = new Map<AgentState, PacketColors>()
  const tmp = [0, 0, 0]
  const pos: Vec3 = { x: 0, y: 0, z: 0 }
  let hooks: PacketHooks | undefined

  const colorsFor = (a: AgentState) => {
    let c = colors.get(a)
    if (!c) {
      c = makePacketColors()
      colors.set(a, c)
    }
    return c
  }

  return {
    name: 'packets',
    renderOrder: RENDER_ORDER.packets,
    init(ctx: LayerCtx) {
      sprites = new GlowSprites(CAP, RENDER_ORDER.packets, ctx.uniforms, 'packets')
      sprites.attach(ctx.scene)
      hooks = {
        sparkCount: () => ctx.fx.sparks.length,
        spark(x, y, z, vx, vy, vz, life, size, col) {
          pos.x = x
          pos.y = y
          pos.z = z
          ctx.fx.spark(pos, { x: vx, y: vy, z: vz }, life, size, col)
        },
        burst(x, y, z, col, n, speed) {
          pos.x = x
          pos.y = y
          pos.z = z
          ctx.fx.burst(pos, col, n, speed)
        },
        feed(amount) {
          ctx.world.orb.feed = Math.min(1, ctx.world.orb.feed + amount)
        },
      }
      const pulse = (agent: AgentState, n: number) => {
        pulsePackets(agent, n, ctx.rng)
        ctx.fx.ripple({ pos: agent, r0: agent.r, r1: agent.r + 70, life: 1, color: agent.col, width: 2.5 }) // 2D L812
      }
      const offA = ctx.world.on('pulseAgent', ({ agent, n }) => pulse(agent, n))
      // api.pulse (2D L2008-2011): 5 packets to one agent or to all
      const offB = ctx.world.on('pulse', ({ id }) => {
        if (id) {
          const a = ctx.world.agents.get(id)
          if (a) pulse(a, 5)
        } else for (const a of ctx.world.agents.values()) pulse(a, 5)
      })
      off = () => {
        offA()
        offB()
      }
    },
    update(dt, ctx) {
      if (!hooks) return
      for (const a of ctx.world.agents.values()) {
        if (a.grow <= 0.001 && a.packets.length === 0) continue
        const c = colorsFor(a)
        packetColors(a.col, c)
        stepPackets(a, dt, ctx.rng, hooks, c)
      }
    },
    beforeRender(ctx) {
      if (!sprites) return
      sprites.begin()
      for (const a of ctx.world.agents.values()) {
        if (a.grow <= 0.001 || a.packets.length === 0) continue
        const c = colorsFor(a)
        packetColors(a.col, c)
        const vis = packetVis(a.power)
        for (let i = 0; i < a.packets.length; i++) {
          const k = a.packets[i]
          if (k.t > a.grow + 0.02) continue // 2D L1475
          const col = k.dir > 0 ? c.out : c.inn
          const pts = a.strands[k.si].pts
          for (let q = TRAIL; q >= 1; q--) {
            const tt = Math.min(1, Math.max(0, k.t - k.dir * q * 0.012))
            bez3(pts, tt, tmp)
            sprites.add(tmp[0], tmp[1], tmp[2], 5 * k.size * (1 - q * 0.12), col[0], col[1], col[2], (0.5 - q * 0.08) * vis)
          }
          bez3(pts, Math.min(1, Math.max(0, k.t)), tmp)
          sprites.add(tmp[0], tmp[1], tmp[2], 14 * k.size, col[0], col[1], col[2], 0.75 * vis)
          sprites.add(tmp[0], tmp[1], tmp[2], -1.7 * k.size, 255, 255, 255, vis)
        }
      }
      sprites.end()
    },
    dispose() {
      off?.()
      off = undefined
      sprites?.dispose()
      sprites = undefined
      colors.clear()
    },
  }
}
