import React, { useCallback, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Box, Button, Divider, Grid2, Typography } from '@mui/material';
import useProducts from '../hooks/useProducts';
import { useTheme } from '../providers/ThemeProvider';
import Title from '../components/utils/Title';
import InventoryIcon from '@mui/icons-material/Inventory';
import usePets from '../hooks/usePets';
import Counter from '../components/utils/Counter';
import { ROUTES } from '../routes/routesModel';
import { useAuth } from '../providers/UserProvider';
import useCarts from '../hooks/useCarts';

export default function ProductPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const { theme } = useTheme();
  const { product, getProductById, isLoading, error } = useProducts();
  const { getProductPets, pets } = usePets();
  const { addProductToCart } = useCarts();
  const [count, setCount] = useState(1);

  useEffect(() => {
    getProductById(id);
  }, [id]);

  useEffect(() => {
    getProductPets(product.petType_id);
  }, [product])

  const addToCart = useCallback((e, productId, quantity) => {
    if (user) return addProductToCart(e, user._id, { product_id: productId, quantity });
    <Navigate to={ROUTES.LOGIN} replace />
  }, [])

  if (isLoading) return (<><Title title={'Loading...'} /><p>Loading...</p></>)
  if (error) return (<><Title title={'PetMe - Error'} /><p>Error: {error}</p></>)

  if (product)
    return (
      <>
        <Title title={product.name} />
        <Grid2 container mt={2.75} width='100%' gap={2} sx={{ backgroundColor: '#fff', borderRadius: '15px' }}>
          <Grid2 size={4} sx={{ boxShadow: 'inset 5px 5px 5px 0 rgba(0, 0, 0, .25), inset -5px -5px 5px 0 rgba(0, 0, 0, .25)', borderRadius: '5px' }}>
            <Box width='100%' component='img' src={product.image.url} alt={product.image.alt} />
          </Grid2>
          <Grid2 display='flex' flexDirection='column' flexGrow={1} py={1} maxWidth='64%'>
            <Typography variant='h4' component='h2' fontWeight={theme.typography.fontWeightBold} fontSize='3rem' color={theme.palette.secondary.main} gutterBottom>
              {product.name}
            </Typography>
            <Typography variant='body1' component='h3' fontWeight={theme.typography.fontWeightRegular} fontSize='1.25rem' flexGrow={1} gutterBottom>{product.description}</Typography>
            <Typography>This product is fit for:</Typography>
            <Box display='inline-flex' gap={2} pb={2}>
              {pets && pets.map((pet) => (
                <Box key={pet._id} width='30px' height='30px' boxShadow='0 5px 5px rgba(0, 0, 0, .25)' borderRadius='50%' >
                  <Box width='100%' component='img' src='' alt={pet.name + ' icon'} />
                </Box>
              ))
              }
            </Box>
            <Divider variant='middle' sx={{ mb: 2 }} />
            <Typography variant='h5' display='inline-flex' alignItems='center' gap={1} gutterBottom><InventoryIcon color='secondary' /> {product.stock}</Typography>
            <Box display='flex' gap={2} pb={1} alignItems='center'>
              {
                product.discount ?
                  <>
                    <Typography variant='h5' component='p' lineHeight={1} fontWeight={theme.typography.fontWeightLight} color='lightgray' sx={{ textDecoration: 'line-through' }}>${product.price}</Typography>
                    <Typography variant='h4' component='h3' lineHeight={1} aria-label='Price' color='error' fontWeight={theme.typography.fontWeightBold}>{product.discount}% Discount - ${product.price * (1 - product.discount / 100)}</Typography>
                  </>
                  :
                  <>
                    <Typography variant='h4' component='h3' lineHeight={1} aria-label='Price'>${product.price}</Typography>
                  </>
              }
              <Counter count={count} setCount={setCount} />
              <Button variant='contained' color={theme.palette.secondary.main} sx={{ backgroundColor: theme.palette.secondary.main, borderRadius: '100px', px: 4, py: 1, fontSize: '1.25rem', fontWeight: theme.typography.fontWeightBold }} onClick={(e) => addToCart(e, id, count)}>
                Add to cart
              </Button>
              <Button variant='contained' sx={{ borderRadius: '100px', px: 4, py: 1, fontSize: '1.25rem', fontWeight: theme.typography.fontWeightBold }}>Purchase Now</Button>
            </Box>
          </Grid2>
        </Grid2 >
      </ >
    )
}
