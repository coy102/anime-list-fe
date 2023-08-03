import { useCollectionsStore } from '~/stores/collections'

const useCustom = () => {
  const {
    collections,
    deleteDialog,
    handleToggleDeleteDialog,
    handleDeleteCollection,
    handleToggleManageDialog,
  } = useCollectionsStore()

  return {
    store: {
      collections,
      deleteDialog,
      handleDeleteCollection,
      handleToggleDeleteDialog,
      handleToggleManageDialog,
    },
  }
}

export default useCustom
