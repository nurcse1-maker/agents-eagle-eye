import { expect, test } from 'bun:test'
import { fmtTime, fmtTokens } from '../shared/format'

test('fmtTokens: plain, K and M', () => {
  expect(fmtTokens(0)).toBe('0')
  expect(fmtTokens(999)).toBe('999')
  expect(fmtTokens(999.9)).toBe('999')
  expect(fmtTokens(1000)).toBe('1K')
  expect(fmtTokens(312000)).toBe('312K')
  expect(fmtTokens(999999)).toBe('999K')
  expect(fmtTokens(1e6)).toBe('1.00M')
  expect(fmtTokens(1_234_567)).toBe('1.23M')
})

test('fmtTime: m:ss and h:mm:ss', () => {
  expect(fmtTime(0)).toBe('0:00')
  expect(fmtTime(9.9)).toBe('0:09')
  expect(fmtTime(501)).toBe('8:21')
  expect(fmtTime(3599)).toBe('59:59')
  expect(fmtTime(3600)).toBe('1:00:00')
  expect(fmtTime(3725)).toBe('1:02:05')
})
