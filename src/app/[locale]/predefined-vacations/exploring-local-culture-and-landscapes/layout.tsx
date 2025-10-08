import type { Metadata } from 'next';
import { localCultureAndLandscapes as organizedVacation } from '@/data/organizedVacations';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('organizedVacations');
  const organizedVacationsT = await getTranslations(organizedVacation.translationKey);

  return {
    title: organizedVacationsT('title'),
    description: `${t('mainTitle')} | ${organizedVacationsT('description')}`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page predefined-vacations'>{children}</div>;
}
