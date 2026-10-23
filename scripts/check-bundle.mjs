// Guards the lazy 3D bundle (web/eagle-eye-3d.js). It is loaded by a plain <script> tag, also from file://, so it
// must be ASCII only, must not load anything at run time and must stay small.
//
//   node scripts/check-bundle.mjs [path]
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const file = resolve(process.argv[2] ?? resolve(dirname(fileURLToPath(import.meta.url)), '..', 'web', 'eagle-eye-3d.js'))
const MAX_BYTES = 1024 * 1024
const FORBIDDEN = [
  ['import(', /\bimport\s*\(/],
  ['fetch(', /\bfetch\s*\(/],
  ['eval(', /\beval\s*\(/],
  ['new Function', /new\s+Function\b/],
  ['XMLHttpRequest', /XMLHttpRequest/],
  ['new Worker', /new\s+Worker\b/],
]

const buf = readFileSync(file)
const problems = []
if (buf.length > MAX_BYTES) problems.push(`size ${buf.length} bytes is over ${MAX_BYTES}`)
let bad = 0
let firstBad = -1
for (let i = 0; i < buf.length; i++) {
  if (buf[i] > 127) {
    bad++
    if (firstBad < 0) firstBad = i
  }
}
if (bad) problems.push(`${bad} non-ASCII bytes, the first at offset ${firstBad}`)
const text = buf.toString('latin1')
for (const [name, re] of FORBIDDEN) {
  const m = re.exec(text)
  if (m) problems.push(`contains ${name} (offset ${m.index}: ${JSON.stringify(text.slice(Math.max(0, m.index - 30), m.index + 40))})`)
}

if (problems.length) {
  console.error(`check:bundle FAILED for ${file}`)
  for (const p of problems) console.error('  - ' + p)
  process.exit(1)
}
console.log(`check:bundle ok: ${file} (${(buf.length / 1024).toFixed(0)} KB, ASCII, no dynamic loading)`)
