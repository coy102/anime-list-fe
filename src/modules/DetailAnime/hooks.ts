import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { AnimeDetailQuery, useAnimeDetailLazyQuery } from '~/gqlcodegen/hooks/anime'
import { MediaType } from '~/gqlcodegen/types'

const useCustom = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [anime, setAnime] = useState<AnimeDetailQuery['animeDetail']>(null)

  const [animeDetailLazyQuery, { loading }] = useAnimeDetailLazyQuery({
    fetchPolicy: 'no-cache',
  })

  const handleLoadAnimeDetail = useCallback(async () => {
    const id = parseInt(params?.id as any)
    const typeParam = params?.type?.toUpperCase() || null

    const { data } = await animeDetailLazyQuery({
      variables: {
        id,
        type: typeParam as MediaType,
        isAdult: false,
      },
    })

    if (!data) {
      navigate('/404')
      return
    }

    setAnime(data.animeDetail)
  }, [params])

  useEffect(() => {
    handleLoadAnimeDetail()
  }, [params])

  return {
    data: {
      anime,
      loading,
    },
  }
}

export default useCustom
