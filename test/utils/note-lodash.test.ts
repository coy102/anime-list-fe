import { debounce } from '~/utils/not-lodash'

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
