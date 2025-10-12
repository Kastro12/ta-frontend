import { Container, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Link from 'next/link';
import { button, greenButton } from '@/utils/re-styledComponents';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function Partnerships() {
  const partnershipsT = await getTranslations('landingPages.page-partnerships');

  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Grid container className='header-section'>
        <Image
          src='/main-banner/partnership.jpg'
          alt='partnership'
          style={{ objectFit: 'cover', borderRadius: '4px' }}
          sizes='100vw'
          fill
          priority
        />
        <div className='content'>
          <Grid size={{ md: 12 }} className='titles'>
            <Typography variant='h1'>{partnershipsT('mainTitle')}</Typography>
          </Grid>
        </div>
      </Grid>
      <Typography
        variant='h2'
        sx={{
          maxWidth: '640px',
          m: '32px auto 32px auto !important',
          fontWeight: '400',
          textAlign: 'center',
          fontSize: '18px',
          lineHeight: '30px',
          letterSpacing: '0.02em',
        }}
      >
        {partnershipsT('mainSubtitle')}
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Typography variant='body1'>{partnershipsT('text1')}</Typography>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Typography variant='body1'>{partnershipsT('text2')}</Typography>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Typography variant='body1'>{partnershipsT('text3')}</Typography>
        </Grid>

        <Grid size={{ md: 12 }} sx={{ width: '100%', textAlign: 'center', position: 'relative' }}>
          <Button
            startIcon={<MailOutlineOutlinedIcon />}
            sx={{ ...button, ...greenButton, ...{ padding: '0 28px', mt: '16px' } }}
            variant='outlined'
            LinkComponent={Link}
            href='/contact'
          >
            {partnershipsT('Contact')}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
