/* eslint-disable sort-keys */
export const initialAnimeListResponseData = {
  loading: false,
  data: {
    animeList: {
      pageInfo: {
        total: 5000,
        currentPage: 1,
        lastPage: 500,
        hasNextPage: true,
        perPage: 10,
        __typename: 'PageInfo',
      },
      items: [
        {
          id: 16498,
          title: {
            romaji: 'Shingeki no Kyojin',
            __typename: 'MediaTitle',
          },
          type: 'ANIME',
          genres: ['Action', 'Drama', 'Fantasy', 'Mystery'],
          coverImage: {
            color: '#e4a15d',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg',
            __typename: 'MediaCoverImage',
          },
          averageScore: 84,
          __typename: 'Media',
        },
        {
          id: 101922,
          title: {
            romaji: 'Kimetsu no Yaiba',
            __typename: 'MediaTitle',
          },
          type: 'ANIME',
          genres: ['Action', 'Adventure', 'Drama', 'Fantasy', 'Supernatural'],
          coverImage: {
            color: '#4B4A95',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101922-PEn1CTc93blC.jpg',
            __typename: 'MediaCoverImage',
          },
          averageScore: 84,
          __typename: 'Media',
        },
        {
          id: 1535,
          title: {
            romaji: 'DEATH NOTE',
            __typename: 'MediaTitle',
          },
          type: 'ANIME',
          genres: ['Mystery', 'Psychological', 'Supernatural', 'Thriller'],
          coverImage: {
            color: null,
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1535-lawCwhzhi96X.jpg',
            __typename: 'MediaCoverImage',
          },
          averageScore: 84,
          __typename: 'Media',
        },
        {
          id: 21459,
          title: {
            romaji: 'Boku no Hero Academia',
            __typename: 'MediaTitle',
          },
          type: 'ANIME',
          genres: ['Action', 'Adventure', 'Comedy'],
          coverImage: {
            color: '#e4c935',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21459-DUKLgasrgeNO.jpg',
            __typename: 'MediaCoverImage',
          },
          averageScore: 77,
          __typename: 'Media',
        },
        {
          id: 113415,
          title: {
            romaji: 'Jujutsu Kaisen',
            __typename: 'MediaTitle',
          },
          type: 'ANIME',
          genres: ['Action', 'Drama', 'Supernatural'],
          coverImage: {
            color: '#e45d5d',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113415-bbBWj4pEFseh.jpg',
            __typename: 'MediaCoverImage',
          },
          averageScore: 86,
          __typename: 'Media',
        },
        {
          id: 11061,
          title: {
            romaji: 'HUNTER×HUNTER (2011)',
            __typename: 'MediaTitle',
          },
          type: 'ANIME',
          genres: ['Action', 'Adventure', 'Fantasy'],
          coverImage: {
            color: '#f1d65d',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx11061-sIpBprNRfzCe.png',
            __typename: 'MediaCoverImage',
          },
          averageScore: 89,
          __typename: 'Media',
        },
        {
          id: 21087,
          title: {
            romaji: 'One Punch Man',
            __typename: 'MediaTitle',
          },
          type: 'ANIME',
          genres: ['Action', 'Comedy', 'Sci-Fi', 'Supernatural'],
          coverImage: {
            color: '#e4ae5d',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21087-UV2tu6exrfXz.jpg',
            __typename: 'MediaCoverImage',
          },
          averageScore: 83,
          __typename: 'Media',
        },
        {
          id: 20605,
          title: {
            romaji: 'Tokyo Ghoul',
            __typename: 'MediaTitle',
          },
          type: 'ANIME',
          genres: ['Action', 'Drama', 'Horror', 'Mystery', 'Psychological', 'Supernatural'],
          coverImage: {
            color: '#35DDFF',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20605-fmnHdfurM7m6.jpg',
            __typename: 'MediaCoverImage',
          },
          averageScore: 75,
          __typename: 'Media',
        },
        {
          id: 11757,
          title: {
            romaji: 'Sword Art Online',
            __typename: 'MediaTitle',
          },
          type: 'ANIME',
          genres: ['Action', 'Adventure', 'Fantasy', 'Romance'],
          coverImage: {
            color: '#5DC0E4',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx11757-Q9P2zjCPICq5.jpg',
            __typename: 'MediaCoverImage',
          },
          averageScore: 69,
          __typename: 'Media',
        },
        {
          id: 20958,
          title: {
            romaji: 'Shingeki no Kyojin 2',
            __typename: 'MediaTitle',
          },
          type: 'ANIME',
          genres: ['Action', 'Drama', 'Fantasy', 'Mystery'],
          coverImage: {
            color: '#6AA66F',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20958-HuFJyr54Mmir.jpg',
            __typename: 'MediaCoverImage',
          },
          averageScore: 84,
          __typename: 'Media',
        },
      ],
      __typename: 'Page',
    },
  },
}

