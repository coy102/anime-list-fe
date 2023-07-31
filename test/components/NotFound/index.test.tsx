import { render } from '@testing-library/react'

import NotFound from '~/components/Error/NotFound'

describe('~/components/NotFound', () => {
  it('should renders 404 not found component', () => {
    const { getByTestId } = render(<NotFound />)
    const wrapperElement = getByTestId('wrapper-404')
    const headerElement = getByTestId('header-404')

    expect(wrapperElement).toBeInTheDocument()

    expect(headerElement).toBeInTheDocument()
    expect(headerElement).toHaveTextContent('404 Page not found!')
  })
})
