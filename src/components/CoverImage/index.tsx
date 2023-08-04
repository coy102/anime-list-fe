import { memo } from 'react'

import StarOutlineIcon from '@mui/icons-material/StarOutline'
import { Box, Typography } from '@mui/material'

import { COVER_SIZE } from '~/config/constants'
import { colors, fontSize } from '~/styles/theme'

import Tag from '../Tag'

import { TitleWrapperStyled, TitleStyled, ImageStyled } from './style'

interface Props {
  color?: string
  coverImage: string
  genres?: any[]
  imageHeight?: string | number
  imageWidth?: string | number
  index?: number | string
  score: number
  subTitleFontSize?: string | number
  subtitle?: string
  title: string
  titleFontSize?: string | number
  totalGenre?: number
}

const CoverImage = ({
  color = '',
  coverImage,
  genres = [],
  imageHeight = COVER_SIZE.HEIGHT,
  imageWidth = '100%',
  index,
  subtitle,
  subTitleFontSize = fontSize[10],
  title,
  titleFontSize = fontSize[12],
  totalGenre = 2,
  score,
}: Props) => {
  return (
    <Box data-testid={`cover-image-wrapper-${index}`} position="relative">
      {coverImage && (
        <ImageStyled
          alt=""
          data-testid={`cover-image-src-${index}`}
          effect="blur"
          height={imageHeight}
          src={coverImage || ''}
          width={imageWidth}
        />
      )}

      {!coverImage && (
        <Box
          data-testid={`cover-image-placeholder-${index}`}
          height={imageHeight}
          width={imageWidth}
        />
      )}

      <TitleWrapperStyled>
        <Box alignItems="center" display="flex" width="100%">
          <Box data-testid={`cover-image-genre-wrapper-${index}`} display="flex" flexGrow={1}>
            {genres?.slice(0, totalGenre).map((genre, idxGenre) => (
              <Box key={`genre-tag-${index}-${idxGenre}`} mr={1}>
                <Tag
                  bgcolor={color}
                  data-testid={`cover-image-genre-${index}-${idxGenre}`}
                  label={genre || ''}
                />
              </Box>
            ))}
          </Box>

          <Typography
            alignContent="end"
            alignItems="center"
            data-testid={`cover-image-score-${index}`}
            display="flex"
            fontSize={fontSize[12]}
          >
            <StarOutlineIcon fontSize="small" htmlColor={colors.yellow[100]} />
            {score}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" pb={1}>
          <TitleStyled data-testid={`cover-image-title-${index}`} fontSize={titleFontSize}>
            {title}
          </TitleStyled>
          {subtitle && (
            <TitleStyled data-testid={`cover-image-subtitle-${index}`} fontSize={subTitleFontSize}>
              {subtitle}
            </TitleStyled>
          )}
        </Box>
      </TitleWrapperStyled>
    </Box>
  )
}

export default memo(CoverImage)
