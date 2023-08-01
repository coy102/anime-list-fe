import { generateAutoColor, isColorDark } from '~/utils/colorUtil'

import { mockedGetBrightness, mockedToHexString } from '../mocks'

describe('~/utils/colorUtil - isColorDark', () => {
  it('should return true for dark colors', () => {
    mockedGetBrightness.mockReturnValue(82) // treshold return

    const isDark = isColorDark('#4B4A95')

    expect(mockedGetBrightness).toHaveBeenCalled()
    expect(isDark).toBe(true)
  })

  it('should return false for dark colors', () => {
    mockedGetBrightness.mockReturnValue(173) // treshold return

    const isDark = isColorDark('#e4935d')

    expect(mockedGetBrightness).toHaveBeenCalled()
    expect(isDark).toBe(false)
  })
})

describe('~/utils/colorUtil - generateAutoColor', () => {
  it('should return lighten color', () => {
    mockedToHexString.mockReturnValue('#FFF')

    const color = generateAutoColor('#4B4A95')

    expect(mockedToHexString).toHaveBeenCalled()
    expect(color).toBe('#FFF')
  })

  it('should return darken color', () => {
    mockedToHexString.mockReturnValue('#000')

    const color = generateAutoColor('#e4935d')

    expect(mockedToHexString).toHaveBeenCalled()
    expect(color).toBe('#000')
  })
})
