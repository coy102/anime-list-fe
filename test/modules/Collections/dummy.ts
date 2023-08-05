export const newCollection = 'Romcom list'
export const updatedCollection = 'School Comedy'
export const defaultCollection = {
  state: {
    collections: [
      {
        createdDate: '2023-08-05 14:19',
        id: '20230805141933',
        isDefault: false,
        items: [
          {
            color: '#e4a15d',
            cover:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg',
            genres: ['Action', 'Drama', 'Fantasy', 'Mystery'],
            id: 16498,
            score: 84,
            title: 'Shingeki no Kyojin',
            type: 'ANIME',
          },
        ],
        name: 'My Collections',
      },
      {
        createdDate: '2023-08-05 14:19',
        id: '20230805141941',
        isDefault: false,
        items: [],
        name: 'Adventures',
      },
    ],
  },
  version: 0,
}

export const currentDate = '2023-08-04 17:00:01'

export const resultCollection = {
  state: {
    collections: [
      ...defaultCollection.state.collections,
      {
        createdDate: '2023-08-04 17:00',
        id: '20230804170001',
        isDefault: false,
        items: [],
        name: newCollection,
      },
    ],
  },
}
export const updatedCollectionResult = {
  state: {
    collections: [
      ...defaultCollection.state.collections,
      {
        createdDate: '2023-08-04 17:00',
        id: '20230804170001',
        isDefault: false,
        items: [],
        name: updatedCollection,
      },
    ],
  },
}
