import { useCollectionsStore } from '~/stores/collections'

const useCustom = () => {
  const { collections, deleteDialog, handleToggleDeleteDialog, handleDeleteCollection } =
    useCollectionsStore()

  return {
    store: {
      collections,
      deleteDialog,
      handleDeleteCollection,
      handleToggleDeleteDialog,
    },
  }
}

export default useCustom
