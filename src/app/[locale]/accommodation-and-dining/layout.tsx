import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('landingPages.page-accommodation');

  return {
    title: `${t('metaTitle')} | Tailor-made vacations`,
    description: ` ${t('metaDescription')}`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page accommodation-and-dining'>{children}</div>;
}
