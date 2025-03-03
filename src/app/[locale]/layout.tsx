import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import '@/style/appStyle.scss';

export const metadata: Metadata = {
  title: 'Tailor-made vacations',
  description:
    'Tailor-made vacations offer personalized trips across Serbia and the surrounding. Choose your vacation plan, with planning of accommodations and transport.',
  robots: 'index, follow',
};

export const revalidate = 3600;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <link rel='apple-touch-icon' sizes='180x180' href='/logo/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/logo/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/logo/favicon-16x16.png' />
      <link rel='manifest' href='/logo/site.webmanifest' />
      <link rel='mask-icon' href='/logo/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff' />
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
