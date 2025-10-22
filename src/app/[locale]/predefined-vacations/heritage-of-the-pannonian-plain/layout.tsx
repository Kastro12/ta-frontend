import type { Metadata } from 'next';
import { pannonianPlain as organizedVacation } from '@/data/organizedVacations';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('organizedVacations');
  const organizedVacationsT = await getTranslations(organizedVacation.translationKey);

  return {
    title: `${organizedVacationsT('title')} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    description: `${t('mainTitle')} | ${organizedVacationsT('description')}`,
    robots: 'noindex, follow',
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page predefined-vacations'>{children}</div>;
}
