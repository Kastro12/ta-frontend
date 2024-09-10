import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Message sending failed - Tailor-made vacations',
  robots: 'noindex, follow',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page contact-error'>{children}</div>;
}
