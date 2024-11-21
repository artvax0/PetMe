import { AppBar, Avatar, Box, Button, Drawer, Grid2, IconButton, Menu, MenuItem, styled, Toolbar } from '@mui/material'
import { useState } from 'react'
import { useTheme } from '../../providers/ThemeProvider';
import Banner from './Banner';
import { ROUTES } from '../../routes/routesModel';
import { Link, useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAuth } from '../../providers/UserProvider';
import CartDrawer from '../cart/CartDrawer';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { removeToken } from '../../services/storageService';

export default function Header() {
  const { theme } = useTheme();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const isMenuOpen = Boolean(menuAnchor);
  const navigate = useNavigate();
  const handleMenu = (e) => {
    setMenuAnchor(e.currentTarget);
  }
  const handleClose = () => {
    setMenuAnchor(null);
  }
  const handleLogout = () => {
    removeToken();
    location.reload();
  }

  const NavLink = styled(Link)(({ theme }) => `
    text-decoration: none;
    color: ${theme.palette.secondary.main};
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightMedium};
    &:hover {text-shadow: #FC0 1px 0 10px};
  `);

  return (
    <Grid2 component='header' container justifyContent='center' sx={{ backgroundColor: theme.palette.background.default }}>
      <Grid2 size={11}>
        <AppBar component='section' position='sticky' sx={{ backgroundColor: theme.palette.highlight.main, borderRadius: '0 0 20px 20px' }} elevation={3}>
          <Banner />
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 5 }}>
            {/* PetMe! Logo */}
            <Link to={ROUTES.ROOT}>
              <Box component='img' sx={{ height: 50 }} src='/pixelPetMe.svg' alt='PetMe! Logo' />
            </Link>
            {/* NavBar */}
            <Box component='nav' display='flex' flexGrow={1} gap={5}>
              <NavLink to={ROUTES.ROOT}>Home</NavLink>
              <NavLink to={ROUTES.PRODUCTS}>Our Products</NavLink>
            </Box>
            {
              user ?
                (<>
                  <IconButton onClick={() => setIsOpen(prev => !prev)}><ShoppingCartIcon sx={{ color: `${theme.palette.success.light}` }} /></IconButton>
                  <IconButton onClick={handleMenu} size='small' aria-controls={isMenuOpen ? 'account-menu' : undefined} aria-haspopup='true' aria-expanded={open ? 'true' : undefined}>
                    <Avatar />
                  </IconButton>
                </>)
                : (<>
                  <Box display='inline-flex' gap={5}>
                    <NavLink to={ROUTES.SIGNUP}>Signup</NavLink>
                    <NavLink to={ROUTES.LOGIN}>Login</NavLink>
                  </Box>
                </>)
            }
            <CartDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
            <Menu
              id='account-menu'
              anchorEl={menuAnchor}
              open={isMenuOpen}
              onClose={handleClose}
              onClick={handleClose}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={() => navigate(ROUTES.USER_ORDERS)}><HistoryIcon sx={{ mr: 1 }} />Orders History</MenuItem>
              <MenuItem onClick={() => navigate(ROUTES.USER_SETTINGS)}><SettingsIcon sx={{ mr: 1 }} />Account Preferences</MenuItem>
              <MenuItem onClick={handleLogout}><LogoutIcon sx={{ mr: 1 }} />Logout</MenuItem>
            </Menu>
          </Toolbar>
        </ AppBar>
      </Grid2>
    </Grid2>
  )
}
