import { act, renderHook } from '@testing-library/react'

import useBoolean from '~/utils/hooks/useBoolean'

const expectedMethods = {
  setFalse: expect.any(Function),
  setTrue: expect.any(Function),
  setValue: expect.any(Function),
  toggle: expect.any(Function),
}

describe('~/utils/hooks/useBoolean', () => {
  it('should return false on the first time', () => {
    const { result } = renderHook(() => useBoolean(false))

    expect(result.current).toEqual({
      ...expectedMethods,
      value: false,
    })
  })

  it('should return false on the first time', () => {
    const { result } = renderHook(() => useBoolean(true))

    expect(result.current).toEqual({
      ...expectedMethods,
      value: true,
    })
  })

  it('should return true and false using setTrue() and setFalse()', () => {
    const { result } = renderHook(() => useBoolean(false))

    act(() => result.current.setTrue())

    expect(result.current).toEqual({
      ...expectedMethods,
      value: true,
    })

    act(() => result.current.setFalse())
    expect(result.current).toEqual({
      ...expectedMethods,
      value: false,
    })
  })

  it('should return true and false using toggle()', () => {
    const { result } = renderHook(() => useBoolean(false))

    act(() => result.current.toggle())

    expect(result.current).toEqual({
      ...expectedMethods,
      value: true,
    })

    act(() => result.current.toggle())
    expect(result.current).toEqual({
      ...expectedMethods,
      value: false,
    })
  })
})
