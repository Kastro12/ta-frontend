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
import { SliderBarActivities, CreatedRoutesBoxList } from '@/sections';
import Grid from '@mui/material/Unstable_Grid2';
import Link from 'next/link';
import { button, greenButton } from '@/utils/re-styledComponents';
import { topSeasonActivities, activityCategories } from '@/data';
import { organizedVacations } from '@/data/organizedVacations';
import Image from 'next/image';
import ZoomedBoxOfActivity from '@/app/activities/components/ZoomedBoxOfActivity';

export default function Home() {
  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <ZoomedBoxOfActivity />
      <Grid container className='header-section' sx={{ position: 'relative' }}>
        <Image
          src='/main-banner/road_through_colorful_forest.jpg'
          alt='Road through colorful forest'
          style={{ objectFit: 'cover', borderRadius: '4px' }}
          sizes='100vw'
          fill
          priority
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
        <span id='predefined-vacations' style={{ position: 'absolute', bottom: '56px' }}></span>
      </Grid>

      <Typography variant='h2'>Choose one of our predefined vacations</Typography>

      <CreatedRoutesBoxList serverData={organizedVacations} />

      <Typography variant='h2' sx={{ mt: '12px', mb: '26px' }}>
        Top season activities
      </Typography>

      <SliderBarActivities serverData={topSeasonActivities} />

      <Typography variant='h2' sx={{ mt: '28px' }}>
        Activity categories
      </Typography>
      <Grid container>
        {activityCategories.map((category) => (
          <Grid md={12} key={category.label} sx={{ mb: '32px' }}>
            <InfoWithBackgroundImage
              title={category.label}
              description={category.description}
              images={category.images}
              link={category.link}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
