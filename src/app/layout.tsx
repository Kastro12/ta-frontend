// 'use client'
import type { Metadata } from 'next';
import '../style/appStyle.scss';

export const metadata: Metadata = {
  title: 'Tailor-made vacations',
  description: 'Tailor-made vacations',
  robots: 'noindex, nofollow',
};

export const revalidate = 3600;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='apple-touch-icon' sizes='180x180' href='/logo/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/logo/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/logo/favicon-16x16.png' />
      <link rel='manifest' href='/logo/site.webmanifest' />
      <link rel='mask-icon' href='/logo/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff' />
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
