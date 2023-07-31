import * as Types from '../types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type PageInfoFragment = Pick<
  Types.PageInfo,
  'total' | 'currentPage' | 'lastPage' | 'hasNextPage' | 'perPage'
>

export type MediaCommonFragment = Pick<
  Types.Media,
  'id' | 'genres' | 'season' | 'seasonYear' | 'episodes' | 'averageScore'
> & {
  title?: Types.Maybe<Pick<Types.MediaTitle, 'romaji'>>
  coverImage?: Types.Maybe<Pick<Types.MediaCoverImage, 'large' | 'color'>>
}

export type AnimeListQueryVariables = Types.Exact<{
  page?: Types.Maybe<Types.Scalars['Int']>
  perPage?: Types.Maybe<Types.Scalars['Int']>
  sort?: Types.Maybe<Array<Types.Maybe<Types.MediaSort>> | Types.Maybe<Types.MediaSort>>
  search?: Types.Maybe<Types.Scalars['String']>
}>

export type AnimeListQuery = {
  animeList?: Types.Maybe<{
    pageInfo?: Types.Maybe<PageInfoFragment>
    items?: Types.Maybe<Array<Types.Maybe<MediaCommonFragment>>>
  }>
}

export const PageInfoFragmentDoc = gql`
  fragment PageInfo on PageInfo {
    total
    currentPage
    lastPage
    hasNextPage
    perPage
  }
`
export const MediaCommonFragmentDoc = gql`
  fragment MediaCommon on Media {
    id
    title {
      romaji
    }
    genres
    season
    seasonYear
    episodes
    averageScore
    coverImage {
      large
      color
    }
  }
`
export const AnimeListDocument = gql`
  query animeList($page: Int, $perPage: Int, $sort: [MediaSort], $search: String) {
    animeList: Page(page: $page, perPage: $perPage) {
      pageInfo {
        ...PageInfo
      }
      items: media(sort: $sort, search: $search) {
        ...MediaCommon
      }
    }
  }
  ${PageInfoFragmentDoc}
  ${MediaCommonFragmentDoc}
`

/**
 * __useAnimeListQuery__
 *
 * To run a query within a React component, call `useAnimeListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimeListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimeListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      sort: // value for 'sort'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useAnimeListQuery(
  baseOptions?: Apollo.QueryHookOptions<AnimeListQuery, AnimeListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AnimeListQuery, AnimeListQueryVariables>(AnimeListDocument, options)
}
export function useAnimeListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AnimeListQuery, AnimeListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AnimeListQuery, AnimeListQueryVariables>(AnimeListDocument, options)
}
export type AnimeListQueryHookResult = ReturnType<typeof useAnimeListQuery>
export type AnimeListLazyQueryHookResult = ReturnType<typeof useAnimeListLazyQuery>
