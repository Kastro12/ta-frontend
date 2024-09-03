import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Tailor-made vacations',
  description: 'Contact - Tailor-made vacations',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page contact'>{children}</div>;
}
