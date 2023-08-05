import { useCallback } from 'react'

import { useCollectionsStore } from '~/stores/collections'

const useCustom = () => {
  const {
    collections,
    handleAddCollectionItem,
    handleToggleManageDialog,
    handleToggleSelectionDialog,
    selectionDialog,
    validateItemUniqueName,
  } = useCollectionsStore()

  const handleClickAddToCollection = useCallback(
    (collectionId) => () => {
      const isUniqueAnime = validateItemUniqueName(collectionId)

      if (isUniqueAnime) {
        handleAddCollectionItem(collectionId)
        return
      }
    },
    [selectionDialog.anime],
  )

  return {
    store: {
      collections,
      handleToggleManageDialog,
      handleToggleSelectionDialog,
      selectionDialog,
      validateItemUniqueName,
    },
    methods: {
      handleClickAddToCollection,
    },
  }
}

export default useCustom
