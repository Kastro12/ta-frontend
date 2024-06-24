'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Grid from '@mui/material/Unstable_Grid2';
import { button, greenButton } from '@/utils/re-styledComponents';
import { challengeAndHedonism } from '@/data/organizedVacations';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import { addPredefinedVacation } from '@/store/vacation/predefinedVacationReducer';
import { useRouter } from 'next/navigation';

export default function AboutUs() {
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
            <Typography variant='h1'>
              Expert vacation planning
              <br /> for ultimate relaxation
            </Typography>
          </Grid>
        </div>
      </Grid>
      <Typography
        variant='h3'
        sx={{ maxWidth: '640px', m: '32px auto 32px auto', fontWeight: '400', textAlign: 'center' }}
      >
        Experience the best vacation planning service that allows you to fully immerse in relaxation
        and adventure, without any worries. Let us handle the details while you make memories!
      </Typography>

      <Grid container spacing={4}>
        <Grid xs={12} lg={4}>
          {' '}
          <Typography variant='body1'>
            At our vacation planning service, we specialize in creating unforgettable getaways
            tailored to your desires. Our mission is to provide you with the highest quality
            vacation experience, allowing you to relax and enjoy every moment without worrying about
            the details. With us, you can leave all the planning and logistics to our expert team,
            ensuring that your vacation is stress-free and filled with enjoyment.
          </Typography>
        </Grid>
        <Grid xs={12} lg={4}>
          <Typography variant='body1'>
            We offer a variety of options to suit your needs. You can choose from our meticulously
            designed vacation packages or customize your own unique adventure. From the moment you
            arrive until your departure, we handle every aspect of your trip. This includes
            accommodations, transportation, activities, and dining, ensuring a seamless and
            enjoyable experience.
          </Typography>
        </Grid>
        <Grid xs={12} lg={4}>
          <Typography variant='body1'>
            If you prefer to arrange certain aspects of your vacation yourself, such as meals or
            transportation, we are flexible and happy to accommodate your preferences. Our goal is
            to create a vacation that perfectly fits your vision, with pricing adjusted accordingly.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
