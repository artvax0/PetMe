import { Box, Divider, Paper, Slide, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useAuth } from '../../providers/UserProvider';
import Cart from './Cart';

export default function CartDrawer({ isOpen, setIsOpen }) {
  /*                                                                *
  Custom Drawer, since MUI Drawer seems to be broken in this version
  *                                                                 */
  const { user } = useAuth();

  // close drawer with Esc key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key == 'Escape') setIsOpen(false);
    }

    document.addEventListener('keydown', handleEsc);

    return () => document.removeEventListener('keydown', handleEsc);
  }, [user, isOpen]);

  // disable child activating parent onclick event
  const stopClick = e => e.stopPropagation();

  if (user && isOpen) return (
    <Box width='100vw' height='100vh' position='fixed' zIndex={1500} left={0} top={0} sx={{ backgroundColor: 'rgba(0, 0, 0, .5)' }} onClick={() => setIsOpen(false)}>
      <Slide direction='left' in={isOpen} mountOnEnter unmountOnExit>
        <Paper className='anchor-right' onClick={(e) => stopClick(e)} sx={{ display: 'inline-flex', height: '100vh', position: 'fixed', zIndex: 1550, top: 0, right: 0, borderRadius: 0, py: 1, }} elevation={4}>
          <Box width='250px' role='presentation'>
            <Typography px={1} variant='h5' component='p'>My Cart</Typography>
            <Divider />
            <Cart user={user} setIsOpen={setIsOpen} />
          </Box>
        </Paper>
      </Slide>
    </Box >
  )
  return null;
}
