import { Grid2, Typography } from "@mui/material";
import CardComponent from "../components/cards/CardComponent";
import { useEffect } from "react";
import useProducts from "../hooks/useProducts";

export default function ProductsPage() {
  const { getAllProducts, allProducts, categories, productsByCategory, error, isLoading } = useProducts();

  useEffect(() => {
    getAllProducts();
  }, []);

  if (isLoading) return <p>Loading...</p> //temporarry loading message until loading spinner is ready
  if (error) return <p>Error: {error}</p> //temporary error message until error component is ready
  if (categories) return (
    <div>
      {categories.map(category => {
        const products = productsByCategory[category._id] || [];

        if (products && products.length > 0) return (
          <div key={category._id}>
            <Typography variant='h5' component='h2'>{category.name}</Typography>
            <Grid2 container spacing={2} mx={3}>
              {products.map((product) => (
                <Grid2 key={product._id} display='inline-flex' size={{ xs: 12, sm: 6, md: 4, lg: 1.5 }}>
                  <CardComponent product={product} />
                </Grid2>
              ))}
            </Grid2>
          </div>
        )
      })}
    </div>

  )

  return null;
}
