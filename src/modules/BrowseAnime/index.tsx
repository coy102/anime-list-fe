import { useEffect } from 'react'

import { useGetAnimeListLazyQuery } from '~/gqlcodegen/hooks/anime'

const BrowseAnime = () => {
  const [getAnimeQuery] = useGetAnimeListLazyQuery()

  useEffect(() => {
    getAnimeQuery()
  }, [])

  return <>Browseanime</>
}

export default BrowseAnime
