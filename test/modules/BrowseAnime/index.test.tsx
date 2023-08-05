import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'

import { MemoryRouter } from 'react-router'

import BrowseAnime from '~/modules/BrowseAnime'
import { mockedAnimeListLazyQuery, useAnimeListLazyQuery } from '~/test/mocks'
import { capitalize } from '~/utils/not-lodash'

import {
  collectionList,
  collectionName1st,
  collectionName2nd,
  currentDate,
  emptyAnimeList,
  initialAnimeListResponseData,
} from './dummy'

// Mock dayjs to set persist current date
jest.mock('dayjs', () => {
  const originalDayjs = jest.requireActual('dayjs')
  return (date) => {
    if (date) {
      return originalDayjs(date)
    }
    return originalDayjs(currentDate)
  }
})

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

  it('should open collection dialog at first time', async () => {
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

    await waitFor(() => {
      expect(dialogWrapperElement).toBeInTheDocument()
    })

    const dialogTitleElement = screen.getByTestId('collection-dialog-title')
    expect(dialogTitleElement.textContent).toContain(animeData.title.romaji)

    const listWrapperElement = screen.getByTestId('collection-list-wrapper')
    const listWrapperWithin = within(listWrapperElement)

    const coverItemList = listWrapperWithin.queryAllByRole('listitem')
    expect(coverItemList).toHaveLength(0)
  })

  it('Should open manage dialog to add new collection', async () => {
    render(
      <MemoryRouter>
        <BrowseAnime />
      </MemoryRouter>,
    )

    const dialogWrapperElement = screen.getByTestId('collection-dialog')
    const dialogWrapperWithin = within(dialogWrapperElement)

    const buttonAddCollection = dialogWrapperWithin.getByTestId('collection-dialog-new-button')

    // Show manage collection dialog
    fireEvent.click(buttonAddCollection)

    const manageDialogElement = screen.getByTestId('manage-collection-dialog')

    await waitFor(() => {
      expect(manageDialogElement).toBeInTheDocument()
    })

    const manageTitleDialogElement = screen.queryByTestId('manage-collection-dialog-title')
    expect(manageTitleDialogElement?.textContent).toContain('Add Collection')
  })

  it('should render error "Collection name is required!" after submit', async () => {
    render(
      <MemoryRouter>
        <BrowseAnime />
      </MemoryRouter>,
    )

    const manageDialogElement = screen.getByTestId('manage-collection-dialog')
    const manageDialogElementWithin = within(manageDialogElement)
    expect(manageDialogElement).toBeInTheDocument()

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

  it('should render error "Please input character only!" after submit', async () => {
    render(
      <MemoryRouter>
        <BrowseAnime />
      </MemoryRouter>,
    )

    const manageDialogElement = screen.getByTestId('manage-collection-dialog')
    const manageDialogElementWithin = within(manageDialogElement)
    expect(manageDialogElement).toBeInTheDocument()

    const inputElement = manageDialogElementWithin.getByTestId('collection-input')
    const saveBtnElement = manageDialogElementWithin.getByTestId('manage-collection-dialog-save')

    // show error character not valid
    fireEvent.change(inputElement, { target: { value: '@#$@' } })
    fireEvent.click(saveBtnElement)

    expect(
      manageDialogElementWithin.getByTestId('manage-collection-error-msg').textContent,
    ).toContain('Please input character only!')
  })

  it('should success create new collection', async () => {
    render(
      <MemoryRouter>
        <BrowseAnime />
      </MemoryRouter>,
    )

    const manageDialogElement = screen.getByTestId('manage-collection-dialog')
    const manageDialogElementWithin = within(manageDialogElement)
    expect(manageDialogElement).toBeInTheDocument()

    const inputElement = manageDialogElementWithin.getByTestId('collection-input')
    const saveBtnElement = manageDialogElementWithin.getByTestId('manage-collection-dialog-save')

    fireEvent.change(inputElement, { target: { value: collectionName1st } })
    fireEvent.click(saveBtnElement)

    expect(
      manageDialogElementWithin.queryByTestId('manage-collection-error-msg'),
    ).not.toBeInTheDocument()

    await waitFor(() => {
      // Close the dialog after collection is saved
      expect(screen.queryByTestId('manage-collection-dialog')).not.toBeInTheDocument()
    })

    const listWrapperElement = screen.getByTestId('collection-list-wrapper')
    const listWrapperWithin = within(listWrapperElement)

    const coverItemList = listWrapperWithin.queryAllByRole('listitem')
    expect(coverItemList).toHaveLength(1)
  })

  it('should add new collection dialog and save with the same collection', async () => {
    render(
      <MemoryRouter>
        <BrowseAnime />
      </MemoryRouter>,
    )

    const dialogWrapperElement = screen.getByTestId('collection-dialog')
    const dialogWrapperWithin = within(dialogWrapperElement)

    const buttonAddCollection = dialogWrapperWithin.getByTestId('collection-dialog-new-button')

    // Show manage collection dialog
    fireEvent.click(buttonAddCollection)

    const manageDialogElement = screen.getByTestId('manage-collection-dialog')
    const manageDialogElementWithin = within(manageDialogElement)

    await waitFor(() => {
      expect(manageDialogElement).toBeInTheDocument()
    })

    const inputElement = manageDialogElementWithin.getByTestId('collection-input')
    const saveBtnElement = manageDialogElementWithin.getByTestId('manage-collection-dialog-save')

    fireEvent.change(inputElement, { target: { value: collectionName1st } })
    fireEvent.click(saveBtnElement)

    expect(
      manageDialogElementWithin.getByTestId('manage-collection-error-msg').textContent,
    ).toContain(`${collectionName1st} already exist`)
  })

  it('should add 2nd collection', async () => {
    render(
      <MemoryRouter>
        <BrowseAnime />
      </MemoryRouter>,
    )

    const manageDialogElement = screen.getByTestId('manage-collection-dialog')
    const manageDialogElementWithin = within(manageDialogElement)

    await waitFor(() => {
      expect(manageDialogElement).toBeInTheDocument()
    })

    const inputElement = manageDialogElementWithin.getByTestId('collection-input')
    const saveBtnElement = manageDialogElementWithin.getByTestId('manage-collection-dialog-save')

    fireEvent.change(inputElement, { target: { value: collectionName2nd } })
    fireEvent.click(saveBtnElement)

    expect(
      manageDialogElementWithin.queryByTestId('manage-collection-error-msg'),
    ).not.toBeInTheDocument()

    await waitFor(() => {
      // Close the dialog after collection is saved
      expect(screen.queryByTestId('manage-collection-dialog')).not.toBeInTheDocument()
    })

    const listWrapperElement = screen.getByTestId('collection-list-wrapper')
    const listWrapperWithin = within(listWrapperElement)

    const coverItemList = listWrapperWithin.queryAllByRole('listitem')
    expect(coverItemList).toHaveLength(2)
  })

  it('should render the collection list without anime inside', () => {
    render(
      <MemoryRouter>
        <BrowseAnime />
      </MemoryRouter>,
    )

    const listWrapperElement = screen.getByTestId('collection-list-wrapper')
    const listWrapperWithin = within(listWrapperElement)

    const coverItemList = listWrapperWithin.queryAllByRole('listitem')
    expect(coverItemList).toHaveLength(2)

    coverItemList.forEach((_, i) => {
      const coverTestId = screen.getByTestId(`cover-item-wrapper-${i}`)
      const coverContentWithin = within(coverTestId)

      const collections = collectionList[i]

      if (collections.items.length > 0) {
        const coverActionDoneIcon = coverContentWithin.getByTestId(`cover-item-done-icon-${i}`)
        expect(coverActionDoneIcon).toBeInTheDocument()
      } else {
        const coverActionAddIcon = coverContentWithin.getByTestId(`cover-item-add-icon-${i}`)
        expect(coverActionAddIcon).toBeInTheDocument()
      }

      const coverItemImgElement = coverContentWithin.queryByTestId(`cover-item-src-${i}`)
      expect(coverItemImgElement).not.toBeInTheDocument()

      const coverItemPlaceholderElement = coverContentWithin.queryByTestId(
        `cover-item-placeholder-${i}`,
      )
      expect(coverItemPlaceholderElement).toBeInTheDocument()

      const coverItemTitleElement = coverContentWithin.getByTestId(`cover-item-title-${i}`)
      expect(coverItemTitleElement.textContent).toContain(capitalize(collections.name))

      const coverItemSubTitleElement = coverContentWithin.getByTestId(`cover-item-subtitle-${i}`)
      expect(coverItemSubTitleElement.textContent).toContain(
        `${collections.items.length} collections`,
      )
    })
  })

  it('should insert anime into "My Collections" correctly', async () => {
    render(
      <MemoryRouter>
        <BrowseAnime />
      </MemoryRouter>,
    )

    const coverTestId = screen.getByTestId(`cover-item-wrapper-0`)
    const coverContentWithin = within(coverTestId)

    const coverActionAddIcon = coverContentWithin.getByTestId(`cover-item-add-icon-0`)

    fireEvent.click(coverActionAddIcon)

    await waitFor(() => {
      expect(coverContentWithin.queryByTestId(`cover-item-add-icon-0`)).not.toBeInTheDocument()
      expect(coverContentWithin.getByTestId(`cover-item-done-icon-0`)).toBeInTheDocument()

      const coverItemSubTitleElement = coverContentWithin.getByTestId(`cover-item-subtitle-0`)
      expect(coverItemSubTitleElement.textContent).toContain(`1 collections`)
    })
  })

  it('should close the collection dialog', async () => {
    render(
      <MemoryRouter>
        <BrowseAnime />
      </MemoryRouter>,
    )

    const closeButtonElement = screen.getByTestId('collection-dialog-close-button')

    fireEvent.click(closeButtonElement)

    await waitFor(() => {
      expect(screen.queryByTestId('collection-dialog')).not.toBeInTheDocument()
    })
  })
})
