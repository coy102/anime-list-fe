import { memo } from 'react'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Box } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { COVER_SIZE } from '~/config/constants'

import Tag from '../Tag'

import {
  ImageWrapperStyled,
  HeadWrapperStyled,
  IconButtonStyled,
  LinkStyled,
  TitleWrapperStyled,
  TitleStyled,
} from './style'

interface Props {
  color: string
  coverImage: string
  genres: any[]
  index: number
  link: string
  title: string
}

const CoverCard = ({ color, coverImage, genres, index, link, title }: Props) => {
  return (
    <ImageWrapperStyled>
      <HeadWrapperStyled>
        <IconButtonStyled size="small">
          <FavoriteBorderIcon sx={{ p: 0 }} />
        </IconButtonStyled>
      </HeadWrapperStyled>
      <LinkStyled to={link}>
        <LazyLoadImage
          alt=""
          data-test-id={`anime-cover-${index}`}
          effect="blur"
          height={COVER_SIZE.HEIGHT}
          src={coverImage || ''}
          width="100%"
        />

        <TitleWrapperStyled>
          <Box display="flex">
            {genres?.slice(0, 2).map((genre, idxGenre) => (
              <Box key={`genre-tag-${idxGenre}`} mr={1}>
                <Tag bgcolor={color} data-testid={`anime-genere-${idxGenre}`} label={genre || ''} />
              </Box>
            ))}
          </Box>
          <TitleStyled>{title}</TitleStyled>
        </TitleWrapperStyled>
      </LinkStyled>
    </ImageWrapperStyled>
  )
}

export default memo(CoverCard)
