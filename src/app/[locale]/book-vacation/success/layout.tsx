import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Successfully booked vacation - Tailor-made vacations',
  robots: 'noindex, follow',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page book-vacation-success'>{children}</div>;
}
