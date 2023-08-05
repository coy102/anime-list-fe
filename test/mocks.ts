import {
  mockedAnimeListLazyQuery,
  mockedFetchMore,
  useAnimeListLazyQuery,
  mockedAnimeDetailLazyQuery,
  useAnimeDetailLazyQuery,
} from '~/mocks/gqlcodegen/anime'
import { mockedUseNavigate, mockedUseParams } from '~/mocks/react-router-dom'
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

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: mockedUseParams,
  useNavigate: () => mockedUseNavigate,
}))

jest.mock('~/utils/localStorage', () => ({
  load: mockedLoadLS,
  remove: mockedRemoveLS,
  set: mockedSetLS,
}))

jest.mock('~/gqlcodegen/hooks/anime', () => ({
  useAnimeListLazyQuery,
  useAnimeDetailLazyQuery,
}))

export {
  mockedAnimeDetailLazyQuery,
  mockedAnimeListLazyQuery,
  mockedDarken,
  mockedDefaultTinyColor,
  mockedFetchMore,
  mockedGenerateAutoColor,
  mockedGetBrightness,
  mockedLighten,
  mockedLoadLS,
  mockedRemoveLS,
  mockedSetLS,
  mockedToHexString,
  mockLocalStorageValue,
  useAnimeDetailLazyQuery,
  useAnimeListLazyQuery,
  mockedUseParams,
  mockedUseNavigate,
}
