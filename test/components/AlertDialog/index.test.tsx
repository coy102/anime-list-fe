import { fireEvent, render } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect' // To use jest-dom matchers
import AlertDialog from '~/components/AlertDialog'

const mockHandleClikOk = jest.fn()
const mockHandleToggle = jest.fn()

describe('~/components/AlertDialog', () => {
  it('should render or open correctly', () => {
    const message = 'Alert Message'

    const screen = render(
      <AlertDialog
        handleClikOk={mockHandleClikOk}
        handleToggle={mockHandleToggle}
        isOpen={true}
        message={message}
      />,
    )
    const alertDialogElement = screen.queryByTestId('alert-dialog')
    expect(alertDialogElement).toBeInTheDocument()

    const alertDialogDescriptionElement = screen.queryByTestId('alert-dialog-description')
    expect(alertDialogDescriptionElement).toHaveTextContent(message)
  })

  it('should call handleClickOk Correctly', () => {
    const screen = render(
      <AlertDialog
        handleClikOk={mockHandleClikOk}
        handleToggle={mockHandleToggle}
        isOpen={true}
        message="Message"
      />,
    )

    const alertDialogElement = screen.queryByTestId('alert-dialog')
    expect(alertDialogElement).toBeInTheDocument()

    const alertDialogOkBtn = screen.getByTestId('alert-ok-btn')

    fireEvent.click(alertDialogOkBtn)
    expect(mockHandleClikOk).toHaveBeenCalled()
  })

  it('should call handleToggle or cancel Button Correctly', () => {
    const screen = render(
      <AlertDialog
        handleClikOk={mockHandleClikOk}
        handleToggle={mockHandleToggle}
        isOpen={true}
        message="Message"
      />,
    )

    const alertDialogElement = screen.queryByTestId('alert-dialog')
    expect(alertDialogElement).toBeInTheDocument()

    const alertDialogCancelBtn = screen.getByTestId('alert-cancel-btn')

    fireEvent.click(alertDialogCancelBtn)
    expect(mockHandleToggle).toHaveBeenCalled()
  })
})
