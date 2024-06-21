import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pathway from ancient times through the middle ages to modern history',
  description:
    'Pathway from ancient times through the middle ages to modern history',
};

export default function ActivitiesLayout({ children }: { children: React.ReactNode }) {
  return <div className='page predefined-vacations'>{children}</div>;
}
