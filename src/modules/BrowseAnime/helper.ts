import { MediaSort } from '~/gqlcodegen/types'

export const defaultFilterAnimeList = {
  page: 1,
  perPage: 10,
  search: null,
  sort: MediaSort.PopularityDesc,
}
