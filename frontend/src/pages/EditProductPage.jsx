import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Title from '../components/utils/Title'
import { Navigate, useParams } from 'react-router-dom'
import useProducts from '../hooks/useProducts';
import { useAuth } from '../providers/UserProvider';
import { ROUTES } from '../routes/routesModel';
import EditProductForm from '../components/forms/EditProductForm';
import useForm from '../hooks/useForm';
import mapProductToModel from '../helpers/normalization/mapProductToModel';
import productSchema from '../models/ProductSchema';
import initialProductForm from '../helpers/initial_forms/initialProductForm';

export default function EditProductPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const { getProductById, updateProduct, product, isLoading, error } = useProducts();
  const { formData, setFormData, errors, handleChange, validateForm, onSubmit } = useForm(initialProductForm, productSchema, () => { updateProduct(id, formData) });

  useEffect(() => {
    const getProduct = async () => {
      const productInfo = await getProductById(id);
      setFormData(mapProductToModel(productInfo));
    }
    getProduct();
  }, [id, setFormData]);

  if (isLoading) return (<p>Loading...</p>);
  if (error) return (<p>Error: {error}</p>);
  if (!user || !user.isEmployee) return (<Navigate to={ROUTES.LOGIN} />)
  return (
    <Box width='100%'>
      <Title title={`Editing ${product.name}`} />
      <Typography variant='h4' component='h1'>Edit Product - {product.name}</Typography>
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
