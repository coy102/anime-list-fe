import { memo } from 'react'

import AddIcon from '@mui/icons-material/Add'

import { COVER_SIZE } from '~/config/constants'

import CoverImage from '../CoverImage'

import { ImageWrapperStyled, HeadWrapperStyled, IconButtonStyled, LinkStyled } from './style'

interface Props {
  color?: string
  coverImage: string
  genres?: any[]
  handleClickAddButton?: () => void
  imageHeight?: string | number
  imageWidth?: string | number
  index: number
  link: string
  score: number
  title: string
  totalGenre?: number
}

const CoverCard = ({
  color = '',
  coverImage,
  genres = [],
  handleClickAddButton,
  index,
  link,
  title,
  imageHeight = COVER_SIZE.HEIGHT,
  imageWidth = '100%',
  totalGenre = 2,
  score,
}: Props) => {
  return (
    <ImageWrapperStyled>
      <HeadWrapperStyled>
        <IconButtonStyled size="small" onClick={handleClickAddButton}>
          <AddIcon />
        </IconButtonStyled>
      </HeadWrapperStyled>
      <LinkStyled to={link}>
        <CoverImage
          color={color}
          coverImage={coverImage}
          data-testid={`cover-image-${index}`}
          genres={genres}
          imageHeight={imageHeight}
          imageWidth={imageWidth}
          score={score}
          title={title}
          totalGenre={totalGenre}
        />
      </LinkStyled>
    </ImageWrapperStyled>
  )
}

export default memo(CoverCard)
