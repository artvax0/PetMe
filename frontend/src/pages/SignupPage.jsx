import React from 'react'
import Title from '../components/utils/Title'
import SignupForm from '../components/forms/SignupForm'
import useForm from '../hooks/useForm'
import signupSchema from '../models/signupSchema';
import { initialSignupForm } from '../helpers/initial_forms/initialSignupForm';
import { Grid2, Typography } from '@mui/material';
import useUsers from '../hooks/useUsers';
import { useAuth } from '../providers/UserProvider';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../routes/routesModel';

export default function SignupPage() {
  const { user } = useAuth();
  const { userSignup } = useUsers();
  const { formData, errors, handleChange, validateForm, onSubmit } = useForm(initialSignupForm, signupSchema, userSignup);
  if (user) return <Navigate to={ROUTES.ROOT} replace />

  return (
    <>
      <Title title={'Signup'} />
      <Grid2 container flexDirection='column' size={12}>
        <Typography variant='h3' component='h1' color='highlight' textAlign='center' sx={{ maxWidth: { xs: '100%', sm: '50%' } }}>Become a PetMe Member!</Typography>
        <Typography variant='body1' component='p' sx={{ maxWidth: { xs: '100%', sm: '50%' } }}>Address details are only used for order deliveries</Typography>
        <Typography variant='body2' component='p' color='error' sx={{ maxWidth: { xs: '100%', sm: '50%' } }}>* Mandatory field</Typography>
        <SignupForm
          onSubmit={onSubmit}
          validateForm={validateForm}
          errors={errors}
          formData={formData}
          onInputChange={handleChange}
          styles={{ maxWidth: '50%' }}
        />
      </Grid2>
    </>
  )
}
