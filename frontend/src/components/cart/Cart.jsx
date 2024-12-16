import React, { useEffect, useState } from 'react'
import useCarts from '../../hooks/useCarts';
import useProducts from '../../hooks/useProducts';
import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routesModel';
import LoadingSpinner from '../utils/LoadingSpinner';
import Error from '../utils/Error';

export default function Cart({ user, setIsOpen }) {
  const { cart, isLoading, error, getUserCart, updateQuantity } = useCarts();
  const { getProductById } = useProducts();
  const [products, setProducts] = useState({});
  const navigate = useNavigate();

  let isStocked = true;
  let totalPrice = 0;

  useEffect(() => {
    const getCart = async () => {
      await getUserCart(user._id);
    }
    if (user) getCart();

  }, [user]);

  useEffect(() => {
    if (user && cart.products) {
      const handleProductDetails = async () => {
        const productDetails = await Promise.all(
          cart.products.map(async (product) => {
            const data = await getProductById(product.product_id);
            return { ...data, _id: product.product_id };
          })
        );
        // take product (each object in the productDetails array {...data, _id: ...})
        const productsMapping = productDetails.reduce((acc, product) => {
          // initialValue - {} below, accumilator[key] will be equals to the product itself.
          acc[product._id] = product;
          return acc;
        }, {});
        setProducts(productsMapping);
      }
      handleProductDetails();
    }
  }, [cart.products]);

  const removeProduct = async (product_id) => {
    await updateQuantity(user._id, { product_id: product_id, quantity: 0 });
    await getUserCart(user._id);
  }

  if (isLoading) return (<LoadingSpinner />);
  if (error) return (<Error error={error} />);
  if (cart) return (
    <>
      {cart?.products?.length > 0 ?
        <Box display='flex' flexDirection='column'>
          <Box flexGrow={1}>
            <Box component='ul' display='flex' flexDirection='column' gap={1} p={0} sx={{ listStyleType: 'none' }}>
              {cart.products.map((product) => {
                const productData = products[product.product_id];
                if (productData?.stock > 0) { totalPrice += product.price * product.quantity };
                return (
                  <React.Fragment key={product.product_id}>
                    <Box component='li' display='flex' px={1} gap={1} alignItems='center'>
                      <Box component='img' src={productData?.image?.url || ''} alt={productData?.image?.alt || ''} maxWidth='75px' maxHeight='75px' />
                      <Box flexGrow={1}>
                        <Typography>{productData?.name || ''}</Typography>
                        {
                          productData?.stock > 0 ?
                            <>
                              <Typography>Total: <strong>${product.price}</strong></Typography>
                            </> :
                            <>
                              {isStocked = false}
                              {console.log(isStocked)}
                              <Typography fontWeight='bold'>Out of stock</Typography>
                            </>
                        }
                        <Box display='flex' justifyContent={productData?.stock > 0 ? 'space-between' : 'flex-end'} alignItems='center'>
                          {
                            productData?.stock > 0 ?
                              <Typography color='textDisabled'>Quantity: <strong>{product.quantity}</strong></Typography> :
                              null
                          }
                          <IconButton onClick={() => removeProduct(product.product_id)} sx={{ p: 0 }}><DeleteForeverIcon color='error' /></IconButton>
                        </Box>
                      </Box>
                    </Box>
                    <Divider variant='middle' />
                  </React.Fragment>
                )
              })}
            </Box>
            <Typography textAlign='center'>Total: <strong>${totalPrice}</strong></Typography>
          </Box>
          <Button disabled={!isStocked || totalPrice == 0} color='success' fullWidth sx={{ alignSelf: 'flex-end' }} onClick={() => { navigate(ROUTES.ORDER, { state: { products: cart.products } }); setIsOpen(false) }}>Go to Checkout</Button>
          {!isStocked && <Typography textAlign='center' color='error' fontWeight='light'>A product is out of stock!</Typography>}
        </Box>
        : <Typography textAlign='center' py={1} px={1.5} color='textDisabled'>You have no products in your cart :(</Typography>
      }
    </>
  )
}
