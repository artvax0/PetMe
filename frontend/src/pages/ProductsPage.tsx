import { Grid2 } from "@mui/material";
import CardComponent from "../components/cards/CardComponent";
import { useEffect } from "react";
import useProducts from "../hooks/useProducts";

export default function ProductsPage() {
  const { getAllProducts, allProducts, error} = useProducts();

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <Grid2 container spacing={2} mx={3}>
      {allProducts.map((product) => (
        <Grid2 key={product._id} display='inline-flex' size={{xs: 12, sm: 6, md: 4, lg: 1.5}}>
          <CardComponent product={product}/>
        </Grid2>
      ))}
    </Grid2>
  )
}
