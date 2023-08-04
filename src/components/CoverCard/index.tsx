import { memo } from 'react'

import AddIcon from '@mui/icons-material/Add'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'

import { COVER_SIZE } from '~/config/constants'

import CoverImage from '../CoverImage'

import { ImageWrapperStyled, HeadWrapperStyled, IconButtonStyled, LinkStyled } from './style'

interface Props {
  color?: string
  coverImage: string
  genres?: any[]
  handleClickAddButton?: () => void
  handleClickRemoveButton?: () => void
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
  handleClickAddButton = undefined,
  handleClickRemoveButton = undefined,
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
        {handleClickAddButton && (
          <IconButtonStyled size="small" onClick={handleClickAddButton}>
            <AddIcon />
          </IconButtonStyled>
        )}
        {handleClickRemoveButton && (
          <IconButtonStyled size="small" onClick={handleClickRemoveButton}>
            <DeleteRoundedIcon color="error" />
          </IconButtonStyled>
        )}
      </HeadWrapperStyled>
      <LinkStyled to={link}>
        <CoverImage
          color={color}
          coverImage={coverImage}
          genres={genres}
          imageHeight={imageHeight}
          imageWidth={imageWidth}
          index={index}
          score={score}
          title={title}
          totalGenre={totalGenre}
        />
      </LinkStyled>
    </ImageWrapperStyled>
  )
}

export default memo(CoverCard)
