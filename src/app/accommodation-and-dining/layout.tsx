import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accommodation and dining - Vacation in Serbia',
  description: 'Accommodation and dining - Vacation in Serbia',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page accommodation-and-dining'>{children}</div>;
}