export const moreData = {
  loading: false,
  data: {
    animeList: {
      pageInfo: {
        total: 5000,
        currentPage: 2,
        lastPage: 500,
        hasNextPage: true,
        perPage: 10,
        __typename: 'PageInfo',
      },
      items: [
        ...initialAnimeListResponseData.data.animeList.items,
        {
          id: 5114,
          title: {
            romaji: 'Hagane no Renkinjutsushi: FULLMETAL ALCHEMIST',
            __typename: 'MediaTitle',
          },
          type: 'ANIME',
          genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
          coverImage: {
            color: '#e4c993',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5114-KJTQz9AIm6Wk.jpg',
            __typename: 'MediaCoverImage',
          },
          averageScore: 90,
          __typename: 'Media',
        },
        {
          id: 20,
          title: {
            romaji: 'NARUTO',
            __typename: 'MediaTitle',
          },
          type: 'ANIME',
          genres: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Supernatural'],
          coverImage: {
            color: '#e47850',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20-YJvLbgJQPCoI.jpg',
            __typename: 'MediaCoverImage',
          },
          averageScore: 79,
          __typename: 'Media',
        },
        {
          id: 21856,
          title: {
            romaji: 'Boku no Hero Academia 2',
            __typename: 'MediaTitle',
          },
          type: 'ANIME',
          genres: ['Action', 'Adventure', 'Comedy'],
          coverImage: {
            color: '#e48643',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21856-gutauxhWAwn6.png',
            __typename: 'MediaCoverImage',
          },
          averageScore: 80,
          __typename: 'Media',
        },
        {
          id: 21519,
          title: {
            romaji: 'Kimi no Na wa.',
            __typename: 'MediaTitle',
          },
          type: 'ANIME',
          genres: ['Drama', 'Romance', 'Supernatural'],
          coverImage: {
            color: '#0da1e4',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21519-XIr3PeczUjjF.png',
            __typename: 'MediaCoverImage',
          },
          averageScore: 86,
          __typename: 'Media',
        },
        {
          id: 99147,
          title: {
            romaji: 'Shingeki no Kyojin 3',
            __typename: 'MediaTitle',
          },
          type: 'ANIME',
          genres: ['Action', 'Drama', 'Fantasy', 'Mystery'],
          coverImage: {
            color: '#4386e4',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx99147-5RXELRvwjFl6.jpg',
            __typename: 'MediaCoverImage',
          },
          averageScore: 85,
          __typename: 'Media',
        },
        {
          id: 20954,
          title: {
            romaji: 'Koe no Katachi',
            __typename: 'MediaTitle',
          },
          type: 'ANIME',
          genres: ['Drama', 'Romance', 'Slice of Life'],
          coverImage: {
            color: '#5dbbe4',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20954-UMb6Kl7ZL8Ke.jpg',
            __typename: 'MediaCoverImage',
          },
          averageScore: 88,
          __typename: 'Media',
        },
        {
          id: 101759,
          title: {
            romaji: 'Yakusoku no Neverland',
            __typename: 'MediaTitle',
          },
          type: 'ANIME',
          genres: ['Drama', 'Fantasy', 'Horror', 'Mystery', 'Psychological', 'Thriller'],
          coverImage: {
            color: '#e4ae50',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101759-NhSwxv7HY9y9.jpg',
            __typename: 'MediaCoverImage',
          },
          averageScore: 84,
          __typename: 'Media',
        },
        {
          id: 21,
          title: {
            romaji: 'ONE PIECE',
            __typename: 'MediaTitle',
          },
          type: 'ANIME',
          genres: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'],
          coverImage: {
            color: '#e4a15d',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21-tXMN3Y20PIL9.jpg',
            __typename: 'MediaCoverImage',
          },
          averageScore: 87,
          __typename: 'Media',
        },
        {
          id: 20755,
          title: {
            romaji: 'Ansatsu Kyoushitsu',
            __typename: 'MediaTitle',
          },
          type: 'ANIME',
          genres: ['Action', 'Comedy', 'Drama', 'Supernatural'],
          coverImage: {
            color: '#e4d650',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20755-q0b3Ok1cAbPd.jpg',
            __typename: 'MediaCoverImage',
          },
          averageScore: 79,
          __typename: 'Media',
        },
        {
          id: 100166,
          title: {
            romaji: 'Boku no Hero Academia 3',
            __typename: 'MediaTitle',
          },
          type: 'ANIME',
          genres: ['Action', 'Adventure', 'Comedy'],
          coverImage: {
            color: '#e4935d',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx100166-jUCZYbzn2XLw.jpg',
            __typename: 'MediaCoverImage',
          },
          averageScore: 79,
          __typename: 'Media',
        },
      ],
      __typename: 'Page',
    },
  },
}
