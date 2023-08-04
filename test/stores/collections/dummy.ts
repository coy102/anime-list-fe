export const defaultState = {
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

export const selectionAnimeParam = {
  averageScore: 84,
  coverImage: {
    color: '#4B4A95',
    large:
      'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101922-PEn1CTc93blC.jpg',
  },
  genres: ['Action', 'Adventure', 'Drama', 'Fantasy', 'Supernatural'],
  id: 101922,
  title: {
    romaji: 'Kimetsu no Yaiba',
  },
  type: 'ANIME',
}

export const selectionAnimeResult = {
  color: '#4B4A95',
  cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101922-PEn1CTc93blC.jpg',
  genres: ['Action', 'Adventure', 'Drama', 'Fantasy', 'Supernatural'],
  id: 101922,
  score: 84,
  title: 'Kimetsu no Yaiba',
  type: 'ANIME',
}

export const currentDate = '2023-08-04 17:00:01'

export const newCollection = {
  createdDate: '2023-08-04 17:00',
  id: '20230804170001',
  isDefault: false,
  items: [],
  name: 'My Collection',
}

export const updatedCollection = {
  createdDate: '2023-08-04 17:00',
  id: '20230804170001',
  isDefault: false,
  items: [],
  name: 'New Collections',
}

export const updatedCollectionWithAnime = {
  ...updatedCollection,
  items: [selectionAnimeResult],
}
