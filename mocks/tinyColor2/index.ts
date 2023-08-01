export const mockedGetBrightness = jest.fn()
export const mockedToHexString = jest.fn()

export const mockedLighten = jest.fn().mockImplementation(() => ({
  toHexString: mockedToHexString,
}))

export const mockedDarken = jest.fn().mockImplementation(() => ({
  toHexString: mockedToHexString,
}))

export const mockedDefaultTinyColor = jest.fn().mockImplementation(() => ({
  getBrightness: mockedGetBrightness,
  lighten: mockedLighten,
  darken: mockedDarken,
}))
