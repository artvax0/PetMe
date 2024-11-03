import { Box, Divider, Grid2, styled, Typography } from "@mui/material";
import { useTheme } from "../../providers/ThemeProvider";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routesModel";

export default function Footer() {
  const { theme } = useTheme();

  const FooterTitle = styled(Typography)(({ theme }) => `
    text-transform: uppercase;
    font-weight: ${theme.typography.fontWeightBold};
    font-size: 1.5rem;
    color: ${theme.palette.secondary.main};
  `)

  const FooterLink = styled(Link)(({ theme }) => `
    text-decoration: none;
    text-transform: uppercase;
    font-weight: ${theme.typography.fontWeightRegular};
    font-size: 1rem;
    color: ${theme.palette.secondary.main};
    font-family: ${theme.typography.fontFamily};
    &:hover {text-decoration: underline};
  `)

  return (
    <Grid2 component='footer' container sx={{ backgroundColor: theme.palette.highlight.main }} justifyContent='center'>
      <Grid2 container size={11} py={4} display='flex' gap={5}>
        <Grid2 size={2} display='flex' flexDirection='column'>
          <Box component='img' src='/pixelPetMe.svg' alt='PetMe! Logo' />
          <Typography color={theme.palette.secondary.main} fontWeight={theme.typography.fontWeightLight}>&copy;Logo Design By: Kwismass</Typography>
        </Grid2>
        <Grid2 size={4} display='flex' flexDirection='column'>
          <FooterTitle textTransform='uppercase' width='100%' fontWeight={theme.typography.fontWeightBold} fontSize='1.5rem' color={theme.palette.secondary.main}>
            Navigation
          </FooterTitle>
          <Divider width='75px' sx={{ border: `3px solid ${theme.palette.secondary.main}` }} />
          <FooterLink to={ROUTES.ABOUT}>About Us</FooterLink>
          <FooterLink to={ROUTES.PRODUCTS}>Products</FooterLink>
        </Grid2>
      </Grid2>
      <Grid2 size={11} display='flex' justifyContent='space-between' height='1.6rem'>
        <Typography color={theme.palette.secondary.light}>&copy;Copyright</Typography>
        {/* <Typography color={theme.palette.secondary.light}>Arthur Vaxman</Typography> */}
      </Grid2>
    </Grid2>
  )
}
