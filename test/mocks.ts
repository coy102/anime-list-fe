import {
  mockedLoadLS,
  mockedRemoveLS,
  mockedSetLS,
  mockLocalStorageValue,
} from '~/mocks/utils/localStorage'

jest.mock('~/utils/localStorage', () => ({
  load: mockedLoadLS,
  remove: mockedRemoveLS,
  set: mockedSetLS,
}))

export { mockedLoadLS, mockedRemoveLS, mockedSetLS, mockLocalStorageValue }
