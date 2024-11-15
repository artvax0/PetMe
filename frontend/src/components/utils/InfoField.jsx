import { Grid2, TextField } from '@mui/material'
import React from 'react'
import { useTheme } from '../../providers/ThemeProvider'

export default function InfoField({ label, value }) {
  const { theme } = useTheme();
  return (
    <Grid2 size={{ xs: 12, sm: 8, md: 4 }}>
      <TextField label={label} color='highlight' size='small' slotProps={{ htmlInput: { readOnly: true, sx: { color: `${theme.palette.text.disabled}` } }, inputLabel: { sx: { color: `${theme.palette.text.disabled}` } } }} fullWidth defaultValue={value} />
    </Grid2>
  )
}
