import { memo } from 'react'

import Toolbar from '@mui/material/Toolbar'

import { AppbarStyled, ImgWrapper, MenuLink, MenuWrapper, NavContainer } from './style'

const Navbar = () => (
  <AppbarStyled data-testid="navbar" position="fixed">
    <Toolbar variant="dense">
      <NavContainer>
        <ImgWrapper>
          <img
            alt="logo"
            data-testid="logo"
            height={40}
            src="/images/anime-logo-min.png"
            width={40}
          />
        </ImgWrapper>
        <MenuWrapper>
          <MenuLink data-testid="menu-link" to="/">
            Browse
          </MenuLink>
          <MenuLink data-testid="menu-link" to="collections">
            Collections
          </MenuLink>
        </MenuWrapper>
      </NavContainer>
    </Toolbar>
  </AppbarStyled>
)

export default memo(Navbar)
