import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'About us - Tailor-made vacations',
  description:
    'Specialized vacation planning for Serbia and nearby regions. Custom trips or predefined options with full management of activities, stays, and transport.',
};

// export async function generateMetadata(): Promise<Metadata> {
//   const t = await getTranslations('organizedVacations');
//   const organizedVacationsT = await getTranslations(organizedVacation.translationKey);

//   return {
//     title: organizedVacationsT('title'),
//     description: `${t('mainTitle')} | ${organizedVacationsT('description')}`,
//   };
// }

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page about-us'>{children}</div>;
}
