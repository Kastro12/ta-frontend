'use client';
import { Container, Typography } from '@mui/material';
import { InfoWithBackgroundImage } from '@/components';
import { SliderBarActivities, CreatedRoutesBoxList } from '@/sections';
import { topSeasonActivities, activityCategories } from '@/data';
import { organizedVacations } from '@/data/organizedVacations';
import ZoomedBoxOfActivity from '@/app/[locale]/create-vacation/components/ZoomedBoxOfActivity';
import { SliderBarMainBanner } from '@/sections';
import FullWidthBanner from '@/sections/ads/FullWidthBanner';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <ZoomedBoxOfActivity />

      <SliderBarMainBanner />

      <p>{t('title')}</p>

      <Typography variant='h2'>Predefined vacations</Typography>

      <CreatedRoutesBoxList serverData={organizedVacations} />

      <FullWidthBanner />

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
