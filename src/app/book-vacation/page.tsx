'use client';
import { Container, Typography } from '@mui/material';
import BookVacationForm from './forms/BookVacationForm';

export default function BookVacation() {
  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Typography variant='h1' sx={{ mb: '0' }}>
        Book your vacation
      </Typography>

      <Typography variant='body1' sx={{ maxWidth: '940px', m: '32px auto 32px auto' }}>
        <strong>Note:</strong> After filling out the form, we will email you the complete vacation
        plan and payment instructions. To secure your spot, you should pay the full amount or a
        deposit of 30% of the total price. The remaining balance should be paid 15 days before your
        arrival.
      </Typography>

      <div className='form-background in-container'>
        <div className='form-personal-data'>
          <BookVacationForm />
        </div>
      </div>
    </Container>
  );
}
