import { Box } from '@mui/material'
import React from 'react'

export default function Banner() {
  return (
    <Box sx={{ backgroundColor: 'gold', height: 7 }}>
      <Box mx={75} sx={{
        background: 'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 35%, rgb(55, 108, 255) 35%, rgb(55, 108, 255) 65%, rgb(255, 255, 255) 65%, rgb(255, 255, 255) 100%)', height: '100%',
        '&:hover': { mx: 50 },
        transition: 'all 2s'
      }} />
    </Box>
  )
}
