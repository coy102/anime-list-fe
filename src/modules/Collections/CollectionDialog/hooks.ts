import { useCallback } from 'react'

import { useSnackbar } from 'notistack'

import { useCollectionsStore } from '~/stores/collections'

const useCustom = () => {
  const { enqueueSnackbar } = useSnackbar()
  const {
    collections,
    selectionDialog,
    handleToggleSelectionDialog,
    handleAddCollectionItem,
    validateItemUniqueName,
  } = useCollectionsStore()

  const handleClickAddToCollection = useCallback(
    (collectionId) => () => {
      const isUniqueAnime = validateItemUniqueName(collectionId)

      if (isUniqueAnime) {
        handleAddCollectionItem(collectionId)
        return
      }

      enqueueSnackbar(`${selectionDialog.anime?.title} already exist!`, {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      })
    },
    [selectionDialog.anime],
  )

  return {
    store: {
      collections,
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
