import CalendarForm from '@/forms/calendar/CalendarForm';
import handleCalendarDate from '@/hoc/calendar/predefinedVacation/handleCalendarDate';

const CalendarFormWithHandleCalendarDate = handleCalendarDate(CalendarForm);

export default CalendarFormWithHandleCalendarDate;
