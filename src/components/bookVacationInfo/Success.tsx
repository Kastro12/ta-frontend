import { Container, Typography, Button, Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTranslations } from 'next-intl';
import { button, lightGreenButton } from '@/utils/re-styledComponents';
import Link from 'next/link';

export default function Success() {
  const successBookingT = useTranslations('landingPages.page-success-booking');

  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Typography variant='h1' sx={{ mb: '0' }}>
        {successBookingT('mainTitle')}
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <CheckCircleOutlineIcon sx={{ fontSize: '86px', color: '#bcd9d8' }} />
      </div>
      <Typography
        variant='body1'
        sx={{ maxWidth: '740px', fontSize: '18px', m: '32px auto 32px auto' }}
      >
        {successBookingT('text1')}
      </Typography>

      <Typography
        variant='body1'
        sx={{ maxWidth: '740px', fontSize: '18px', m: '32px auto 32px auto' }}
      >
        {successBookingT('text2')}
      </Typography>
      <Typography
        variant='body1'
        sx={{ maxWidth: '740px', fontSize: '18px', m: '32px auto 32px auto' }}
      >
        {successBookingT('text3')}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          sx={{ ...button, ...lightGreenButton, ...{ padding: '0 28px', mt: '16px' } }}
          variant='outlined'
          LinkComponent={Link}
          href='/'
        >
          {successBookingT('Homepage')}
        </Button>
      </Box>
    </Container>
  );
}
