import { initialAnimeListResponseData } from './dummy/animeData'

export const mockedAnimeListLazyQuery = jest.fn()

export const mockedUseAnimeListLazyQuery = jest
  .fn()
  .mockImplementation(() => [mockedAnimeListLazyQuery, initialAnimeListResponseData])
