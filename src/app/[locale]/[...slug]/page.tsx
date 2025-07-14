import allActivities from '@/data/activities/allActivities';
import { organizedVacations } from '@/data/organizedVacations';
import { notFound } from 'next/navigation';
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import Gallery from '@/sections/slideBarActivityGallery/Gallery';
import Link from 'next/link';
import ActivitiesWrapper from '@/app/[locale]/create-vacation/components/BoxOfActivity/ActivitiesWrapper';
import { getRecommendedActivities } from '@/utils/activities';
import HeaderSection from './components/HeaderSection';
import ChooseActivity from './components/ChooseActivity';

export default async function ActivityPage({
  params,
}: Readonly<{
  params: { locale: string; slug: string };
}>) {
  const currentActivity = allActivities.find((activity) => activity.id === params?.slug[0]);

  if (!currentActivity || params.slug.length !== 1) {
    notFound();
  }

  const vacationWithCurrentActivity = organizedVacations.filter((vacation) => {
    const currentActivityInVacation = vacation.activities.find(
      (activity) => activity.id === currentActivity.id
    );
    if (currentActivityInVacation) return true;
    return false;
  });

  const recommendedActivities = getRecommendedActivities(allActivities, currentActivity);

  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <HeaderSection currentActivity={currentActivity} />

      <Grid container>
        <Grid size={{ xs: 12, lg: 8 }}>
          {currentActivity?.longDescritpion.map((desc: string, index) => (
            <Typography variant='body1' sx={{ mt: index == 0 ? 5 : 3, mb: 1 }} key={index}>
              {desc}
            </Typography>
          ))}

          <div className='vacation-summary' style={{ marginTop: '36px' }}>
            <div className='box' style={{ marginBottom: '12px' }}>
              <Typography variant='h3' sx={{ width: '120px !important' }}>
                Category
              </Typography>
              <ul>
                <li>{currentActivity.category}</li>
              </ul>
            </div>
            <div className='box'>
              <Typography variant='h3' sx={{ width: '120px !important' }}>
                Location
              </Typography>
              <ul>
                <li>{currentActivity.location}</li>
              </ul>
            </div>
          </div>

          <Typography variant='h2'>Gallery</Typography>
          <Gallery serverData={currentActivity.images} />

          {vacationWithCurrentActivity && vacationWithCurrentActivity.length > 0 && (
            <>
              <Typography variant='h2' sx={{ marginBottom: '24px !important' }}>
                Predefined vacation which include this activity
              </Typography>
              {vacationWithCurrentActivity.map((vacation, index) => (
                <Link
                  key={index}
                  style={{
                    display: 'inline-block',
                    color: '#21817d',
                    textDecoration: 'underline',
                  }}
                  href={vacation.link}
                >
                  {vacation.title}
                </Link>
              ))}
            </>
          )}
        </Grid>
        <Grid
          size={{ xs: 12, lg: 4 }}
          sx={{
            position: 'relative',
            pt: 6,
            display: 'flex',
            justifyContent: 'start',
            flexDirection: 'column',
          }}
        >
          <ChooseActivity currentActivity={currentActivity} />
          <Box sx={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
            <Image
              src='/logo/android-chrome-256x256.png'
              alt='tailor-made vacations logo'
              loading='lazy'
              width={142}
              height={142}
            />
          </Box>
        </Grid>
        <Typography variant='h2'>Similar & nearby</Typography>

        <ActivitiesWrapper activities={recommendedActivities} />
      </Grid>
    </Container>
  );
}

export async function generateMetadata({
  params,
}: Readonly<{
  params: { locale: string; slug: string };
}>) {
  const currentParams = await params;

  const currentActivity = allActivities.find((activity) => activity.id === currentParams?.slug[0]);

  if (!currentActivity || currentParams.slug.length !== 1) {
    notFound();
  }

  return {
    // alternates: {
    //   canonical: productSEO?.meta_canonical_link || canonical,
    // },
    title: `${process.env.NEXT_PUBLIC_SITE_NAME} | ${currentActivity?.title}`,
    description: currentActivity?.description,
    keywords: currentActivity?.location,
    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: currentActivity?.title,
      description: currentActivity?.description,
      type: 'website',
      images: [
        {
          url: currentActivity.images[0].link,
          width: 800,
          height: 800,
          alt: currentActivity.images[0].alt,
        },
      ],
      locale: currentParams.locale,
    },
  };
}
