import React from 'react'
import 'filepond/dist/filepond.min.css'
import { Box, Typography } from '@mui/material'
import ProductForm from '../components/forms/ProductForm'
import useForm from '../hooks/useForm'
import { initialNewProductForm } from '../helpers/initial_forms/initialNewProductForm'
import newProductSchema from '../models/newProductSchema'
import useProducts from '../hooks/useProducts'
import Title from '../components/utils/Title'
import { useAuth } from '../providers/UserProvider'
import { Navigate, useNavigate } from 'react-router-dom'
import { ROUTES } from '../routes/routesModel'


export default function AddProductPage() {
  const { user } = useAuth();
  const { addNewProduct } = useProducts();
  const navigate = useNavigate();
  const addProduct = async (formData, e) => {
    const prod = await addNewProduct(formData);
    if (prod) return navigate(ROUTES.PRODUCTS);
    e.target.disabled = false;
    e.target.classList.toggle('Mui-disabled');
  }
  const { formData, setFormData, errors, handleChange, validateForm, onSubmit } = useForm(initialNewProductForm, newProductSchema, addProduct);

  if (!user || !user.isEmployee) return (<Navigate to={ROUTES.LOGIN} />)

  return (
    <Box width='100%'>
      <Title title={'Add Product'} />
      <Typography gutterBottom variant='h4' component='h1'>Add New Product</Typography>
      <ProductForm
        onSubmit={onSubmit}
        validateForm={validateForm}
        errors={errors}
        onInputChange={handleChange}
        formData={formData}
        setFormData={setFormData}
      />
    </Box>
  )
}
