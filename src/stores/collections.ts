import dayjs from 'dayjs'
import { produce, Draft } from 'immer'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { Collections, DEFAULT_COLLECTIONS } from '~/config/constants'
import { MediaType } from '~/gqlcodegen/types'
import { isEmpty, kebabCase } from '~/utils/not-lodash'

interface AnimeState {
  color: string
  cover: string
  genres: string[]
  id: number
  score: number
  title: string
  type: MediaType
}

interface DataState {
  collections: Collections[]
  deleteAnimeDialog: {
    animeId: string
    isOpen: boolean
  }
  deleteDialog: {
    collectionId: string
    isOpen: boolean
  }
  manageDialog: {
    collectionId: string
    collectionName: string
    isOpen: boolean
  }
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
  handleDeleteCollection: () => void
  handleDeleteCollectionItem: (collectionId: string) => () => void
  handleEditCollection: (collectionName: string, collectionId: string) => void
  handleToggleDeleteAnimeDialog: (collectionId?: string) => () => void
  handleToggleDeleteCollectionDialog: (collectionId?: string) => () => void
  handleToggleManageDialog: (collection?: Collections | null) => void
  handleToggleSelectionDialog: (anime: any) => void
  validateCollectionUniqueName: (collectionName: string) => boolean
  validateItemUniqueName: (collectionId: string) => boolean
}

const initialState: DataState = {
  collections: DEFAULT_COLLECTIONS,
  deleteAnimeDialog: {
    animeId: '',
    isOpen: false,
  },
  deleteDialog: {
    collectionId: '',
    isOpen: false,
  },
  manageDialog: {
    collectionId: '',
    collectionName: '',
    isOpen: false,
  },
  selectionDialog: {
    isOpen: false,
    anime: null,
  },
}

export const useCollectionsStore = create<State>()(
  persist(
    (set, get) => ({
      ...initialState,
      // Get index of collection
      getCollectionIndex: (collectionId) => {
        const collections = get().collections
        const collectionIndex = collections.findIndex((f) => f.id === collectionId)
        return collectionIndex
      },
      // Get collections list sort by created date DESC
      getCollections: () => {
        const collections = get().collections
        return collections.sort((a, b) => {
          const dateA = new Date(a.createdDate).getTime()
          const dateB = new Date(b.createdDate).getTime()
          return dateB - dateA
        })
      },
      // Add new collection
      handleAddCollection: (collectionName) => {
        const { handleToggleManageDialog, manageDialog } = get()
        setTimeout(() => {
          handleToggleManageDialog()
        }, 300)

        return set(
          produce((draft: Draft<DataState>) => {
            const collectionIndex = draft.collections.findIndex(
              (f) => f.id === manageDialog.collectionId,
            )

            if (collectionIndex === -1) {
              draft.collections.push({
                createdDate: dayjs().format('YYYY-MM-DD HH:mm'),
                id: kebabCase(collectionName),
                isDefault: false,
                items: [],
                name: collectionName,
              })
              return
            }

            draft.collections[collectionIndex].name = collectionName
          }),
        )
      },
      // Add anime / item into spesific collection by collection id
      handleAddCollectionItem: (collectionId) => {
        const { anime } = get().selectionDialog
        return set(
          produce((draft: Draft<DataState>) => {
            const collectionIndex = draft.collections.findIndex((f) => f.id === collectionId)

            // Insert new anime into collection
            if (collectionIndex !== -1) {
              draft.collections[collectionIndex].items.push(anime)
              draft.selectionDialog.isOpen = false
            }
          }),
        )
      },
      // Delete collection by collectionId
      handleDeleteCollection: () => {
        const { collectionId } = get().deleteDialog
        return set(
          produce((draft: Draft<DataState>) => {
            const collectionIndex = draft.collections.findIndex((f) => f.id === collectionId)
            // Delete if exist
            if (collectionIndex !== -1) {
              draft.collections.splice(collectionIndex, 1)
              draft.deleteDialog.isOpen = false
            }
          }),
        )
      },
      // Delete anime from collection
      handleDeleteCollectionItem: (collectionId) => () => {
        return set(
          produce((draft: Draft<DataState>) => {
            const { deleteAnimeDialog } = get()
            const collectionIndex = draft.collections.findIndex((f) => f.id === collectionId)
            // Delete if collection index is exist
            if (collectionIndex !== -1) {
              const itemIndex = draft.collections[collectionIndex].items.findIndex(
                (item) => item.id === deleteAnimeDialog.animeId,
              )

              // delete anime if exist
              if (itemIndex !== -1) {
                draft.collections[collectionIndex].items.splice(itemIndex, 1)
                draft.deleteAnimeDialog.isOpen = false
              }
            }
          }),
        )
      },
      // Edit collection name
      handleEditCollection: (collectionName, collectionId) => {
        return set(
          produce((draft: Draft<DataState>) => {
            const collectionIndex = draft.collections.findIndex((f) => f.id === collectionId)
            // Edit if exist
            if (collectionIndex !== -1) {
              draft.collections[collectionIndex].name = collectionName
            }
          }),
        )
      },
      // Handle toggle open/close delete anime from collection
      handleToggleDeleteAnimeDialog:
        (animeId = '') =>
        () => {
          return set(
            produce((draft: Draft<DataState>) => {
              draft.deleteAnimeDialog.animeId = animeId
              draft.deleteAnimeDialog.isOpen = !draft.deleteAnimeDialog.isOpen
            }),
          )
        },
      // Handle toggle open/close delete confirmation dialog
      handleToggleDeleteCollectionDialog:
        (collectionId = '') =>
        () => {
          return set(
            produce((draft: Draft<DataState>) => {
              draft.deleteDialog.collectionId = collectionId
              draft.deleteDialog.isOpen = !draft.deleteDialog.isOpen
            }),
          )
        },
      // Handle toggle open/close dialog manage collection
      handleToggleManageDialog: (collection = null) => {
        return set(
          produce((draft: Draft<DataState>) => {
            // when collection param is not empty
            // set into state manage collection
            draft.manageDialog.collectionId = collection?.id || ''
            draft.manageDialog.collectionName = collection?.name || ''

            draft.manageDialog.isOpen = !draft.manageDialog.isOpen
          }),
        )
      },
      // Handle toggle open/close dialog and pass anime object as parameter
      handleToggleSelectionDialog: (anime) => {
        return set(
          produce((draft: Draft<DataState>) => {
            // If not empty assign to selectionDialog.anime
            if (!isEmpty(anime)) {
              const newAnime: AnimeState = {
                color: anime.coverImage.color,
                cover: anime.coverImage.large,
                genres: anime.genres,
                id: anime.id,
                score: anime.averageScore,
                title: anime.title.romaji,
                type: anime.type,
              }
              draft.selectionDialog.anime = newAnime
            }

            // Empty / not empty, always close the dialog
            draft.selectionDialog.isOpen = !draft.selectionDialog.isOpen
          }),
        )
      },
      // Validate collection is name already exist
      validateCollectionUniqueName: (collectionName) => {
        const collections = get().collections
        const isExistName = collections.find((f) => f.name === collectionName)
        return isEmpty(isExistName)
      },
      // Validate item/anime is already exist
      validateItemUniqueName: (collectionId) => {
        const { collections, selectionDialog } = get()

        const collection = collections.find((f) => f.id === collectionId)

        // Find existing anime
        const isExistAnime = collection?.items.find((f) => f.id === selectionDialog.anime?.id)

        return isEmpty(isExistAnime)
      },
    }),
    {
      name: 'collections',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ collections: state.collections }),
    },
  ),
)
