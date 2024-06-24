import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About us - Vacation in Serbia',
  description: 'About us - Vacation in Serbia',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page about-us'>{children}</div>;
}
