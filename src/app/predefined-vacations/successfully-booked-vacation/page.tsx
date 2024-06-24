'use client';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clearVacation } from '@/store/vacation/predefinedVacationReducer';
import { SuccessBookVacation } from '@/components';
import { useRouter } from 'next/navigation';

export default function Success() {
  const dispatch = useDispatch();
  const router = useRouter();
  const isSubmitted = localStorage.getItem('formSubmitted') === 'true';
  useEffect(() => {
    dispatch(clearVacation());

    if (!isSubmitted) {
      router.push('/');
    } else {
      localStorage.removeItem('formSubmitted');
    }
  }, [router]);

  return <SuccessBookVacation />;
}
