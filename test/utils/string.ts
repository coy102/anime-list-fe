export const truncateTextAfterWords = (container, text) => {
  const words = text.split(' ')
  const containerWidth = container.offsetWidth
  const spaceWidth = containerWidth / text.length

  let currentWidth = 0
  let numWords = 0

  words.forEach((word) => {
    const wordWidth = word.length * spaceWidth
    if (currentWidth + wordWidth <= containerWidth) {
      currentWidth += wordWidth
      numWords++
    } else {
      return
    }
  })

  if (numWords === words.length) {
    return text
  } else {
    return words.slice(0, numWords).join(' ') + '...'
  }
}
