'use client';
import { localCultureAndLandscapes as organizedVacations } from '@/data/organizedVacations';
import BookVacationTemplate from '../../_components/BookVacationTemplate';

export default function BookVacation() {
  return <BookVacationTemplate organizedVacations={organizedVacations} />;
}
