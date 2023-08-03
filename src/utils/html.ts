import sanitizeHtml from 'sanitize-html'

export const htmlClean = (htmlString) =>
  sanitizeHtml(htmlString, {
    allowedTags: ['b', 'i', 'em', 'strong', 'a'],
    allowedAttributes: {
      a: ['href'],
    },
    selfClosing: ['img', 'br', 'hr'],
  })
