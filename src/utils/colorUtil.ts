import tinycolor from 'tinycolor2'

export const isColorDark = (hexColor) => {
  const color = tinycolor(hexColor)
  const brightness = color.getBrightness()
  return brightness < 128 // treshhold
}

export const generateAutoColor = (hexColor, percentage = 10) => {
  const color = tinycolor(hexColor)

  if (isColorDark(hexColor)) {
    return color.lighten(percentage).toHexString()
  }

  return color.darken(percentage).toHexString()
}
