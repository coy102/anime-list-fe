import { debounce, capitalize, isEmpty } from '~/utils/not-lodash'

describe('~/utils/not-lodash - debounce', () => {
  jest.useFakeTimers()

  it('should debounce the function ', () => {
    const mockFn = jest.fn()
    const debouncedFn = debounce(mockFn, 1000, false)

    debouncedFn()
    debouncedFn()
    debouncedFn()

    jest.advanceTimersByTime(1000)

    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should debounce the function immediately', () => {
    const mockFn = jest.fn()
    const debouncedFn = debounce(mockFn, 1000, true)

    debouncedFn()
    debouncedFn()
    debouncedFn()

    expect(mockFn).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(1000)

    expect(mockFn).toHaveBeenCalledTimes(1)

    debouncedFn()

    jest.advanceTimersByTime(1000)
    expect(mockFn).toHaveBeenCalledTimes(2)
  })
})

describe('~/utils/not-lodash - capitalize', () => {
  it('should return valid capitalized text', () => {
    expect(capitalize('FAJAR')).toEqual('Fajar')
  })

  it('should return valid capitalized text 2 words', () => {
    expect(capitalize('fajar')).toEqual('Fajar')
  })
})

describe('~/utils/not-lodash - isEmpty', () => {
  it('is empty array', () => {
    expect(isEmpty([])).toEqual(true)
  })

  it('is empty object', () => {
    expect(isEmpty({})).toEqual(true)
  })

  it('is empty string', () => {
    expect(isEmpty('')).toEqual(true)
  })

  it('is null', () => {
    expect(isEmpty(null)).toEqual(true)
  })

  it('is not empty object', () => {
    expect(isEmpty({ test: 1 })).toEqual(false)
  })
})
