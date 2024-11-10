import { Box, Button, Divider, IconButton, Paper, Slide, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import useCarts from '../../hooks/useCarts';
import { useAuth } from '../../providers/UserProvider';
import useProducts from '../../hooks/useProducts';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function CartDrawer({ isOpen, setIsOpen }) {
  /*                                                                *
  Custom Drawer, since MUI Drawer seems to be broken in this version
  *                                                                 */
  const { user } = useAuth();
  const { cart, isLoading, error, getUserCart, updateQuantity } = useCarts();
  const { getProductById } = useProducts();
  const [products, setProducts] = useState({});

  // close drawer with Esc key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key == 'Escape') setIsOpen(false);
    }

    document.addEventListener('keydown', handleEsc);
    if (user) getUserCart(user._id);

    return () => document.removeEventListener('keydown', handleEsc);
  }, [user, isOpen]);

  useEffect(() => {
    if (user && cart.products.length) {
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
  }, [isOpen, user, cart]);

  const removeProduct = async (product_id) => {
    await updateQuantity(user._id, { product_id: product_id, quantity: 0 });
  }

  // disable child activating parent onclick event
  const stopClick = e => e.stopPropagation();

  if (user && isOpen) return (
    <Box width='100vw' height='100vh' position='fixed' zIndex={1500} left={0} top={0} sx={{ backgroundColor: 'rgba(0, 0, 0, .5)' }} onClick={() => setIsOpen(false)}>
      <Slide direction='left' in={isOpen} mountOnEnter unmountOnExit>
        <Paper className='anchor-right' onClick={(e) => stopClick(e)} sx={{ display: 'inline-flex', height: '100vh', position: 'fixed', zIndex: 1550, top: 0, right: 0, borderRadius: 0, py: 1, }} elevation={4}>
          <Box width='250px' role='presentation'>
            <Typography px={1} variant='h5' component='p'>My Cart</Typography>
            <Divider />
            {isLoading ? <p>Loading...</p> : null}
            {isLoading == false && error ? <p>Error: {error}</p> : null}
            {
              isLoading == false && cart ?
                <>
                  {cart.products.length > 0 ?
                    <Box display='flex' flexDirection='column'>
                      <Box flexGrow={1}>
                        <Box component='ul' p={0} sx={{ listStyleType: 'none' }}>
                          {cart.products.map((product) => {
                            const productData = products[product.product_id];
                            return (
                              <Box component='li' key={product.product_id} display='flex' px={1} gap={1} alignItems='center'>
                                <Box component='img' src={productData.image.url} alt={productData.image.alt} maxWidth='75px' maxHeight='75px' />
                                <Box flexGrow={1}>
                                  <Typography>{productData.name}</Typography>
                                  <Typography>Total: <strong>${product.price}</strong></Typography>
                                  <Box display='flex' justifyContent='space-between' alignItems='center'>
                                    <Typography color='textDisabled'>Quantity: <strong>{product.quantity}</strong></Typography>
                                    <IconButton onClick={() => removeProduct(product.product_id)} sx={{ p: 0 }}><DeleteForeverIcon color='error' /></IconButton>
                                  </Box>
                                </Box>
                              </Box>
                            )
                          })}
                        </Box>
                      </Box>
                      <Button color='success' fullWidth sx={{ alignSelf: 'flex-end' }}>Go to Checkout</Button>
                    </Box>
                    : <Typography textAlign='center' py={1} px={1.5} color='textDisabled'>You have no products in your cart :(</Typography>
                  }
                </>
                : null
            }
          </Box>
        </Paper>
      </Slide>
    </Box >
  )

  return null;
}
