'use client';
import { Container, Button, Typography } from '@mui/material';
import { InfoWithBackgroundImage } from '@/components';
import { SliderBarActivities, CreatedRoutesBoxList } from '@/sections';
import { topSeasonActivities, activityCategories } from '@/data';
import { organizedVacations } from '@/data/organizedVacations';
import ZoomedBoxOfActivity from '@/app/create-vacation/components/ZoomedBoxOfActivity';
import { SliderBarMainBanner } from '@/sections';

export default function Home() {
  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <ZoomedBoxOfActivity />

      <SliderBarMainBanner />

      <Typography variant='h2'>Predefined vacations</Typography>

      <CreatedRoutesBoxList serverData={organizedVacations} />

      <Typography variant='h2' sx={{ mt: '12px', mb: '26px' }}>
        Top season activities
      </Typography>

      <SliderBarActivities serverData={topSeasonActivities} />

      <Typography variant='h2' sx={{ mt: '28px' }}>
        Activity categories
      </Typography>
      {activityCategories.map((category, i) => (
        <InfoWithBackgroundImage
          title={category.label}
          description={category.description}
          images={category.images}
          link={category.link}
          glide_classname={`glid_${i}`}
          key={i}
        />
      ))}
    </Container>
  );
}
