// async function getActivities() {
//   const res = await fetch('http://localhost:8080/activities', {
//     cache: 'force-cache',
//     // next: { revalidate: 0 },
//   });

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }
'use client';
import { Container, Button, Typography } from '@mui/material';
import { InfoWithBackgroundImage } from '@/components';
import { SliderBarActivities, SliderBarCreatedRoutesBox } from '@/sections';
import Grid from '@mui/material/Unstable_Grid2';
import Link from 'next/link';
import { button, greenButton } from '@/utils/re-styledComponents';
import { settingThreeInRow } from '@/components/sliderbar/settings';
import { topSeasonActivities } from '@/data';
import { organizedVacations } from '@/data/organizedVacations';

export default function Home() {
  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
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
            <Button
              sx={{ ...button, ...greenButton, ...{ padding: '0 28px', mt: '16px' } }}
              variant='outlined'
              href={'./activities'}
              LinkComponent={Link}
            >
              Create your vacation
            </Button>
          </Grid>
        </div>
      </Grid>

      {/* <FormSearchActivities /> */}

      <Typography variant='h2'>Choose one of our predefined vacations</Typography>

      <SliderBarCreatedRoutesBox serverData={organizedVacations} />

      <Typography variant='h2' sx={{ mt: '16px', mb:'24px' }}>
        Top season activities
      </Typography>

      <SliderBarActivities
        serverData={topSeasonActivities}
        setting={settingThreeInRow}
        className='arrowInSlickRow'
      />

      <Typography variant='h2'>History and culture</Typography>

      <Grid container spacing={3}>
        <Grid md={12}>
          <InfoWithBackgroundImage />
        </Grid>
      </Grid>
    </Container>
  );
}
