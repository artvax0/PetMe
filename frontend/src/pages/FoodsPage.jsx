import React, { useCallback, useEffect } from 'react'
import useProducts from '../hooks/useProducts';
import { Box } from '@mui/system';
import { Grid2, Typography } from '@mui/material';
import { useTheme } from '../providers/ThemeProvider';
import CardComponent from '../components/cards/CardComponent';

export default function FoodsPage() {
  const { theme } = useTheme();
  const { getAllProducts, categories, productsByCategory, error, isLoading } = useProducts();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getCategory = useCallback((category) => {
    const cat = categories.find(cat => cat.name == category);
    return cat._id;
  }, [categories]);

  if (isLoading) return <p>Loading. . . </p>
  if (error) return <p>Error: {error}</p>
  if (categories)
    return (
      <>
        <Grid2 container flexDirection='column' width='100%'>
          <Typography variant='h5' component='h2' fontWeight={theme.typography.fontWeightMedium}>Food Products</Typography>
          <Grid2 container width='100%' gap={4}>
            {productsByCategory[getCategory('Food')].map(prod => (
              <Grid2 key={prod._id} display='inline-flex' size={{ xs: 12, sm: 6, md: 4, lg: 1.5 }}>
                <CardComponent product={prod} />
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </>
    )
}
