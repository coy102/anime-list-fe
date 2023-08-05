import 'regenerator-runtime'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ApolloProvider } from '@apollo/client'
import { Global } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import ReactDOM from 'react-dom/client'

import graphQLClient from '~/utils/apollo/client'

import App from './App'
import globalCss from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Global styles={globalCss} />
        <ApolloProvider client={graphQLClient}>
          <App />
        </ApolloProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
