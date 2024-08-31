'use client';
import { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { bookVacationInfo } from '@/data/commonText';
import BookVacationFormWithSubmitHandle from '../_forms/BookVacationFormWithSubmitHandle';
import { PredefinedVacationProps } from '@/data/organizedVacations';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';

interface PredefinedVacationTemplateProps {
  organizedVacations: PredefinedVacationProps;
}

export default function BookVacationTemplate({
  organizedVacations,
}: PredefinedVacationTemplateProps) {
  const router = useRouter();
  const startDate = useSelector((state: RootState) => state.predefinedVacation.startDate);

  useEffect(() => {
    if (startDate == null) router.push(organizedVacations.link);
  }, []);

  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Typography variant='h1' sx={{ mb: '0' }}>
        Book vacation - {organizedVacations.title}
      </Typography>

      <Typography variant='body1' sx={{ maxWidth: '940px', m: '32px auto 32px auto' }}>
        <strong>Note:</strong> {bookVacationInfo}
      </Typography>

      <div className='form-background in-container'>
        <div className='form-personal-data'>
          <BookVacationFormWithSubmitHandle />
        </div>
      </div>
    </Container>
  );
}
