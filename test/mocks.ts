import { mockedAnimeListLazyQuery, mockedUseAnimeListLazyQuery } from '~/mocks/gqlcodegen/anime'
import {
  mockedDefaultTinyColor,
  mockedDarken,
  mockedGetBrightness,
  mockedLighten,
  mockedToHexString,
} from '~/mocks/tinyColor2'
import { mockedGenerateAutoColor } from '~/mocks/utils/colorUtil'
import {
  mockedLoadLS,
  mockedRemoveLS,
  mockedSetLS,
  mockLocalStorageValue,
} from '~/mocks/utils/localStorage'

jest.mock('tinycolor2', () => ({
  __esModule: true,
  default: mockedDefaultTinyColor,
}))

jest.mock('~/utils/localStorage', () => ({
  load: mockedLoadLS,
  remove: mockedRemoveLS,
  set: mockedSetLS,
}))

jest.mock('~/gqlcodegen/hooks/anime', () => ({
  ...jest.requireActual('~/gqlcodegen/hooks/anime'),
  useAnimeListLazyQuery: mockedUseAnimeListLazyQuery,
}))

export {
  mockedLoadLS,
  mockedRemoveLS,
  mockedSetLS,
  mockLocalStorageValue,
  mockedDefaultTinyColor,
  mockedDarken,
  mockedGetBrightness,
  mockedLighten,
  mockedToHexString,
  mockedGenerateAutoColor,
  mockedAnimeListLazyQuery,
  mockedUseAnimeListLazyQuery,
}
