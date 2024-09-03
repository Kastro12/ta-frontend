import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accommodation and dining - Tailor-made vacations',
  description: 'Accommodation and dining - Tailor-made vacations',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page accommodation-and-dining'>{children}</div>;
}
