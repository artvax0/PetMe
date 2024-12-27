import React from 'react'
import Title from '../../components/utils/Title'
import SignupForm from '../../components/forms/SignupForm'
import useForm from '../../hooks/useForm'
import signupSchema from '../../models/signupSchema';
import { initialSignupForm } from '../../helpers/initial_forms/initialSignupForm';
import { Box, Grid2, Typography } from '@mui/material';
import useUsers from '../../hooks/useUsers';
import { useAuth } from '../../providers/UserProvider';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routesModel';
import { useTheme } from '../../providers/ThemeProvider';

export default function SignupPage() {
  const { user } = useAuth();
  const { mode } = useTheme();
  const { userSignup } = useUsers();
  const { formData, errors, handleChange, validateForm, onSubmit } = useForm(initialSignupForm, signupSchema, userSignup);
  if (user) return <Navigate to={ROUTES.ROOT} replace />

  return (
    <>
      <Title title={'Signup'} />
      <Grid2 container flexDirection='column' size={12} color={mode == 'light' ? '#000' : '#fff'}>
        <Grid2 size={12} container flexDirection={{ xs: 'column-reverse', md: 'row' }} justifyContent='center' alignItems='center' flexGrow={1}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography variant='h3' component='h1' color={mode == 'light' ? 'highlight' : '#fff'} textAlign='center' sx={{ maxWidth: '100%' }}>Become a PetMe Member!</Typography>
            <Typography variant='body1' component='p' sx={{ maxWidth: '100%' }}>Address details are only used for order deliveries</Typography>
            <Typography variant='body2' component='p' color='error' sx={{ maxWidth: '100%' }}>* Mandatory field</Typography>
            <SignupForm
              onSubmit={onSubmit}
              validateForm={validateForm}
              errors={errors}
              formData={formData}
              onInputChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }} container flexGrow={1} justifyContent='center' alignItems='center'>
            <Box component='img' src='/pixelsignup.svg' alt='Log in picture' maxWidth='100%' />
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  )
}
