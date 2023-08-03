/* eslint-disable @typescript-eslint/ban-types */
export const debounce = (func: Function, wait: number, immediate?: boolean) => {
  let timeout

  return (...args: any[]) => {
    const later = () => {
      timeout = null
      if (!immediate) func.apply(this, args)
    }

    clearTimeout(timeout)

    if (immediate && !timeout) func.apply(this, args)

    timeout = setTimeout(later, wait)
  }
}

export const capitalize = (string) => {
  return string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : ''
}

export const isEmpty = (obj) =>
  [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length
