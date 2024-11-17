import React from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import { Box } from '@mui/material'


export default function AddProductPage() {
  return (
    <Box width='100%'>
      <FilePond allowMultiple={false} maxFiles={1} server='/api' />
    </Box>
  )
}
