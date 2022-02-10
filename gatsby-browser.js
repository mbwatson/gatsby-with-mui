import * as React from 'react'
import { ThemeProvider } from '@mui/styles'
import { theme } from './src/theme'
import { Layout } from './src/components/layout'

export const wrapRootElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={ theme }>
      { element }
    </ThemeProvider>
  )
}


export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout>
      { element }
    </Layout>
  )
}