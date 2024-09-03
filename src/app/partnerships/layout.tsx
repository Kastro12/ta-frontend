import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partnerships - Tailor-made vacations',
  description: 'Partnerships - Tailor-made vacations',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page partnerships'>{children}</div>;
}
