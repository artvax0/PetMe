import { FormControl as MUIFormControl, Grid2, TextField, InputLabel, Select, MenuItem, OutlinedInput, Chip, Box, FormHelperText } from '@mui/material'
import React from 'react'
import capitalizeLetters from '../../utils/capitalizeLetters'

export default function FormControl({ label, required = true, error, formData, name, onChange, size, type = 'text', options = [], slotProps = {}, multiple = false }) {
  return (
    <Grid2 container size={{ xs: 12, ...size }}>
      {type == 'select' ? (
        <MUIFormControl fullWidth error={Boolean(error)} size='small' required={required}>
          <InputLabel color='highlight' id={`${name}-label`}>{capitalizeLetters(label)}</InputLabel>
          <Select
            multiple={multiple}
            labelId={`${name}-label`}
            label={label}
            id={name}
            value={multiple ? (formData[name] || []) : (formData[name] || '')}
            onChange={onChange}
            name={name}
            color='highlight'
            input={<OutlinedInput id='select-multiple-chip' label='Chip' />}
            renderValue={(selected) => {
              if (multiple) {
                selected.map(id => {
                  const option = options.find(option => option._id == id);
                  return (
                    <Box key={id} display='inline-flex' flexWrap='wrap' mx={0.25}>
                      <Chip label={option.name} />
                    </Box>
                  )
                })
              } else {
                const option = options.find(option => option._id == selected);
                return option ? option.name : '';
              }
            }}>
            {options.map((option) => (
              <MenuItem key={option._id} value={option._id}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{error}</FormHelperText>
        </MUIFormControl>) : (
        <TextField
          label={capitalizeLetters(label)}
          required={required}
          error={Boolean(error)}
          helperText={error}
          size="small"
          fullWidth
          value={formData[name] ? formData[name] : ""}
          name={name}
          id={name}
          onChange={onChange}
          color="highlight"
          type={type}
          slotProps={slotProps}
        />
      )
      }
    </Grid2>
  )
}
