'use client';
import { pannonianPlain as organizedVacations } from '@/data/organizedVacations';
import PredefinedVacationTemplate from '../_components/PredefinedVacationTemplate';

export default function PredefinedVacation() {
  return <PredefinedVacationTemplate organizedVacations={organizedVacations} />;
}
