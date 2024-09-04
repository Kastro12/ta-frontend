import CalendarForm from '@/forms/calendar/CalendarForm';
import handleCalendarDate from '@/hoc/calendar/createYourVacation/handleCalendarDate';

const CalendarFormWithHandleCalendarDate = handleCalendarDate(CalendarForm);

export default CalendarFormWithHandleCalendarDate;
