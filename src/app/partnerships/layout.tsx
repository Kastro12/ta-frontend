import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partnerships - Vacation in Serbia',
  description: 'Partnerships - Vacation in Serbia',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page partnerships'>{children}</div>;
}
