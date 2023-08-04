import { fireEvent, render, screen, within } from '@testing-library/react'

import { MemoryRouter } from 'react-router'

import BrowseAnime from '~/modules/BrowseAnime'
import { mockedAnimeListLazyQuery, useAnimeListLazyQuery } from '~/test/mocks'

import { emptyAnimeList, initialAnimeListResponseData } from './dummy'

describe('~/modules/BrowseAnime', () => {
  afterEach(jest.clearAllMocks)

  it('should render at the first time with loading', () => {
    useAnimeListLazyQuery.mockImplementation(() => [mockedAnimeListLazyQuery, emptyAnimeList])

    render(
      <MemoryRouter>
        <BrowseAnime />
      </MemoryRouter>,
    )

    const titleElement = screen.getByTestId('title-page')
    expect(titleElement).toBeInTheDocument()

    const loadingElement = screen.getByTestId('loading')
    expect(loadingElement).toBeInTheDocument()
  })

  it('should render list anime', () => {
    useAnimeListLazyQuery.mockImplementation(() => [
      mockedAnimeListLazyQuery,
      initialAnimeListResponseData,
    ])

    render(
      <MemoryRouter>
        <BrowseAnime />
      </MemoryRouter>,
    )

    const titleElement = screen.getByTestId('title-page')
    expect(titleElement).toBeInTheDocument()

    const loadingElement = screen.queryByTestId('loading')
    expect(loadingElement).not.toBeInTheDocument()

    const gridWrapper = screen.getByTestId('grid-wrapper')
    expect(gridWrapper).toBeInTheDocument()

    const gridWrapperWithin = within(gridWrapper)
    const gridListItem = gridWrapperWithin.getAllByRole('listbox')

    expect(gridListItem).toHaveLength(10)

    // Check grid cover card
    gridListItem.forEach((_, i) => {
      const cardTestId = screen.getByTestId(`cover-card-wrapper-${i}`)
      const cardContentWithin = within(cardTestId)

      expect(cardTestId).toBeInTheDocument()

      const animeData = initialAnimeListResponseData.data.animeList.items[i]

      const imgCoverElement = cardContentWithin.getByTestId(`cover-image-src-${i}`)
      expect(imgCoverElement).toHaveAttribute('src', animeData.coverImage.large)

      const btnAddElement = cardContentWithin.getByTestId(`cover-add-btn-${i}`)
      expect(btnAddElement).toBeInTheDocument()

      const scoreElement = cardContentWithin.getByTestId(`cover-image-score-${i}`)
      expect(scoreElement?.textContent).toContain(animeData.averageScore)

      const titleElement = cardContentWithin.getByTestId(`cover-image-title-${i}`)
      expect(titleElement?.textContent).toContain(animeData.title.romaji)

      const subtitleElement = cardContentWithin.queryByTestId(`cover-image-subtitle-${i}`)
      expect(subtitleElement).not.toBeInTheDocument()
    })
  })

  it('should open collection dialog at first time', () => {
    render(
      <MemoryRouter>
        <BrowseAnime />
      </MemoryRouter>,
    )

    const animeData = initialAnimeListResponseData.data.animeList.items[0]

    // Test open dialog collection using index 0
    const cardTestId = screen.getByTestId('cover-card-wrapper-0')
    const cardContentWithin = within(cardTestId)

    const buttonAddElement = cardContentWithin.getByTestId('cover-add-btn-0')

    fireEvent.click(buttonAddElement)

    const dialogWrapperElement = screen.getByTestId('collection-dialog')
    expect(dialogWrapperElement).toBeInTheDocument()

    const dialogTitleElement = screen.getByTestId('collection-dialog-title')
    expect(dialogTitleElement.textContent).toContain(animeData.title.romaji)

    const listWrapperElement = screen.getByTestId('collection-list-wrapper')
    const listWrapperWithin = within(listWrapperElement)

    const coverItemList = listWrapperWithin.queryAllByRole('listitem')
    expect(coverItemList).toHaveLength(0)
  })

  it('Collection dialog still open', () => {
    render(
      <MemoryRouter>
        <BrowseAnime />
      </MemoryRouter>,
    )

    const dialogWrapperElement = screen.getByTestId('collection-dialog')
    expect(dialogWrapperElement).toBeInTheDocument()
  })

  it('should add new collection and insert anime into collection', async () => {
    render(
      <MemoryRouter>
        <BrowseAnime />
      </MemoryRouter>,
    )

    // const animeData = initialAnimeListResponseData.data.animeList.items[0]

    // Test open dialog collection using index 0
    const cardTestId = screen.getByTestId('cover-card-wrapper-0')
    const cardContentWithin = within(cardTestId)

    const buttonAddElement = cardContentWithin.getByTestId('cover-add-btn-0')

    // Show selection collection dialog
    fireEvent.click(buttonAddElement)

    const dialogWrapperElement = screen.getByTestId('collection-dialog')
    const dialogWrapperWithin = within(dialogWrapperElement)

    const buttonAddCollection = dialogWrapperWithin.getByTestId('collection-dialog-new-button')

    // Show manage collection dialog
    fireEvent.click(buttonAddCollection)

    const manageDialogElement = screen.getByTestId('manage-collection-dialog')
    expect(manageDialogElement).toBeInTheDocument()

    const manageTitleDialogElement = screen.queryByTestId('manage-collection-dialog-title')
    expect(manageTitleDialogElement?.textContent).toContain('Add Collection')

    const manageDialogElementWithin = within(manageDialogElement)

    const inputElement = manageDialogElementWithin.getByTestId('collection-input')
    const saveBtnElement = manageDialogElementWithin.getByTestId('manage-collection-dialog-save')

    // show input is required
    fireEvent.change(inputElement, { target: { value: '' } })
    fireEvent.click(saveBtnElement)

    expect(
      manageDialogElementWithin.getByTestId('manage-collection-error-msg').textContent,
    ).toContain('Collection name is required!')

    // show error character not valid
    fireEvent.change(inputElement, { target: { value: '@#$@' } })
    fireEvent.click(saveBtnElement)

    expect(
      manageDialogElementWithin.getByTestId('manage-collection-error-msg').textContent,
    ).toContain('Please input character only!')
  })
})
