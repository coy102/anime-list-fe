import { Link } from 'react-router-dom'

import { styled } from '@mui/material/styles'

import { fontSize } from '~/styles/theme'

export const ImageWrapperStyled = styled(Link)(() => ({
  position: 'relative',
  textDecoration: 'none',
  color: 'inherit',
}))

export const HeadWrapperStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(2),
  position: 'absolute',
  top: 0,
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
