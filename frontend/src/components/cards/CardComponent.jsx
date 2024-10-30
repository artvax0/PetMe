import { Button, Card, CardActionArea, CardContent, Typography } from "@mui/material"
import CardImage from "./CardImage"
import { useTheme } from "../../providers/ThemeProvider"

export default function CardComponent({ product }) {
  const { theme } = useTheme();
  return (
    <>
      <Card sx={{ width: '100%', backgroundColor: theme.palette.accent.main, }}>
        <CardActionArea sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CardImage url={product.image.url} alt={product.image.alt} />

          <CardContent>
            <Typography gutterBottom variant="body1" fontWeight={500} component='p' sx={{ textAlign: 'center' }}>{product.name}</Typography>
            <Typography variant='h6' fontWeight='medium' component='p' sx={{ textAlign: 'center' }}>${product.price}</Typography>
          </CardContent>

          <Button component='div' variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.main,
              '&:hover': { backgroundColor: theme.palette.primary.dark },
              mb: 1
            }}
          >
            Purchase
          </Button>
        </CardActionArea>
      </Card >
    </>
  )
}
