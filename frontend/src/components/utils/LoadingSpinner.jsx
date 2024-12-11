import { Box, CircularProgress, Typography } from '@mui/material';
import { useTheme } from '../../providers/ThemeProvider';

export default function LoadingSpinner() {
  const { mode } = useTheme();
  return (
    <Box display='flex' justifyContent='center' alignItems='center' flexGrow={1} flexDirection='column'>
      <Typography variant='h6' component='h1' color={mode == 'light' ? '#000' : '#fff'}>Loading. . .</Typography>
      <CircularProgress color={mode == 'light' ? 'highlight' : 'accent'} />
    </Box>
  )
}
