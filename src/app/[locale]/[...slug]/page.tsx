import allActivities from '@/data/activities/allActivities';
import { organizedVacations } from '@/data/organizedVacations';
import { notFound } from 'next/navigation';
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import Gallery from '@/sections/slideBarActivityGallery/Gallery';
import ActivitiesWrapper from '@/app/[locale]/create-vacation/components/BoxOfActivity/ActivitiesWrapper';
import { getRecommendedActivities } from '@/utils/activities';
import HeaderSection from './components/HeaderSection';
import VacationWithCurrentActivity from './components/VacationWithCurrentActivity';
import ChooseActivity from './components/ChooseActivity';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export default async function ActivityPage({
  params,
}: Readonly<{
  params: Promise<{ locale: string; slug: string }>;
}>) {
  const { slug } = await params;

  const currentActivity = allActivities.find((activity) => activity.id === slug[0]);

  const activitiesT = await getTranslations('activities.' + currentActivity?.translationKey);
  const globalT = await getTranslations('global');

  if (!currentActivity || slug.length == 0) {
    notFound();
  }

  const vacationWithCurrentActivity = organizedVacations.filter((vacation) => {
    const currentActivityInVacation = vacation.activities.find(
      (activity) => activity.id === currentActivity.id,
    );
    if (currentActivityInVacation) return true;
    return false;
  });

  const recommendedActivities = getRecommendedActivities(allActivities, currentActivity);

  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <HeaderSection currentActivity={currentActivity} title={activitiesT('title')} />

      <Grid container>
        <Grid size={{ xs: 12, lg: 8 }}>
          <div style={{ marginTop: '40px' }}>
            {activitiesT.rich(`longDescription`, {
              p: (chunks) => (
                <p
                  style={{
                    fontFamily: 'Platypi',
                    marginBottom: '8px',
                    fontSize: '16px',
                    fontWeight: 300,
                    lineHeight: '26px',
                  }}
                >
                  {chunks}
                </p>
              ),
              strong: (chunks) => <strong>{chunks}</strong>,
              br: () => <br />,
            })}
          </div>

          <div className='vacation-summary' style={{ marginTop: '36px' }}>
            <div className='box' style={{ marginBottom: '12px' }}>
              <Typography variant='h3' sx={{ width: '120px !important' }}>
                {globalT('Category')}
              </Typography>
              <ul>
                <li>{globalT(currentActivity.category)}</li>
              </ul>
            </div>
            <div className='box'>
              <Typography variant='h3' sx={{ width: '120px !important' }}>
                {globalT('Location')}
              </Typography>
              <ul>
                <li>{currentActivity.location}</li>
              </ul>
            </div>
          </div>

          <Typography variant='h2'>{globalT('Gallery')}</Typography>
          <Gallery serverData={currentActivity.images} />

          {vacationWithCurrentActivity && vacationWithCurrentActivity.length > 0 && (
            <>
              <Typography variant='h2' sx={{ marginBottom: '24px !important' }}>
                {globalT('predefined-vacation-include-activity')}
              </Typography>
              {vacationWithCurrentActivity.map((vacation, index) => (
                <VacationWithCurrentActivity
                  key={vacation.link}
                  data={{ link: vacation.link, translationKey: vacation.translationKey }}
                />
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
        <Typography variant='h2'>{globalT('Similar & nearby')}</Typography>

        <ActivitiesWrapper activities={recommendedActivities} />
      </Grid>
    </Container>
  );
}

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;

  const currentActivity = allActivities.find((activity) => activity.id === slug[0]);
  const activitiesT = await getTranslations('activities.' + currentActivity?.translationKey);

  if (!currentActivity || slug.length !== 1) {
    notFound();
  }

  return {
    // alternates: {
    //   canonical: productSEO?.meta_canonical_link || canonical,
    // },
    title: `${process.env.NEXT_PUBLIC_SITE_NAME} | ${activitiesT('title')}`,
    description: activitiesT('description'),
    keywords: currentActivity?.location,
    robots: {
      index: false,
      follow: false,
    },

    openGraph: {
      title: `${process.env.NEXT_PUBLIC_SITE_NAME} | ${activitiesT('title')}`,
      description: activitiesT('description'),
      type: 'website',
      images: [
        {
          url: currentActivity.images[0].link,
          width: 800,
          height: 800,
          alt: currentActivity.images[0].alt,
        },
      ],
      locale: locale,
    },
  };
}
