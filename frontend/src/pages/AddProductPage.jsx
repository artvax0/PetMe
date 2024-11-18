import React from 'react'
import 'filepond/dist/filepond.min.css'
import { Box } from '@mui/material'
import ProductForm from '../components/forms/ProductForm'
import useForm from '../hooks/useForm'
import { initialNewProductForm } from '../helpers/initial_forms/initialNewProductForm'
import newProductSchema from '../models/newProductSchema'
import useProducts from '../hooks/useProducts'


export default function AddProductPage() {
  const { addNewProduct } = useProducts();
  const { formData, setFormData, errors, handleChange, validateForm, onSubmit } = useForm(initialNewProductForm, newProductSchema, addNewProduct);
  return (
    <Box width='100%'>
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
