import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import SliderBarGallery from '@/sections/sliderBarGallery/SliderBarGallery';
import { centerModeForGallery } from '@/components/sliderbar/settings';

export default function AccommodationAndDining() {
  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Grid container className='header-section'>
        <img
          src='https://i.ibb.co/k9XSMGr/full-shot-couple-near-car.jpg'
          alt='couple near car in nature'
          loading='lazy'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
            We prioritize your comfort and culinary enjoyment. Our
            accommodations are selected to provide you with the highest level of luxury and
            relaxation. From cozy boutique hotels to lavish resorts, every option ensures a restful
            and comfortable stay.
          </Typography>
        </Grid>
        <Grid xs={12} lg={4}>
          <Typography variant='body1'>
            When it comes to dining, we recommend only the best and most reputable restaurants,
            ensuring you enjoy top-quality cuisine. Our selections include a diverse array of dining
            options to meet all tastes, providing you with memorable culinary experiences throughout
            your vacation.
          </Typography>
        </Grid>
        <Grid xs={12} lg={4}>
          <Typography variant='body1'>
            Whether you're unwinding after a day of adventures or enjoying a meal at one of our
            recommended establishments, our commitment to excellence guarantees that your
            accommodation and dining experiences will be outstanding.{' '}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mt: 5 }}>
        <Grid md={12}>
          <SliderBarGallery
            serverData={[
              {
                imgLink: 'https://i.ibb.co/k9XSMGr/full-shot-couple-near-car.jpg',
                alt: 'Test alt',
              },
              {
                imgLink: 'https://i.ibb.co/k9XSMGr/full-shot-couple-near-car.jpg',
                alt: 'Test alt',
              },
              {
                imgLink: 'https://i.ibb.co/k9XSMGr/full-shot-couple-near-car.jpg',
                alt: 'Test alt',
              },
              {
                imgLink: 'https://i.ibb.co/k9XSMGr/full-shot-couple-near-car.jpg',
                alt: 'Test alt',
              },
              {
                imgLink: 'https://i.ibb.co/k9XSMGr/full-shot-couple-near-car.jpg',
                alt: 'Test alt',
              },
              {
                imgLink: 'https://i.ibb.co/k9XSMGr/full-shot-couple-near-car.jpg',
                alt: 'Test alt',
              },
              {
                imgLink: 'https://i.ibb.co/k9XSMGr/full-shot-couple-near-car.jpg',
                alt: 'Test alt',
              },
            ]}
            setting={centerModeForGallery}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
