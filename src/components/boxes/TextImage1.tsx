import { Typography } from '@mui/material';

const TextImage1 = ({
  title,
  description,
  imageLink,
  alt,
}: {
  title: string;
  description: string;
  imageLink: string;
  alt: string;
}) => {
  return (
    <div className='TextImage1'>
      <div className='text'>
        <Typography variant='h3'>{title}</Typography>
        <Typography variant='body1'>{description}</Typography>
      </div>
      <div className='image'>
        <img src={imageLink} alt={alt} loading='lazy' />
      </div>
    </div>
  );
};

export default TextImage1;
