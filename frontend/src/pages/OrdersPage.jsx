import { Box, Card, Grid2, Paper, Typography } from '@mui/material'
import Title from '../components/utils/Title'
import useOrders from '../hooks/useOrders'
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from '../providers/UserProvider'
import { ROUTES } from '../routes/routesModel';
import { useEffect } from 'react';

export default function OrdersPage() {
  const { user } = useAuth();
  const { orders, listUserOrders, isLoading, error } = useOrders();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const listOrders = async () => {
        await listUserOrders(user._id);
        console.log(orders);
      }
      listOrders();
    }
  }, [user]);

  if (!user) return (<Navigate to={ROUTES.LOGIN} />)
  return (
    <>
      <Title title={'My Orders'} />
      <Grid2 container flexDirection='column' size={12}>
        <Typography variant='h4' component='h1'>My Orders</Typography>
        <Grid2 container flexDirection='column' gap={2}>
          {isLoading ? <p>Loading...</p> : null}
          {error ? <p>Error: {error}</p> : null}
          {orders.map((order) => (
            <Card key={order._id} sx={{ p: 1 }}>
              <Typography>Order Number: {order._id}</Typography>
              <Box>

              </Box>
            </Card>
          ))}
        </Grid2>
      </Grid2>
    </>
  )
}
