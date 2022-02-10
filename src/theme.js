import { createTheme } from '@mui/material/styles'
import './baseline.css'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#567',
    },
    secondary: {
      main: '#29f',
    },
    text: {
      primary: '#cde',
      secondary: '#f99',
    },
    
  },
  typography: {
    fontFamily: 'Libre Franklin, Roboto, Helvetica, sans-serif',

    h1: {
      fontSize: '2.4rem',
    },
    h2: {
      fontSize: '1.2rem',
      lineHeight: '1.4',
      fontWeight: '600',
      letterSpacing: '.1px',
    },
    h3: {
      fontSize: '1rem',
    },
    h4: {
      fontSize: '0.9rem'
    }
  },
})
