import { Box, Grid2 } from '@mui/material'
import React from 'react'
import Header from './Header'
import { useTheme } from '../../providers/ThemeProvider'
import Footer from './Footer';

export default function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <Box minHeight='100vh' display='flex' flexDirection='column' gap={0}>
      <Header />
      <Box component='main' sx={{ backgroundColor: theme.palette.background.default }} py={3} display='flex' flexGrow={1} justifyContent='center'>
        <Grid2 container size={11} sx={{ backgroundColor: theme.palette.background.light, borderRadius: '30px', p: '8px 30px 30px 30px' }}>
          {children}
        </Grid2>
      </Box>
      <Footer />
    </Box>
  )
}
