import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import CoverCard from '~/components/CoverCard'
import { COVER_SIZE } from '~/config/constants'

const mockedHandleClickAddButton = jest.fn()
const mockedHandleClickRemoveButton = jest.fn()

describe('~/components/CoverCard', () => {
  const dataProps = {
    color: '#f1d650',
    coverImage:
      'https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx85486-INqnYx8gL3eX.jpg',
    genres: ['Action', 'Adventure'],
    imageHeight: COVER_SIZE.HEIGHT,
    imageWidth: '100%',
    index: 1,
    link: '/anime/123',
    score: 75,
    title: 'Boku no Hero Academia',
    totalGenre: 2,
  }

  it('should render with add icon button', () => {
    render(
      <MemoryRouter>
        <CoverCard {...dataProps} handleClickAddButton={mockedHandleClickAddButton} />
      </MemoryRouter>,
    )

    const wrapperElement = screen.getByTestId('cover-card-wrapper-1')
    expect(wrapperElement).toBeInTheDocument()

    const buttonAddElement = screen.getByTestId('cover-add-btn-1')
    expect(buttonAddElement).toBeInTheDocument()

    const buttonDeleteElement = screen.queryByTestId('cover-delete-btn-1')
    expect(buttonDeleteElement).not.toBeInTheDocument()

    const coverImgWrapper = screen.getByTestId('cover-image-wrapper-1')
    expect(coverImgWrapper).toBeInTheDocument()

    fireEvent.click(buttonAddElement)

    expect(mockedHandleClickAddButton).toHaveBeenCalled()
  })

  it('should render with add remove button', () => {
    render(
      <MemoryRouter>
        <CoverCard {...dataProps} handleClickRemoveButton={mockedHandleClickRemoveButton} />
      </MemoryRouter>,
    )

    const wrapperElement = screen.getByTestId('cover-card-wrapper-1')
    expect(wrapperElement).toBeInTheDocument()

    const buttonAddElement = screen.queryByTestId('cover-add-btn-1')
    expect(buttonAddElement).not.toBeInTheDocument()

    const buttonDeleteElement = screen.getByTestId('cover-delete-btn-1')
    expect(buttonDeleteElement).toBeInTheDocument()

    const coverImgWrapper = screen.getByTestId('cover-image-wrapper-1')
    expect(coverImgWrapper).toBeInTheDocument()

    fireEvent.click(buttonDeleteElement)

    expect(mockedHandleClickRemoveButton).toHaveBeenCalled()
  })
})
