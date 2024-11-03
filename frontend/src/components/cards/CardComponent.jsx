import { Box, Button, Card, CardActionArea, CardContent, Typography } from "@mui/material"
import CardImage from "./CardImage"
import { useTheme } from "../../providers/ThemeProvider"
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routesModel";

export default function CardComponent({ product }) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <Card elevation={5} sx={{ width: '100%', backgroundColor: theme.palette.primary.main, borderRadius: '12px' }}>
        <CardActionArea onClick={() => navigate(ROUTES.PRODUCT + `/${product._id}`)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box height='50%' width='100%'>
            <CardImage url={product.image.url} alt={product.image.alt} />
          </Box>

          <Box height='50%' display='flex' flexDirection='column' alignItems='center'>
            <CardContent sx={{ p: 1 }}>
              <Typography gutterBottom variant="h5" fontWeight={500} component='p' sx={{ textAlign: 'center' }}>{product.name}</Typography>
              <Typography variant='h6' fontWeight='medium' component='p' sx={{ textAlign: 'center' }}>${product.price}</Typography>
            </CardContent>

            <Button component='div' variant="contained"
              sx={{
                backgroundColor: theme.palette.success.main,
                boxShadow: `0 4px 0 0 ${theme.palette.success.dark}`,
                // '&:hover': { backgroundColor: theme.palette.primary.dark },
                mb: 2
              }}
            >
              Purchase
            </Button>
          </Box>
        </CardActionArea>
      </Card >
    </>
  )
}
