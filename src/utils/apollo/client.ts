import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client'

import { GRAPHQL_SERVER_HOST } from '~/config'

const cache = new InMemoryCache()

export const graphqlDefaultOptions = {
  notifyOnNetworkStatusChange: true,
  pollInterval: 1000 * 60 * 30, // 30 Minutes
}

const httpLink = new HttpLink({
  uri: GRAPHQL_SERVER_HOST,
})

export const client = new ApolloClient({
  cache,
  link: from([httpLink]),
})

export default client
