import BookVacationForm from '@/forms/bookVacation/BookVacationForm';
import handleCalendarDate from '@/hoc/bookVacation/createYourVacation/handleBookVacationSubmit';

const BookVacationFormWithSubmitHandle = handleCalendarDate(BookVacationForm);

export default BookVacationFormWithSubmitHandle;
