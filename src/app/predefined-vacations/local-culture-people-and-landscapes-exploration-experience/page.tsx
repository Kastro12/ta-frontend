'use client';
import { Container, Typography, Grid } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function BookVacation() {
  const dispatch = useDispatch();

  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Typography variant='h1' sx={{ mb: '0' }}>
        Local culture, people, and landscapes exploration experience
      </Typography>

      <Grid container className='header-section'>
        <img
          src='https://i.ibb.co/k9XSMGr/full-shot-couple-near-car.jpg'
          alt={'couple near car in nature'}
          loading='lazy'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className='content'>
          <Grid md={12} className='titles'>
            <Typography variant='h1'>Create your dream vacation</Typography>
            <h2>Choose activities, organize your days...</h2>
          </Grid>
          <Grid md={12} sx={{ textAlign: 'center' }}>
            Book now
          </Grid>
        </div>
      </Grid>
    </Container>
  );
}
