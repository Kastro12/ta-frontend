import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Old and new: business, leisure, and social traditions experience',
  description: 'Old and new: business, leisure, and social traditions experience',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page predefined-vacations'>{children}</div>;
}
