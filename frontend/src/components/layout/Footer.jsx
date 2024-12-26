import { Box, Divider, Grid2, styled, Typography } from "@mui/material";
import { useTheme } from "../../providers/ThemeProvider";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routesModel";

export default function Footer() {
  const { theme, mode } = useTheme();

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
        <Grid2 size={{ xs: 12, md: 6, lg: 2 }} display='flex' flexDirection='column'>
          <Box component='img' src='/pixelPetMe.svg' alt='PetMe! Logo' />
          <Typography color={theme.palette.secondary.main} fontWeight={theme.typography.fontWeightLight}>&copy;Logo Design By: <a className={mode == 'light' ? 'ext-link-light' : 'ext-link-dark'} href='https://cara.app/kwis' target='_blank' rel='noreferrer noopener'>Kwismass</a></Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }} display='flex' flexDirection='column'>
          <FooterTitle textTransform='uppercase' width='100%' fontWeight={theme.typography.fontWeightBold} fontSize='1.5rem' color={theme.palette.secondary.main}>
            main links
          </FooterTitle>
          <Divider width='75px' sx={{ border: `3px solid ${theme.palette.secondary.main}` }} />
          <FooterLink to={ROUTES.ABOUT}>About Us</FooterLink>
          <FooterLink to={ROUTES.PRODUCTS}>Products</FooterLink>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} display='flex' flexDirection='column'>
          <FooterTitle textTransform='uppercase' width='100%' fontWeight={theme.typography.fontWeightBold} fontSize='1.5rem' color={theme.palette.secondary.main}>
            categories
          </FooterTitle>
          <Divider width='75px' sx={{ border: `3px solid ${theme.palette.secondary.main}` }} />
          <Grid2 container spacing={{ xs: 0, md: 2 }}>
            <Grid2 size={{ xs: 12, md: 6 }} display='flex' flexDirection='column'>
              <FooterLink to={ROUTES.FOOD}>food</FooterLink>
              <FooterLink to={ROUTES.TREATS}>treats</FooterLink>
              <FooterLink to={ROUTES.TOYS}>toys</FooterLink>
              <FooterLink to={ROUTES.BEDDINGS_FURNITURE}>bedding & furniture</FooterLink>
              <FooterLink to={ROUTES.GROOMING}>grooming products</FooterLink>
              <FooterLink to={ROUTES.HEALTH}>health & wellness</FooterLink>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }} display='flex' flexDirection='column'>
              <FooterLink to={ROUTES.CLOTHING}>clothing & accessories</FooterLink>
              <FooterLink to={ROUTES.FEEDING}>feeding & watering supplies</FooterLink>
              <FooterLink to={ROUTES.TRAINING}>training & behaviour aids</FooterLink>
              <FooterLink to={ROUTES.TRAVEL}>travel & outdoors gear</FooterLink>
              <FooterLink to={ROUTES.TECH}>pet tech</FooterLink>
            </Grid2>
          </Grid2>
        </Grid2>
        {/* <Grid2 size={{ xs: 12, md: 3 }} display='flex' flexDirection='column'>
          <FooterTitle textTransform='uppercase' width='100%' fontWeight={theme.typography.fontWeightBold} fontSize='1.5rem' color={theme.palette.secondary.main}>
            pets
          </FooterTitle>
          <Divider width='75px' sx={{ border: `3px solid ${theme.palette.secondary.main}` }} />

        </Grid2> */}
      </Grid2>
      <Grid2 size={11} display='flex' justifyContent='space-between' height='1.6rem'>
        <Typography color={theme.palette.secondary.light}>&copy;Copyright</Typography>
        <Typography color={theme.palette.secondary.light}>Arthur Vaxman</Typography>
      </Grid2>
    </Grid2>
  )
}
