import type { Metadata } from 'next';
import '../style/appStyle.scss';

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'Description about homepage',
};

export const revalidate = 3600;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
