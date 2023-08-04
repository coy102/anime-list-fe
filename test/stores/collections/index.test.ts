import { act, renderHook } from '@testing-library/react'

import { useCollectionsStore } from '~/stores/collections'

import * as dummy from './dummy'

// Mock dayjs to set persist current date
jest.mock('dayjs', () => {
  const originalDayjs = jest.requireActual('dayjs')
  return (date) => {
    if (date) {
      return originalDayjs(date)
    }
    return originalDayjs(dummy.currentDate)
  }
})

jest.useFakeTimers()

describe('~/stores/collections - useCollectionsStore - anime selection', () => {
  it('should initialize with default state', () => {
    const { result } = renderHook(() => useCollectionsStore())
    const state = result.current

    expect(state.collections).toEqual(dummy.defaultState.collections)
    expect(state.deleteAnimeDialog).toEqual(dummy.defaultState.deleteAnimeDialog)
    expect(state.deleteDialog).toEqual(dummy.defaultState.deleteDialog)
    expect(state.manageDialog).toEqual(dummy.defaultState.manageDialog)
    expect(state.selectionDialog).toEqual(dummy.defaultState.selectionDialog)
  })

  it('should open selection dialog correctly', () => {
    const { result } = renderHook(() => useCollectionsStore())

    act(() => {
      result.current.handleToggleSelectionDialog(dummy.selectionAnimeParam)
    })

    const resultState = result.current

    expect(resultState.selectionDialog.anime).toEqual(dummy.selectionAnimeResult)
    expect(resultState.selectionDialog.isOpen).toBeTruthy()
  })

  it('should open new collection dialog correctly', () => {
    const { result } = renderHook(() => useCollectionsStore())

    act(() => {
      result.current.handleToggleManageDialog()
    })

    const resultState = result.current

    expect(resultState.manageDialog).toEqual({
      collectionId: '',
      collectionName: '',
      isOpen: true,
    })
  })

  it('should created new collection with collection name "My Collection"', async () => {
    const { result } = renderHook(() => useCollectionsStore())

    act(() => {
      result.current.handleAddCollection(dummy.newCollection.name)
    })

    const resultState = result.current
    expect(resultState.collections).toEqual([dummy.newCollection])

    act(() => {
      jest.advanceTimersByTime(300)
    })

    // get new state after running the actions (immer)
    // close the manage dialog after saved
    const afterSaved = result.current

    expect(afterSaved.manageDialog.isOpen).toBeFalsy()
  })

  it('should open manage dialog collection to edit "My Collection"', () => {
    const { result } = renderHook(() => useCollectionsStore())

    act(() => {
      result.current.handleToggleManageDialog(dummy.newCollection)
    })

    const resultState = result.current

    expect(resultState.manageDialog).toEqual({
      collectionId: dummy.newCollection.id,
      collectionName: dummy.newCollection.name,
      isOpen: true,
    })
  })

  it('should edit "My Collection" to "New Collections', async () => {
    const { result } = renderHook(() => useCollectionsStore())

    act(() => {
      result.current.handleAddCollection(dummy.updatedCollection.name)
    })

    const resultState = result.current
    expect(resultState.collections).toEqual([dummy.updatedCollection])

    act(() => {
      jest.advanceTimersByTime(300)
    })

    // get new state after running the actions (immer)
    // close the manage dialog after saved
    const afterSaved = result.current

    expect(afterSaved.manageDialog.isOpen).toBeFalsy()
  })

  it('should insert anime into collections "New Collections" and close the dialog', () => {
    const { result } = renderHook(() => useCollectionsStore())

    act(() => {
      // Insert using collection id
      result.current.handleAddCollectionItem(dummy.updatedCollection.id)
    })

    const resultState = result.current

    expect(resultState.collections).toEqual([dummy.updatedCollectionWithAnime])
  })

  it('should not insert anime into collections "New Collections"', () => {
    const { result } = renderHook(() => useCollectionsStore())

    act(() => {
      // Insert using collection id
      result.current.handleAddCollectionItem(dummy.updatedCollection.id)
    })

    const resultState = result.current

    expect(resultState.collections).toEqual([dummy.updatedCollectionWithAnime])
  })

  it('should run handleToggleSelectionDialog correctly (Close selection collection dialog)', () => {
    const { result } = renderHook(() => useCollectionsStore())

    act(() => {
      result.current.handleToggleSelectionDialog(null)
    })

    const resultState = result.current

    expect(resultState.selectionDialog.isOpen).toBeFalsy()
  })

  it('should return true if saved same collection name', () => {
    const { result } = renderHook(() => useCollectionsStore())

    const isNotExist = result.current.validateCollectionUniqueName(dummy.updatedCollection.name)

    expect(isNotExist).toBeFalsy()
  })

  it('should return false if saved using different name', () => {
    const { result } = renderHook(() => useCollectionsStore())

    const isExist = result.current.validateCollectionUniqueName('Favorite Collections')

    expect(isExist).toBeTruthy()
  })

  it('should return true if the anime is already inside collections', () => {
    const { result } = renderHook(() => useCollectionsStore())

    const isExist = result.current.validateItemUniqueName(dummy.updatedCollection.id)

    expect(isExist).toBeFalsy()
  })

  it('should open alert delete dialog to delete anime from collection', () => {
    const { result } = renderHook(() => useCollectionsStore())

    act(() => {
      result.current.handleToggleDeleteAnimeDialog(dummy.selectionAnimeResult.id)()
    })

    const resultState = result.current

    expect(resultState.deleteAnimeDialog.isOpen).toBeTruthy()
  })

  it('should not removed anime if collection is not exist', () => {
    const { result } = renderHook(() => useCollectionsStore())

    const fakeId = '20230804170010'

    act(() => {
      result.current.handleDeleteCollectionItem(fakeId)()
    })

    const resultState = result.current

    // Anime in collection still same and not deleted
    expect(resultState.collections).toEqual([dummy.updatedCollectionWithAnime])

    const fakeAnimeId = 123

    act(() => {
      result.current.handleToggleDeleteAnimeDialog(fakeAnimeId)()
      result.current.handleDeleteCollectionItem(fakeId)()
    })

    const afterToggleState = result.current

    expect(afterToggleState.collections).toEqual([dummy.updatedCollectionWithAnime])
  })

  it('should removed anime in collection', () => {
    const { result } = renderHook(() => useCollectionsStore())

    act(() => {
      result.current.handleToggleDeleteAnimeDialog(dummy.selectionAnimeResult.id)()
      result.current.handleDeleteCollectionItem(dummy.updatedCollectionWithAnime.id)()
    })

    const resultState = result.current

    expect(resultState.collections).toEqual([dummy.updatedCollection])
  })

  it('should not removed collection if not exist', () => {
    const { result } = renderHook(() => useCollectionsStore())
    const fakeId = '20230804170010'

    act(() => {
      result.current.handleToggleDeleteCollectionDialog(fakeId)()
    })

    const afterToggleState = result.current
    expect(afterToggleState.deleteDialog).toBeTruthy()

    act(() => {
      result.current.handleDeleteCollection()
      // close dialog
      result.current.handleToggleDeleteCollectionDialog(fakeId)()
    })

    const afterDeleteState = result.current

    // Collections not deleted
    expect(afterDeleteState.collections).toEqual([dummy.updatedCollection])
    expect(afterDeleteState.deleteDialog.collectionId).toEqual(fakeId)
    expect(afterDeleteState.deleteDialog.isOpen).toBeFalsy()
  })

  it('should removed collection correctly', () => {
    const { result } = renderHook(() => useCollectionsStore())
    act(() => {
      result.current.handleToggleDeleteCollectionDialog(dummy.updatedCollection.id)()
    })

    const afterToggleState = result.current
    expect(afterToggleState.deleteDialog.collectionId).toEqual(dummy.updatedCollection.id)
    expect(afterToggleState.deleteDialog).toBeTruthy()

    act(() => {
      result.current.handleDeleteCollection()
    })

    const afterDeleteState = result.current

    // Collections is empty
    expect(afterDeleteState.collections).toEqual([])
    expect(afterDeleteState.deleteDialog.collectionId).toEqual('')
    expect(afterDeleteState.deleteDialog.isOpen).toBeFalsy()
  })
})
