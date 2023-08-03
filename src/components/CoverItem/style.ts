import { Link } from 'react-router-dom'

import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import { fontSize } from '~/styles/theme'

export const ScrollContainerStyled = styled('div')(() => ({
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
  scrollbarWidth: 'none',
  whiteSpace: 'nowrap',
  width: '100%',
}))

export const RelationTitleStyled = styled(Typography)({
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': 3,
  display: '-webkit-box',
  fontSize: fontSize[14],
  overflow: 'hidden',
})

export const TitleLinkStyled = styled(Link)(() => ({
  color: 'inherit',
  textDecoration: 'none',
}))

export const CoverWrapperStyled = styled('div')(({ theme }) => ({
  alignItems: 'start',
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  marginBottom: theme.spacing(2),
  marginRight: theme.spacing(2),
}))
