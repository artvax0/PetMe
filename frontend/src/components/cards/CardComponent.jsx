import { Box, Button, Card, CardActionArea, CardContent, Typography } from "@mui/material"
import CardImage from "./CardImage"
import { useTheme } from "../../providers/ThemeProvider"
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routesModel";

export default function CardComponent({ product, pets }) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  let isStocked = true;
  let isDiscountValid = false;
  let now = new Date().toISOString();

  if (product.stock == 0) { isStocked = false };
  if (product.discount > 0 && product.discountStartDate <= now && product.discountEndDate >= now) { isDiscountValid = true };
  return (
    <>
      <Card elevation={5} sx={{ width: '100%', backgroundColor: isStocked ? theme.palette.primary.main : '#aaaaaa75', borderRadius: '12px' }}>
        <CardActionArea onClick={() => navigate(ROUTES.PRODUCT + `/${product._id}`)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box width='100%'>
            <CardImage isStocked={isStocked} isDiscountValid={isDiscountValid} url={product.image.url} alt={product.image.alt} pets={pets} petTypes={product.petType_id} />
          </Box>
          <Box display='flex' flexDirection='column' alignItems='center'>
            <CardContent sx={{ p: 1 }}>
              <Typography gutterBottom variant="h5" fontWeight={500} component='p' sx={{ textAlign: 'center' }}>{product.name}</Typography>
              {isDiscountValid ?
                <Box display='flex' gap={1} justifyContent='center'>
                  <Typography variant='h6' fontWeight='light' component='p' sx={{ textAlign: 'center', textDecoration: 'line-through' }} color='darkgrey' >${product.price}</Typography>
                  <Typography variant='h6' fontWeight='medium' component='p' sx={{ textAlign: 'center' }} color='error'>${product.price * (1 - product.discount / 100)}</Typography>
                </Box> :
                <Typography variant='h6' fontWeight='medium' component='p' sx={{ textAlign: 'center' }}>${product.price}</Typography>}
            </CardContent>

            {
              isStocked ?
                <Button component='div' variant="contained"
                  sx={{
                    backgroundColor: theme.palette.success.main,
                    boxShadow: `0 4px 0 0 ${theme.palette.success.dark}`,
                    mb: 2,
                    fontSize: { xs: '0.75rem', sm: '1rem' },
                    color: '#fff',
                  }}
                >
                  View Product
                </Button>
                : <Button component='div' variant="contained"
                  sx={{
                    backgroundColor: '#64646475',
                    boxShadow: `0 4px 0 0 #646464`,
                    mb: 2,
                    fontSize: { xs: '0.75rem', sm: '1rem' },
                    color: '#fff',
                  }}
                >
                  Out of Stock
                </Button>
            }
          </Box>
        </CardActionArea>
      </Card >
    </>
  )
}
