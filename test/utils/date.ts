import { formatTime } from '~/utils/date'

describe('~/utils/date - formatTime', () => {
  it('should returns "1h" for 60 minutes', () => {
    expect(formatTime(60)).toBe('1h')
  })

  it('should returns "24h" for 24 minutes', () => {
    expect(formatTime(24)).toBe('24h')
  })

  it('should returns "1h 30m" for 90 minutes', () => {
    expect(formatTime(90)).toBe('1h 30m')
  })

  it('should returns "0m" for 0 minutes', () => {
    expect(formatTime(0)).toBe('0m')
  })
})
