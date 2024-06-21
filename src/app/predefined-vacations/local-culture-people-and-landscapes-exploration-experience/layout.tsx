import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local culture, people, and landscapes exploration experience',
  description: 'Local culture, people, and landscapes exploration experience',
};

export default function ActivitiesLayout({ children }: { children: React.ReactNode }) {
  return <div className='page predefined-vacations'>{children}</div>;
}
