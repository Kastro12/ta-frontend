import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('termsAndConditions');

  return {
    title: `${t('mainTitle')} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    description: ` ${t('mainTitle')}`,
    robots: 'noindex, follow',
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page terms-and-conditions'>{children}</div>;
}
