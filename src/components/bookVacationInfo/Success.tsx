import { Container, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Success() {
  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Typography variant='h1' sx={{ mb: '0' }}>
        Successfully booked vacation
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <CheckCircleOutlineIcon sx={{ fontSize: '86px', color: '#bcd9d8' }} />
      </div>
      <Typography
        variant='body1'
        sx={{ maxWidth: '740px', fontSize: '18px', m: '32px auto 32px auto' }}
      >
        Thank you for choosing us for your vacation! A detailed plan and program of your vacation,
        along with payment information, will be sent to your email.
      </Typography>

      <Typography
        variant='body1'
        sx={{ maxWidth: '740px', fontSize: '18px', m: '32px auto 32px auto' }}
      >
        If you have any further questions or need assistance, please feel free to contact us via
        email at [your email] or call us at [your phone number]. <br />
        We look forward to your journey with us!
      </Typography>
    </Container>
  );
}
