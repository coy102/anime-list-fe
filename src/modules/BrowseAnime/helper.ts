import { MediaSort } from '~/gqlcodegen/types'

export const defaultFilterAnimeList = {
  page: 1,
  perPage: 20,
  search: null,
  sort: MediaSort.PopularityDesc,
}
