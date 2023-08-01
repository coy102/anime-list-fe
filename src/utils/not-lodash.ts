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
