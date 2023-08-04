import { useMemo } from 'react'

import { useParams } from 'react-router'

import { useCollectionsStore } from '~/stores/collections'

const useCustom = () => {
  const store = useCollectionsStore()
  const params = useParams()

  const collection = useMemo(
    () => store.collections.find((f) => f.id === params.id),
    [params, store.collections],
  )

  return {
    store,
    data: {
      collection,
    },
  }
}

export default useCustom
