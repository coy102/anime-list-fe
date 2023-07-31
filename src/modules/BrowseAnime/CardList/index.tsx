import { memo } from 'react'

import { Box, Card, Chip, Grid } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { AnimeListQuery } from '~/gqlcodegen/hooks/anime'
import { colors, fontSize } from '~/styles/theme'

import { CardContentStyled, CardGenreStyled } from './style'

interface Props {
  anime: AnimeListQuery['animeList']
}

const CardList = ({ anime }: Props) => {
  return (
    <Grid container spacing={5}>
      {anime?.items?.map((item, idxItem) => (
        <Grid item key={`anime-card-item-${idxItem}`} md={4} xs={12}>
          <Card>
            <Box
              color={colors.primary[300]}
              fontSize={fontSize[14]}
              fontWeight="bold"
              mt={2}
              textAlign="center"
            >
              {item?.title?.romaji}
            </Box>
            <CardGenreStyled>
              {item?.genres?.slice(0, 3).map((genre, idxGenre) => (
                <Chip key={`genre-${idxGenre}`} label={genre} size="small" />
              ))}
            </CardGenreStyled>
            <CardContentStyled>
              <LazyLoadImage
                alt=""
                effect="blur"
                height={247}
                src={item?.coverImage?.large || ''}
                width={167}
              />
            </CardContentStyled>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default memo(CardList)
