import { useCallback, useEffect, useState } from 'react'

import { AnimeListQuery, useAnimeListLazyQuery } from '~/gqlcodegen/hooks/anime'

import { defaultFilterAnimeList } from './helper'

const useCustom = () => {
  const [filter, setFilter] = useState(defaultFilterAnimeList)
  const [anime, setAnime] = useState<AnimeListQuery['animeList']>({
    items: [],
    pageInfo: {},
  })

  const [animeListLazyQuery, { networkStatus }] = useAnimeListLazyQuery({
    fetchPolicy: 'cache-first',
  })

  const handleLoadAnimeList = useCallback(async () => {
    const { data } = await animeListLazyQuery({
      variables: filter,
    })

    if (data) {
      setAnime((prev) => ({
        ...prev,
        items: [...(prev?.items || []), ...(data?.animeList?.items || [])],
      }))
    }
  }, [filter])

  const handeLoadMore = useCallback(() => {
    setFilter((prev) => ({
      ...prev,
      page: prev.page + 1,
    }))
  }, [])

  useEffect(() => {
    handleLoadAnimeList()
  }, [filter])

  return {
    data: {
      anime,
      networkStatus,
    },
    methods: {
      handeLoadMore,
    },
  }
}

export default useCustom
