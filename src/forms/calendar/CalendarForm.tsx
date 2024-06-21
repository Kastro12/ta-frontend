import React from 'react';
import DatePicker from 'react-datepicker';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const CalendarForm = ({
  startDate,
  finishDate,
  handleDateChange,
}: {
  startDate: Date | null;
  finishDate: Date | null;
  handleDateChange: (type: 'startDate' | 'finishDate', date: any) => void;
}) => {
  return (
    <div className='CalendarForm'>
      <div className='calendar-field'>
        <DatePicker
          className='custom calendar-field'
          selected={startDate}
          showIcon
          icon={<CalendarMonthOutlinedIcon />}
          toggleCalendarOnIconClick
          onChange={(date) => handleDateChange('startDate', date)}
          minDate={new Date()}
          maxDate={finishDate ? finishDate : null}
          placeholderText='Start date'
          dateFormat='d MMMM, yyyy'
          isClearable={true}
        />
      </div>
      <div className='calendar-field'>
        <DatePicker
          disabled={startDate ? false : true}
          className='custom'
          selected={finishDate}
          showIcon
          icon={<CalendarMonthOutlinedIcon />}
          toggleCalendarOnIconClick
          onChange={(date) => handleDateChange('finishDate', date)}
          minDate={startDate ? startDate : new Date()}
          placeholderText='Finish date'
          dateFormat='d MMMM, yyyy'
          isClearable={true}
        />
      </div>
    </div>
  );
};

export default CalendarForm;
