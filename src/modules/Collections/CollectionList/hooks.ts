import { useCollectionsStore } from '~/stores/collections'

const useCustom = () => {
  const {
    collections,
    deleteDialog,
    handleToggleDeleteCollectionDialog,
    handleDeleteCollection,
    handleToggleManageDialog,
  } = useCollectionsStore()

  return {
    store: {
      collections,
      deleteDialog,
      handleDeleteCollection,
      handleToggleDeleteCollectionDialog,
      handleToggleManageDialog,
    },
  }
}

export default useCustom
