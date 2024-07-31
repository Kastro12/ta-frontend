import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const CalendarForm = ({
  startDate,
  disabledStartDate,
  finishDate,
  disabledFinishDate,
  maxFinishDate,
  handleDateChange,
  minFinishDate,
}: {
  disabledStartDate: boolean;
  disabledFinishDate: boolean;
  startDate: Date | null;
  finishDate: Date | null;
  maxFinishDate: Date | null;
  handleDateChange: (type: 'startDate' | 'finishDate', date: any) => void;
  minFinishDate: Date | null;
}) => {
  const ExampleCustomInput = forwardRef(({ value, onClick, className }: any, ref: any) => (
    <button className={className} onClick={onClick} ref={ref} style={{ textAlign: 'left' }}>
      {value ? value : 'Start date'}
    </button>
  ));

  return (
    <div className='CalendarForm'>
      <div className='calendar-field'>
        <DatePicker
          disabled={disabledStartDate}
          className='custom calendar-field'
          selected={startDate}
          showIcon
          icon={<CalendarMonthOutlinedIcon />}
          toggleCalendarOnIconClick
          onChange={(date) => handleDateChange('startDate', date)}
          minDate={new Date()}
          maxDate={maxFinishDate}
          placeholderText='Start date'
          dateFormat='d MMMM, yyyy'
          isClearable={true}
          required
          onFocus={(e) => e.target.blur()}
          customInput={<ExampleCustomInput className='example-custom-input' />}
        />
      </div>
      <div className='calendar-field'>
        <DatePicker
          disabled={disabledFinishDate}
          className='custom'
          selected={finishDate}
          showIcon
          icon={<CalendarMonthOutlinedIcon />}
          toggleCalendarOnIconClick
          onChange={(date) => handleDateChange('finishDate', date)}
          minDate={minFinishDate}
          placeholderText='Finish date'
          dateFormat='d MMMM, yyyy'
          isClearable={!disabledFinishDate}
          onFocus={(e) => e.target.blur()}
        />
      </div>
    </div>
  );
};

export default CalendarForm;
