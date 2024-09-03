import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vehicle fleet - Tailor-made vacations',
  description: 'Vehicle fleet - Tailor-made vacations',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page vehicle-fleet'>{children}</div>;
}
