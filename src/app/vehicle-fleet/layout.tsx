import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vehicle fleet - Vacation in Serbia',
  description: 'Vehicle fleet - Vacation in Serbia',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page vehicle-fleet'>{children}</div>;
}
