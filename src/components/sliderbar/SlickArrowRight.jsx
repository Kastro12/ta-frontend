'use client';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

const SlickArrowRight = ({ className, style, onClick, externalClassName }) => {
  let classList = ``;
  if (className) classList += `${className}`;
  if (externalClassName) classList += ` ${externalClassName}`;

  return (
    <button
      className={classList}
      style={{ ...style }}
      onClick={onClick}
      aria-label='slick arrow next'
    >
      <ArrowCircleRightRoundedIcon className='arrow-style' />
    </button>
  );
};
export default SlickArrowRight;
