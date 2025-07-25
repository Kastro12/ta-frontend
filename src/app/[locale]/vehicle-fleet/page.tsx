import React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SliderBarGallery from '@/sections/sliderBarGallery/SliderBarGallery';
import Image from 'next/image';

export default function VehicleFleet() {
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
            <Typography variant='h1'>Vehicle fleet</Typography>
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
        Travel in comfort and safety
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Typography variant='body1'>
            If you choose our transportation arrangement service, we ensure your journey is as
            comfortable and safe as it can be. Our fleet of luxury vehicles is selected to provide
            you with the utmost comfort and reliability.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Typography variant='body1'>
            From the moment you arrive at the airport or begin your vacation, our professional
            drivers are there to transport you to all your destinations seamlessly.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Typography variant='body1'>
            Our main goal is for you to focus on your vacation and enjoy the ride. Whether it&apos;s
            a scenic drive or transportation between activities, we provide a seamless, comfortable,
            and safe travel experience from start to finish.
          </Typography>
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
