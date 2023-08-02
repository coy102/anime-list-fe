import { styled } from '@mui/material/styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const ImageStyled = styled(LazyLoadImage)(() => ({
  objectFit: 'cover',
}))

export const TitleWrapperStyled = styled('div')(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.5)',
  bottom: 0,
  marginBottom: 6,
  padding: theme.spacing(1),
  position: 'absolute',
  width: '100%',
}))

interface TitleStyledProps {
  fontSize: string | number
}

export const TitleStyled = styled('span')<TitleStyledProps>(({ fontSize }) => ({
  fontSize: fontSize,
  fontWeight: 'bold',
}))
