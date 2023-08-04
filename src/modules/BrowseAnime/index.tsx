import Grid from '@mui/material/Grid'

import CoverCard from '~/components/CoverCard'
import Loading from '~/components/Loading'

import CollectionDialog from '../Collections/components/CollectionDialog'

import useCustom from './hooks'
import { WrapperStyled } from './styled'

const BrowseAnime = () => {
  const {
    store,
    data: { anime, loading },
  } = useCustom()

  return (
    <WrapperStyled>
      <h3 data-testid="title-page">Explore Anime</h3>
      <Grid container spacing={2}>
        {anime?.items?.map((item, i) => (
          <Grid item data-test-id={`anime-card-${i}`} key={`card-${i}`} xs={6}>
            <CoverCard
              color={item?.coverImage?.color || ''}
              coverImage={item?.coverImage?.large || ''}
              genres={item?.genres || []}
              handleClickAddButton={() => store.handleToggleSelectionDialog(item)}
              index={i}
              link={`/${item?.type?.toLowerCase()}/${item?.id}`}
              score={item?.averageScore || 0}
              title={item?.title?.romaji || ''}
            />
          </Grid>
        ))}
      </Grid>
      <Loading loading={loading} />
      <CollectionDialog />
    </WrapperStyled>
  )
}

export default BrowseAnime
