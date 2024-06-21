import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unsuccessfully booked vacation',
  description: 'Unsuccessfully booked vacation',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page predefined-vacations'>{children}</div>;
}
