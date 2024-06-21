import CalendarForm from '@/forms/bookVacation/BookVacationForm';
import handleCalendarDate from '@/hoc/bookVacation/createYourVacation/handleBookVacationSubmit';

const BookVacationFormWithSubmitHandle = handleCalendarDate(CalendarForm);

export default BookVacationFormWithSubmitHandle;
