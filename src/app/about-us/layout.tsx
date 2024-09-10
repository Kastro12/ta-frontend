import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About us - Tailor-made vacations',
  description:
    'Specialized vacation planning for Serbia and nearby regions. Custom trips or predefined options with full management of activities, stays, and transport.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page about-us'>{children}</div>;
}
