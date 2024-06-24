import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Message sending failed',
  description: 'Message sending failed',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page contact-success'>{children}</div>;
}
