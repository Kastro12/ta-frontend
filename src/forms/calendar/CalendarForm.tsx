import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import 'react-datepicker/dist/react-datepicker.css';

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
  startDate: Date | null | undefined;
  finishDate: Date | null | undefined;
  maxFinishDate: Date | undefined;
  handleDateChange: (type: 'startDate' | 'finishDate', date: any) => void;
  minFinishDate: Date | undefined;
}) => {
  const ExampleCustomInput = forwardRef(
    ({ value, onClick, className, placeholderText, disabled }: any, ref: any) => (
      <button
        disabled={disabled}
        className={className}
        onClick={onClick}
        ref={ref}
        style={{ textAlign: 'left' }}
      >
        {value ? value : placeholderText}
      </button>
    ),
  );

  ExampleCustomInput.displayName = 'ExampleCustomInput';

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
          dateFormat='d MMM, yyyy'
          isClearable={true}
          required
          onFocus={(e) => e.target.blur()}
          customInput={
            <ExampleCustomInput
              className='example-custom-input'
              placeholderText='Start date'
              disabled={disabledStartDate}
            />
          }
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
          dateFormat='d MMM, yyyy'
          isClearable={!disabledFinishDate}
          onFocus={(e) => e.target.blur()}
          customInput={
            <ExampleCustomInput
              className='example-custom-input'
              placeholderText='Finish date'
              disabled={disabledFinishDate}
            />
          }
        />
      </div>
    </div>
  );
};

export default CalendarForm;
