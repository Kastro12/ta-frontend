import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
const months = [
  // 'January',
  // 'February',
  // 'March',
  // 'April',
  // 'May',
  // 'June',
  // 'July',
  // 'August',
  // 'September',
  // 'October',
  // 'November',
  // 'December',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
export const stringFromDate = (date: Date) => {
  const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

  const day = utcDate.getUTCDate();
  const month = months[utcDate.getUTCMonth()];
  const year = utcDate.getUTCFullYear();

  return `${day} ${month}, ${year}`;
};

export const dateFromString = (dateString: string | null) => {
  if (typeof dateString == null) {
    return null;
  } else if (typeof dateString == 'string') {
    const [dayString, monthString, yearString] = dateString.split(' ');
    const monthIndex = months.indexOf(monthString.replace(',', ''));

    const date = new Date(Date.UTC(Number(yearString), monthIndex, parseInt(dayString, 10)));
    return date;
  }
};

export const getDateDifference = ({
  startDate,
  finishDate,
}: {
  startDate: string | null;
  finishDate: string | null;
}) => {
  const start = dateFromString(startDate);
  const finish = dateFromString(finishDate);

  if (!start || !finish) return 0;

  const startUTC = new Date(Date.UTC(start.getFullYear(), start.getMonth(), start.getDate()));
  const finishUTC = new Date(Date.UTC(finish.getFullYear(), finish.getMonth(), finish.getDate()));

  const diffTime = Math.abs(finishUTC.getTime() - startUTC.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

export const useCalculateDaysDifference = () => {
  const startDate = useSelector((state: RootState) => state.vacation.startDate);
  const finishDate = useSelector((state: RootState) => state.vacation.finishDate);

  if (!startDate || !finishDate) return 0;

  return getDateDifference({ startDate, finishDate });
};

export const useMaxNumberOfDaysForChosenActivities = () => {
  const chosenActivities = useSelector((state: RootState) => state.vacation.chosenActivities);

  let numberOfDays = 0;

  chosenActivities.forEach((activity) => {
    numberOfDays += activity.durationInDays;
  });

  return numberOfDays;
};
