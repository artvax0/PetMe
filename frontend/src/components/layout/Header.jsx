import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '../../providers/ThemeProvider';
import Banner from './Banner';

export default function Header() {
  const { theme } = useTheme();

  const navItems = ['Home', 'Our Products', 'Pets'];
  return (
    <AppBar position='sticky' sx={{ backgroundColor: theme.palette.background.default }}>
      <Banner />
      <Toolbar>
        {/* PetMe! Logo */}
        <Box component='img' sx={{ height: 50 }} src='/pixelPetMe.svg' alt='PetMe! Logo' />
        {/* NavBar */}
        <Box component='nav' display='flex' flexGrow={1} gap={2}>
          {navItems.map(navItem => (
            <Typography component='a'>{navItem}</Typography>
          ))}
        </Box>
        <Avatar />
      </Toolbar>
    </ AppBar>
  )
}
