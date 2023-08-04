import { useCallback } from 'react'

import { useSnackbar } from 'notistack'

import { useCollectionsStore } from '~/stores/collections'

const useCustom = () => {
  const { enqueueSnackbar } = useSnackbar()
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
