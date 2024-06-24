import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Successfully sent message',
  description: 'Successfully sent message',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page contact-success'>{children}</div>;
}
