import blueGrey from '@mui/material/colors/blueGrey'
import pink from '@mui/material/colors/pink'
import createTheme from '@mui/material/styles/createTheme'
import responsiveFontSizes from '@mui/material/styles/responsiveFontSizes'

export const fontSize = {
  10: '0.625rem',
  12: '0.75rem',
  14: '0.875rem',
  16: '1rem',
  18: '1.125rem',
  20: '1.25rem',
  22: '1.375rem',
  24: '1.5rem',
  28: '1.75rem',
  30: '1.875rem',
  32: '2rem',
  34: '2.125rem',
  40: '2.5rem',
  48: '3rem',
  50: '3.125rem',
  64: '4rem',
  72: '4.5rem',
}
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
  },
  palette: {
    primary: {
      main: blueGrey[900],
    },
    secondary: {
      main: pink[500],
    },
    background: {
      default: blueGrey[100],
    },
  },
  // Set baseline width to 1920
  spacing: (factor) =>
    [
      '0.104vw', // 2
      '0.208vw', // 4
      '0.417vw', // 8
      '0.625vw', // 12
      '0.833vw', // 16
      '1.042vw', // 20
      '1.25vw', // 24
      '1.458vw', // 28
      '1.667vw', // 32
      '2.5vw', // 48
      '3.333vw', // 64
      '4.167vw', // 80
      '5vw', // 96
      '6.25vw', // 120p
    ][factor],
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    htmlFontSize: 10,
  },
})

export default responsiveFontSizes(theme)
