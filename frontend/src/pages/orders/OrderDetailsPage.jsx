import React, { useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../providers/UserProvider';
import useOrders from '../../hooks/useOrders';
import { ROUTES } from '../../routes/routesModel';
import Title from '../../components/utils/Title';
import { Box, Divider, Grid2, Typography } from '@mui/material';
import { useTheme } from '../../providers/ThemeProvider';
import statusColors from '../../utils/statusColors';
import useProducts from '../../hooks/useProducts';
import LoadingSpinner from '../../components/utils/LoadingSpinner';
import Error from '../../components/utils/Error';

export default function OrderDetailsPage() {
  const { id } = useParams();
  const { user } = useAuth()
  const { isLoading, error, order, findOrder } = useOrders();
  const { allProducts, getAllProducts } = useProducts();
  const { theme, mode } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const getOrder = async () => {
      await findOrder(id);
      await getAllProducts();
    }
    getOrder();
  }, [user])

  if (isLoading) return (<LoadingSpinner />);
  if (error) return (<Error error={error} />);
  if (!user || user._id != order.user_id) return (<Navigate to={ROUTES.LOGIN} replace />);
  return (
    <>
      <Title title={'Order Details'} />
      <Box display='flex' flexDirection='column' width='100%' color={mode == 'light' ? '#000' : '#fff'}>
        <Typography variant='h4' fontSize={{ xs: '1.7rem', sm: '2.125rem' }} component='h1'>Order Details</Typography>
        <Grid2 container>
          <Box display='flex' width='100%' flexDirection={{ xs: 'column-reverse', sm: 'row' }} justifyContent='space-between'>
            <Typography variant='h5' component='h2' textAlign={{ xs: 'center', sm: 'initial' }} fontSize={{ xs: '1.2rem', sm: '1.5rem' }}>Order Number: {id}</Typography>
            <Box fontSize='1rem' lineHeight={2} borderRadius={2} px={2} color='#fff' fontFamily={theme.typography.fontFamily} fontWeight={theme.typography.fontWeightMedium} sx={{ backgroundColor: `${statusColors(order.status)}` }} textAlign={{ xs: 'center', sm: 'initial' }} >{order.status}</Box>
          </Box>
          <Grid2 container spacing={2} flexDirection='column' size={12}>
            {order.products.map((product) => {
              const productData = allProducts.filter((pr) => product.product_id == pr._id)[0];
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
            <Typography variant='h6' component='h3' fontWeight={theme.typography.fontWeightBold}>Total: ${order.total}</Typography>
            <Box>
              <Typography variant='h6' component='h3'>Delivery Details</Typography>
              <Typography variant='body1'>{`${order.address.street} ${order.address.houseNumber}, ${order.address.city}, ${order.address.state ? `${order.address.state},` : ''} ${order.address.country} | ${order.address.zip}`}</Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </>
  )
}
