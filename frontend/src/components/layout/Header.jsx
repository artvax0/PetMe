import { AppBar, Avatar, Box, Grid2, styled, Toolbar } from '@mui/material'
import React from 'react'
import { useTheme } from '../../providers/ThemeProvider';
import Banner from './Banner';
import { ROUTES } from '../../routes/routesModel';
import { Link } from 'react-router-dom'

export default function Header() {
  const { theme } = useTheme();

  const NavLink = styled(Link)(({ theme }) => `
    text-decoration: none;
    color: ${theme.palette.secondary.main};
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightMedium};
    &:hover {text-shadow: #FC0 1px 0 10px};
  `);

  return (
    <Grid2 component='header' container justifyContent='center' sx={{ backgroundColor: theme.palette.background.default }}>
      <Grid2 size={11}>
        <AppBar component='section' position='sticky' sx={{ backgroundColor: theme.palette.highlight.main, borderRadius: '0 0 20px 20px' }} elevation={3}>
          <Banner />
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 5 }}>
            {/* PetMe! Logo */}
            <Link to={ROUTES.ROOT}>
              <Box component='img' sx={{ height: 50 }} src='/pixelPetMe.svg' alt='PetMe! Logo' />
            </Link>
            {/* NavBar */}
            <Box component='nav' display='flex' flexGrow={1} gap={5}>
              <NavLink to={ROUTES.ROOT}>Home</NavLink>
              <NavLink to={ROUTES.PRODUCTS}>Our Products</NavLink>
            </Box>
            <Avatar />
          </Toolbar>
        </ AppBar>
      </Grid2>
    </Grid2>
  )
}
