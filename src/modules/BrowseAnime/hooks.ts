import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { AnimeListQuery, useAnimeListLazyQuery } from '~/gqlcodegen/hooks/anime'
import { useCollectionsStore } from '~/stores/collections'
import { debounce, isEmpty } from '~/utils/not-lodash'

import { defaultFilterAnimeList } from './helper'

const useCustom = () => {
  const pageRef = useRef(1)

  const [filter] = useState(defaultFilterAnimeList)

  const { handleToggleSelectionDialog } = useCollectionsStore()

  const [animeListLazyQuery, { data, fetchMore, loading }] = useAnimeListLazyQuery({
    notifyOnNetworkStatusChange: true,
  })

  const handeLoadMore = useCallback(() => {
    if (!isEmpty(fetchMore)) {
      pageRef.current += 1

      fetchMore({
        variables: {
          ...defaultFilterAnimeList,
          page: pageRef.current,
        },
        updateQuery(previousQueryResult, { fetchMoreResult }) {
          // when new result is undefined, return previous result
          if (!fetchMoreResult) return previousQueryResult

          // Merge previos result with new result
          const result: AnimeListQuery = {
            animeList: {
              items: [
                ...(previousQueryResult?.animeList?.items as any),
                ...(fetchMoreResult.animeList?.items as any),
              ],
              pageInfo: fetchMoreResult?.animeList?.pageInfo as any,
            },
          }

          return result
        },
      })
    }
  }, [fetchMore])

  const anime = useMemo(() => data?.animeList, [data])

  // handle fetch more anime
  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      handeLoadMore()
    }
  }, 500)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    animeListLazyQuery({
      variables: filter,
    })
  }, [filter])

  return {
    store: {
      handleToggleSelectionDialog,
    },
    data: {
      anime,
      loading,
    },
  }
}

export default useCustom
