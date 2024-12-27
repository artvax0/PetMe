import React from 'react'
import { Box, Button, Grid2, Typography } from '@mui/material';
import { useTheme } from '../../providers/ThemeProvider';
import Title from '../../components/utils/Title';

export default function AboutPage() {
  const { mode } = useTheme();

  return (
    <>
      <Title title={'About Us'} />
      <Box display='flex' flexDirection='column' flexGrow={1} color={mode == 'light' ? '#000' : '#fff'}>
        <Grid2 container component='section' p={3}>
          <Grid2 size={{ xs: 12, sm: 6 }} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Typography
              component='h2'
              variant='h3'
              fontWeight='bold'
              color={mode == 'light' ? 'highlight.main' : '#fff'}
              textAlign='center'
              gutterBottom
            >
              Our best friends need proper love
            </Typography>
            <Typography>
              Hey, I'm Arthur Vaxman, I am an aspiring Fullstack Web Developer. <br /><br />
              I love pets and animals in general; to the point where I wanted to be a Veterinarian before deciding to be a Fullstack Web Developer. <br /><br />
              I decided for my project to finish my HackerU studies to work on my previous intrests, by creating a mock online pet store!
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Box component='img' src='/eric-ward-ISg37AI2A-s-unsplash.jpg' alt='Man hugging dog ' maxWidth='85%' />
            <Typography>
              Photo by <a className={mode == 'light' ? 'ext-link-light' : 'ext-link-dark'} href="https://unsplash.com/@ericjamesward?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target='_blank' rel='noreferrer noopener'>Eric Ward</a> on <a className={mode == 'light' ? 'ext-link-light' : 'ext-link-dark'} href="https://unsplash.com/photos/photo-of-man-hugging-tan-dog-ISg37AI2A-s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target='_blank' rel='noreferrer noopener'>Unsplash</a>
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2 container component='section' p={3}>
          <Grid2 size={{ xs: 12, sm: 6 }} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Typography component='h2' variant='h3' fontWeight='bold' gutterBottom color={mode == 'light' ? 'highlight.main' : '#fff'}>
              Our Mascot
            </Typography>
            <Typography>
              PetMe's mascot is taken from my pet Pixel! He is a Pomeranian Shih-Tzu and is the most adorable and floofiest dog you will ever meet! <br /><br />
              Pixel was taken as a Mascot by my friend Kwismass and was designed specifically for this project's use. <br />
              Assets made by Kwismass are held under Copyright law and cannot be used or taken out of this project without permission from the owner. <br />
              Unauthorized use, including for personal, educational or commercial purposes outside of this project, is strictly prohibited.
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }} display='flex' justifyContent='center'>
            <Box component='img' src='/pixel.svg' alt='Pixel Mascot' maxWidth='50%' />
          </Grid2>
        </Grid2>
      </Box >
    </>
  )
}
