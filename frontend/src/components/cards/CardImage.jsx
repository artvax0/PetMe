import { CardMedia } from "@mui/material";

export default function CardImage({ url, alt }) {
  return (
    <CardMedia
      sx={{ width: '100%', height: 175 }}
      image={url}
      title={alt}
    >
      <div style={{ width: '30px', height: '30px', backgroundColor: 'black' }}></div>
    </CardMedia>
  )
}
