import { expect, mock, test } from 'claude-code/testing'

import { renderMini, renderMini3D } from '../hooks/mini'
import { demoAgents, demoMain, designStatus, formatDuration, formatTokens, iconFor, prettyModel } from '../hooks/model'

const paneProps = (bodyColumns: number, bodyRows: number) => ({
  title: 'Eagle Eye',
  isFocused: false,
  bodyColumns,
  placement: 'dock' as const,
  scroll: { offset: 0, bodyRows },
  view: {},
})

test('formats tokens, durations and model names', () => {
  expect(formatTokens(423_000)).toBe('423K')
  expect(formatTokens(0)).toBe('0')
  expect(formatDuration(734_000)).toBe('12:14')
  expect(prettyModel('claude-opus-5-5')).toBe('Claude Opus 5.5')
  expect(prettyModel('claude-haiku-4-5-20251001')).toBe('Claude Haiku 4.5')
})

test('agents map onto the design icons and statuses', () => {
  expect(iconFor('Explore', 'Explore the repo')).toBe('search')
  expect(iconFor('Plan', 'Plan the fix')).toBe('doc')
  expect(iconFor('general-purpose', 'Write the README')).toBe('pencil')
  expect(iconFor('custom', 'Query the db')).toBe('database')
  expect(iconFor('claude', 'something else')).toBe('gear')
  expect(designStatus('failed')).toBe('stopped')
  expect(designStatus('thinking')).toBe('thinking')
})

test('a spawned subagent is tracked until its turn completes', async ($, on) => {
  on('agent.spawn', () => ({ model: 'claude-haiku-4-5', agentId: 'a1' }))
  on('turn.complete', () => ({ text: 'done' }))

  await $.agent.spawn({
    prompt: 'map the repo',
    description: 'Explore the repo',
    subagentType: 'Explore',
    parentModel: 'claude-opus-5-5',
    background: false,
    fork: false,
    provider: { kind: 'model' },
  } as never)
  const ui = await $.ui.mount({
    plugin: 'agents-eagle-eye',
    surface: 'desktop',
    component: 'Pane',
    requestId: 'agents-eagle-eye',
    props: paneProps(90, 20),
  })
  expect((await ui.find({ text: 'Explore The Repo' })) !== undefined).toBe(true)
  expect((await ui.find({ text: '● Running  ' })) !== undefined).toBe(true)

  await $.turn.complete({ agentId: 'a1', reason: 'answer', answer: 'ok', durationMs: 10, isAborted: false, turnId: 't1' } as never)
  expect((await ui.find({ text: '● Completed' })) !== undefined).toBe(true)
})

for (const surface of ['terminal', 'desktop'] as const) {
  test(`the status pane draws on the ${surface}`, async $ => {
    const ui = await $.ui.mount({
      plugin: 'agents-eagle-eye',
      surface,
      component: 'Pane',
      requestId: 'agents-eagle-eye',
      props: paneProps(90, 20),
    })
    // The test host has no session id, so the live-view button is left out; the list still draws.
    expect((await ui.find({ text: 'Eagle Eye' })) !== undefined).toBe(true)
    expect(JSON.stringify(await ui.drawn()).includes('could not draw')).toBe(false)
  })
}

const SVG_CAP = 131072

const command = (args: string) => ({
  command: 'agents-eagle-eye',
  args,
  origin: { kind: 'composer' as const },
  presentation: { isFullscreen: true, columns: 120 },
})

test('/agents-eagle-eye 3d and 2d set the view, bump viewSeq and reach the live state', async ($, on) => {
  const writes: Record<string, string> = {}
  let spawned = 0
  mock.clock(on)
  on('command.register', (_, e) => ({ value: { command: e.name } }))
  on('session.start', (_, e) => ({ cwd: e.cwd }))
  on('fs.write', (_, e) => {
    writes[e.path] = e.text
    return { value: undefined }
  })
  on('process.run', () => {
    spawned += 1
    return { value: undefined } as never
  })
  on('session.usage', () => ({ value: { startedAt: 1, context: { window: 200000, tokens: 10 } } }) as never)
  on('session.id', () => ({ value: 'sess-1' }) as never)
  on('session.cwd', () => ({ value: '/work' }) as never)
  on('agent.list', () => ({ value: [] }) as never)
  on('ui.open', () => ({ value: { isPlaced: true } }) as never)
  await $.session.start({ surface: 'terminal', isInteractive: true, cwd: '/work' })

  // The atoms are read back through the state file the page polls.
  const lastState = () => {
    const text = Object.entries(writes).find(([path]) => /[\\/]state\.js$/.test(path))?.[1] ?? ''
    return JSON.parse(text.slice(text.indexOf('(') + 1, text.lastIndexOf(')')))
  }

  const three = await $.command.run(command('3d'))
  expect(three.text).toContain('3D')
  expect(lastState().view).toBe('3d')
  expect(lastState().viewSeq).toBe(1)

  const two = await $.command.run(command('2d'))
  expect(two.text).toContain('2D')
  expect(lastState().view).toBe('2d')
  expect(lastState().viewSeq).toBe(2)

  // A plain open does not touch the choice.
  await $.command.run(command(''))
  expect(lastState().view).toBe('2d')
  expect(lastState().viewSeq).toBe(2)

  // The browser opens once.
  expect(spawned).toBe(1)
  const json = lastState()
  expect(Array.isArray(json.agents)).toBe(true)
})

for (const surface of ['terminal', 'desktop'] as const) {
  test(`the pane has the view button on the ${surface}, and no Svg on the terminal`, async $ => {
    const ui = await $.ui.mount({
      plugin: 'agents-eagle-eye',
      surface,
      component: 'Pane',
      requestId: 'agents-eagle-eye',
      props: paneProps(90, 20),
    })
    const drawn = JSON.stringify(await ui.drawn())
    expect(drawn.includes('could not draw')).toBe(false)
    expect(drawn.includes('switch to 3D')).toBe(true)
    if (surface === 'terminal') expect(drawn.includes('<svg')).toBe(false)
  })
}

test('the pseudo-3D picture stays under the SVG cap and the node limit', () => {
  const now = 1_700_000_000_000
  const agents = demoAgents(now - 60_000, now)
  const main = demoMain(now - 60_000, now, 'claude-opus-5-5')
  const svg = renderMini3D(main, agents, now)
  expect(svg.startsWith('<svg')).toBe(true)
  expect(svg.length).toBeLessThan(SVG_CAP)
  expect(renderMini(main, agents, now).length).toBeLessThan(SVG_CAP)
  const many = Array.from({ length: 30 }, (_, i) => ({ ...agents[i % agents.length]!, id: `x${i}` }))
  const big = renderMini3D(main, many, now)
  expect(big.length).toBeLessThan(SVG_CAP)
  expect((big.match(/<title>/g) ?? []).length).toBeLessThanOrEqual(8)
})
