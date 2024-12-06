import { Box, Grid2, Typography } from "@mui/material";
import CardComponent from "../components/cards/CardComponent";
import { useEffect } from "react";
import useProducts from "../hooks/useProducts";
import { useTheme } from "../providers/ThemeProvider";
import Title from "../components/utils/Title";
import usePets from "../hooks/usePets";

export default function ProductsPage() {
  const { theme } = useTheme();
  const { getAllProducts, categories, productsByCategory, error, isLoading } = useProducts();
  const { getAllPets, pets } = usePets();

  useEffect(() => {
    getAllProducts();
    getAllPets();
  }, []);

  if (isLoading) return <p>Loading...</p> //temporarry loading message until loading spinner is ready
  if (error) return <p>Error: {error}</p> //temporary error message until error component is ready
  if (categories && pets) return (
    <>
      <Title title={'Products'} />
      <Box width='100%' display='flex' flexDirection='column' gap={2}>
        {categories.map(category => {
          const products = productsByCategory[category._id] || [];

          if (products && products.length > 0) return (
            <Box key={category._id} display='flex' flexDirection='column' gap={1}>
              <Typography variant='h5' component='h2' fontWeight={theme.typography.fontWeightMedium}>{category.name}</Typography>
              <Grid2 container spacing={2} mx={3}>
                {products.map((product) => (
                  <Grid2 key={product._id} display='inline-flex' size={{ xs: 12, sm: 4, lg: 5 }}>
                    <CardComponent product={product} pets={pets} />
                  </Grid2>
                ))}
              </Grid2>
            </Box>
          )
        })}
      </Box>
    </>
  )

  return null;
}
