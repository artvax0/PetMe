import React from 'react'
import 'filepond/dist/filepond.min.css'
import { Box, Typography } from '@mui/material'
import ProductForm from '../components/forms/ProductForm'
import useForm from '../hooks/useForm'
import { initialNewProductForm } from '../helpers/initial_forms/initialNewProductForm'
import newProductSchema from '../models/newProductSchema'
import useProducts from '../hooks/useProducts'
import Title from '../components/utils/Title'


export default function AddProductPage() {
  const { addNewProduct } = useProducts();
  const { formData, setFormData, errors, handleChange, validateForm, onSubmit } = useForm(initialNewProductForm, newProductSchema, addNewProduct);
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
