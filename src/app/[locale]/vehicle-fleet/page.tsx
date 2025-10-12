import React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SliderBarGallery from '@/sections/sliderBarGallery/SliderBarGallery';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function VehicleFleet() {
  const vehicleT = await getTranslations('landingPages.page-vehicle');

  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Grid container className='header-section'>
        <Image
          src='/main-banner/s-class-46-scaled.jpg'
          alt='mercedes s class'
          style={{ objectFit: 'cover', borderRadius: '4px' }}
          sizes='100vw'
          fill
          priority
        />
        <div className='content'>
          <Grid size={{ md: 12 }} className='titles'>
            <Typography variant='h1'>{vehicleT('mainTitle')}</Typography>
          </Grid>
        </div>
      </Grid>
      <Typography
        variant='h2'
        sx={{
          maxWidth: '640px',
          m: '32px auto 32px auto !important',
          fontWeight: '400',
          textAlign: 'center',
          fontSize: '18px',
          lineHeight: '30px',
          letterSpacing: '0.02em',
        }}
      >
        {vehicleT('mainSubtitle')}
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Typography variant='body1'>{vehicleT('text1')}</Typography>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Typography variant='body1'>{vehicleT('text2')}</Typography>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Typography variant='body1'>{vehicleT('text3')}</Typography>
        </Grid>
      </Grid>

      <SliderBarGallery
        serverData={[
          {
            link: '/vehicle-fleet/mercedes-van-1.jpg',
            alt: 'Mercedes Benz Van',
            id: 1,
          },
          {
            link: '/vehicle-fleet/audi-a6.jpg',
            alt: 'Audi A6 white',
            id: 2,
          },
          {
            link: '/vehicle-fleet/volkswagen-van-1.jpg',
            alt: 'volkswagen van black',
            id: 3,
          },
          {
            link: '/vehicle-fleet/mercedes-s-class.jpg',
            alt: 'mercedes s class',
            id: 4,
          },
          {
            link: '/vehicle-fleet/volkswagen-van-2.jpg',
            alt: 'volkswagen van navyblue',
            id: 5,
          },
        ]}
      />
    </Container>
  );
}
