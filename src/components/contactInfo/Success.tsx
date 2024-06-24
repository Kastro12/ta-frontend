import { Container, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Success() {
  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Typography variant='h1' sx={{ mb: '0' }}>
        Message sent successfully
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <CheckCircleOutlineIcon sx={{ fontSize: '86px', color: '#bcd9d8' }} />
      </div>
      <Typography
        variant='body1'
        sx={{ maxWidth: '670px', fontSize: '18px', m: '32px auto 32px auto' }}
      >
        Thank you for your message. We will respond soon.
      </Typography>

      <Typography
        variant='body1'
        sx={{ maxWidth: '670px', fontSize: '18px', m: '32px auto 32px auto' }}
      >
        In the meantime, feel free to explore our website for more information about our services
        and offerings.
      </Typography>
    </Container>
  );
}
