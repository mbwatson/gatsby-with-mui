import * as React from 'react'
import { styled } from '@mui/styles'
import { Menu } from './menu'
import { Typography } from '@mui/material'

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}))

const Header = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  padding: '0 1rem',
  '& .title': {
    display: 'flex',
    alignItems: 'center',
  }
}))

const Main = styled('main')(({ theme }) => ({
  flex: 1,
  backgroundColor: '#eee',
  padding: '1rem',
}))

const Footer = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.secondary,
  padding: '1rem',
  textAlign: 'center',
}))

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <Typography component="span" className="title">Application Name</Typography>
        <Menu />
      </Header>
      <Main>
        { children }
      </Main>
      <Footer>&copy; { new Date().getFullYear() }</Footer>
    </Wrapper>
  )
}
