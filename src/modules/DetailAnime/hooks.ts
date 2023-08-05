import { useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useAnimeDetailLazyQuery } from '~/gqlcodegen/hooks/anime'
import { MediaType } from '~/gqlcodegen/types'
import { useCollectionsStore } from '~/stores/collections'
import { getHttpCodeError } from '~/utils/error'

const useCustom = () => {
  const params = useParams()
  const navigate = useNavigate()
  const { selectionDialog, handleToggleSelectionDialog } = useCollectionsStore()

  const [animeDetailLazyQuery, responseData] = useAnimeDetailLazyQuery({
    fetchPolicy: 'no-cache',
  })

  const anime = useMemo(() => responseData.data?.animeDetail, [responseData])

  useEffect(() => {
    const id = parseInt(params?.id as any)
    const typeParam = params?.type?.toUpperCase() || null

    animeDetailLazyQuery({
      variables: {
        id,
        type: typeParam as MediaType,
        isAdult: false,
      },
    })
  }, [params])

  useEffect(() => {
    if (getHttpCodeError(responseData.error) === 404) {
      navigate('/404')
    }
  }, [responseData.error])

  return {
    store: {
      selectionDialog,
      handleToggleSelectionDialog,
    },
    data: {
      anime,
      loading: responseData.loading,
    },
  }
}

export default useCustom
