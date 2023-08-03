import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { AnimeDetailQuery, useAnimeDetailLazyQuery } from '~/gqlcodegen/hooks/anime'

const useCustom = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [anime, setAnime] = useState<AnimeDetailQuery['animeDetail']>(null)

  const [animeDetailLazyQuery, { loading }] = useAnimeDetailLazyQuery({
    fetchPolicy: 'cache-and-network',
  })

  const handleLoadAnimeDetail = useCallback(async () => {
    const id = parseInt(params?.id as any)

    const { data } = await animeDetailLazyQuery({
      variables: {
        id,
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
