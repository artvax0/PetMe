import { Box, Divider, Paper, Slide, Typography } from '@mui/material'
import { useEffect } from 'react'
import useCarts from '../../hooks/useCarts';
import { useAuth } from '../../providers/UserProvider';

export default function CartDrawer({ isOpen, setIsOpen }) {
  /*                                                                *
  Custom Drawer, since MUI Drawer seems to be broken in this version
  *                                                                 */

  const { user } = useAuth();
  const { cart, isLoading, error, getUserCart } = useCarts();

  // close drawer with Esc key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key == 'Escape') setIsOpen(false);
    }

    document.addEventListener('keydown', handleEsc);
    if (user) getUserCart(user._id);

    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

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
                    <Box component='ul'>
                      {cart.products.map(product => (
                        <Box component='li' key={product._id}>{product.Name}</Box>
                      ))}
                    </Box>
                    : <Typography textAlign='center' py={1} color='textDisabled'>You have no products :)</Typography>

                  }
                </>
                : null
            }
          </Box>
        </Paper>
      </Slide>
    </Box>
  )

  return null;
}
