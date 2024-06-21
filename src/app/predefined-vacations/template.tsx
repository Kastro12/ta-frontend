'use client';
import { useEffect } from 'react';
import { removePredefinedVacation } from '@/store/vacation/predefinedVacationReducer';
import { useDispatch } from 'react-redux';

export default function Template({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(removePredefinedVacation());
    };
  }, []);

  return children;
}
