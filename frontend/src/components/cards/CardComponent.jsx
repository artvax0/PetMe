import { Button, Card, CardActionArea, CardContent, Typography } from "@mui/material"
import CardImage from "./CardImage"

export default function CardComponent({ product }) {
  return (
    <>
      <Card sx={{ width: '100%' }}>
        <CardActionArea sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CardImage url={product.image.url} alt={product.image.alt} />

          <CardContent>
            <Typography gutterBottom variant="body1" fontWeight={500} component='p' sx={{ textAlign: 'center' }}>{product.name}</Typography>
            <Typography gutterBottom variant='h6' fontWeight='bold' component='p' sx={{ textAlign: 'center' }}>${product.price}</Typography>
          </CardContent>

          <Button variant="contained" color='success' sx={{ mb: 1 }}>Purchase</Button>
        </CardActionArea>
      </Card>
    </>
  )
}
