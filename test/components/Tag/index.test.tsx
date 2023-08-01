import { render } from '@testing-library/react'

import Tag from '~/components/Tag'
import { mockedToHexString } from '~/mocks/tinyColor2'

describe('~/components/Tag', () => {
  it('should render the label', () => {
    const { getByText } = render(<Tag data-testid="test-tag" label="Sample Label" />)
    const tagElement = getByText('Sample Label')
    expect(tagElement).toBeInTheDocument()
  })

  it('should apply the bgcolor and color prop to the styled component', () => {
    // mock colorUtil using tinyColor mockedToHexString
    mockedToHexString.mockReturnValue('#FFF')

    const { getByTestId } = render(
      <Tag bgcolor="#FF0000" data-testid="test-tag" label="Sample Label" />,
    )
    const tagElement = getByTestId('test-tag')

    expect(tagElement).toHaveStyle('background-color: #FF0000')
    expect(tagElement).toHaveStyle('color: #FFF')
  })
})
