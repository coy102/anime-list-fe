import CardList from './CardList'
import useCustom from './hooks'

const BrowseAnime = () => {
  const { data } = useCustom()

  return (
    <>
      <CardList anime={data.anime} />
    </>
  )
}

export default BrowseAnime
