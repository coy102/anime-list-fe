import { getHttpCodeError } from '~/utils/error'

describe('~/utils/error - getHttpCodeError', () => {
  it('returns 404 status code when graphQLErrors with status 404 is provided', () => {
    const responseData = {
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

    const statusCode = getHttpCodeError(responseData)

    expect(statusCode).toBe(404)
  })

  it('returns 500 status code when graphQLErrors is empty', () => {
    const responseData = {
      clientErrors: [],
      graphQLErrors: [],
      message: 'No GraphQL errors.',
      networkError: null,
    }

    const statusCode = getHttpCodeError(responseData)

    expect(statusCode).toBe(500)
  })
})
