import { render, screen } from '@testing-library/react'

import InfoText from '~/components/InfoText'

describe('~/components/InfoText', () => {
  it('should render InfoText correctly', () => {
    const testid = 'info-text'
    const props = {
      label: 'Title',
      value: 'Konosuba',
    }

    render(<InfoText data-testid={testid} {...props} />)

    const infoTextElement = screen.getByTestId(testid)

    expect(infoTextElement).toBeInTheDocument()
    expect(infoTextElement.textContent).toContain(props.label)
    expect(infoTextElement.textContent).toContain(props.value)
  })
})
