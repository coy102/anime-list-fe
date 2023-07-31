import * as Types from '../types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type PageInfoFragmentFragment = Pick<
  Types.PageInfo,
  'total' | 'currentPage' | 'lastPage' | 'hasNextPage' | 'perPage'
>

export type MediaCommonFragmentFragment = Pick<
  Types.Media,
  'id' | 'genres' | 'season' | 'seasonYear' | 'episodes' | 'averageScore' | 'bannerImage'
> & { title?: Types.Maybe<Pick<Types.MediaTitle, 'romaji'>> }

export type GetAnimeListQueryVariables = Types.Exact<{
  page?: Types.Maybe<Types.Scalars['Int']>
  perPage?: Types.Maybe<Types.Scalars['Int']>
  sort?: Types.Maybe<Array<Types.Maybe<Types.MediaSort>> | Types.Maybe<Types.MediaSort>>
  search?: Types.Maybe<Types.Scalars['String']>
}>

export type GetAnimeListQuery = {
  Page?: Types.Maybe<{
    pageInfo?: Types.Maybe<PageInfoFragmentFragment>
    media?: Types.Maybe<Array<Types.Maybe<MediaCommonFragmentFragment>>>
  }>
}

export const PageInfoFragmentFragmentDoc = gql`
  fragment PageInfoFragment on PageInfo {
    total
    currentPage
    lastPage
    hasNextPage
    perPage
  }
`
export const MediaCommonFragmentFragmentDoc = gql`
  fragment MediaCommonFragment on Media {
    id
    title {
      romaji
    }
    genres
    season
    seasonYear
    episodes
    averageScore
    bannerImage
  }
`
export const GetAnimeListDocument = gql`
  query getAnimeList($page: Int, $perPage: Int, $sort: [MediaSort], $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        ...PageInfoFragment
      }
      media(sort: $sort, search: $search) {
        ...MediaCommonFragment
      }
    }
  }
  ${PageInfoFragmentFragmentDoc}
  ${MediaCommonFragmentFragmentDoc}
`

/**
 * __useGetAnimeListQuery__
 *
 * To run a query within a React component, call `useGetAnimeListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimeListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimeListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      sort: // value for 'sort'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGetAnimeListQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAnimeListQuery, GetAnimeListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAnimeListQuery, GetAnimeListQueryVariables>(
    GetAnimeListDocument,
    options,
  )
}
export function useGetAnimeListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAnimeListQuery, GetAnimeListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAnimeListQuery, GetAnimeListQueryVariables>(
    GetAnimeListDocument,
    options,
  )
}
export type GetAnimeListQueryHookResult = ReturnType<typeof useGetAnimeListQuery>
export type GetAnimeListLazyQueryHookResult = ReturnType<typeof useGetAnimeListLazyQuery>
