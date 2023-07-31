import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'

export const CardStyled = styled(Card)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
}))

export const CardGenreStyled = styled('div')(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  padding: theme.spacing(1),
}))

export const CardContentStyled = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
}))
