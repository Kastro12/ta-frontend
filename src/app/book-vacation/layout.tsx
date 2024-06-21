import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book vacation',
  description: 'Book vacation',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page book-vacation'>{children}</div>;
}
