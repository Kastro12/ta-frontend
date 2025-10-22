import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('landingPages.page-success-booking');

  return {
    title: `${t('metaTitle')} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    description: ` ${t('metaDescription')}`,
    robots: 'noindex, follow',
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page predefined-vacations'>{children}</div>;
}
