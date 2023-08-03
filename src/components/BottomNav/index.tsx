import { memo } from 'react'

import { FabStyled, FabText, FabWrapperStyled, ImgWrapper } from './style'

const FabMenu = () => {
  return (
    <FabWrapperStyled>
      <FabStyled variant="extended">
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
      </FabStyled>
    </FabWrapperStyled>
  )
}

export default memo(FabMenu)
