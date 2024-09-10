'use client';
import { useEffect } from 'react';
import { ErrorContact } from '@/components';
import { useRouter } from 'next/navigation';

export default function BookVacation() {
  const router = useRouter();

  useEffect(() => {
    const isSubmitted = localStorage.getItem('formSubmitted') === 'true';
    if (!isSubmitted) {
      router.push('/');
    } else {
      localStorage.removeItem('formSubmitted');
    }
  }, []);

  return <ErrorContact />;
}
