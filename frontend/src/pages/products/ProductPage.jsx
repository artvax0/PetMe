import React, { forwardRef, useCallback, useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid2, Slide, Typography } from '@mui/material';
import useProducts from '../../hooks/useProducts';
import { useTheme } from '../../providers/ThemeProvider';
import Title from '../../components/utils/Title';
import InventoryIcon from '@mui/icons-material/Inventory';
import usePets from '../../hooks/usePets';
import Counter from '../../components/utils/Counter';
import { ROUTES } from '../../routes/routesModel';
import { useAuth } from '../../providers/UserProvider';
import useCarts from '../../hooks/useCarts';
import EditIcon from '@mui/icons-material/Edit';
import InputNumber from '../../components/utils/InputNumber';
import LoadingSpinner from '../../components/utils/LoadingSpinner';
import Error from '../../components/utils/Error';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProductPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const { theme, mode } = useTheme();
  const navigate = useNavigate();

  const { product, getProductById, editStock, isLoading, error } = useProducts();
  const { getProductPets, pets, isLoading: petIsLoading } = usePets();
  const { addProductToCart } = useCarts();

  const [count, setCount] = useState(1);
  const [openSt, setOpenSt] = useState(false);
  const [stock, setStock] = useState(1);

  const handleOpenSt = useCallback(() => setOpenSt(true), [user]);
  const handleCloseSt = useCallback(() => setOpenSt(false), [user]);
  const handleStock = useCallback(async (stock) => { await editStock(id, stock); handleCloseSt() }, []);

  const addToCart = useCallback((e, productId, quantity) => {
    if (user) return addProductToCart(e, user._id, { product_id: productId, quantity });
    return navigate(ROUTES.LOGIN);
  }, [])

  useEffect(() => {
    if (isLoading) {
      const getProduct = async () => {
        await getProductById(id);
      }
      getProduct();
    }
  }, [id, isLoading]);

  useEffect(() => {
    if (petIsLoading && product?.petType_id) {
      const getPets = async () => {
        await getProductPets(product?.petType_id);
      }
      getPets();
    }
  }, [product?.petType_id, petIsLoading]);

  let isStocked = true;
  let now = new Date().toISOString();
  let isDiscountValid = product.discount > 0 && product.discountStartDate <= now && product.discountEndDate >= now;

  if (product.stock == 0) { isStocked = false };
  let discountedPrice = Number.isSafeInteger(product.price * (1 - product.discount / 100)) ? product.price * (1 - product.discount / 100) : (product.price * (1 - product.discount / 100)).toFixed(2);

  if (isLoading && petIsLoading) return (<><Title title={'Loading...'} /><LoadingSpinner /></>)
  if (error) return (<><Title title={'PetMe - Error'} /><Error error={error} /></>)
  if (product)
    return (
      <>
        <Title title={product.name} />
        <Grid2 container mt={2.75} width='100%' gap={2} sx={{ backgroundColor: mode == 'light' ? '#fff' : theme.palette.highlight.main, borderRadius: '15px' }}>
          <Grid2
            size={{ xs: 12, sm: 4 }}
            sx={{
              backgroundColor: '#fff',
              borderRadius: '5px',
              overflow: 'hidden',
              width: '100%',
              aspectRatio: '1/1',
              alignSelf: 'start',

            }}>
            <Box width='100%' component='img' src={product?.image?.url} alt={product?.image?.alt} sx={{
              borderRadius: '5px', aspectRatio: '1/1', display: 'block', objectFit: 'cover'
            }} />
          </Grid2>
          <Grid2 display='flex' flexDirection='column' flexGrow={1} py={1} maxWidth={{ xs: '100%', md: '64%' }} gap={{ xs: 2, sm: 0 }}>
            <Box display='flex' justifyContent='space-between' flexDirection={{ xs: 'column', sm: 'row' }}>
              <Typography variant='h4' component='h2' fontWeight={theme.typography.fontWeightBold} fontSize={{ xs: '2rem', sm: '3rem' }} textAlign={{ xs: 'center', sm: 'left' }} color={theme.palette.secondary.main} gutterBottom>
                {product.name}
              </Typography>
              {
                user && user.isEmployee &&
                <Box display='inline-flex' gap={1} justifyContent={{ xs: 'space-around', sm: 'normal' }}>
                  <Button variant='contained' color='success' sx={{ p: 1, width: '30px', minWidth: '30px', maxHeight: '30px' }} onClick={handleOpenSt}><InventoryIcon sx={{ color: mode == 'light' ? '#fff' : '#000' }} /></Button>
                  <Button variant='contained' color='warning' sx={{ p: 1, width: '30px', minWidth: '30px', maxHeight: '30px' }} onClick={() => navigate(ROUTES.EDIT_RODUCT + `/${id}`)}><EditIcon /></Button>
                </Box>
              }
            </Box>
            <Typography variant='body1' component='h3' fontWeight={theme.typography.fontWeightRegular} fontSize={{ xs: '1rem', sm: '1.25rem' }} flexGrow={1} px={{ xs: 1, sm: 0 }} gutterBottom color={mode == 'light' ? '#000' : '#fff'}>{product.description}</Typography>
            <Typography px={{ xs: 1, sm: 0 }} color={mode == 'light' ? '#000' : '#fff'}>This product is fit for:</Typography>
            <Box display='inline-flex' gap={2} pb={2} px={{ xs: 1, sm: 0 }}>
              {pets && pets.map((pet) => (
                <Box key={pet._id} backgroundColor='#fff' width='30px' height='30px' boxShadow='0 5px 5px rgba(0, 0, 0, .25)' borderRadius='50%' display='flex' justifyContent='center' alignItems='center'>
                  <Box width='80%' component='img' src={`/${pet.name}.svg`} alt={pet.name + ' icon'} />
                </Box>
              ))
              }
            </Box>
            <Divider variant='middle' sx={{ mb: 2 }} />
            <Typography variant='h5' display='inline-flex' justifyContent={{ xs: 'center', sm: 'unset' }} alignItems='center' gap={1} gutterBottom color={mode == 'light' ? '#000' : '#fff'}><InventoryIcon color='secondary' /> {product.stock}</Typography>
            <Box display='flex' gap={2} pb={1} alignItems='center' flexDirection={{ xs: 'column', sm: 'row' }}>
              {isStocked ? <>
                {/* Price */}
                {
                  isDiscountValid ?
                    <>
                      <Typography variant='h5' component='p' lineHeight={1} fontWeight={theme.typography.fontWeightLight} color='lightgray' sx={{ textDecoration: 'line-through' }}>${Number.isSafeInteger(product.price) ? product.price : (product.price).toFixed(2)}</Typography>
                      <Typography variant='h4' component='h3' lineHeight={1} aria-label='Price' color='error' fontWeight={theme.typography.fontWeightBold}>{product.discount}% Discount - ${discountedPrice}</Typography>
                    </>
                    :
                    <>
                      <Typography variant='h4' component='h3' lineHeight={1} aria-label='Price' color={mode == 'light' ? '#000' : '#fff'}>${Number.isSafeInteger(product.price) ? product.price : (product.price).toFixed(2)}</Typography>
                    </>
                }
                {/* Count and Purchase/Cart buttons */}
                <Box>
                  <Counter count={count} setCount={setCount} />
                </Box>
                <Button variant='contained' color={theme.palette.secondary.main} sx={{ backgroundColor: theme.palette.secondary.main, borderRadius: '100px', px: 4, py: 1, fontSize: '1.25rem', fontWeight: theme.typography.fontWeightBold, color: mode == 'light' ? '#000' : '#fff' }} onClick={(e) => addToCart(e, id, count)}>
                  Add to cart
                </Button>
                <Button variant='contained' sx={{ borderRadius: '100px', px: 4, py: 1, fontSize: '1.25rem', fontWeight: theme.typography.fontWeightBold }} onClick={() => navigate(ROUTES.ORDER, { state: { products: [{ product_id: id, isStocked: product.isStocked, price: isDiscountValid ? discountedPrice : product.price, quantity: count }] } })}>Purchase Now</Button>
              </> :
                <Typography fontWeight='bold' fontSize={{ xs: '1rem', sm: '2.5rem' }} color={mode == 'light' ? '#000' : '#fff'}>Product is out of stock! :(</Typography>
              }
            </Box>
          </Grid2>
        </Grid2 >
        <Dialog
          open={openSt}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseSt}
          aria-describedby='alert-dialog-slide-description'
        >
          <DialogTitle>{'Update Stock'}</DialogTitle>
          <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <DialogContentText component='div' id='alert-dialog-slide-description'>
              <Typography>Update product {product.name} stock?</Typography>
            </DialogContentText>
            <InputNumber stock={stock} setStock={setStock} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseSt} color='secondary'>Cancel</Button>
            <Button onClick={() => handleStock({ "stock": stock })} color='success'>Update Stock</Button>
          </DialogActions>
        </Dialog>
      </ >
    )
}
