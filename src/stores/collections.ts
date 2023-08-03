import dayjs from 'dayjs'
import { produce, Draft } from 'immer'
import { nanoid } from 'nanoid'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { Collections, DEFAULT_COLLECTIONS } from '~/config/constants'
import { MediaType } from '~/gqlcodegen/types'
import { isEmpty } from '~/utils/not-lodash'

interface AnimeState {
  cover: string
  id: number
  title: string
  type: MediaType
}

interface DataState {
  collections: Collections[]
  selectionDialog: {
    anime?: AnimeState | null
    isOpen: boolean
  }
}

interface State extends DataState {
  getCollectionIndex: (collectionId: string) => number
  getCollections: () => Collections[]
  handleAddCollection: (collectionName: string) => void
  handleAddCollectionItem: (collectionId: string) => void
  handleDeleteCollection: (collectionId: string) => void
  handleDeleteCollectionItem: (collectionId: string, animeId: number) => void
  handleEditCollection: (collectionName: string, collectionId: string) => void
  handleToggleSelectionDialog: (anime: any) => void
  validateItemUniqueName: (collectionId: string) => boolean
  validateUniqueName: (collectionName: string) => boolean
}

const initialState: DataState = {
  collections: DEFAULT_COLLECTIONS,
  selectionDialog: {
    isOpen: false,
    anime: null,
  },
}

export const useCollectionsStore = create<State>()(
  persist(
    (set, get) => ({
      ...initialState,
      getCollectionIndex: (collectionId) => {
        const collections = get().collections
        const collectionIndex = collections.findIndex((f) => f.id === collectionId)
        return collectionIndex
      },
      getCollections: () => {
        const collections = get().collections
        return collections.sort((a, b) => {
          const dateA = new Date(a.createdDate).getTime()
          const dateB = new Date(b.createdDate).getTime()
          return dateB - dateA
        })
      },
      handleAddCollection: (collectionName) => {
        return set(
          produce((draft: Draft<DataState>) => {
            draft.collections.push({
              createdDate: dayjs().format('YYYY-MM-DD HH:mm'),
              id: nanoid(),
              isDefault: false,
              items: [],
              name: collectionName,
            })
          }),
        )
      },
      handleAddCollectionItem: (collectionId) => {
        const { anime } = get().selectionDialog
        return set(
          produce((draft: Draft<DataState>) => {
            const collectionIndex = draft.collections.findIndex((f) => f.id === collectionId)

            if (collectionIndex !== -1) {
              draft.collections[collectionIndex].items.push(anime)
              draft.selectionDialog.isOpen = false
            }
          }),
        )
      },
      handleDeleteCollection: (collectionId) => {
        return set(
          produce((draft: Draft<DataState>) => {
            const collectionIndex = draft.collections.findIndex((f) => f.id === collectionId)
            if (collectionIndex !== -1) {
              draft.collections.splice(collectionIndex, 1)
            }
          }),
        )
      },
      handleDeleteCollectionItem: (collectionId, animeId) => {
        return set(
          produce((draft: Draft<DataState>) => {
            const collectionIndex = draft.collections.findIndex((f) => f.id === collectionId)
            if (collectionIndex !== -1) {
              const itemIndex = draft.collections[collectionIndex].items.findIndex(
                (item) => item.id === animeId,
              )
              if (itemIndex !== -1) {
                draft.collections[collectionIndex].items.splice(itemIndex, 1)
              }
            }
          }),
        )
      },
      handleEditCollection: (collectionName, collectionId) => {
        return set(
          produce((draft: Draft<DataState>) => {
            const collectionIndex = draft.collections.findIndex((f) => f.id === collectionId)
            if (collectionIndex !== -1) {
              draft.collections[collectionIndex].name = collectionName
            }
          }),
        )
      },
      handleToggleSelectionDialog: (anime) => {
        return set(
          produce((draft: Draft<DataState>) => {
            if (!isEmpty(anime)) {
              const newAnime: AnimeState = {
                cover: anime.coverImage.large,
                id: anime.id,
                title: anime.title.romaji,
                type: anime.type,
              }
              draft.selectionDialog.anime = newAnime
            }

            draft.selectionDialog.isOpen = !draft.selectionDialog.isOpen
          }),
        )
      },
      validateItemUniqueName: (collectionId) => {
        const { collections, selectionDialog } = get()

        const collection = collections.find((f) => f.id === collectionId)
        const isExistAnime = collection?.items.find((f) => f.id === selectionDialog.anime?.id)

        return isEmpty(isExistAnime)
      },
      validateUniqueName: (collectionName) => {
        const collections = get().collections
        const isExistName = collections.find((f) => f.name === collectionName)
        return isEmpty(isExistName)
      },
    }),
    {
      name: 'collections',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ collections: state.collections }),
    },
  ),
)
