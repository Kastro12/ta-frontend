'use client';
import { useEffect } from 'react';
import { SuccessContact } from '@/components';
import { useRouter } from 'next/navigation';

export default function Success() {
  const router = useRouter();
  const isSubmitted = localStorage.getItem('formSubmitted') === 'true';

  useEffect(() => {
    if (!isSubmitted) {
      router.push('/');
    } else {
      localStorage.removeItem('formSubmitted');
    }
  }, []);

  return <SuccessContact />;
}
