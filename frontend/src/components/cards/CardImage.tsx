import { CardMedia } from "@mui/material";
import { Image } from "../../interfaces/product";

export default function CardImage({url, alt}: Image) {
  return (
    <CardMedia
            sx={{ width: '100%', height: 175 }}
            image={url}
            title={alt}
          >
            <div style={{width: '30px', height:'30px', backgroundColor: 'black'}}></div>
    </CardMedia>
  )
}
