/* eslint-disable sort-keys */
import { fireEvent, render, renderHook, screen, waitFor, within } from '@testing-library/react'

import { MemoryRouter } from 'react-router'

import CollectionList from '~/modules/Collections/CollectionList'
import { useCollectionsStore } from '~/stores/collections'
import { capitalize, isEmpty } from '~/utils/not-lodash'

import * as dummy from '../dummy'

// Mock dayjs to set persist current date
jest.mock('dayjs', () => {
  const originalDayjs = jest.requireActual('dayjs')
  return (date) => {
    if (date) {
      return originalDayjs(date)
    }
    return originalDayjs(dummy.currentDate)
  }
})

describe('~/modules/Collections/CollectionList', () => {
  const listCollectionWrapp = (listCollection: HTMLElement[], source: any[]) => {
    listCollection.forEach((_, i) => {
      const coverItem = screen.getByTestId(`cover-item-wrapper-${i}`)
      const coverItemWithin = within(coverItem)

      const collection = source[i]

      if (isEmpty(collection.items)) {
        expect(coverItemWithin.getByTestId(`cover-item-placeholder-${i}`)).toBeInTheDocument()
      } else {
        expect(coverItemWithin.getByTestId(`cover-item-src-${i}`)).toBeInTheDocument()
        expect(coverItemWithin.getByTestId(`cover-item-src-${i}`)).toHaveAttribute(
          'src',
          collection.items[0].cover,
        )
      }

      expect(coverItemWithin.getByTestId(`cover-item-title-${i}`).textContent).toContain(
        capitalize(collection.name),
      )

      expect(coverItemWithin.getByTestId(`cover-item-subtitle-${i}`).textContent).toContain(
        `${collection.items.length} collections`,
      )
    })
  }

  it('should first render collection list', () => {
    renderHook(() =>
      useCollectionsStore.setState({
        collections: dummy.defaultCollection.state.collections,
      }),
    )
    render(
      <MemoryRouter>
        <CollectionList />
      </MemoryRouter>,
    )

    const collectionList = screen.getByTestId('collection-list-wrapper-page')
    expect(collectionList).toBeInTheDocument()

    const collectionListWithin = within(collectionList)
    const listCollection = collectionListWithin.queryAllByRole('listitem')

    expect(listCollection).toHaveLength(2)
    listCollectionWrapp(listCollection, dummy.defaultCollection.state.collections)
  })

  it('Should open manage dialog to add new collection', async () => {
    render(
      <MemoryRouter>
        <CollectionList />
      </MemoryRouter>,
    )

    const collectionList = screen.getByTestId('collection-list-wrapper-page')
    expect(collectionList).toBeInTheDocument()

    const collectionListWithin = within(collectionList)

    // Show manage collection dialog
    fireEvent.click(collectionListWithin.getByTestId('add-collection-btn'))

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
        <CollectionList />
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
  })

  it('should render error "Please input character only!" after submit', async () => {
    render(
      <MemoryRouter>
        <CollectionList />
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
        <CollectionList />
      </MemoryRouter>,
    )

    const manageDialogElement = screen.getByTestId('manage-collection-dialog')
    const manageDialogElementWithin = within(manageDialogElement)
    expect(manageDialogElement).toBeInTheDocument()

    const inputElement = manageDialogElementWithin.getByTestId('collection-input')
    const saveBtnElement = manageDialogElementWithin.getByTestId('manage-collection-dialog-save')

    fireEvent.change(inputElement, { target: { value: dummy.newCollection } })
    fireEvent.click(saveBtnElement)

    expect(
      manageDialogElementWithin.queryByTestId('manage-collection-error-msg'),
    ).not.toBeInTheDocument()

    await waitFor(() => {
      // Close the dialog after collection is saved
      expect(screen.queryByTestId('manage-collection-dialog')).not.toBeInTheDocument()
    })

    const collectionList = screen.getByTestId('collection-list-wrapper-page')
    expect(collectionList).toBeInTheDocument()

    const collectionListWithin = within(collectionList)
    const listCollection = collectionListWithin.queryAllByRole('listitem')

    expect(listCollection).toHaveLength(3)
    listCollectionWrapp(listCollection, dummy.resultCollection.state.collections)
  })

  it('should success edit collection', async () => {
    render(
      <MemoryRouter>
        <CollectionList />
      </MemoryRouter>,
    )

    const collectionList = screen.getByTestId('collection-list-wrapper-page')
    expect(collectionList).toBeInTheDocument()

    const collectionListWithin = within(collectionList)

    // Show manage collection dialog edit collection no 3 with index 2
    fireEvent.click(collectionListWithin.getByTestId('edit-btn-2'))

    const manageDialogElement = screen.getByTestId('manage-collection-dialog')
    const manageDialogElementWithin = within(manageDialogElement)

    await waitFor(() => {
      expect(manageDialogElement).toBeInTheDocument()
    })

    const inputElement = manageDialogElementWithin.getByTestId('collection-input')
    const saveBtnElement = manageDialogElementWithin.getByTestId('manage-collection-dialog-save')

    expect(inputElement).toHaveAttribute('value', dummy.newCollection)
    fireEvent.change(inputElement, { target: { value: dummy.updatedCollection } })
    fireEvent.click(saveBtnElement)

    await waitFor(() => {
      // Close the dialog after collection is saved
      expect(screen.queryByTestId('manage-collection-dialog')).not.toBeInTheDocument()
    })

    const listCollection = collectionListWithin.queryAllByRole('listitem')
    expect(listCollection).toHaveLength(3)
    listCollectionWrapp(listCollection, dummy.updatedCollectionResult.state.collections)
  })

  it('should render alert dialog to delete collection', async () => {
    render(
      <MemoryRouter>
        <CollectionList />
      </MemoryRouter>,
    )

    const collectionList = screen.getByTestId('collection-list-wrapper-page')
    expect(collectionList).toBeInTheDocument()

    const collectionListWithin = within(collectionList)

    // Show manage collection dialog edit collection no 3 with index 2
    fireEvent.click(collectionListWithin.getByTestId('delete-btn-2'))

    const alertDialog = screen.getByTestId('alert-dialog')
    const alertDialogWithin = within(alertDialog)

    await waitFor(() => {
      expect(alertDialog).toBeInTheDocument()
    })

    fireEvent.click(alertDialogWithin.getByTestId('alert-ok-btn'))

    await waitFor(() => {
      // Close the dialog
      expect(screen.queryByTestId('alert-dialog')).not.toBeInTheDocument()
    })

    const listCollection = collectionListWithin.queryAllByRole('listitem')
    expect(listCollection).toHaveLength(2)
    listCollectionWrapp(listCollection, dummy.resultCollection.state.collections)
  })
})
