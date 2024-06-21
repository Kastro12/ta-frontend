'use client';
import { Container, Typography } from '@mui/material';
import { bookVacationInfo } from '@/data/commonText';
import BookVacationFormWithSubmitHandle from '../../_forms/BookVacationFormWithSubmitHandle';

export default function BookVacation() {
  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Typography variant='h1' sx={{ mb: '0' }}>
        Book vacation - Challenge and hedonism adventure vacation
      </Typography>

      <Typography variant='body1' sx={{ maxWidth: '940px', m: '32px auto 32px auto' }}>
        <strong>Note:</strong> {bookVacationInfo}
      </Typography>

      <div className='form-background in-container'>
        <div className='form-personal-data'><BookVacationFormWithSubmitHandle /></div>
      </div>
    </Container>
  );
}
