import { Box, Button, Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { useTheme } from '../../providers/ThemeProvider';

export default function Error({ error }) {
  const { mode } = useTheme();
  return (
    <Box display='flex' justifyContent='center' alignItems='center' flexGrow={1} flexDirection='column'>
      <Box>
        <ErrorIcon sx={{ fontSize: '100px' }} color='error' />
      </Box>
      <Box>
        <Typography gutterBottom component='p' textAlign='center' fontSize={{ xs: '1.5rem', sm: '3rem' }} fontWeight='bold' color={mode == 'light' ? '#000' : '#fff'}>Something went wrong</Typography>
        <Typography gutterBottom component='p' textAlign='center' fontSize={{ xs: '1.25rem', sm: '1.5rem' }} color={mode == 'light' ? '#000' : '#fff'}>There was a problem processing the request.</Typography>
        <Typography gutterBottom component='p' textAlign='center' fontSize={{ xs: '1rem', sm: '1.25rem' }} color={mode == 'light' ? '#000' : '#fff'}>Error: {error}</Typography>
      </Box>
      <Button variant='contained' color='secondary' sx={{ color: mode == 'light' ? '#000' : '#fff' }} onClick={() => location.reload()}>Return to last page</Button>
    </Box>
  )
}
