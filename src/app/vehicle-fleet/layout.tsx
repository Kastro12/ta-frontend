import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vehicle fleet - Tailor-made vacations',
  description:
    'Discover luxury vehicle options for a comfortable and reliable journey. Professional drivers ensure seamless and safe travel throughout your vacation.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page vehicle-fleet'>{children}</div>;
}
