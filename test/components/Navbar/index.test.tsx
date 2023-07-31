import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Navbar from '~/components/Navbar'

describe('~/components/Navbar', () => {
  it('should render the Navbar', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )

    const nabar = screen.getByTestId('navbar')
    expect(nabar).toBeInTheDocument()

    const logoElement = screen.getByTestId('logo')
    expect(logoElement).toBeInTheDocument()

    const collectionsLink = screen.getByTestId('menu-link')
    expect(collectionsLink).toBeInTheDocument()
    expect(collectionsLink.getAttribute('href')).toBe('/collections')
    expect(collectionsLink).toHaveTextContent('Collections')
  })
})
