const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const stringFromDate = (date: Date) => {
  const stringDate = new Date(date.toString());

  const day = stringDate.getDate();
  const month = months[stringDate.getMonth()];
  const year = stringDate.getFullYear();

  return `${day} ${month}, ${year}`;
};

export const dateFromString = (dateString: string) => {
  if (typeof dateString == null) {
    return null;
  }
  const [dayString, monthString, yearString] = dateString.split(' ');
  const monthIndex = months.indexOf(monthString.replace(',', ''));

  const date = new Date(Number(yearString), monthIndex, parseInt(dayString), 0, 0, 0);
  return date;
};
