import type { Metadata } from 'next';
import { localCultureAndLandscapes as organizedVacations } from '@/data/organizedVacations';

export const metadata: Metadata = {
  title: `${organizedVacations.title}`,
  description: `${organizedVacations.description}`,
}



export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page predefined-vacations'>{children}</div>;
}
