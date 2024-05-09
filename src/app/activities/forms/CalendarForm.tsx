import React from 'react';
import DatePicker from 'react-datepicker';

import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { changeTheDate } from '@/store/vacation/vacationReducer';
import { stringFromDate, dateFromString } from '@/utils/date';

const CalendarForm = () => {
  const dispatch = useDispatch();

  const startStringDate = useSelector((state: RootState) => state.vacation.startDate);
  const finishStringDate = useSelector((state: RootState) => state.vacation.finishDate);

  const startDate =
    startStringDate && typeof startStringDate == 'string' ? dateFromString(startStringDate) : null;

  const finishDate =
    finishStringDate && typeof finishStringDate == 'string'
      ? dateFromString(finishStringDate)
      : null;

  return (
    <>
      <label style={{ display: 'block', marginBottom: '12px' }}>
        Start date of the vacation<span className='required-star'> *</span>
      </label>
      <DatePicker
        className='custom'
        selected={startDate}
        showIcon
        icon={<CalendarMonthOutlinedIcon />}
        toggleCalendarOnIconClick
        onChange={(date: Date) => {
          dispatch(
            changeTheDate({ type: 'startDate', date: date == null ? null : stringFromDate(date) })
          );
        }}
        minDate={new Date()}
        maxDate={finishDate ? finishDate : null}
        placeholderText='Start date'
        dateFormat='d MMMM, yyyy'
        isClearable={true}
      />

      <label style={{ display: 'block', marginTop: '24px', marginBottom: '12px' }}>
        Finish date
      </label>
      <DatePicker
        disabled={startDate ? false : true}
        className='custom'
        selected={finishDate}
        showIcon
        icon={<CalendarMonthOutlinedIcon />}
        toggleCalendarOnIconClick
        onChange={(date: Date) =>
          dispatch(
            changeTheDate({ type: 'finishDate', date: date == null ? null : stringFromDate(date) })
          )
        }
        minDate={startDate ? startDate : new Date()}
        placeholderText='Start date'
        dateFormat='d MMMM, yyyy'
        isClearable={true}
      />
    </>
  );
};

export default CalendarForm;
