import React from 'react'
import Title from '../components/utils/Title'
import LoginForm from '../components/forms/LoginForm'
import { Grid2, Typography } from '@mui/material'
import useForm from '../hooks/useForm';
import { initialLoginForm } from '../helpers/initial_forms/initialLoginForm';
import loginSchema from '../models/loginSchema';
import useUsers from '../hooks/useUsers';

export default function LoginPage() {
  const { userLogin } = useUsers();
  const { formData, errors, handleChange, validateForm, onSubmit } = useForm(initialLoginForm, loginSchema, userLogin);
  return (
    <>
      <Title title={'Login'} />
      <Grid2 container flexDirection='column' size={12}>
        <Typography variant='h3' component='h1' color='highlight' textAlign='center' sx={{ maxWidth: { xs: '100%', sm: '50%' } }}>Welcome to PetMe!</Typography>
        <Grid2 size={6} container flexDirection='column' justifyContent='center' flexGrow={1}>
          <Typography variant='body1' component='p' sx={{ maxWidth: { xs: '100%', sm: '50%' } }}>Please enter your login credentials</Typography>
          <LoginForm
            onSubmit={onSubmit}
            validateForm={validateForm}
            errors={errors}
            formData={formData}
            onInputChange={handleChange}
          />
        </Grid2>
      </Grid2>
    </>
  )
}
