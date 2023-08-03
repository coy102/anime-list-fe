import { styled } from '@mui/material/styles'

export const ScrollContainerStyled = styled('div')(() => ({
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
  scrollbarWidth: 'none',
  width: '100%',
}))
