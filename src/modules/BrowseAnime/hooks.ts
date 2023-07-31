import { useCallback, useEffect, useState } from 'react'

import { AnimeListQuery, useAnimeListLazyQuery } from '~/gqlcodegen/hooks/anime'

import { defaultFilterAnimeList } from './helper'

const useCustom = () => {
  const [anime, setAnime] = useState<AnimeListQuery['animeList']>({
    items: [],
    pageInfo: {},
  })
  const [filter] = useState(defaultFilterAnimeList)

  const [animeListLazyQuery, { loading }] = useAnimeListLazyQuery()

  const handleLoadAnimeList = useCallback(async () => {
    const { data } = await animeListLazyQuery({
      fetchPolicy: 'cache-and-network',
      variables: filter,
    })

    if (data) {
      setAnime(data.animeList)
    }
  }, [filter])

  useEffect(() => {
    handleLoadAnimeList()
  }, [filter])

  return {
    data: {
      anime,
      loading,
    },
  }
}

export default useCustom
