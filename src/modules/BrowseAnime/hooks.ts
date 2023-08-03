import { useCallback, useEffect, useState } from 'react'

import { AnimeListQuery, useAnimeListLazyQuery } from '~/gqlcodegen/hooks/anime'
import { debounce } from '~/utils/not-lodash'

import { defaultFilterAnimeList } from './helper'

const useCustom = () => {
  const [filter, setFilter] = useState(defaultFilterAnimeList)
  const [anime, setAnime] = useState<AnimeListQuery['animeList']>({
    items: [],
    pageInfo: {},
  })

  const [animeListLazyQuery, { loading }] = useAnimeListLazyQuery()

  const handleLoadAnimeList = useCallback(async () => {
    const { data } = await animeListLazyQuery({
      variables: filter,
    })

    if (!data) return

    const response = data.animeList

    if (response?.pageInfo?.currentPage === 1) {
      setAnime(response)
      return
    }

    setAnime((prev) => ({
      pageInfo: response?.pageInfo || {},
      items: [...(prev?.items || []), ...(response?.items || [])],
    }))
  }, [filter])

  const handeLoadMore = useCallback(() => {
    setFilter((prev) => ({
      ...prev,
      page: prev.page + 1,
    }))
  }, [])

  // handle fetch more anime
  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      handeLoadMore()
    }
  }, 500)

  useEffect(() => {
    handleLoadAnimeList()
  }, [filter])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    if (anime?.items?.length === 0) {
      handleLoadAnimeList()
      return
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [filter])

  return {
    data: {
      anime,
      loading,
    },
    methods: {
      handeLoadMore,
    },
  }
}

export default useCustom
