import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Vacation in Serbia',
  description: 'Contact - Vacation in Serbia',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page contact'>{children}</div>;
}
