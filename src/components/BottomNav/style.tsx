import { BottomNavigation } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ImgWrapper = styled('div')({
  marginRight: 2,
  paddingTop: 10,
  flexGrow: 1,
})

export const Wrapper = styled(BottomNavigation)({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'start',
  padding: '0px 10px',
})

export const BottomNavStyled = styled('div')({
  bottom: 0,
  maxWidth: 500,
  position: 'fixed',
  right: 'unset',
  width: '100%',
  zIndex: 2,
})

export const FabText = styled('span')({
  padding: '0px 5px',
})
