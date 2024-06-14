import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Successfully booked vacation',
  description: 'successfully booked vacation',
};

export default function ActivitiesLayout({ children }: { children: React.ReactNode }) {
  return <div className='page book-vacation-success'>{children}</div>;
}
