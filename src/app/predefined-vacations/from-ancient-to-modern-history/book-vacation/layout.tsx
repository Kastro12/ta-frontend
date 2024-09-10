import type { Metadata } from 'next';
import { pathwayFromAncientIimes as organizedVacations } from '@/data/organizedVacations';

export const metadata: Metadata = {
  title: `Book vacation - ${organizedVacations.title}`,
  robots: 'noindex, follow',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page predefined-vacations'>{children}</div>;
}
