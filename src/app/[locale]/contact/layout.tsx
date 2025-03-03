import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Tailor-made vacations',
  description:
    "Get in touch with us for personalized vacation planning. Contact us for inquiries about custom trips, predefined packages, and more. We're here to help!",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='page contact'>{children}</div>;
}
