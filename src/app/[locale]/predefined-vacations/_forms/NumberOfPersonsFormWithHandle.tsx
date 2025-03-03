import NumberOfPersonForm from '@/forms/numberOfPerson/NumberOfPersonForm';
import handleNumberOfPerson from '@/hoc/numberOfPerson/predefinedVacation/handleNumberOfPerson';

const NumberOfPersonsFormWithHandle = handleNumberOfPerson(NumberOfPersonForm);

export default NumberOfPersonsFormWithHandle;
