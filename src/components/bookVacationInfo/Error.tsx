import { Container, Typography, Button, Box } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useTranslations } from 'next-intl';
import { button, lightGreenButton } from '@/utils/re-styledComponents';
import Link from 'next/link';

export default function Error() {
  const unsuccessBookingT = useTranslations('landingPages.page-unsuccess-booking');

  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Typography variant='h1' sx={{ mb: '0' }}>
        {unsuccessBookingT('mainTitle')}
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <ErrorOutlineIcon sx={{ fontSize: '86px', color: 'rgba(239, 83, 80, 0.3)' }} />
      </div>
      <Typography
        variant='body1'
        sx={{ maxWidth: '560px', fontSize: '18px', m: '32px auto 32px auto' }}
      >
        {unsuccessBookingT('text1')}{' '}
      </Typography>

      <Typography
        variant='body1'
        sx={{ maxWidth: '560px', fontSize: '18px', m: '32px auto 32px auto' }}
      >
        {unsuccessBookingT('text2')}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          sx={{ ...button, ...lightGreenButton, ...{ padding: '0 28px', mt: '16px' } }}
          variant='outlined'
          LinkComponent={Link}
          href='/'
        >
          {unsuccessBookingT('Homepage')}
        </Button>
      </Box>
    </Container>
  );
}
