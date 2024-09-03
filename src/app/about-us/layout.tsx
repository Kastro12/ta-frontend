import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About us - Tailor-made vacations',
  description: 'About us - Tailor-made vacations',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page about-us'>{children}</div>;
}
