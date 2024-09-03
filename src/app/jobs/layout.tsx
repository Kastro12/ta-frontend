import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jobs - Tailor-made vacations',
  description: 'Jobs - Tailor-made vacations',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page jobs'>{children}</div>;
}
