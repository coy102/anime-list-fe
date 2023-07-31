import { act } from '@testing-library/react'

import { mockLocalStorageValue } from '~/test/mocks'
import { load, remove, set } from '~/utils/localStorage'

jest.mock('~/utils/localStorage', () => ({
  // avoid to mocks from folder ~/test/mocks it causes localStorage can not be called
  ...jest.requireActual('~/utils/localStorage'),
}))

describe('~/utils/localStorage', () => {
  Object.defineProperty(window, 'localStorage', {
    value: mockLocalStorageValue,
  })

  const KEY = 'LS_KEY'
  const VALUE = 'storage_value_1'

  it('should set and get value from localstorage correctly', () => {
    act(() => {
      set(KEY, VALUE)
    })

    act(() => {
      const result = load(KEY)
      expect(result).toEqual(VALUE)
    })
  })

  it('should remove value from localstorage correctly', () => {
    act(() => {
      remove(KEY)
      const result = load(KEY)
      expect(result).toEqual(undefined)
    })
  })
})
