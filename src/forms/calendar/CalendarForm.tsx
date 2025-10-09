import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import 'react-datepicker/dist/react-datepicker.css';
import { useTranslations } from 'next-intl';
import { srLatn } from 'date-fns/locale/sr-Latn';
import { enUS } from 'date-fns/locale/en-US';
import { usePathname as useNavigationPathname } from 'next/navigation';

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
  const globalT = useTranslations('global');
  const navigationPathname = useNavigationPathname();
  const locale = navigationPathname.split('/')[1];

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
          placeholderText={globalT('Start date')}
          dateFormat='d MMM, yyyy'
          isClearable={true}
          required
          onFocus={(e) => e.target.blur()}
          locale={locale === 'en' ? enUS : srLatn}
          customInput={
            <ExampleCustomInput
              className='example-custom-input'
              placeholderText={globalT('Start date')}
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
          placeholderText={globalT('Finish date')}
          dateFormat='d MMM, yyyy'
          isClearable={!disabledFinishDate}
          onFocus={(e) => e.target.blur()}
          locale={locale === 'en' ? enUS : srLatn}
          customInput={
            <ExampleCustomInput
              className='example-custom-input'
              placeholderText={globalT('Finish date')}
              disabled={disabledFinishDate}
            />
          }
        />
      </div>
    </div>
  );
};

export default CalendarForm;
