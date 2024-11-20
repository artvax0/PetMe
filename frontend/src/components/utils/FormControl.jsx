import { FormControl as MUIFormControl, Grid2, TextField, InputLabel, Select, MenuItem, OutlinedInput, Chip, Box, FormHelperText } from '@mui/material'
import capitalizeLetters from '../../utils/capitalizeLetters'
import { useTheme } from '../../providers/ThemeProvider'

export default function FormControl({ label, required = true, error, formData, name, onChange, size, type = 'text', options = [], slotProps = {}, multiple = false }) {
  const { theme } = useTheme();
  const getStyles = (id, selectedOptions) => {
    return {
      fontWeight: selectedOptions.includes(id) ? theme.typography.fontWeightMedium : theme.typography.fontWeightRegular,
      backgroundColor: selectedOptions.includes(id) ? theme.palette.accent.main : 'inherit',
    }
  }
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
            input={<OutlinedInput id='select-multiple-chip' label={label} />}
            renderValue={(selected) => {
              if (multiple) {
                return (
                  <Box display='flex' flexWrap='wrap' gap={0.5}>
                    {selected.map(id => {
                      const option = options.find(option => option._id == id);
                      return option ? <Chip key={id} label={option.name} /> : null;
                    })}
                  </Box>
                )
              } else {
                const option = options.find(option => option._id == selected);
                return option ? option.name : '';
              }
            }}>
            {options.map((option) => (
              <MenuItem
                key={option._id}
                value={option._id}
                style={getStyles(option._id, multiple ? formData[name] || [] : [formData[name]])}
              >
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
