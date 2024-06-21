import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Successfully booked vacation',
  description: 'Successfully booked vacation',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page predefined-vacations'>{children}</div>;
}
