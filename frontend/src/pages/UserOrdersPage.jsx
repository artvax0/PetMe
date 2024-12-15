import { Box, Card, CardActionArea, Divider, Grid2, Paper, Typography } from '@mui/material'
import Title from '../components/utils/Title'
import useOrders from '../hooks/useOrders'
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from '../providers/UserProvider'
import { ROUTES } from '../routes/routesModel';
import React, { useEffect } from 'react';
import useProducts from '../hooks/useProducts';
import { useTheme } from '../providers/ThemeProvider';
import statusColors from '../utils/statusColors';
import LoadingSpinner from '../components/utils/LoadingSpinner';
import Error from '../components/utils/Error';

export default function UserOrdersPage() {
  const { user } = useAuth();
  const { orders, listUserOrders, isLoading, error } = useOrders();
  const { allProducts, getAllProducts } = useProducts();
  const navigate = useNavigate();
  const { theme, mode } = useTheme();

  useEffect(() => {
    if (user) {
      const listOrders = async () => {
        await listUserOrders(user._id);
        await getAllProducts();
      }
      listOrders();
    }
  }, [user]);

  if (!user) return (<Navigate to={ROUTES.LOGIN} />)
  return (
    <>
      <Title title={'My Orders'} />
      <Grid2 container flexDirection='column' size={12}>
        <Typography variant='h4' fontSize={{ xs: '1.7rem', sm: '2.125rem' }} component='h1' color={mode == 'light' ? '#000' : '#fff'}>My Orders</Typography>
        <Grid2 container flexDirection='column' gap={2}>
          {isLoading ? <LoadingSpinner /> : null}
          {error ? <Error error={error} /> : null}
          {orders.map((order) => (
            <Card key={order._id} sx={{ p: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
              <CardActionArea onClick={() => navigate(ROUTES.ORDER + `/${order._id}`)}>
                <Box display='flex' flexDirection={{ xs: 'column-reverse', sm: 'row' }} justifyContent='space-between'>
                  <Typography variant='h5' component='h2' textAlign={{ xs: 'center', sm: 'initial' }} fontSize={{ xs: '1.2rem', sm: '1.5rem' }}>Order Number: {order._id}</Typography>
                  <Box fontSize='1rem' lineHeight={2} borderRadius={2} px={2} color='#fff' textAlign={{ xs: 'center', sm: 'initial' }} fontFamily={theme.typography.fontFamily} fontWeight={theme.typography.fontWeightMedium} sx={{ backgroundColor: `${statusColors(order.status)}` }}>{order.status}</Box>
                </Box>
                <Divider />
                <Typography variant='h6' component='h3'>Order Details</Typography>
                {order.products.map((product) => {
                  const productData = allProducts.filter((val) => val._id == product.product_id)[0];
                  return (
                    <React.Fragment key={product.product_id}>
                      <Grid2 container gap={1} sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, .10)' }, cursor: 'pointer' }} onClick={() => navigate(ROUTES.PRODUCT + `/${product.product_id}`)}>
                        <Box component='img' src={productData?.image?.url} alt={productData?.image?.alt} maxWidth='75px' maxHeight='75px' />
                        <Box>
                          <Typography variant='body1'>{productData?.name}</Typography>
                          <Box>
                            <Typography>Quantity: {product.quantity}</Typography>
                            <Typography>Price: ${product.price}</Typography>
                          </Box>
                        </Box>
                      </Grid2>
                      <Divider variant='middle' />
                    </React.Fragment>
                  )
                })}
                <Typography fontWeight={theme.typography.fontWeightBold} gutterBottom>Total: ${order.total}</Typography>
                <Typography variant='h6' component='h3'>Delivery Details</Typography>
                <Typography variant='body1'>{`${order.address.street} ${order.address.houseNumber}, ${order.address.city}, ${order.address.state ? `${order.address.state},` : ''} ${order.address.country} | ${order.address.zip}`}</Typography>
              </CardActionArea>
            </Card>
          ))}
        </Grid2>
      </Grid2>
    </>
  )
}
