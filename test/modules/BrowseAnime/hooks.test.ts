import { renderHook } from '@testing-library/react'

import { MediaSort } from '~/gqlcodegen/types'
import useCustom from '~/modules/BrowseAnime/hooks'
import { mockedAnimeListLazyQuery, mockedFetchMore, useAnimeListLazyQuery } from '~/test/mocks'

import { initialAnimeListResponseData, moreData } from './dummy'

describe('~/modules/BrowseAnime/hooks', () => {
  afterEach(jest.clearAllMocks)

  it('should initialize load hooks', async () => {
    useAnimeListLazyQuery.mockImplementation(() => [
      mockedAnimeListLazyQuery,
      {
        ...initialAnimeListResponseData,
        fetchMore: mockedFetchMore,
      },
    ])

    const { result } = renderHook(() => useCustom())

    const state = result.current

    expect(mockedAnimeListLazyQuery).toHaveBeenCalled()
    expect(mockedAnimeListLazyQuery).toHaveBeenCalledWith({
      variables: {
        page: 1,
        perPage: 10,
        search: null,
        sort: MediaSort.PopularityDesc,
      },
    })

    expect(state.data).toEqual({
      anime: initialAnimeListResponseData.data.animeList,
      loading: false,
    })
  })

  it('should load more data', async () => {
    useAnimeListLazyQuery.mockImplementation(() => [
      mockedAnimeListLazyQuery,
      {
        ...moreData,
        fetchMore: mockedFetchMore,
      },
    ])

    const { result } = renderHook(() => useCustom())

    const state = result.current

    // Set inner heigt to trigger scroll
    global.innerHeight = 800
    global.document.documentElement.scrollTop = 400
    Object.defineProperty(global.document.documentElement, 'offsetHeight', {
      value: 1200,
    })

    // Manually trigger the 'scroll' event
    const event = new Event('scroll')
    global.dispatchEvent(event)

    await new Promise((resolve) => setTimeout(resolve, 600))

    expect(state.data).toEqual({
      anime: moreData.data.animeList,
      loading: false,
    })
    expect(mockedFetchMore).toHaveBeenCalled()
    expect(mockedFetchMore).toHaveBeenCalledWith({
      variables: {
        page: 2,
        perPage: 10,
        search: null,
        sort: MediaSort.PopularityDesc,
      },
      updateQuery: expect.any(Function),
    })
  })
})
