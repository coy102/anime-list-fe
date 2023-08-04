import { render, screen, within } from '@testing-library/react'

import CoverImage from '~/components/CoverImage'
import { COVER_SIZE } from '~/config/constants'
import { fontSize } from '~/styles/theme'

describe('/components/CoverImage', () => {
  const dataProps = {
    color: '#f1d650',
    coverImage:
      'https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx85486-INqnYx8gL3eX.jpg',
    genres: ['Action', 'Adventure'],
    imageHeight: COVER_SIZE.HEIGHT,
    imageWidth: '100%',
    index: 1,
    score: 75,
    subTitleFontSize: fontSize[10],
    subtitle: 'My Hero Academia',
    title: 'Boku no Hero Academia',
    titleFontSize: fontSize[12],
    totalGenre: 2,
  }

  it('should render CoverImage without image and subtitle', () => {
    render(<CoverImage {...dataProps} coverImage="" subtitle="" />)

    // check valid test id img
    const coverImgSrc = screen.queryByTestId('cover-image-src-1')
    expect(coverImgSrc).not.toBeInTheDocument()

    // check valid test id img placeholder
    const coverImgPlaceholder = screen.getByTestId('cover-image-placeholder-1')
    expect(coverImgPlaceholder).toBeInTheDocument()

    // check valid test id subtitle
    const coverImgSubTitle = screen.queryByTestId('cover-image-subtitle-1')
    expect(coverImgSubTitle).not.toBeInTheDocument()
  })

  it('should render CoverImage with image correctly', () => {
    render(<CoverImage {...dataProps} />)

    const coverImgWrapper = screen.getByTestId('cover-image-wrapper-1')
    expect(coverImgWrapper).toBeInTheDocument()

    // check valid test id img
    const coverImgSrc = screen.getByTestId('cover-image-src-1')
    expect(coverImgSrc).toBeInTheDocument()
    expect(coverImgSrc).toHaveAttribute('src', dataProps.coverImage)

    // check valid test id img placeholder
    const coverImgPlaceholder = screen.queryByTestId('cover-image-placeholder-1')
    expect(coverImgPlaceholder).not.toBeInTheDocument()

    // check valid test id genre wapper
    const coverImgGenreWrapper = screen.getByTestId('cover-image-genre-wrapper-1')
    expect(coverImgGenreWrapper).toBeInTheDocument()

    // check valid test id genre tags
    const wrapperGenreElement = within(coverImgGenreWrapper)
    const tagListItem = wrapperGenreElement.getAllByRole('listitem')
    expect(tagListItem).toHaveLength(2)

    tagListItem.forEach((_, i) => {
      const tagTestIds = screen.getByTestId(`cover-image-genre-${dataProps.index}-${i}`)

      expect(tagTestIds).toBeInTheDocument()
      expect(tagTestIds?.textContent).toContain(dataProps.genres[i])

      const computedTagStyles = window.getComputedStyle(tagTestIds)

      expect(computedTagStyles.backgroundColor).toContain('rgb(241, 214, 80)')
    })

    // check valid test id title
    const coverImgTitle = screen.getByTestId('cover-image-title-1')
    expect(coverImgTitle).toBeInTheDocument()
    expect(coverImgTitle.textContent).toContain(dataProps.title)

    const computedTitleStyles = window.getComputedStyle(coverImgTitle)
    expect(computedTitleStyles.fontSize).toContain(dataProps.titleFontSize)

    // check valid test id subtitle
    const coverImgSubTitle = screen.getByTestId('cover-image-subtitle-1')
    expect(coverImgSubTitle).toBeInTheDocument()
    expect(coverImgSubTitle.textContent).toContain(dataProps.subtitle)

    const computedSubTitleStyles = window.getComputedStyle(coverImgSubTitle)
    expect(computedSubTitleStyles.fontSize).toContain(dataProps.subTitleFontSize)
  })
})
