import { Link } from 'react-router-dom'

import { AppBar, Container } from '@mui/material'
import { styled } from '@mui/material/styles'

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
  color: theme.palette.common.white,
  fontWeight: 'bold',
  textDecoration: 'none',
}))

export const AppbarStyled = styled(AppBar)({
  maxWidth: 500,
  margin: '0px auto',
  right: 'unset',
})
