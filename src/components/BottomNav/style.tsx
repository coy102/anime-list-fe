import { Fab } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ImgWrapper = styled('div')({
  paddingTop: 8,
  marginRight: 2,
  marginLeft: -10,
})

export const FabWrapperStyled = styled('div')({
  bottom: 15,
  margin: '0px auto',
  maxWidth: 500,
  padding: 10,
  position: 'fixed',
  right: 'unset',
})

export const FabStyled = styled(Fab)({
  zIndex: 2,
})

export const FabText = styled('span')({
  padding: '0px 5px',
})
