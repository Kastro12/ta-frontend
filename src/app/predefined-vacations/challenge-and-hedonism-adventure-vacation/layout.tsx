import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Challenge and hedonism adventure vacation',
  description: 'Challenge and hedonism adventure vacation',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page predefined-vacations'>{children}</div>;
}
