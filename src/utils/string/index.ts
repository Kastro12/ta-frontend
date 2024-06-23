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
