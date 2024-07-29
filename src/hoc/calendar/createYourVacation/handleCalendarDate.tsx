import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { changeTheDate } from '@/store/vacation/vacationReducer';
import { createPageAlert } from '@/store/alerts/alertsReducer';
import {
  stringFromDate,
  dateFromString,
  useMaxNumberOfDaysForChosenActivities,
  getDateDifference,
} from '@/utils/date';

const handleCalendarDate = (Component: React.ComponentType<any>) => {
  const WrappedComponent = ({ duration, ...props }: { duration: number } & any) => {
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

    const maxNumberOfDaysForChosenActivities = useMaxNumberOfDaysForChosenActivities();

    let minFinishDate = startDate ? new Date(startDate) : new Date();

    if (maxNumberOfDaysForChosenActivities != 0) {
      minFinishDate.setDate(minFinishDate.getDate() + maxNumberOfDaysForChosenActivities);
    }

    const handleDateChange = (type: 'startDate' | 'finishDate', date: any) => {
      let stringDate = null;
      if (date) {
        const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        stringDate = stringFromDate(utcDate);
      }

      if (type == 'finishDate' && minFinishDate < date && maxNumberOfDaysForChosenActivities != 0) {
        const differenceBetweenStartFinishDate = getDateDifference({
          startDate: startStringDate,
          finishDate: stringDate,
        });

        dispatch(
          createPageAlert({
            severity: 'warning',
            message: `Based on your chosen dates, you have ${
              differenceBetweenStartFinishDate - maxNumberOfDaysForChosenActivities
            } days left for more activities.`,
            timeout: 15000,
          })
        );
      }

      dispatch(changeTheDate({ type, date: stringDate }));
    };

    return (
      <Component
        {...props}
        startDate={startDate}
        disabledStartDate={false}
        finishDate={finishDate}
        disabledFinishDate={startDate ? false : true}
        maxFinishDate={finishDate ? finishDate : null}
        handleDateChange={handleDateChange}
        minFinishDate={minFinishDate}
      />
    );
  };
  WrappedComponent.displayName = `handleCalendarDate(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WrappedComponent;
};

export default handleCalendarDate;
