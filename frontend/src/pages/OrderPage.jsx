import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import { useAuth } from "../providers/UserProvider"
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routesModel";
import { Box, Divider, Grid2, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import Title from "../components/utils/Title";
import { useTheme } from "../providers/ThemeProvider";
import useUsers from "../hooks/useUsers";
import TransactionForm from "../components/forms/TransactionForm";
import useForm from "../hooks/useForm";
import { initialCreditForm } from "../helpers/initial_forms/initialCreditForm";
import creditCardSchema from "../models/creditCardSchema";
import useOrders from "../hooks/useOrders";

export default function OrderPage() {
  const { user } = useAuth();
  const location = useLocation();
  const products = location?.state?.products || '';
  const { theme } = useTheme();
  const { getProductById } = useProducts();
  const [productsList, setProductsList] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { getUserInfo, userData } = useUsers();
  const { newUserOrder } = useOrders();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.target.disabled = true;
    e.target.classList.toggle('Mui-disabled');
    const data = await newUserOrder(user._id, { products, address: { country: userData.address.country, state: userData.address.state, city: userData.address.city, street: userData.address.street, houseNumber: userData.address.houseNumber, zip: userData.address.zip } });
    e.target.disabled = false;
    e.target.classList.toggle('Mui-disabled');
    if (data) return navigate(ROUTES.ROOT)
  }
  const { formData, errors, handleChange, validateForm } = useForm(initialCreditForm, creditCardSchema);

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
        await getUserInfo(user._id);
        setIsLoading(false);
      }
      handleProductDetails();
    }
  }, [products]);

  if (!user) return (<Navigate to={ROUTES.LOGIN} replace />);
  if (!products) return (<Navigate to={ROUTES.ROOT} replace />);
  if (isLoading) return (<p>Loading...</p>);
  if (user && products && productsList && userData) return (
    <Box display='flex' flexDirection='column' flexGrow={1} gap={1}>
      <Title title={'Place Order'} />
      <Box component='section' display='flex' flexDirection='column'>
        <Typography variant='h4' component='h1'>Place Order</Typography>
        <Typography variant='h5' component='h2'>Cart</Typography>
        <TableContainer component={Paper}>
          <Table size='small' aria-label='Cart'>
            <TableHead>
              <TableRow>
                <TableCell align='center' sx={{ fontSize: '1.1rem' }}>Product Preview</TableCell>
                <TableCell align='center' sx={{ fontSize: '1.1rem' }}>Product</TableCell>
                <TableCell align='center' sx={{ fontSize: '1.1rem' }}>Quantity</TableCell>
                <TableCell align='center' sx={{ fontSize: '1.1rem' }}>Unit Price</TableCell>
                <TableCell align='center' sx={{ fontSize: '1.1rem' }}>Total Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => {
                const productData = productsList[product.product_id];
                return (
                  <TableRow onClick={() => navigate(ROUTES.PRODUCT + `/${product.product_id}`)} key={product.product_id} sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:hover': { backgroundColor: 'rgba(0, 0, 0, .10)' }, cursor: 'pointer' }}>
                    <TableCell component='th' scope='row' align='center'><Box component='img' src={productData?.image?.url || ''} alt={productData?.image?.alt || ''} maxWidth='50px' maxHeight='50px' /></TableCell>
                    <TableCell align='center'>{productData?.name || ''}</TableCell>
                    <TableCell align='center'>{product.quantity}</TableCell>
                    <TableCell align='center'>${productData?.price || ''}</TableCell>
                    <TableCell align='center'>${product.price}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography textAlign='right' fontSize='1.2rem'>Total: <strong>${products.reduce((acc, product) => acc += product.price, 0)}</strong></Typography>
      </Box>
      <Divider variant='middle' sx={{ my: 1 }} />
      <Box component='section' display='flex' flexDirection='column'>
        <Typography variant='h5' component='h2'>Address Info</Typography>
        <Paper sx={{ p: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography color='highlight'>* Address can only be changed in user preferences.</Typography>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, sm: 8, md: 4 }}>
              <TextField label='Country' color='highlight' size='small' slotProps={{ htmlInput: { readOnly: true, sx: { color: `${theme.palette.text.disabled}` } }, inputLabel: { sx: { color: `${theme.palette.text.disabled}` } } }} fullWidth defaultValue={userData.address.country} />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 8, md: 4 }}>
              <TextField label='State' color='highlight' size='small' slotProps={{ htmlInput: { readOnly: true, sx: { color: `${theme.palette.text.disabled}` } }, inputLabel: { sx: { color: `${theme.palette.text.disabled}` } } }} fullWidth defaultValue={userData.address.state} />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 8, md: 4 }}>
              <TextField label='City' color='highlight' size='small' slotProps={{ htmlInput: { readOnly: true, sx: { color: `${theme.palette.text.disabled}` } }, inputLabel: { sx: { color: `${theme.palette.text.disabled}` } } }} fullWidth defaultValue={userData.address.city} />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 8, md: 4 }}>
              <TextField label='Street' color='highlight' size='small' slotProps={{ htmlInput: { readOnly: true, sx: { color: `${theme.palette.text.disabled}` } }, inputLabel: { sx: { color: `${theme.palette.text.disabled}` } } }} fullWidth defaultValue={userData.address.street} />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 8, md: 4 }}>
              <TextField label='House Number' color='highlight' size='small' slotProps={{ htmlInput: { readOnly: true, sx: { color: `${theme.palette.text.disabled}` } }, inputLabel: { sx: { color: `${theme.palette.text.disabled}` } } }} fullWidth defaultValue={userData.address.houseNumber} />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 8, md: 4 }}>
              <TextField label='Zip' color='highlight' size='small' slotProps={{ htmlInput: { readOnly: true, sx: { color: `${theme.palette.text.disabled}` } }, inputLabel: { sx: { color: `${theme.palette.text.disabled}` } } }} fullWidth defaultValue={userData.address.zip} />
            </Grid2>
          </Grid2>
        </Paper>
      </Box>
      <Divider variant='middle' sx={{ my: 1 }} />
      <Box component='section' display='flex' flexDirection='column'>
        <Grid2 container flexDirection='column' size={12} gap={1}>
          <Typography variant='h5' component='h2'>Payment</Typography>
          <Typography color='warning'>* Please <strong>do not</strong> fill in real information in this form! This form is a simulation, a demo, a placeholder. <br />&nbsp;&nbsp;Any information filled in this form is <strong>not sent</strong> to the server and database, and remains just as a simulation. <br />&nbsp;&nbsp;This note acts as a final warning, and will not be held responsible for any actions and/or any transactions/withdrawal.</Typography>
          <TransactionForm
            onSubmit={onSubmit}
            validateForm={validateForm}
            errors={errors}
            formData={formData}
            onInputChange={handleChange}
          />
        </Grid2>
      </Box>
    </Box >
  )
}
