import { Box, Button, Grid2 } from "@mui/material";
import FormControl from "../utils/FormControl";
import { useTheme } from "../../providers/ThemeProvider";

export default function LoginForm({ onSubmit, validateForm, styles = {}, errors = '', formData, onInputChange }) {
  const { theme } = useTheme();
  return (
    <Box component='form' sx={{ ...styles }}>
      <Grid2 container spacing={1} direction='row' width='100'>
        <FormControl
          name='email'
          label='email'
          error={errors.email}
          onChange={onInputChange}
          formData={formData}
        />
        <FormControl
          name='password'
          label='password'
          error={errors.password}
          onChange={onInputChange}
          formData={formData}
          type='password'
        />
        <Grid2 size={12}>
          <Button variant='contained' onClick={onSubmit} disabled={!validateForm()} size='large' color='success' fullWidth sx={{ color: '#fff', fontWeight: theme.typography.fontWeightBold, fontSize: '1.2rem', py: 0.75 }}>Login</Button>
        </Grid2>
      </Grid2>
    </Box>
  )
}
