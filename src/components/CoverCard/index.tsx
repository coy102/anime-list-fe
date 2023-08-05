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
    <ImageWrapperStyled data-testid={`cover-card-wrapper-${index}`} role="listitem">
      <HeadWrapperStyled data-testid={`cover-card-head-${index}`}>
        {handleClickAddButton && (
          <IconButtonStyled
            data-testid={`cover-add-btn-${index}`}
            size="small"
            onClick={handleClickAddButton}
          >
            <AddIcon />
          </IconButtonStyled>
        )}
        {handleClickRemoveButton && (
          <IconButtonStyled
            data-testid={`cover-delete-btn-${index}`}
            size="small"
            onClick={handleClickRemoveButton}
          >
            <DeleteRoundedIcon color="error" />
          </IconButtonStyled>
        )}
      </HeadWrapperStyled>
      <LinkStyled data-testid={`cover-link-${index}`} to={link}>
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
