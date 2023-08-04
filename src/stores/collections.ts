import dayjs from 'dayjs'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { Collections } from '~/config/constants'
import { MediaType } from '~/gqlcodegen/types'
import { isEmpty } from '~/utils/not-lodash'

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
    animeId: number
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

interface Actions {
  getCollections: () => Collections[]
  handleAddCollection: (collectionName: string) => void
  handleAddCollectionItem: (collectionId: string) => void
  handleDeleteCollection: () => void
  handleDeleteCollectionItem: (collectionId: string) => () => void
  handleEditCollection: (collectionName: string, collectionId: string) => void
  handleToggleDeleteAnimeDialog: (animeId: number) => () => void
  handleToggleDeleteCollectionDialog: (collectionId?: string) => () => void
  handleToggleManageDialog: (collection?: Collections | null) => void
  handleToggleSelectionDialog: (anime: any) => void
  validateCollectionUniqueName: (collectionName: string) => boolean
  validateItemUniqueName: (collectionId: string) => boolean
}

const initialState: DataState = {
  collections: [],
  deleteAnimeDialog: {
    animeId: 0,
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

export const useCollectionsStore = create(
  persist(
    immer<DataState & Actions>((set, get) => ({
      ...initialState,
      // get all collections
      getCollections: () => {
        const collections = get().collections
        return collections.sort((a, b) => {
          const dateA = new Date(a.createdDate).getTime()
          const dateB = new Date(b.createdDate).getTime()
          return dateB - dateA
        })
      },
      // handle manage collection (edit / add new collection)
      handleAddCollection: (collectionName) => {
        const { handleToggleManageDialog, manageDialog } = get()

        return set((draft) => {
          const collectionIndex = draft.collections.findIndex(
            (f) => f.id === manageDialog.collectionId,
          )

          // add new collection
          if (collectionIndex === -1) {
            draft.collections.push({
              createdDate: dayjs().format('YYYY-MM-DD HH:mm'),
              id: dayjs().format('YYYYMMDDHHmmss'),
              isDefault: false,
              items: [],
              name: collectionName,
            })
          } else {
            // update existing collection name
            draft.collections[collectionIndex].name = collectionName
          }

          setTimeout(() => {
            handleToggleManageDialog()
          }, 300)
        })
      },
      // handle to insert anime into collections.items
      // after selected using handleToggleSelectionDialog
      handleAddCollectionItem: (collectionId) => {
        const { anime } = get().selectionDialog
        return set((draft) => {
          const collectionIndex = draft.collections.findIndex((f) => f.id === collectionId)

          // insert into collection if exist
          if (collectionIndex === -1) return

          const animeIndex = draft.collections[collectionIndex].items.findIndex(
            (f) => f.id === anime?.id,
          )

          // Skip if anime is already exist
          if (animeIndex !== -1) return

          draft.collections[collectionIndex].items.push(anime)
        })
      },
      // handle delete collection
      handleDeleteCollection: () => {
        const { collectionId } = get().deleteDialog
        return set((draft) => {
          const collectionIndex = draft.collections.findIndex((f) => f.id === collectionId)

          // skip if not exist
          if (collectionIndex === -1) return

          draft.collections.splice(collectionIndex, 1)
          draft.deleteDialog.collectionId = ''
          draft.deleteDialog.isOpen = false
        })
      },
      // handle delete anime inside collection
      handleDeleteCollectionItem: (collectionId) => () => {
        return set((draft) => {
          const { deleteAnimeDialog } = get()
          const collectionIndex = draft.collections.findIndex((f) => f.id === collectionId)

          // skip if collection is not exist
          if (collectionIndex === -1) return

          const itemIndex = draft.collections[collectionIndex].items.findIndex(
            (item) => item.id === deleteAnimeDialog.animeId,
          )

          // skip if anime is not exist
          if (itemIndex === -1) return

          draft.collections[collectionIndex].items.splice(itemIndex, 1)
          draft.deleteAnimeDialog.animeId = 0
          draft.deleteAnimeDialog.isOpen = false
        })
      },
      // handle update collectionname
      handleEditCollection: (collectionName, collectionId) => {
        return set((draft) => {
          const collectionIndex = draft.collections.findIndex((f) => f.id === collectionId)
          if (collectionIndex !== -1) {
            draft.collections[collectionIndex].name = collectionName
          }
        })
      },
      handleToggleDeleteAnimeDialog: (animeId) => () => {
        return set((draft) => {
          draft.deleteAnimeDialog.animeId = animeId
          draft.deleteAnimeDialog.isOpen = !draft.deleteAnimeDialog.isOpen
        })
      },
      handleToggleDeleteCollectionDialog:
        (collectionId = '') =>
        () => {
          return set((draft) => {
            draft.deleteDialog.collectionId = collectionId
            draft.deleteDialog.isOpen = !draft.deleteDialog.isOpen
          })
        },
      // handle toggle open/close manage collection dialog
      handleToggleManageDialog: (collection = null) => {
        return set((draft) => {
          draft.manageDialog.collectionId = collection?.id || ''
          draft.manageDialog.collectionName = collection?.name || ''
          draft.manageDialog.isOpen = !draft.manageDialog.isOpen
        })
      },
      // handle toggle dialog to insert anime into collection
      handleToggleSelectionDialog: (anime) => {
        return set((draft) => {
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

          draft.selectionDialog.isOpen = !draft.selectionDialog.isOpen
        })
      },
      // to validate collection name must be unique
      validateCollectionUniqueName: (collectionName) => {
        const collections = get().collections
        const isExistName = collections.find((f) => f.name === collectionName)
        return isEmpty(isExistName)
      },
      // to validate the anime is already exist in some collection
      validateItemUniqueName: (collectionId) => {
        const { collections, selectionDialog } = get()
        const collection = collections.find((f) => f.id === collectionId)
        const isExistAnime = collection?.items.find((f) => f.id === selectionDialog.anime?.id)
        return isEmpty(isExistAnime)
      },
    })),
    {
      name: 'collections',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ collections: state.collections }), // whitelist
    },
  ),
)
