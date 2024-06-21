import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Booking Unsuccessful',
  description: 'Booking Unsuccessful',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page book-vacation-unsuccessful'>{children}</div>;
}
