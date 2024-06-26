import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and conditions - Vacation in Serbia',
  description: 'Terms and conditions - Vacation in Serbia',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page terms-and-conditions'>{children}</div>;
}
