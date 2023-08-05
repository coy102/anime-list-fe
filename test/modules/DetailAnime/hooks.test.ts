import { renderHook } from '@testing-library/react'

import useCustom from '~/modules/DetailAnime/hooks'
import {
  mockedAnimeDetailLazyQuery,
  mockedUseNavigate,
  mockedUseParams,
  useAnimeDetailLazyQuery,
} from '~/test/mocks'

import * as dummy from './dummy'

describe('~/modules/DetailAnime/hooks', () => {
  afterEach(jest.clearAllMocks)

  const animeId = 101922

  it('should render loading at the first time', () => {
    useAnimeDetailLazyQuery.mockImplementation(() => [
      mockedAnimeDetailLazyQuery,
      {
        loading: true,
        data: undefined,
      },
    ])

    mockedUseParams.mockReturnValue({
      id: animeId,
      type: 'anime',
    })

    const { result } = renderHook(() => useCustom())

    expect(mockedAnimeDetailLazyQuery).toHaveBeenCalled()
    expect(mockedAnimeDetailLazyQuery).toHaveBeenCalledWith({
      variables: {
        id: animeId,
        type: 'ANIME',
        isAdult: false,
      },
    })

    expect(result.current.data).toEqual({
      anime: undefined,
      loading: true,
    })
  })

  it('should render detail with detail data', () => {
    useAnimeDetailLazyQuery.mockImplementation(() => [
      mockedAnimeDetailLazyQuery,
      dummy.responseData,
    ])

    mockedUseParams.mockReturnValue({
      id: animeId,
      type: 'anime',
    })

    const { result } = renderHook(() => useCustom())

    expect(mockedAnimeDetailLazyQuery).toHaveBeenCalled()
    expect(mockedAnimeDetailLazyQuery).toHaveBeenCalledWith({
      variables: {
        id: animeId,
        type: 'ANIME',
        isAdult: false,
      },
    })

    expect(result.current.data).toEqual({
      anime: dummy.responseData.data.animeDetail,
      loading: false,
    })
  })

  it('should redirect to 404, anime data is not found', () => {
    useAnimeDetailLazyQuery.mockImplementation(() => [
      mockedAnimeDetailLazyQuery,
      {
        loading: false,
        data: undefined,
        error: dummy.responseError,
      },
    ])

    mockedUseParams.mockReturnValue({
      id: '123',
      type: 'anime',
    })

    const { result } = renderHook(() => useCustom())

    expect(mockedAnimeDetailLazyQuery).toHaveBeenCalled()
    expect(mockedAnimeDetailLazyQuery).toHaveBeenCalledWith({
      variables: {
        id: 123,
        type: 'ANIME',
        isAdult: false,
      },
    })
    expect(mockedUseNavigate).toHaveBeenCalledWith('/404')

    expect(result.current.data).toEqual({
      anime: undefined,
      loading: false,
    })
  })
})
