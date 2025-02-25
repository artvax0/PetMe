import React, { forwardRef, useCallback, useEffect, useState } from 'react'
import { useAuth } from '../../providers/UserProvider'
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routesModel';
import Title from '../../components/utils/Title';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Slide, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import useUsers from '../../hooks/useUsers';
import EditIcon from '@mui/icons-material/Edit';
import BadgeIcon from '@mui/icons-material/Badge';
import mapUserToModel from '../../helpers/normalization/mapUsertoModel';
import useForm from '../../hooks/useForm';
import { initialProfileForm } from '../../helpers/initial_forms/initialProfileForm';
import profileSchema from '../../models/profileSchema';
import ProfileForm from '../../components/forms/ProfileForm';
import normalizeProfile from '../../helpers/normalization/normalizeProfile';
import { useTheme } from '../../providers/ThemeProvider';
import LoadingSpinner from '../../components/utils/LoadingSpinner';
import Error from '../../components/utils/Error';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dashboard() {
  const { user } = useAuth();
  const { mode } = useTheme();
  const { users, getAllUsers, isLoading, error, updateUserInfo, updateUserEmployment } = useUsers();
  const [selectedUser, setSelectedUser] = useState();
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isEmploymentOpen, setIsEmploymentOpen] = useState(false);
  const updateUser = (formData, e) => {
    const normalizedData = normalizeProfile(formData);
    updateUserInfo(selectedUser, normalizedData);
    e.target.disabled = false;
    e.target.classList.toggle('Mui-disabled');
    closeUserSettings();
  }
  const { formData, setFormData, errors, setErrors, handleChange, validateForm, onSubmit } = useForm(initialProfileForm, profileSchema, updateUser)

  useEffect(() => {
    if (isLoading == true) {
      const getUsers = async () => {
        await getAllUsers();
      }
      getUsers();
    }
  }, [user, isLoading]);

  const clearErrors = useCallback(() => setErrors({}), []);

  const openUserSettings = (user) => {
    const mappedUser = mapUserToModel(user);
    setFormData(mappedUser);
    setSelectedUser(user._id);
    setIsUpdateOpen(true);
  }

  const closeUserSettings = () => {
    setFormData(initialProfileForm);
    clearErrors();
    setSelectedUser();
    setIsUpdateOpen(false);
  }

  const handleOpen = (userId) => {
    setSelectedUser(userId);
    setIsEmploymentOpen(true);
  }

  const handleEmployment = () => {
    updateUserEmployment(selectedUser);
    setSelectedUser();
    setIsEmploymentOpen(false);
  }

  const handleClose = () => {
    setSelectedUser();
    setIsEmploymentOpen(false);
  }

  if (!user || !user.isAdmin) return (<Navigate to={ROUTES.LOGIN} />)
  if (isLoading) return (<LoadingSpinner />);
  if (error) return (<Error error={error} />);
  return (
    <>
      <Title title={'Admin Dashboard'} />
      <Box width='100%' color={mode == 'light' ? '#000' : '#fff'}>
        <Typography variant='h4' component='h1' gutterBottom>Admin Dashboard</Typography>
        <TableContainer container={Paper}>
          <Table size='small' aria-label='User Management Table'>
            <TableHead>
              <TableRow>
                <TableCell align='center' sx={{ fontSize: '1.1rem' }}>User ID</TableCell>
                <TableCell align='center' sx={{ fontSize: '1.1rem' }}>Full Name</TableCell>
                <TableCell align='center' sx={{ fontSize: '1.1rem' }}>Email</TableCell>
                <TableCell align='center' sx={{ fontSize: '1.1rem' }}>Phone</TableCell>
                <TableCell align='center' sx={{ fontSize: '1.1rem' }}>Address</TableCell>
                <TableCell align='center' sx={{ fontSize: '1.1rem' }}>Employee</TableCell>
                <TableCell align='center' sx={{ fontSize: '1.1rem' }}>Admin</TableCell>
                <TableCell align='center' sx={{ fontSize: '1.1rem' }}>User Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(user => (
                <TableRow key={user._id}>
                  <TableCell>{user._id}</TableCell>
                  <TableCell>{user.name.first} {user.name.middle} {user.name.last}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.address.street} {user.address.houseNumber}, {user.address.city}, {user.address.state ? user.address.state + ',' : ''} {user.address.country} | {user.address.zip}</TableCell>
                  <TableCell align='center'><Checkbox inputProps={{ 'aria-label': 'Employee User' }} disabled checked={user.isEmployee} /></TableCell>
                  <TableCell align='center'><Checkbox inputProps={{ 'aria-label': 'Admin User' }} disabled checked={user.isAdmin} /></TableCell>
                  <TableCell align='center'>
                    <Box display='inline-flex' justifyContent='center' gap={1}>
                      <Button disabled={user.isAdmin} onClick={() => openUserSettings(user)} variant='contained' color='info' sx={{ p: 1, width: '30px', minWidth: '30px', maxHeight: '30px' }}><EditIcon /></Button>
                      <Button disabled={user.isAdmin} onClick={() => handleOpen(user._id)} variant='contained' color='success' sx={{ p: 1, width: '30px', minWidth: '30px', maxHeight: '30px', color: mode == 'light' ? '#fff' : '#000' }}><BadgeIcon /></Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box >
      <Dialog
        open={isUpdateOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeUserSettings}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>{`Update User ${formData.first} ${formData.middle} ${formData.last}`}</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DialogContentText component='div' id='alert-dialog-slide-description' sx={{ pt: 1 }}>
            <ProfileForm
              onSubmit={onSubmit}
              errors={errors}
              onInputChange={handleChange}
              validateForm={validateForm}
              formData={formData}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeUserSettings} color='error'>Cancel</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={isEmploymentOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>{`Update User ${formData.first} ${formData.middle} ${formData.last}`}</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DialogContentText component='div' id='alert-dialog-slide-description' sx={{ pt: 1 }}>
            <Typography>Update user's employment status?</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeUserSettings} color='error'>Cancel</Button>
          <Button onClick={handleEmployment} color='success'>Update Employment Status</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
