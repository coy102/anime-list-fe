/* eslint-disable sort-keys */
import { css } from '@emotion/react'

import theme, { colors, fontSize } from './theme'

const globalCss = css({
  '#root': {
    height: '100%',
  },
  '*': {
    fontFamily: 'Inter, sans-serif',
  },
  '*::-webkit-scrollbar': {
    height: 10,
    marginRight: theme.spacing(3),
    width: 6,
  },
  '*::-webkit-scrollbar-thumb': {
    borderColor: 'none',
    backgroundColor: colors.primary[100],
    borderRadius: 16,
    cursor: 'pointer',
  },
  '*::-webkit-scrollbar-track': {
    WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
  },
  'html, body': {
    margin: 0,
    padding: 0,
  },
  '.link': {
    textDecoration: 'none',
    color: 'inherit',
    fontSize: fontSize[12],
  },
  '.responsive-scroll': {
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    WebkitOverflowScrolling: 'touch',
    [theme.breakpoints.up('md')]: {
      '&:hover, &:focus': {
        scrollbarWidth: 'auto',
        msOverflowStyle: 'auto',
        '&::-webkit-scrollbar': {
          display: 'block',
        },
      },
    },
  },
})

export default globalCss
