import { useCallback, useEffect, useState } from 'react'

import { CHARACTER_ONLY_PATTERN } from '~/config/constants'
import { useCollectionsStore } from '~/stores/collections'
import { isEmpty } from '~/utils/not-lodash'

const useCustom = () => {
  const {
    manageDialog,
    handleAddCollection,
    validateCollectionUniqueName,
    handleToggleManageDialog,
  } = useCollectionsStore()

  const [collectionName, setCollectionName] = useState(manageDialog.collectionName)
  const [error, setError] = useState('')

  const handleSave = useCallback(
    (e) => {
      e.preventDefault()
      const value = collectionName.trim()
      if (isEmpty(value)) {
        setError('Collection name is required!')
        return
      }

      const validCharacter = CHARACTER_ONLY_PATTERN.test(value)
      if (!validCharacter) {
        setError('Please input character only!')
        return
      }

      const emptyCollection = validateCollectionUniqueName(value)
      if (!emptyCollection) {
        setError(`${value} already exist!`)
        return
      }

      handleAddCollection(value)

      // reset value
      setCollectionName('')
    },
    [manageDialog, collectionName],
  )

  const handleChangeInput = useCallback((e) => {
    setCollectionName(e.target.value)

    setTimeout(() => {
      setError('')
    }, 500)
  }, [])

  const handleCloseAndReset = useCallback(() => {
    handleToggleManageDialog()

    setCollectionName('')
    setError('')
  }, [])

  useEffect(() => {
    if (!manageDialog?.isOpen) return

    setCollectionName(manageDialog.collectionName)
  }, [manageDialog])

  return {
    store: {
      manageDialog,
    },
    data: {
      collectionName,
      error,
    },
    methods: {
      handleSave,
      handleChangeInput,
      handleCloseAndReset,
    },
  }
}

export default useCustom
