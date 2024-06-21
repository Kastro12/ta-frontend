import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { changeTheDate } from '@/store/vacation/vacationReducer';
import { stringFromDate, dateFromString } from '@/utils/date';

const handleCalendarDate = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const dispatch = useDispatch();

    const startStringDate = useSelector((state: RootState) => state.vacation.startDate);
    const finishStringDate = useSelector((state: RootState) => state.vacation.finishDate);

    const startDate =
      startStringDate && typeof startStringDate == 'string'
        ? dateFromString(startStringDate)
        : null;

    const finishDate =
      finishStringDate && typeof finishStringDate == 'string'
        ? dateFromString(finishStringDate)
        : null;

    const handleDateChange = (type: 'startDate' | 'finishDate', date: any) => {
      if (date) {
        const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        dispatch(changeTheDate({ type, date: stringFromDate(utcDate) }));
      } else {
        dispatch(changeTheDate({ type, date: null }));
      }
    };
    return (
      <Component
        {...props}
        startDate={startDate}
        finishDate={finishDate}
        handleDateChange={handleDateChange}
      />
    );
  };
};

export default handleCalendarDate;
