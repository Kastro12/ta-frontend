import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('global');

  return {
    title: `${t('Book vacation')} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    robots: 'noindex, follow',
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page book-vacation'>{children}</div>;
}
