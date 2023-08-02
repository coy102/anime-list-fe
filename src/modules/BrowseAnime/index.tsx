import { Grid } from '@mui/material'

import CoverCard from '~/components/CoverCard'
import Loading from '~/components/Loading'

import useCustom from './hooks'
import { WrapperStyled } from './styled'

const BrowseAnime = () => {
  const {
    data: { anime, loading },
  } = useCustom()

  return (
    <WrapperStyled>
      <h3>Explore Anime</h3>
      <Grid container spacing={5}>
        {anime?.items?.map((item, i) => (
          <Grid item data-test-id={`anime-card-${i}`} key={`card-${i}`} xs={6}>
            <CoverCard
              color={item?.coverImage?.color || ''}
              coverImage={item?.coverImage?.large || ''}
              genres={item?.genres || []}
              index={i}
              link={`/anime/${item?.id}`}
              title={item?.title?.romaji || ''}
            />
          </Grid>
        ))}
      </Grid>
      <Loading loading={loading} />
    </WrapperStyled>
  )
}

export default BrowseAnime
