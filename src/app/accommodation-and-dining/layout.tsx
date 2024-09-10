import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accommodation and dining - Tailor-made vacations',
  description:
    'Experience top comfort with our accommodation services and savor fine dining at recommended restaurants. Enjoy luxury stays and exceptional cuisine.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page accommodation-and-dining'>{children}</div>;
}
