import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import Link from 'next/link';
import { linkGreenButton } from '@/utils/re-styledComponents';
import { getTranslations } from 'next-intl/server';

export default async function AboutUs() {
  const aboutT = await getTranslations('landingPages.page-about');

  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Grid container className='header-section'>
        <Image
          src='/main-banner/compass-in-hand.jpg'
          alt='Maps on table'
          style={{ objectFit: 'cover', borderRadius: '4px' }}
          sizes='100vw'
          fill
          priority
        />
        <div className='content'>
          <Grid size={{ md: 12 }} className='titles'>
            <Typography variant='h1'>{aboutT('mainTitle')}</Typography>
          </Grid>
        </div>
      </Grid>
      <Typography
        variant='h3'
        sx={{
          maxWidth: '640px',
          m: '32px auto 0 auto',
          fontWeight: '400',
          textAlign: 'center',
          fontSize: '18px',
          lineHeight: '30px',
          letterSpacing: '0.02em',
        }}
      >
        {aboutT('mainSubtitle')}
      </Typography>
      <Typography
        variant='h3'
        sx={{
          maxWidth: '640px',
          m: '0 auto 32px auto',
          fontWeight: '400',
          textAlign: 'center',
          fontSize: '18px',
          lineHeight: '30px',
          letterSpacing: '0.02em',
        }}
      >
        {aboutT('mainSubtitle2')}
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Typography variant='body1'>{aboutT('text1')}</Typography>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Typography variant='body1'>{aboutT('text2')}</Typography>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Typography variant='body1'>{aboutT('text3')}</Typography>
        </Grid>
      </Grid>

      <Typography variant='h2'>{aboutT('services.title')}</Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Typography variant='h3' sx={{ mb: 2 }}>
            {aboutT('services.subtitle1')}
          </Typography>
          <Typography variant='body1' className='text'>
            {aboutT('services.text1.With')}{' '}
            <Link
              style={{ ...linkGreenButton, padding: '0', border: 'none' }}
              href={'/create-vacation'}
            >
              {aboutT('services.text1.create vacation')}
            </Link>{' '}
            {aboutT('services.text1.p1')}
          </Typography>

          <Typography variant='body1' className='text'>
            {aboutT('services.text1.p2')}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Typography variant='h3' sx={{ mb: 2 }}>
            {aboutT('services.subtitle2')}
          </Typography>
          <Typography variant='body1' className='text'>
            {aboutT('services.text2.intro')}
            <Link
              style={{ ...linkGreenButton, padding: '0', border: 'none' }}
              href={'/#predefined-vacations-position'}
            >
              {aboutT('services.text2.predefined vacation')}
            </Link>{' '}
            {aboutT('services.text2.p1')}
          </Typography>

          <Typography variant='body1' className='text'>
            {aboutT('services.text2.p2')}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
