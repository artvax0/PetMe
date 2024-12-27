import React, { useEffect } from 'react'
import Title from '../../components/utils/Title'
import { Box, Grid2, Typography } from '@mui/material'
import { useTheme } from '../../providers/ThemeProvider'
import { useAuth } from '../../providers/UserProvider'
import { Navigate } from 'react-router-dom'
import { ROUTES } from '../../routes/routesModel'
import ProfileForm from '../../components/forms/ProfileForm'
import useForm from '../../hooks/useForm'
import { initialProfileForm } from '../../helpers/initial_forms/initialProfileForm'
import profileSchema from '../../models/profileSchema'
import useUsers from '../../hooks/useUsers'
import mapUserToModel from '../../helpers/normalization/mapUsertoModel'
import normalizeProfile from '../../helpers/normalization/normalizeProfile'

export default function AccountSettingsPage() {
  const { user } = useAuth();
  const { theme, mode } = useTheme();
  const { getUserInfo, updateUserInfo } = useUsers();
  const updateUser = (formData, e) => {
    const normalizedData = normalizeProfile(formData);
    updateUserInfo(user._id, normalizedData);
    e.target.disabled = false;
    e.target.classList.toggle('Mui-disabled');
  }
  const { formData, setFormData, errors, handleChange, validateForm, onSubmit } = useForm(initialProfileForm, profileSchema, updateUser)

  useEffect(() => {
    if (user) {
      async function getUser() {
        const userInfo = await getUserInfo(user._id);
        setFormData(mapUserToModel(userInfo));
      }
      getUser();
    }
  }, [user, setFormData])

  if (!user) return (<Navigate to={ROUTES.LOGIN} replace />)
  return (
    <>
      <Title title={'Account Preferences'} />
      <Grid2 container flexDirection='column' width='100%' color={mode == 'light' ? '#000' : '#fff'}>
        <Typography variant='h5' component='h1' fontWeight={theme.typography.fontWeightMedium} gutterBottom>Account Preferences</Typography>
        <ProfileForm
          onSubmit={onSubmit}
          errors={errors}
          onInputChange={handleChange}
          validateForm={validateForm}
          formData={formData}
        />
      </Grid2>
    </>
  )
}
