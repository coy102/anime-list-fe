import { Dispatch, SetStateAction, useCallback, useState } from 'react'

interface UseBooleanOutput {
  setFalse: () => void
  setTrue: () => void
  setValue: Dispatch<SetStateAction<boolean>>
  toggle: () => void
  value: boolean
}

function useBoolean(defaultValue?: boolean): UseBooleanOutput {
  const [value, setValue] = useState(!!defaultValue)

  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])
  const toggle = useCallback(() => setValue((x) => !x), [])

  return {
    setFalse,
    setTrue,
    setValue,
    toggle,
    value,
  }
}

export default useBoolean
