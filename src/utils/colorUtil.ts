import tinycolor from 'tinycolor2'

export const isColorDark = (hexColor) => {
  const color = tinycolor(hexColor)
  const brightness = color.getBrightness()
  return brightness < 128 // treshhold
}

export const generateAutoColor = (hexColor, percentage = 10) => {
  const color = tinycolor(hexColor)
  // return lighten color when the hexColor is dark
  if (isColorDark(hexColor)) {
    return color.lighten(percentage).toHexString()
  }

  // return darken color when the hexColor is light
  return color.darken(percentage).toHexString()
}
