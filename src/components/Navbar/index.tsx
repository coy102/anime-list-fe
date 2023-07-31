import { memo } from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import { ImgWrapper, MenuLink, MenuWrapper, NavContainer } from './style'

const Navbar = () => (
  <AppBar data-testid="navbar" position="static">
    <Toolbar>
      <NavContainer>
        <ImgWrapper>
          <img alt="logo" data-testid="logo" src="/images/anime-logo-min.png" width={50} />
        </ImgWrapper>
        <MenuWrapper>
          <MenuLink data-testid="menu-link" to="collections">
            Collections
          </MenuLink>
        </MenuWrapper>
      </NavContainer>
    </Toolbar>
  </AppBar>
)

export default memo(Navbar)
