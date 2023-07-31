import { render, screen } from '@testing-library/react'

import Loading from '~/components/Loading'

describe('~/components/Loading', () => {
  test('renders loading, when loading prop is true', () => {
    const loading = true

    render(<Loading loading={loading} />)

    const loadingComponent = screen.getByTestId('cilcular-progress-loading')
    expect(loadingComponent).toBeInTheDocument()
  })

  test('renders children props, when loading prop is false', () => {
    const loading = false
    const children = 'This is the children content'

    render(<Loading loading={loading}>{children}</Loading>)

    // Assert
    const childrenElement = screen.getByText(children)
    expect(childrenElement).toBeInTheDocument()
  })
})
