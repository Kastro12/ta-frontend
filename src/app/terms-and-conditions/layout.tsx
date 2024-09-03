import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and conditions - Tailor-made vacations',
  description: 'Terms and conditions - Tailor-made vacations',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page terms-and-conditions'>{children}</div>;
}
