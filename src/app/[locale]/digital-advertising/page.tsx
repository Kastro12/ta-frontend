import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import Link from 'next/link';
import { linkGreenButton } from '@/utils/re-styledComponents';

const DigitalAdvertising = () => {
  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Grid container className='header-section bg-green'>
        <Image
          src='/logo/android-chrome-256x256.png'
          alt='Tailor-made vacations Logo'
          style={{
            objectFit: 'cover',
            borderRadius: '4px',
            position: 'absolute',
            margin: 'auto',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            opacity: 0.5,
          }}
          width={280}
          height={280}
          priority
        />
        <div className='content'>
          <Grid size={{ md: 12 }} className='titles'>
            <Typography variant='h1'>Show your offer in the right place!</Typography>
            <Box>
              <Typography variant='h3' sx={{ textAlign: 'center', marginBottom: '20px' }}>
                The largest tourist site in Serbia and the region!
              </Typography>
              <Typography variant='body1' sx={{ textAlign: 'center' }}>
                We enable you to find your tourist spot, activity or accommodation become more
                visible to thousands of visitors planning their next vacation.
              </Typography>
            </Box>
          </Grid>
        </div>
      </Grid>
      <Typography
        variant='h3'
        sx={{
          maxWidth: '640px',
          m: '32px auto 32px auto',
          fontWeight: '400',
          textAlign: 'center',
          fontSize: '18px',
          lineHeight: '30px',
          letterSpacing: '0.02em',
        }}
      >
        Benefits of advertising
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Typography variant='body1'>
            <span style={{ fontWeight: 600 }}>Target audience</span> - Our site is visited by lovers
            of travel, adventure and culture who are looking for an ideal destination.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Typography variant='body1'>
            <span style={{ fontWeight: 600 }}>High visibility</span> – Ads are placed in key places
            to have maximum reach.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Typography variant='body1'>
            <span style={{ fontWeight: 600 }}>Flexible options</span> - You can choose the most
            suitable advertising method depending on your offer.
          </Typography>
        </Grid>
      </Grid>

      <Typography variant='h2'>Our services</Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12 }}>
          <Typography variant='h3' sx={{ mb: 2 }}>
            Advertising on the homepage
          </Typography>
          <Typography variant='body1' className='text'>
            Be the first to attract the attention of visitors as soon as they open our site.
          </Typography>
          <Typography variant='body1' className='text'>
            Your advertising will be visible on the main page, ensuring maximum reach.
          </Typography>
          <Typography variant='body1' className='text'>
            The price of an ad per day is &#8364;34
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DigitalAdvertising;
