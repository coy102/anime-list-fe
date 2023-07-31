const mockLocalStorageValue = (() => {
  const store = {}

  return {
    getItem(key) {
      return store[key]
    },

    setItem(key, value) {
      store[key] = value
    },

    removeItem(key) {
      delete store[key]
    },
  }
})()

const mockedLoadLS = jest.fn()
const mockedRemoveLS = jest.fn()
const mockedSetLS = jest.fn()

export { mockLocalStorageValue, mockedLoadLS, mockedRemoveLS, mockedSetLS }
