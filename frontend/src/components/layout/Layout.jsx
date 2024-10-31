import { Box, Container } from '@mui/material'
import React from 'react'
import Header from './Header'
import { useTheme } from '../../providers/ThemeProvider'
import Footer from './Footer';

export default function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <Box minHeight='100vh' display='flex' flexDirection='column' gap={0}>
      <Header />
      <Box component='main' sx={{ backgroundColor: theme.palette.secondary.light }} py={3} flexGrow={1}>
        <Container maxWidth='xl'>
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}
