import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book vacation - Challenge and hedonism adventure vacation',
  description: 'Book vacation - Challenge and hedonism adventure vacation',
};

export default function ActivitiesLayout({ children }: { children: React.ReactNode }) {
  return <div className='page predefined-vacations'>{children}</div>;
}
