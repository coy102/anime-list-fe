export const mockedAnimeListLazyQuery = jest.fn()
export const mockedAnimeDetailLazyQuery = jest.fn()

export const mockedFetchMore = jest.fn()

export const useAnimeListLazyQuery = jest
  .fn()
  .mockImplementation(() => [mockedAnimeListLazyQuery, undefined])

export const useAnimeDetailLazyQuery = jest
  .fn()
  .mockImplementation(() => [mockedAnimeDetailLazyQuery, undefined])
