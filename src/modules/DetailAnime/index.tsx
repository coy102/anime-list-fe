import CoverImage from '~/components/CoverImage'
import Footer from '~/components/Footer'
import { fontSize } from '~/styles/theme'
import { isEmpty } from '~/utils/not-lodash'

import CollectionDialog from '../Collections/components/CollectionDialog'

import Characters from './components/Characters'
import Description from './components/Description'
import DetailInfo from './components/DetailInfo'
import HeaderDetail from './components/HeaderDetail'
import LoadingSkeleton from './components/LoadingSkeleton'
import RelatedContent from './components/RelatedContent'
import useCustom from './hooks'

const DetailAnime = () => {
  const { store, data } = useCustom()
  const { anime, loading } = data

  if (loading || isEmpty(anime)) return <LoadingSkeleton />

  const relations = anime?.relations?.edges
  const characters = anime?.characterPreview?.edges

  return (
    <div data-testid="detail-anime-wrapper">
      <CoverImage
        color={anime?.coverImage?.color || ''}
        coverImage={anime?.bannerImage || ''}
        genres={anime?.genres || []}
        imageHeight={250}
        index="detail"
        score={anime?.averageScore || 0}
        subTitleFontSize={fontSize[12]}
        subtitle={anime?.title?.english || ''}
        title={anime?.title?.romaji || ''}
        titleFontSize={fontSize[18]}
        totalGenre={10}
      />
      <HeaderDetail
        chapters={anime?.chapters || 0}
        duration={anime?.duration || 0}
        episodes={anime?.episodes || 0}
        format={anime?.format || ''}
        handleToggleSelectionDialog={() => store.handleToggleSelectionDialog(anime)}
        season={anime?.season || ''}
        seasonYear={anime?.seasonYear || 0}
        volumes={anime?.volumes || 0}
      />

      <DetailInfo
        coverImage={anime?.coverImage?.large || ''}
        endDate={anime?.endDate || {}}
        source={anime?.source || ''}
        startDate={anime?.startDate || {}}
        studios={anime?.studios}
      />

      <Description description={anime?.description || ''} />

      {!isEmpty(relations) && <RelatedContent relations={relations} />}
      {!isEmpty(characters) && <Characters characters={characters} />}

      <CollectionDialog />
      <Footer />
    </div>
  )
}

export default DetailAnime
