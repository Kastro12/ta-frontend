'use client';
import { Container, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clearVacation } from '@/store/vacation/vacationReducer';

export default function BookVacation() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearVacation());
  }, []);

  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Typography variant='h1' sx={{ mb: '0' }}>
        Booking Unsuccessful
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <ErrorOutlineIcon sx={{ fontSize: '86px', color: 'rgba(239, 83, 80, 0.3)' }} />
      </div>
      <Typography
        variant='body1'
        sx={{ maxWidth: '560px', fontSize: '18px', m: '32px auto 32px auto' }}
      >
        There was an error submitting your form. Please try again later.
      </Typography>

      <Typography
        variant='body1'
        sx={{ maxWidth: '560px', fontSize: '18px', m: '32px auto 32px auto' }}
      >
        You can also contact us directly via email at [your email] or call us at [your phone
        number]. Thank you for your understanding.
      </Typography>
    </Container>
  );
}
