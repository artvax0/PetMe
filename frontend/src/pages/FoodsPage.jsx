import React, { useCallback, useEffect } from 'react'
import useProducts from '../hooks/useProducts';
import { Grid2, Typography } from '@mui/material';
import { useTheme } from '../providers/ThemeProvider';
import CardComponent from '../components/cards/CardComponent';
import LoadingSpinner from '../components/utils/LoadingSpinner';
import Error from '../components/utils/Error';
import usePets from '../hooks/usePets';
import Title from '../components/utils/Title';

export default function FoodsPage() {
  const { theme, mode } = useTheme();

  const { getAllProducts, categories, productsByCategory, error, isLoading } = useProducts();
  const { getAllPets, pets } = usePets();

  useEffect(() => {
    getAllProducts();
    getAllPets();
  }, []);

  const getCategory = useCallback((category) => {
    const cat = categories.find(cat => cat.name == category);
    return cat._id;
  }, [categories]);

  if (isLoading) return (<LoadingSpinner />);
  if (error) return (<Error error={error} />);
  if (categories && pets)
    return (
      <>
        <Title title='Food Products' />
        <Grid2 container flexDirection='column' width='100%'>
          <Typography
            variant='h5'
            component='h2'
            fontWeight={theme.typography.fontWeightMedium}
            color={mode == 'light' ? '#000' : '#fff'}
          >
            Food Products
          </Typography>
          <Grid2 container spacing={2} mx={3}>
            {
              productsByCategory[getCategory('Food')].length > 0 ?
                productsByCategory[getCategory('Food')].map(prod => (
                  <Grid2 key={prod._id} display='inline-flex' size={{ xs: 12, sm: 6, md: 4, lg: 1.5 }}>
                    <CardComponent product={prod} pets={pets} />
                  </Grid2>
                )) :
                <Typography color='textDisabled'>There are no products in this category! :(</Typography>
            }
          </Grid2>
        </Grid2>
      </>
    )
}
