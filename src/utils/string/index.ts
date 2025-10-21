interface truncateTextProps {
  text: string;
  maxLength: number;
}

export const truncateText = ({ text, maxLength }: truncateTextProps) => {
  if (text.length <= maxLength) {
    return text;
  }

  let truncatedText = text.slice(0, maxLength);

  if (text[maxLength] !== ' ') {
    truncatedText = truncatedText.slice(0, truncatedText.lastIndexOf(' '));
  }

  return truncatedText + ' ...';
};

export const activityDurationInString = (durationInDays: number) => {
  let durationText: string = 'It takes ';
  switch (durationInDays) {
    case 1:
      durationText += '1 day';
      break;
    case 0.5:
      durationText += 'half a day';
      break;
    default:
      durationText += `${durationInDays} days`;
      break;
  }

  return durationText;
};

export const getDayText = (number: number) => {
  const lastTwo = number % 100;
  const last = number % 10;

  if (lastTwo >= 11 && lastTwo <= 14) {
    return `_days`;
  }

  if (last === 1) {
    return `day`;
  }

  return `_days`;
};
