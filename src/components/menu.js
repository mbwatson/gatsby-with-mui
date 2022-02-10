import * as React from 'react'
import { styled } from '@mui/styles'
import { Link } from 'gatsby'

const Wrapper = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  listStyleType: 'none',
  padding: 0,
  margin: 0,
}))

const MenuItem = styled('li')(({ theme }) => ({
  display: 'flex',
  '& a': {
    color: '#eee',
    textDecoration: 'none',
    height: '100%',
    padding: '1rem',
  },
  '& a:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}))

export const Menu = () => {
  return (
    <Wrapper>
      <MenuItem>
        <Link to="/">Home</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/about">About</Link>
      </MenuItem>
    </Wrapper>
  )
}
