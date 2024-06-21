import NumberOfPersonForm from '@/forms/numberOfPerson/NumberOfPersonForm';
import handleNumberOfPerson from '@/hoc/numberOfPerson/createYourVacation/handleNumberOfPerson';

const NumberOfPersonsFormWithHandle = handleNumberOfPerson(NumberOfPersonForm);

export default NumberOfPersonsFormWithHandle;
