import { Link } from 'react-router-dom'

import { AppBar, Container } from '@mui/material'
import { styled } from '@mui/material/styles'

import { fontSize } from '~/styles/theme'

export const NavContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
})

export const ImgWrapper = styled('div')({
  flexGrow: 1,
})

export const MenuWrapper = styled('div')({
  justifyContent: 'flex-end',
})

export const MenuLink = styled(Link)(({ theme }) => ({
  '&:first-of-type': {
    marginRight: 20,
  },
  color: theme.palette.common.white,
  fontSize: fontSize[14],
  fontWeight: 'bold',
  textDecoration: 'none',
}))

export const AppbarStyled = styled(AppBar)({
  maxWidth: 500,
  margin: '0px auto',
  right: 'unset',
})
