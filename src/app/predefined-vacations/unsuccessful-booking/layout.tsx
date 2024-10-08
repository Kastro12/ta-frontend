import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unsuccessfully booked vacation',
  robots: 'noindex, follow',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page predefined-vacations'>{children}</div>;
}
