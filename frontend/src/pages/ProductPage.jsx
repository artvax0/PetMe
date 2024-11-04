import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, Divider, Grid2, Typography } from '@mui/material';
import useProducts from '../hooks/useProducts';
import { useTheme } from '../providers/ThemeProvider';
import Title from '../components/utils/Title';

export default function ProductPage() {
  const { id } = useParams();
  const { theme } = useTheme();
  const { product, getProductById, isLoading, error } = useProducts();

  useEffect(() => {
    getProductById(id);
  }, [id]);

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  if (product)
    return (
      <>
        <Title title={product.name} />
        <Grid2 container mt={2.75} width='100%' gap={2} sx={{ backgroundColor: '#fff', borderRadius: '15px' }}>
          <Grid2 size={4} sx={{ boxShadow: 'inset 5px 5px 5px 0 rgba(0, 0, 0, .25), inset -5px -5px 5px 0 rgba(0, 0, 0, .25)', borderRadius: '5px' }}>
            <Box width='100%' component='img' src={product.image.url} alt={product.image.alt} />
          </Grid2>
          <Grid2 flexGrow={1} py={1} maxWidth='64%'>
            <Typography variant='h4' component='h2' fontWeight={theme.typography.fontWeightBold} color={theme.palette.secondary.main} gutterBottom>{product.name}</Typography>
            <Typography variant='body1' component='p' fontWeight={theme.typography.fontWeightRegular} gutterBottom>{product.description}</Typography>
            <Divider variant='middle' sx={{ mb: 2 }} />
            {/* Amount of Products Counter here */}
            <Button variant='contained' color={theme.palette.secondary.main} sx={{ backgroundColor: theme.palette.secondary.main, borderRadius: '100px', px: 4, py: 1, fontSize: '1rem', fontWeight: theme.typography.fontWeightBold }}>
              Add To Cart
            </Button>
            <Button variant='contained' sx={{ borderRadius: '100px', px: 4, py: 1, fontSize: '1rem', fontWeight: theme.typography.fontWeightBold }}>Purchase Now</Button>
          </Grid2>
        </Grid2>
      </ >
    )
}
