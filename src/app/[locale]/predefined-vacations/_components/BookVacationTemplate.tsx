'use client';
import { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import BookVacationFormWithSubmitHandle from '../_forms/BookVacationFormWithSubmitHandle';
import { PredefinedVacationProps } from '@/data/organizedVacations';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface PredefinedVacationTemplateProps {
  organizedVacations: PredefinedVacationProps;
}

export default function BookVacationTemplate({
  organizedVacations,
}: PredefinedVacationTemplateProps) {
  const router = useRouter();
  const organizedVacationsT = useTranslations(organizedVacations?.translationKey);
  const globalT = useTranslations('global');
  const startDate = useSelector((state: RootState) => state.predefinedVacation.startDate);

  useEffect(() => {
    if (startDate == null) router.push(organizedVacations.link);
  }, []);

  return (
    <Container maxWidth='lg' className='custom-container' sx={{ mt: 3 }}>
      <Typography variant='h1' sx={{ mb: '0' }}>
        {globalT('Book vacation')} - {organizedVacationsT('title')}
      </Typography>

      <Typography variant='body1' sx={{ maxWidth: '940px', m: '32px auto 32px auto' }}>
        <strong>{globalT('Note')}:</strong> {globalT('bookVacationInfo')}
      </Typography>

      <div className='form-background in-container'>
        <div className='form-personal-data'>
          <BookVacationFormWithSubmitHandle />
        </div>
      </div>
    </Container>
  );
}
