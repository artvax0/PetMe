import { Box, Button, Grid2, Typography } from "@mui/material";
import { useTheme } from "../../providers/ThemeProvider";

export default function Page404() {
  const { mode } = useTheme();
  return (
    <Grid2 container width='100%'>
      <Grid2 size={{ xs: 12, sm: 6 }} display='flex' justifyContent='center' alignItems='center'>
        <Box component='img' src='/dog_cry.png' alt='Dog Crying Icon' width='35%' sx={{ aspectRatio: '1/1' }} />
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6 }} display='flex' flexDirection='column' justifyContent='center'>
        <Typography fontSize={{ xs: '3rem', sm: '3.75rem' }} fontWeight='bold' color={mode == 'light' ? '#000' : '#fff'} textAlign={{ xs: 'center', sm: 'initial' }}>Oops!</Typography>
        <Typography gutterBottom fontSize={{ xs: '1.25rem', sm: '2.125rem' }} fontWeight='bold' color={mode == 'light' ? '#000' : '#fff'} textAlign={{ xs: 'center', sm: 'initial' }}>We couldn't find the page you were looking for.</Typography>
        <Typography gutterBottom fontSize={{ xs: '1rem', sm: '1.5rem' }} fontWeight='bold' color={mode == 'light' ? '#000' : '#fff'} textAlign={{ xs: 'center', sm: 'initial' }}>You may have mistyped the address or the page may have moved.</Typography>
        <Button variant='contained' color='secondary' sx={{ color: mode == 'light' ? '#000' : '#fff', width: { xs: '100%', md: '25%' } }}>Return to home page</Button>
      </Grid2>
    </Grid2>
  )
}
