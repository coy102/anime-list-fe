import { memo } from 'react'

import { Box, Grid } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import Tag from '~/components/Tag'
import { COVER_SIZE } from '~/config/constants'
import { AnimeListQuery } from '~/gqlcodegen/hooks/anime'

import { ImageWrapperStyled, TitleStyled, TitleWrapperStyled } from './style'

interface Props {
  anime: AnimeListQuery['animeList']
}

const CardList = ({ anime }: Props) => {
  return (
    <Grid container spacing={5}>
      {anime?.items?.map((item, idxItem) => (
        <Grid item data-test-id={`anime-card-${idxItem}`} key={`card-${idxItem}`} md={2} xs={6}>
          <ImageWrapperStyled to="/">
            <LazyLoadImage
              alt=""
              data-test-id={`anime-cover-${idxItem}`}
              effect="blur"
              height={COVER_SIZE.HEIGHT}
              src={item?.coverImage?.large || ''}
              width="100%"
            />
            <TitleWrapperStyled>
              <Box display="flex">
                {item?.genres?.slice(0, 1).map((genre, idxGenre) => (
                  <Box key={`genre-tag-${idxGenre}`} mr={1}>
                    <Tag
                      bgcolor={item.coverImage?.color || ''}
                      data-testid={`anime-genere-${idxGenre}`}
                      label={genre || ''}
                    />
                  </Box>
                ))}
              </Box>
              <TitleStyled>{item?.title?.romaji}</TitleStyled>
            </TitleWrapperStyled>
          </ImageWrapperStyled>
        </Grid>
      ))}
    </Grid>
  )
}

export default memo(CardList)
