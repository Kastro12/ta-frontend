'use client';
import { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import BookVacationFormWithSubmitHandle from './forms/BookVacationFormWithSubmitHandle';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function BookVacation() {
  const router = useRouter();
  const globalT = useTranslations('global');
  const chosenActivities = useSelector((state: RootState) => state.vacation.chosenActivities);

  useEffect(() => {
    if (chosenActivities.length < 1) {
      router.push('./create-vacation');
    }
  }, []);

  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Typography variant='h1' sx={{ mb: '0' }}>
        Book your vacation
      </Typography>

      <Typography variant='body1' sx={{ maxWidth: '940px', m: '32px auto 32px auto' }}>
        <strong>Note:</strong> {globalT('bookVacationInfo')}
      </Typography>

      <div className='form-background in-container'>
        <div className='form-personal-data'>
          <BookVacationFormWithSubmitHandle />
        </div>
      </div>
    </Container>
  );
}
