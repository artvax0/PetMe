import React from 'react'
import Title from '../components/utils/Title'
import SignupForm from '../components/forms/SignupForm'
import useForm from '../hooks/useForm'
import signupSchema from '../models/signupSchema';
import { initialSignupForm } from '../helpers/initial_forms/initialSignupForm';
import { Grid2, Typography } from '@mui/material';

export default function SignupPage() {
  const handleSignup = console.log('hello')
  const { formData, errors, handleChange, validateForm, onSubmit } = useForm(initialSignupForm, signupSchema, handleSignup);
  return (
    <>
      <Title title={'Signup'} />
      <Grid2 container flexDirection='column' size={12}>
        <Typography variant='h3' color='highlight' textAlign='center' sx={{ maxWidth: { xs: '100%', sm: '50%' } }}>Sign Up</Typography>
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
