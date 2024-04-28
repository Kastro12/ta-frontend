async function getActivities() {
  const res = await fetch('http://localhost:8080/activities', {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

import { Container, Button, Typography } from '@mui/material';
import { InfoWithBackgroundImage } from '@/components';
import { Navbar, Footer, SliderBarActivities, SliderBarCreatedRoutesBox } from '@/sections';
import Grid from '@mui/material/Unstable_Grid2';
import Link from 'next/link';
import { button, orangeButton } from '@/utils/re-styledComponents';
import theme from '@/utils/re-styledComponents/theme';
import { ThemeProvider } from '@mui/material/styles';
import { settingThreeInRow, settingTwoInRow } from '@/components/sliderbar/settings';

import FormSearchActivities from '@/forms/searchActivities/FormSearchActivities';

import { topSeasonActivities, organizedVacations } from '@/data';

export default async function Home() {
  const activities = await getActivities();

  console.log(activities);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container maxWidth='lg' sx={{ mt: 3 }}>
        <Grid container className='header-section'>
          <img
            src='https://i.ibb.co/k9XSMGr/full-shot-couple-near-car.jpg'
            alt={'couple near car in nature'}
            loading='lazy'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className='content'>
            <Grid md={8} className='titles'>
              <h1>
                Design your
                <br /> dream vacation
              </h1>
              <h2>Choose activities, organize every day...</h2>
            </Grid>
            <Grid className='mobile_left_desktop_right_flex' md={4}>
              <Button
                sx={{ ...button, ...orangeButton, ...{ mx: '20px' } }}
                variant='outlined'
                href={'./'}
                LinkComponent={Link}
              >
                Organize vacation per day
              </Button>
            </Grid>
          </div>
        </Grid>

        <FormSearchActivities />

        <Typography variant='h2'>Organized vacations</Typography>

        <SliderBarCreatedRoutesBox
          serverData={organizedVacations}
          setting={settingTwoInRow}
          className='arrowInSlickRow'
        />

        <Typography variant='h2'>Top season activities</Typography>

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

      <Footer />
    </ThemeProvider>
  );
}
