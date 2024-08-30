'use client';
import { pathwayFromAncientIimes as organizedVacations } from '@/data/organizedVacations';
import PredefinedVacationTemplate from '../_components/PredefinedVacationTemplate';

export default function PredefinedVacation() {
  console.log('organizedVacations', organizedVacations);

  return <PredefinedVacationTemplate organizedVacations={organizedVacations} />;
}
