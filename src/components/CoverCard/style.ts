import { Link } from 'react-router-dom'

import { Fab } from '@mui/material'
import { styled } from '@mui/material/styles'

import { fontSize } from '~/styles/theme'

export const LinkStyled = styled(Link)(() => ({
  textDecoration: 'none',
  color: 'inherit',
}))

export const ImageWrapperStyled = styled('div')(() => ({
  position: 'relative',
  height: '100%',
}))

export const HeadWrapperStyled = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'absolute',
  top: 0,
  width: '100%',
  zIndex: 1,
}))

export const TitleWrapperStyled = styled('div')(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.5)',
  bottom: 0,
  overflow: 'hidden',
  padding: theme.spacing(2),
  position: 'absolute',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: '100%',
}))

export const TitleStyled = styled('span')(() => ({
  fontSize: fontSize[12],
  fontWeight: 'bold',
}))

export const IconButtonStyled = styled(Fab)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
  transform: 'scale(0.8)',
}))
