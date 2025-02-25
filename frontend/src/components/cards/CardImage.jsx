import { Box, CardMedia } from "@mui/material";

export default function CardImage({ isStocked, isDiscountValid, url, alt, pets, petTypes }) {
  return (
    <CardMedia
      sx={{ maxHeight: '100%', aspectRatio: '1/1', margin: 1.5, backgroundColor: '#fff', borderRadius: '20px', boxShadow: 'inset 0 4px 4px rgba(0, 0, 0, .25), inset 0 -4px 4px rgba(0, 0, 0, .25)', position: 'relative', filter: isStocked ? 'none' : 'grayscale(100%)', msFilter: isStocked ? 'none' : 'grayscale(100%)', WebkitFilter: isStocked ? 'none' : 'grayscale(100%)' }}
      image={url}
      title={alt}
    >
      <Box width='100%' display='flex' flexDirection='column'>
        {
          isDiscountValid ?
            <Box width='100%' height='100%' component='img' src='/sale_stamp.png' alt='Sale Stamp' sx={{
              borderRadius: '20px',
            }} /> : null
        }
        {/* Pet Icons */}
        <Box width='100%' display='inline-flex' flexDirection='row-reverse' gap={0.5} sx={{ position: 'absolute', bottom: 1, marginBottom: { xs: '-10px', xl: '-15px' } }}>
          {
            petTypes.length < 6 ?
              petTypes.map((petType) => {
                const petInfo = pets.filter(pet => pet._id == petType)[0];
                return (
                  <Box key={`${petInfo._id}-${alt}`} sx={{ width: { xs: '25px', lg: '15px', xl: '25px' }, aspectRatio: '1/1', backgroundColor: '#fff', boxShadow: '0 0 10px 2px rgba(0, 0, 0, .25)', borderRadius: '50%' }} display='flex' justifyContent='center' alignItems='center'>
                    <Box component='img' width='80%' src={`/${petInfo?.name}.svg`} alt={`${petInfo?.name} Icon`} />
                  </Box>
                )
              })
              :
              <Box sx={{ width: { xs: '25px', lg: '15px', xl: '25px' }, aspectRatio: '1/1', backgroundColor: '#fff', boxShadow: '0 0 10px 2px rgba(0, 0, 0, .25)', borderRadius: '50%' }} display='flex' justifyContent='center' alignItems='center'>
                <Box component='img' width='80%' src={`/All.png`} alt={`All Pets Icon`} />
              </Box>
          }
        </Box>
      </Box>
    </CardMedia>
  )
}
