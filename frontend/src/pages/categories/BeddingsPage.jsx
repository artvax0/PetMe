import React, { useCallback, useEffect } from 'react'
import useProducts from '../../hooks/useProducts';
import { Box, Grid2, Typography } from '@mui/material';
import { useTheme } from '../../providers/ThemeProvider';
import CardComponent from '../../components/cards/CardComponent';
import LoadingSpinner from '../../components/utils/LoadingSpinner';
import Error from '../../components/utils/Error';
import usePets from '../../hooks/usePets';
import Title from '../../components/utils/Title';
import Searchbar from '../../components/utils/Searchbar';

const category = 'Bedding & Furniture';

export default function BeddingsPage() {
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
        <Title title={`${category} Products`} />
        <Box width='100%'>
          <Typography
            variant='h5'
            component='h2'
            fontWeight={theme.typography.fontWeightMedium}
            color={mode == 'light' ? '#000' : '#fff'}
          >
            {category} Products
          </Typography>
          <Box pb={1}>
            <Searchbar />
          </Box>
          <Grid2 container spacing={2} mx={3}>
            {
              productsByCategory[getCategory(category)] && productsByCategory[getCategory(category)].length > 0 ?
                productsByCategory[getCategory(category)].map(prod => (
                  <Grid2 key={prod._id} size={{ xs: 12, sm: 6, md: 4, lg: 1.5 }}>
                    <CardComponent product={prod} pets={pets} />
                  </Grid2>
                )) :
                <Typography color='textDisabled'>No products have been found in this category! :(</Typography>
            }
          </Grid2>
        </Box>
      </>
    )
}
