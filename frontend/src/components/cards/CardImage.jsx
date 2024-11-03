import { Box, CardMedia } from "@mui/material";

export default function CardImage({ url, alt }) {
  return (
    <CardMedia
      sx={{ aspectRatio: '1/1', margin: 1.5, backgroundColor: '#fff', borderRadius: '20px', boxShadow: 'inset 0 4px 4px rgba(0, 0, 0, .25), inset 0 -4px 4px rgba(0, 0, 0, .25)', position: 'relative' }}
      image={url}
      title={alt}
    >
      {/* Pet Icons */}
      <Box width='100%' display='inline-flex' flexDirection='row-reverse' gap={0.5} sx={{ position: 'absolute', bottom: 1, marginBottom: '-15px' }}>
        <Box sx={{ width: '30px', height: '30px', backgroundColor: '#fff', boxShadow: '0 0 10px 2px rgba(0, 0, 0, .25)', borderRadius: '50%' }}></Box>
      </Box>
    </CardMedia>
  )
}
