import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Staff - Vacation in Serbia',
  description: 'Staff - Vacation in Serbia',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page staff'>{children}</div>;
}
