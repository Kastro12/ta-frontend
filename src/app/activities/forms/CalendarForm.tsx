import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

// import 'react-datepicker/dist/react-datepicker.css';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const CalendarForm = () => {
  const [startDate, setStartDate] = useState<Date>();

  const [finishDate, setFinishDate] = useState<Date>();

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
        onChange={(date: Date) => setStartDate(date)}
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
        onChange={(date: Date) => setFinishDate(date)}
        minDate={startDate ? startDate : new Date()}
        placeholderText='Start date'
        dateFormat='d MMMM, yyyy'
        isClearable={true}
      />
    </>
  );
};

export default CalendarForm;
