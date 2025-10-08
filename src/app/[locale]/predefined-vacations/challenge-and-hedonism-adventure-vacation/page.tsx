'use client';
import { challengeAndHedonism as organizedVacation } from '@/data/organizedVacations';
import PredefinedVacationTemplate from '../_components/PredefinedVacationTemplate';

export default function PredefinedVacation() {
  return <PredefinedVacationTemplate organizedVacation={organizedVacation} />;
}
