import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create vacation',
  description: 'Create vacation',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page activities'>{children}</div>;
}
