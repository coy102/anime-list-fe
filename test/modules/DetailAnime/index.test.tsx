import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'

import { MemoryRouter } from 'react-router'

import DetailAnime from '~/modules/DetailAnime'
import { mockedAnimeDetailLazyQuery, useAnimeDetailLazyQuery } from '~/test/mocks'

import * as dummy from './dummy'

describe('~/modules/DetailAnime - ANIME type', () => {
  afterEach(jest.clearAllMocks)

  it('should render loading detail', () => {
    useAnimeDetailLazyQuery.mockImplementation(() => [
      mockedAnimeDetailLazyQuery,
      {
        data: undefined,
        loading: true,
      },
    ])

    render(
      <MemoryRouter>
        <DetailAnime />
      </MemoryRouter>,
    )

    expect(screen.getByTestId('loading-skeleton')).toBeInTheDocument()
    expect(screen.queryByTestId('detail-anime-wrapper')).not.toBeInTheDocument()
  })

  it('should render detail cover image correctly', () => {
    useAnimeDetailLazyQuery.mockImplementation(() => [
      mockedAnimeDetailLazyQuery,
      dummy.responseData,
    ])

    render(
      <MemoryRouter>
        <DetailAnime />
      </MemoryRouter>,
    )

    expect(screen.queryByTestId('loading-skeleton')).not.toBeInTheDocument()
    expect(screen.getByTestId('detail-anime-wrapper')).toBeInTheDocument()

    const coverImage = screen.getByTestId('cover-image-wrapper-detail')

    const anime = dummy.responseData.data.animeDetail

    expect(coverImage).toBeInTheDocument()
    expect(screen.getByTestId('cover-image-src-detail')).toHaveAttribute('src', anime.bannerImage)

    const tagWrapper = screen.getByTestId('cover-image-genre-wrapper-detail')
    const tagWrapperWithin = within(tagWrapper)

    const tagsEl = tagWrapperWithin.getAllByRole('listitem')

    tagsEl.forEach((_, i) => {
      const genre = anime.genres[i]

      const tagWrapper = screen.getByTestId(`cover-image-genre-detail-${i}`)

      expect(tagWrapper.textContent).toContain(genre)

      const style = window.getComputedStyle(tagWrapper)
      expect(style.backgroundColor).toContain('rgb(75, 74, 149)')
    })

    expect(screen.getByTestId('cover-image-score-detail').textContent).toContain(anime.averageScore)
    expect(screen.getByTestId('cover-image-title-detail').textContent).toContain(anime.title.romaji)
    expect(screen.getByTestId('cover-image-subtitle-detail').textContent).toContain(
      anime.title.english,
    )
  })

  it('should render HeaderDetail correctly', () => {
    render(
      <MemoryRouter>
        <DetailAnime />
      </MemoryRouter>,
    )

    const headerDetail = screen.getByTestId('detail-info-wrapper')
    expect(headerDetail).toBeInTheDocument()

    const headerDetailWithin = within(headerDetail)

    expect(headerDetailWithin.getByTestId('detail-season-text').textContent).toContain(
      'Spring 2019',
    )

    expect(headerDetailWithin.getByTestId('detail-anime-text').textContent).toContain(
      'TV • 26 Ep • 24m',
    )

    expect(headerDetailWithin.queryByTestId('detail-manga-text')).not.toBeInTheDocument()
  })

  it('should open and close collection dialog after clicked Add Collection', async () => {
    render(
      <MemoryRouter>
        <DetailAnime />
      </MemoryRouter>,
    )

    const headerDetail = screen.getByTestId('detail-info-wrapper')
    expect(headerDetail).toBeInTheDocument()

    const headerDetailWithin = within(headerDetail)

    const buttonAdd = headerDetailWithin.getByTestId('detail-add-collection')
    expect(buttonAdd).toBeInTheDocument()

    fireEvent.click(buttonAdd)

    const collectionDialog = screen.getByTestId('collection-dialog')
    const collectionDialogWithin = within(collectionDialog)

    expect(collectionDialog).toBeInTheDocument()

    const buttonClose = collectionDialogWithin.getByTestId('collection-dialog-close-button')

    fireEvent.click(buttonClose)

    await waitFor(() => {
      expect(screen.queryByTestId('collection-dialog')).not.toBeInTheDocument()
    })
  })

  it('should render DetailInfo correctly', () => {
    render(
      <MemoryRouter>
        <DetailAnime />
      </MemoryRouter>,
    )

    const detailInfo = screen.getByTestId('media-info-wrapper')
    expect(detailInfo).toBeInTheDocument()

    const detailInfoWithin = within(detailInfo)

    const anime = dummy.responseData.data.animeDetail

    expect(detailInfoWithin.getByTestId('media-info-src')).toHaveAttribute(
      'src',
      anime.coverImage.large,
    )

    expect(detailInfoWithin.getByTestId('media-info-start-date').textContent).toContain(
      'Apr, 06 2019',
    )
    expect(detailInfoWithin.getByTestId('media-info-end-date').textContent).toContain(
      'Sep, 28 2019',
    )
    expect(detailInfoWithin.getByTestId('media-info-studio').textContent).toContain('Ufotable')
    expect(detailInfoWithin.getByTestId('media-info-source').textContent).toContain('Manga')
  })

  it('should render Description correctly', () => {
    render(
      <MemoryRouter>
        <DetailAnime />
      </MemoryRouter>,
    )

    const desc = screen.getByTestId('media-desc-wrapper')
    expect(desc).toBeInTheDocument()

    const descWithin = within(desc)
    const anime = dummy.responseData.data.animeDetail

    expect(descWithin.getByTestId('media-desc-text').innerHTML).toContain(anime.description)
  })
})
