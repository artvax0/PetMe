import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import { useAuth } from "../providers/UserProvider"
import { Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "../routes/routesModel";
import { Typography } from "@mui/material";
import Title from "../components/utils/Title";

export default function OrderPage() {
  const { user } = useAuth();
  const location = useLocation();
  const products = location?.state?.products || '';
  const { getProductById } = useProducts();
  const [productsList, setProductsList] = useState({});

  useEffect(() => {
    if (user && products) {
      const handleProductDetails = async () => {
        const productDetails = await Promise.all(
          products.map(async (product) => {
            const data = await getProductById(product.product_id);
            return { ...data, _id: product.product_id };
          })
        );
        const productsMapping = productDetails.reduce((acc, product) => {
          acc[product._id] = product;
          return acc;
        }, {});
        setProductsList(productsMapping);
      }
      handleProductDetails();
    }
  }, [products]);

  if (!user) return (<Navigate to={ROUTES.LOGIN} replace />);
  if (!products) return (<Navigate to={ROUTES.ROOT} replace />)

  return (
    <>
      <Title title={'Place Order'} />
      <Typography>Place Order</Typography>
      {console.log(products)}
    </>
  )
}
