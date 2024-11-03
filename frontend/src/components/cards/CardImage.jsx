import { CardMedia } from "@mui/material";

export default function CardImage({ url, alt }) {
  return (
    <CardMedia
      sx={{ aspectRatio: '1/1', margin: 1.5, backgroundColor: '#fff', borderRadius: '20px', boxShadow: 'inset 0 4px 4px rgba(0, 0, 0, .25), inset 0 -4px 4px rgba(0, 0, 0, .25)' }}
      image={url}
      title={alt}
    >
      <div style={{ width: '30px', height: '30px', backgroundColor: 'black' }}></div>
    </CardMedia>
  )
}
