import { NetworkStatus } from '@apollo/client'
import { Grid } from '@mui/material'
import LazyLoad from 'react-lazyload'
import { Waypoint } from 'react-waypoint'

import CoverCard from '~/components/CoverCard'
import CoverSkeleton from '~/components/CoverSkeleton'
import Loading from '~/components/Loading'

import useCustom from './hooks'

const BrowseAnime = () => {
  const {
    data: { anime, networkStatus },
    methods,
  } = useCustom()

  // Render loading on first load

  return (
    <>
      <Grid container spacing={5}>
        {anime?.items?.map((item, i) => (
          <Grid item data-test-id={`anime-card-${i}`} key={`card-${i}`} md={2} xs={6}>
            <LazyLoad debounce={300} placeholder={<CoverSkeleton />}>
              <CoverCard
                color={item?.coverImage?.color || ''}
                coverImage={item?.coverImage?.large || ''}
                genres={item?.genres || []}
                index={i}
                title={item?.title?.romaji || ''}
              />
              {i === (anime?.items?.length || 0) - 1 && (
                <Waypoint bottomOffset={0} onEnter={methods.handeLoadMore} />
              )}

              {networkStatus === NetworkStatus.loading && <Loading loading />}
            </LazyLoad>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default BrowseAnime
