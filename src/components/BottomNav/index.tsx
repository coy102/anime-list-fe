import { memo } from 'react'

import { FabText, BottomNavStyled, ImgWrapper, Wrapper } from './style'

const FabMenu = () => {
  return (
    <BottomNavStyled>
      <Wrapper>
        <ImgWrapper>
          <img
            alt="logo"
            data-testid="logo"
            height={40}
            src="/images/anime-logo-min.png"
            width={40}
          />
        </ImgWrapper>
        <FabText>Menu</FabText>
      </Wrapper>
    </BottomNavStyled>
  )
}

export default memo(FabMenu)
