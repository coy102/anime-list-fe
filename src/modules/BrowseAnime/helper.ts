import { AnimeListQueryVariables } from '~/gqlcodegen/hooks/anime'
import { MediaSort } from '~/gqlcodegen/types'

export const defaultFilterAnimeList: AnimeListQueryVariables = {
  page: 1,
  perPage: 20,
  search: null,
  sort: MediaSort.PopularityDesc,
}
