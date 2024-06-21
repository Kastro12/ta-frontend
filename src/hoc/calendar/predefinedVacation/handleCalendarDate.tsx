import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { changeTheDate } from '@/store/vacation/predefinedVacationReducer';
import { stringFromDate, dateFromString } from '@/utils/date';

const handleCalendarDate = (Component: React.ComponentType<any>) => {
  return ({ duration, ...props }: { duration: number } & any) => {
    const dispatch = useDispatch();

    const startStringDate = useSelector((state: RootState) => state.predefinedVacation.startDate);
    const finishStringDate = useSelector((state: RootState) => state.predefinedVacation.finishDate);

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

        const finishDate = new Date(utcDate);
        finishDate.setDate(finishDate.getDate() + duration); // Dodavanje 10 dana
        dispatch(changeTheDate({ type: 'finishDate', date: stringFromDate(finishDate) }));
      } else {
        dispatch(changeTheDate({ type, date: null }));
        dispatch(changeTheDate({ type: 'finishDate', date: null }));
      }
    };
    return (
      <Component
        {...props}
        startDate={startDate}
        disabledStartDate={false}
        finishDate={finishDate}
        disabledFinishDate={true}
        maxFinishDate={null}
        handleDateChange={handleDateChange}
      />
    );
  };
};

export default handleCalendarDate;
