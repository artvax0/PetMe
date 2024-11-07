import { Grid2, TextField } from '@mui/material'
import React from 'react'
import capitalizeLetters from '../../utils/capitalizeLetters'

export default function FormControl({ label, required = true, error, formData, name, onChange, size }) {
  return (
    <Grid2 container size={{ xs: 12, ...size }}>
      <TextField
        label={capitalizeLetters(label)}
        required={required}
        error={Boolean(error)}
        helperText={error}
        size='small'
        fullWidth
        value={formData[name] ? formData[name] : ''}
        name={name}
        id={name}
        onChange={onChange}
        color='highlight'
      />
    </Grid2>
  )
}
