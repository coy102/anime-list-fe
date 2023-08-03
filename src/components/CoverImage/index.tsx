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
  'data-testid': string
  genres?: any[]
  imageHeight?: string | number
  imageWidth?: string | number
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
  'data-testid': testid,
  genres = [],
  imageHeight = COVER_SIZE.HEIGHT,
  imageWidth = '100%',
  subtitle,
  subTitleFontSize = fontSize[10],
  title,
  titleFontSize = fontSize[12],
  totalGenre = 2,
  score,
}: Props) => {
  return (
    <Box position="relative">
      {coverImage && (
        <ImageStyled
          alt=""
          data-testid={testid}
          effect="blur"
          height={imageHeight}
          src={coverImage || ''}
          width={imageWidth}
        />
      )}

      {!coverImage && <Box height={imageHeight} width={imageWidth} />}

      <TitleWrapperStyled>
        <Box alignItems="center" display="flex" width="100%">
          <Box display="flex" flexGrow={1}>
            {genres?.slice(0, totalGenre).map((genre, idxGenre) => (
              <Box key={`genre-tag-${idxGenre}`} mr={1}>
                <Tag bgcolor={color} data-testid={`anime-genere-${idxGenre}`} label={genre || ''} />
              </Box>
            ))}
          </Box>

          <Typography alignContent="end" alignItems="center" display="flex" fontSize={fontSize[12]}>
            <StarOutlineIcon fontSize="small" htmlColor={colors.yellow[100]} />
            {score}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" pb={1}>
          <TitleStyled fontSize={titleFontSize}>{title}</TitleStyled>
          {subtitle && <TitleStyled fontSize={subTitleFontSize}>{subtitle}</TitleStyled>}
        </Box>
      </TitleWrapperStyled>
    </Box>
  )
}

export default memo(CoverImage)
