import React from 'react'
import Title from '../components/utils/Title'
import LoginForm from '../components/forms/LoginForm'
import { Grid2, Typography } from '@mui/material'
import useForm from '../hooks/useForm';
import { initialLoginForm } from '../helpers/initial_forms/initialLoginForm';
import useUsers from '../hooks/useUsers';
import { useAuth } from '../providers/UserProvider';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../routes/routesModel';
import loginSchema from '../models/loginSchema';
import { useTheme } from '../providers/ThemeProvider';

export default function LoginPage() {
  const { user } = useAuth();
  const { mode } = useTheme();
  const { userLogin } = useUsers();
  const { formData, errors, handleChange, validateForm, onSubmit } = useForm(initialLoginForm, loginSchema, userLogin);
  if (user) return <Navigate to={ROUTES.ROOT} replace />;

  return (
    <>
      <Title title={'Login'} />
      <Grid2 container flexDirection='column' size={12} color={mode == 'light' ? '#000' : '#fff'}>
        <Typography variant='h3' component='h1' color={mode == 'light' ? 'highlight' : '#fff'} textAlign='center' sx={{ maxWidth: { xs: '100%', sm: '50%' } }}>Welcome to PetMe!</Typography>
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
