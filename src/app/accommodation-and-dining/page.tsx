import React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import SliderBarGallery from '@/sections/sliderBarGallery/SliderBarGallery';
import Image from 'next/image';

export default function AccommodationAndDining() {
  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Grid container className='header-section'>
        <Image
          src='/main-banner/apartment_3_living_room.jpg'
          alt='apartment living room'
          style={{ objectFit: 'cover', borderRadius: '4px' }}
          sizes='100vw'
          fill
          priority
        />
        <div className='content'>
          <Grid md={12} className='titles'>
            <Typography variant='h1'>Accommodation and dining</Typography>
          </Grid>
        </div>
      </Grid>
      <Typography
        variant='h3'
        sx={{ maxWidth: '640px', m: '32px auto 32px auto', fontWeight: '400', textAlign: 'center' }}
      >
        Enjoy maximum comfort and delicious cuisine
      </Typography>

      <Grid container spacing={4}>
        <Grid xs={12} lg={4}>
          <Typography variant='body1'>
            If you choose our accommodation reservation service, we prioritize your comfort and
            enjoyment. Accommodations are selected to provide you with the highest level of luxury
            and relaxation.
          </Typography>
        </Grid>
        <Grid xs={12} lg={4}>
          <Typography variant='body1'>
            We recommend only the best restaurants, ensuring you enjoy top-quality cuisine. Our
            selections cater to all tastes, offering memorable culinary experiences throughout your
            vacation.
          </Typography>
        </Grid>
        <Grid xs={12} lg={4}>
          <Typography variant='body1'>
            Whether relaxing after a day of activities or enjoying a meal at one of our recommended
            spots, our commitment ensures your stay will be exceptional.
          </Typography>
        </Grid>
      </Grid>

      <SliderBarGallery
        serverData={[
          {
            link: '/accommodation-and-dining/apartment_3_living_room.jpg',
            alt: 'apartment 3 living room',
            id: 1,
          },
          {
            link: '/accommodation-and-dining/apartment_3_room.jpg',
            alt: 'apartment 3 room',
            id: 2,
          },
          {
            link: '/accommodation-and-dining/apartment-1-living-room.jpg',
            alt: 'apartment 1 living room',
            id: 3,
          },
          {
            link: '/accommodation-and-dining/apartment_1_room.jpg',
            alt: 'apartment 1 room',
            id: 4,
          },
          {
            link: '/accommodation-and-dining/food1.jpg',
            alt: 'food - pasta with wine',
            id: 5,
          },
          {
            link: '/accommodation-and-dining/food2.jpg',
            alt: 'food - dried meat on a board',
            id: 6,
          },
          {
            link: '/accommodation-and-dining/food3.jpg',
            alt: 'food - cake and wine',
            id: 7,
          },
        ]}
      />
    </Container>
  );
}
