'use client';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
export default function ActivitiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <div className='page activities'>{children}</div>
    </Provider>
  );
}
