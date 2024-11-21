import { Box, Grid2, SpeedDial, SpeedDialAction } from '@mui/material'
import React from 'react'
import Header from './Header'
import { useTheme } from '../../providers/ThemeProvider'
import Footer from './Footer';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useAuth } from '../../providers/UserProvider';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routesModel';

export default function Layout({ children }) {
  const { user } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <Box minHeight='100vh' display='flex' flexDirection='column' gap={0}>
      <Header />
      <Box component='main' sx={{ backgroundColor: theme.palette.background.default }} py={3} px={9} display='flex' flexGrow={1} justifyContent='center'>
        <Grid2 container flexGrow={1} sx={{ backgroundColor: theme.palette.background.light, borderRadius: '30px', p: '8px 30px 30px 30px' }}>
          {children}
        </Grid2>
        {user && user.isEmployee &&
          <SpeedDial ariaLabel='User Actions' sx={{ position: 'fixed', bottom: 10, right: 10, '>button': { backgroundColor: `${theme.palette.secondary.main}` } }} icon={<ReceiptIcon />}>
            <SpeedDialAction icon={<ShoppingBagIcon />} tooltipTitle='View Orders' sx={{ backgroundColor: `${theme.palette.secondary.main}` }} />
            <SpeedDialAction onClick={() => navigate(ROUTES.ADD_PRODUCT)} icon={<AddShoppingCartIcon />} tooltipTitle='Create Product' sx={{ backgroundColor: `${theme.palette.secondary.main}` }} />
          </SpeedDial>
        }
      </Box>
      <Footer />
    </Box>
  )
}
