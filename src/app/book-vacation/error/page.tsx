'use client';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clearVacation } from '@/store/vacation/vacationReducer';
import { ErrorBookVacation } from '@/components';
import { useRouter } from 'next/navigation';

export default function BookVacation() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(clearVacation());
    const isSubmitted = localStorage.getItem('formSubmitted') === 'true';

    if (!isSubmitted) {
      router.push('/');
    } else {
      localStorage.removeItem('formSubmitted');
    }
  }, [router]);

  return <ErrorBookVacation />;
}
