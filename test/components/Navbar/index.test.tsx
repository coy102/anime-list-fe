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

    const navbar = screen.getByTestId('navbar')
    expect(navbar).toBeInTheDocument()

    const logoElement = screen.getByTestId('logo')
    expect(logoElement).toBeInTheDocument()

    const browseLink = screen.getByTestId('menu-link-browse')
    expect(browseLink).toBeInTheDocument()
    expect(browseLink.getAttribute('href')).toBe('/')
    expect(browseLink).toHaveTextContent('Browse')

    const collectionsLink = screen.getByTestId('menu-link-collections')
    expect(collectionsLink).toBeInTheDocument()
    expect(collectionsLink.getAttribute('href')).toBe('/collections')
    expect(collectionsLink).toHaveTextContent('Collections')
  })
})
