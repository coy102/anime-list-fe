export const load = (key: string) => {
  try {
    const serializedValue = localStorage.getItem(key)
    if (serializedValue === null) {
      return undefined
    }
    return JSON.parse(serializedValue)
  } catch (err) {
    return undefined
  }
}

export const set = (key: string, value: any) => {
  try {
    const serializedValue = JSON.stringify(value)
    localStorage.setItem(key, serializedValue)
  } catch {
    // ignore write errors
  }
}

export const remove = (key: string) => {
  localStorage.removeItem(key)
}
