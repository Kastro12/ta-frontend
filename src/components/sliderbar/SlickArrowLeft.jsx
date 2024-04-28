'use client';

import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';

const SlickArrowLeft = ({ className, style, onClick, externalClassName }) => {
  let classList = ``;
  if (className) classList += `${className}`;
  if (externalClassName) classList += ` ${externalClassName}`;

  return (
    <button
      className={classList}
      style={{ ...style }}
      onClick={onClick}
      aria-label='slick arrow prev'
    >
      <ArrowCircleLeftRoundedIcon className='arrow-style' />
    </button>
  );
};

export default SlickArrowLeft;
