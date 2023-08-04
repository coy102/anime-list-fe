import { act, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Layout from '~/components/Layout'

describe('~/components/Layout', () => {
  it('should render at the first time with navbar', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Layout />
        </MemoryRouter>,
      )
    })

    const navbarElement = screen.getByTestId('navbar')

    expect(navbarElement).toBeInTheDocument()

    const titlePageElement = screen.getByTestId('title-page')
    await waitFor(() => expect(titlePageElement).toBeInTheDocument())
  })
})
