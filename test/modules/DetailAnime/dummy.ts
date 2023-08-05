/* eslint-disable sort-keys */

export const responseError = {
  clientErrors: [],
  graphQLErrors: [
    {
      message: 'Not Found.',
      status: 404,
      locations: [
        {
          line: 2,
          column: 3,
        },
      ],
    },
  ],
  message: 'Not Found.',
  networkError: null,
}

export const responseData = {
  loading: false,
  data: {
    animeDetail: {
      id: 101922,
      bannerImage:
        'https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg',
      title: {
        romaji: 'Kimetsu no Yaiba',
        english: 'Demon Slayer: Kimetsu no Yaiba',
        __typename: 'MediaTitle',
      },
      coverImage: {
        large:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101922-PEn1CTc93blC.jpg',
        color: '#4B4A95',
        __typename: 'MediaCoverImage',
      },
      startDate: {
        year: 2019,
        month: 4,
        day: 6,
        __typename: 'FuzzyDate',
      },
      endDate: {
        year: 2019,
        month: 9,
        day: 28,
        __typename: 'FuzzyDate',
      },
      description:
        'It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.<br>\n<br>\n(Source: Crunchyroll)',
      season: 'SPRING',
      seasonYear: 2019,
      type: 'ANIME',
      format: 'TV',
      status: 'FINISHED',
      episodes: 26,
      duration: 24,
      chapters: null,
      volumes: null,
      genres: ['Action', 'Adventure', 'Drama', 'Fantasy', 'Supernatural'],
      source: 'MANGA',
      averageScore: 84,
      relations: {
        edges: [
          {
            id: 23106,
            relationType: 'SOURCE',
            node: {
              id: 87216,
              title: {
                romaji: 'Kimetsu no Yaiba',
                __typename: 'MediaTitle',
              },
              type: 'MANGA',
              format: 'MANGA',
              coverImage: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/bx87216-c9bSNVD10UuD.png',
                __typename: 'MediaCoverImage',
              },
              __typename: 'Media',
            },
            __typename: 'MediaEdge',
          },
          {
            id: 35282,
            relationType: 'SEQUEL',
            node: {
              id: 112151,
              title: {
                romaji: 'Kimetsu no Yaiba: Mugen Ressha-hen',
                __typename: 'MediaTitle',
              },
              type: 'ANIME',
              format: 'MOVIE',
              coverImage: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx112151-1qlQwPB1RrJe.png',
                __typename: 'MediaCoverImage',
              },
              __typename: 'Media',
            },
            __typename: 'MediaEdge',
          },
          {
            id: 52746,
            relationType: 'CHARACTER',
            node: {
              id: 129627,
              title: {
                romaji: 'Chuukou Ikkan!! Kimetsu Gakuen Monogatari: Valentine-hen',
                __typename: 'MediaTitle',
              },
              type: 'ANIME',
              format: 'ONA',
              coverImage: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx129627-GiVeOqDUAqUC.png',
                __typename: 'MediaCoverImage',
              },
              __typename: 'Media',
            },
            __typename: 'MediaEdge',
          },
          {
            id: 63584,
            relationType: 'SEQUEL',
            node: {
              id: 129874,
              title: {
                romaji: 'Kimetsu no Yaiba: Mugen Ressha-hen (TV)',
                __typename: 'MediaTitle',
              },
              type: 'ANIME',
              format: 'TV',
              coverImage: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx129874-g6ZKXB94Hui1.jpg',
                __typename: 'MediaCoverImage',
              },
              __typename: 'Media',
            },
            __typename: 'MediaEdge',
          },
          {
            id: 77767,
            relationType: 'CHARACTER',
            node: {
              id: 154541,
              title: {
                romaji: 'Chuukou Ikkan!! Kimetsu Gakuen Monogatari: Kimetsu no Utage Tokubetsu-hen',
                __typename: 'MediaTitle',
              },
              type: 'ANIME',
              format: 'SPECIAL',
              coverImage: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/b154541-uw1iAxNKdUAf.png',
                __typename: 'MediaCoverImage',
              },
              __typename: 'Media',
            },
            __typename: 'MediaEdge',
          },
        ],
        __typename: 'MediaConnection',
      },
      characterPreview: {
        edges: [
          {
            id: 171550,
            role: 'MAIN',
            name: null,
            node: {
              id: 126071,
              name: {
                userPreferred: 'Tanjirou Kamado',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b126071-BTNEc1nRIv68.png',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 171554,
            role: 'MAIN',
            name: null,
            node: {
              id: 127518,
              name: {
                userPreferred: 'Nezuko Kamado',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b127518-NRlq1CQ1v1ro.png',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 171549,
            role: 'MAIN',
            name: null,
            node: {
              id: 129130,
              name: {
                userPreferred: 'Inosuke Hashibira',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/n129130-SJC0Kn1DU39E.jpg',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 171552,
            role: 'MAIN',
            name: null,
            node: {
              id: 129131,
              name: {
                userPreferred: 'Zenitsu Agatsuma',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b129131-FZrQ7lSlxmEr.png',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 173535,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 129132,
              name: {
                userPreferred: 'Muzan Kibutsuji',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b129132-4nIZakUZ1o8W.jpg',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 183938,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 129133,
              name: {
                userPreferred: 'Kyoujurou Rengoku',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b129133-VlTPowwt68rJ.png',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 171548,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 130050,
              name: {
                userPreferred: 'Giyuu Tomioka',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b130050-qsLThJs5VIbz.png',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 183941,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 136069,
              name: {
                userPreferred: 'Muichirou Tokitou',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b136069-6PLglx4tETUX.png',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 179218,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 136070,
              name: {
                userPreferred: 'Shinobu Kochou',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b136070-MC9LLxJsHyHE.png',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 183939,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 136071,
              name: {
                userPreferred: 'Tengen Uzui',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b136071-99Kexnnn2PiV.png',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 183940,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 136072,
              name: {
                userPreferred: 'Mitsuri Kanroji',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b136072-xVwyRUKdpybi.png',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 171547,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 137773,
              name: {
                userPreferred: 'Sakonji Urokodaki',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b137773-kOv2te9wLAzQ.jpg',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 183943,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 137774,
              name: {
                userPreferred: 'Sanemi Shinazugawa',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b137774-bY0HliXqb19y.png',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 254231,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 137775,
              name: {
                userPreferred: 'Jigoro Kuwajima',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b137775-WVj9nyVaYo45.png',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 171551,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 137776,
              name: {
                userPreferred: 'Genya Shinazugawa',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b137776-E0QuFD7y19OQ.jpg',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 183944,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 137777,
              name: {
                userPreferred: 'Obanai Iguro',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b137777-kGViiNyx0wa7.jpg',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 183942,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 137778,
              name: {
                userPreferred: 'Gyoumei Himejima',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b137778-H4Uzb9cSCvZ6.jpg',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 171561,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 137806,
              name: {
                userPreferred: 'Makomo',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b137806-43Lqae34Vzqu.png',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 171560,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 137808,
              name: {
                userPreferred: 'Kagaya Ubuyashiki',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b137808-4yA8XQUDrAho.png',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 171562,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 137809,
              name: {
                userPreferred: 'Sabito',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b137809-6Tkle99lCBl8.png',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 171559,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 137810,
              name: {
                userPreferred: 'Matsuemon Tennouji',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b137810-x5JEOQTuxd86.png',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 173865,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 138810,
              name: {
                userPreferred: 'Susamaru',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b138810-hILrFac1OjKd.png',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 173864,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 138811,
              name: {
                userPreferred: 'Yahaba',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b138811-V9NNgNp9dAjq.png',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 173863,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 138812,
              name: {
                userPreferred: 'Numa Oni',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b138812-Imqj3sSfpcso.jpg',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
          {
            id: 175306,
            role: 'SUPPORTING',
            name: null,
            node: {
              id: 138846,
              name: {
                userPreferred: 'Yushirou',
                __typename: 'CharacterName',
              },
              image: {
                medium:
                  'https://s4.anilist.co/file/anilistcdn/character/medium/b138846-i8frJEl8baly.jpg',
                __typename: 'CharacterImage',
              },
              __typename: 'Character',
            },
            __typename: 'CharacterEdge',
          },
        ],
        __typename: 'CharacterConnection',
      },
      studios: {
        edges: [
          {
            isMain: true,
            node: {
              id: 43,
              name: 'ufotable',
              __typename: 'Studio',
            },
            __typename: 'StudioEdge',
          },
          {
            isMain: false,
            node: {
              id: 17,
              name: 'Aniplex',
              __typename: 'Studio',
            },
            __typename: 'StudioEdge',
          },
          {
            isMain: false,
            node: {
              id: 6570,
              name: 'Shueisha',
              __typename: 'Studio',
            },
            __typename: 'StudioEdge',
          },
          {
            isMain: false,
            node: {
              id: 493,
              name: 'Aniplex of America',
              __typename: 'Studio',
            },
            __typename: 'StudioEdge',
          },
          {
            isMain: false,
            node: {
              id: 6454,
              name: 'Madman Entertainment',
              __typename: 'Studio',
            },
            __typename: 'StudioEdge',
          },
        ],
        __typename: 'StudioConnection',
      },
      __typename: 'Media',
    },
  },
}
