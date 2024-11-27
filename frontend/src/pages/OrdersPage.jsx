import { Box, Button, Card, CardActionArea, Divider, FormControl, Grid2, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useAuth } from '../providers/UserProvider'
import React, { useCallback, useEffect, useState } from 'react';
import Title from '../components/utils/Title';
import useOrders from '../hooks/useOrders';
import { useSearchParams } from "react-router-dom";
import useProducts from '../hooks/useProducts';
import { useTheme } from '../providers/ThemeProvider';
import statusColors from '../utils/statusColors';

export default function OrdersPage() {
  const { user } = useAuth();
  const { theme } = useTheme();
  const { filteredOrders, listOrders, isLoading, error } = useOrders();
  const { getAllProducts, allProducts } = useProducts();
  const [filter, setFilter] = useState('orderID');
  const [searchInput, setSearchInput] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getOrders = async () => {
      await listOrders();
      await getAllProducts();
    }
    getOrders();
  }, []);

  const handleChange = useCallback((e) => {
    setFilter(e.target.value);
    if (e.target.value == 'orderStatus') return setSearchInput('Processing');
    return setSearchInput('');
  }, []);

  const handleInput = useCallback((e) => {
    setSearchInput(e.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    if (searchInput == '') return setSearchParams();
    setSearchParams({ q: `${filter}/${searchInput}` });
  }, [filter, searchInput])

  if (isLoading) return (<p>Loading...</p>);
  if (error) return (<p>Error: {error}</p>);
  return (
    <>
      {console.log(searchInput, searchParams.get('q'), filteredOrders)}
      <Title title='Search Orders' />
      <Box width='100%' display='flex' flexDirection='column' gap={1}>
        <Typography variant='h4' component='h1'>Search Orders</Typography>
        <Grid2 container size={12} spacing={2} display='flex'>
          <Grid2 size={1.2}>
            <FormControl fullWidth color='highlight' size='small'>
              <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue='orderID'
                label="Filter By"
                onChange={(e) => handleChange(e)}
              >
                <MenuItem value='address'>Address</MenuItem>
                <MenuItem value='orderID'>Order ID</MenuItem>
                <MenuItem value='orderStatus'>Order Status</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 size={9.8}>
            {
              filter == 'orderStatus' ?
                <FormControl fullWidth color='highlight' size='small'>
                  <InputLabel id="demo-simple-select-label">Select Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue='Processing'
                    label="Select Status"
                    onChange={(e) => handleInput(e)}
                  >
                    <MenuItem value='Processing'>Processing</MenuItem>
                    <MenuItem value='En Route'>En Route</MenuItem>
                    <MenuItem value='Complete'>Complete</MenuItem>
                    <MenuItem value='Cancelled'>Cancelled</MenuItem>
                  </Select>
                </FormControl> :
                <TextField onChange={(e) => handleInput(e)} fullWidth variant='filled' placeholder='Search...' slotProps={{ htmlInput: { sx: { p: 1 } } }} />
            }
          </Grid2>
          <Grid2 size={1}>
            <Button variant='contained' color='success' fullWidth onClick={handleSearch} >Search</Button>
          </Grid2>
        </Grid2 >
        <Box display='flex' flexDirection='column' gap={1} width='100%'>
          {filteredOrders.map(order => (
            <Card key={order._id} sx={{ p: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box display='flex' justifyContent='space-between'>
                <Typography variant='h5' component='h2'>Order Number: {order._id}</Typography>
                <Box fontSize='1rem' lineHeight={2} borderRadius={2} px={2} color='#fff' fontFamily={theme.typography.fontFamily} fontWeight={theme.typography.fontWeightMedium} sx={{ backgroundColor: `${statusColors(order.status)}` }}>{order.status}</Box>
              </Box>
              <Divider />
              <Typography variant='h6' component='h3'>Order Details</Typography>
              {order.products.map((product) => {
                const productData = allProducts.filter((val) => val._id == product.product_id)[0];
                return (
                  <React.Fragment key={product.product_id}>
                    <Grid2 container gap={1}>
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
              <Typography fontWeight={theme.typography.fontWeightBold}>Total: ${order.total}</Typography>
              <Typography variant='h6' component='h3'>Delivery Details</Typography>
              <Typography variant='body1'>{`${order.address.street} ${order.address.houseNumber}, ${order.address.city}, ${order.address.state ? `${order.address.state},` : ''} ${order.address.country} | ${order.address.zip}`}</Typography>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  )
}
