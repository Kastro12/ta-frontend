import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jobs - Vacation in Serbia',
  description: 'Jobs - Vacation in Serbia',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page jobs'>{children}</div>;
}
