import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('landingPages.page-vehicle');

  return {
    title: `${t('metaTitle')} | Tailor-made vacations`,
    description: ` ${t('metaDescription')}`,
    robots: 'noindex, follow',
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page vehicle-fleet'>{children}</div>;
}
