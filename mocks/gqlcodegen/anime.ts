export const mockedAnimeListLazyQuery = jest.fn()
export const mockedFetchMore = jest.fn()

export const useAnimeListLazyQuery = jest
  .fn()
  .mockImplementation(() => [mockedAnimeListLazyQuery, undefined])
