import type { Metadata } from 'next';
import { challengeAndHedonism as organizedVacations } from '@/data/organizedVacations';

export const metadata: Metadata = {
  title: `Book vacation - ${organizedVacations.title}`,
  description: `Book vacation - ${organizedVacations.description}`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page predefined-vacations'>{children}</div>;
}
