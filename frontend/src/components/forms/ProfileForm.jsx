import { Box, Button, Grid2 } from "@mui/material";
import FormControl from "../utils/FormControl";
import { useTheme } from "../../providers/ThemeProvider";

export default function ProfileForm({ onSubmit, validateForm, styles = {}, errors = '', formData, onInputChange }) {
  const { theme } = useTheme();
  return (
    <Box component='form' sx={{ ...styles }}>
      <Grid2 container spacing={1} direction='row' width='100'>
        <FormControl
          name='first'
          label='First Name'
          error={errors.first}
          onChange={onInputChange}
          formData={formData}
        />
        <FormControl
          name='middle'
          label='middle name'
          error={errors.middle}
          onChange={onInputChange}
          formData={formData}
          required={false}
        />
        <FormControl
          name='last'
          label='last name'
          error={errors.last}
          onChange={onInputChange}
          formData={formData}
        />
        <FormControl
          name='email'
          label='email address'
          error={errors.last}
          onChange={onInputChange}
          formData={formData}
        />
        <FormControl
          name='phone'
          label='phone number'
          error={errors.phone}
          onChange={onInputChange}
          formData={formData}
        />
        <FormControl
          name='country'
          label='country'
          error={errors.country}
          onChange={onInputChange}
          formData={formData}
        />
        <FormControl
          name='state'
          label='state'
          error={errors.state}
          onChange={onInputChange}
          formData={formData}
          required={false}
        />
        <FormControl
          name='city'
          label='city'
          error={errors.city}
          onChange={onInputChange}
          formData={formData}
        />
        <FormControl
          name='street'
          label='street'
          error={errors.street}
          onChange={onInputChange}
          formData={formData}
        />
        <FormControl
          name='houseNumber'
          label='house number'
          error={errors.houseNumber}
          onChange={onInputChange}
          formData={formData}
        />
        <FormControl
          name='zip'
          label='zip'
          error={errors.zip}
          onChange={onInputChange}
          formData={formData}
        />
        <Grid2 size={12}>
          <Button variant='contained' onClick={onSubmit} disabled={!validateForm()} size='large' color='success' fullWidth sx={{ color: '#fff', fontWeight: theme.typography.fontWeightBold, fontSize: '1.2rem', py: 0.75 }}>Update Profile</Button>
        </Grid2>
      </Grid2>
    </Box>
  )
}
