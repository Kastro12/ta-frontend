'use client';
import * as React from 'react';
import { Paper, Typography, Box, Grid } from '@mui/material';
import { GalleryWithCarousel } from '../../components';

export default function InfoWithBackgroundImage() {
  return (
    <Paper elevation={3} className='InfoWithBackgroundImageComponent'>
      <Grid container className='content'>
        <Grid
          xs={12}
          item
          lg={4}
          style={{ padding: '16px', display: 'flex', alignItems: 'center' }}
        >
          <Typography variant='body1'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </Typography>
        </Grid>
        <Grid xs={12} item lg={8} className='img-content'>
          <GalleryWithCarousel />
        </Grid>
      </Grid>

      <Box className='text'></Box>
    </Paper>
  );
}
