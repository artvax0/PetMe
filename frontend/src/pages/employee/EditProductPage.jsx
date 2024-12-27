import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Title from '../../components/utils/Title'
import { Navigate, useParams } from 'react-router-dom'
import useProducts from '../../hooks/useProducts';
import { useAuth } from '../../providers/UserProvider';
import { ROUTES } from '../../routes/routesModel';
import EditProductForm from '../../components/forms/EditProductForm';
import useForm from '../../hooks/useForm';
import mapProductToModel from '../../helpers/normalization/mapProductToModel';
import productSchema from '../../models/ProductSchema';
import initialProductForm from '../../helpers/initial_forms/initialProductForm';
import { useTheme } from '../../providers/ThemeProvider';
import LoadingSpinner from '../../components/utils/LoadingSpinner';
import Error from '../../components/utils/Error';

export default function EditProductPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const { mode } = useTheme();
  const { getProductById, updateProduct, isLoading, error } = useProducts();
  const { formData, setFormData, errors, handleChange, validateForm, onSubmit } = useForm(initialProductForm, productSchema, () => { updateProduct(id, formData) });

  useEffect(() => {
    const getProduct = async () => {
      const productInfo = await getProductById(id);
      setFormData(mapProductToModel(productInfo));
    }
    getProduct();
  }, [id, setFormData]);

  if (isLoading) return (<LoadingSpinner />);
  if (error) return (<Error error={error} />);
  if (!user || !user.isEmployee) return (<Navigate to={ROUTES.LOGIN} />)
  return (
    <Box width='100%' color={mode == 'light' ? '#000' : '#fff'}>
      <Title title={`Editing ${formData.name}`} />
      <Typography variant='h4' fontSize={{ xs: '1.2rem', sm: '1.5rem' }} component='h1' gutterBottom>Edit Product - {formData.name}</Typography>
      <EditProductForm
        onSubmit={onSubmit}
        validateForm={validateForm}
        errors={errors}
        formData={formData}
        onInputChange={handleChange}
        setFormData={setFormData}
      />
    </Box>
  )
}
