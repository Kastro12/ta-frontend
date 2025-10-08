import { Container, Typography } from '@mui/material';
import { InfoWithBackgroundImage } from '@/components';
import { SliderBarActivities, CreatedRoutesBoxList } from '@/sections';
import { topSeasonActivities, activityCategories } from '@/data';
import { organizedVacations } from '@/data/organizedVacations';
import ZoomedBoxOfActivity from '@/app/[locale]/create-vacation/components/ZoomedBoxOfActivity';
import { SliderBarMainBanner } from '@/sections';
import FullWidthBanner from '@/sections/ads/FullWidthBanner';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const homepageT = await getTranslations('homePage');
  const organizedVacationsT = await getTranslations('organizedVacations');

  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <ZoomedBoxOfActivity />

      <SliderBarMainBanner />

      <Typography variant='h2'>{organizedVacationsT('mainTitle')}</Typography>

      <CreatedRoutesBoxList serverData={organizedVacations} />

      <FullWidthBanner />

      <Typography variant='h2'>{homepageT('top-season-activities')}</Typography>

      <SliderBarActivities serverData={topSeasonActivities} />

      <Typography variant='h2'>{homepageT('activity-categories')}</Typography>
      {activityCategories.map((category, i) => (
        <InfoWithBackgroundImage
          translationKey={category?.translationKey}
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
