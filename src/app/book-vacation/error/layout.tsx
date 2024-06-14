import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Booking Unsuccessful',
  description: 'Booking Unsuccessful',
};

export default function ActivitiesLayout({ children }: { children: React.ReactNode }) {
  return <div className='page book-vacation-unsuccessful'>{children}</div>;
}
