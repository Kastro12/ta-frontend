import { Typography } from '@mui/material';
import { GalleryWithCarousel } from '@/components';

const DailyOrganizationBox = ({
  title,
  description,
  images,
}: {
  title: string;
  description: string;
  images: { link: string; alt: string }[];
}) => {
  return (
    <div className='TextImage1'>
      <div className='text'>
        <Typography variant='h3'>{title}</Typography>
        <Typography variant='body1'>{description}</Typography>
      </div>
      <div className='image'>
        <GalleryWithCarousel images={images} />
      </div>
    </div>
  );
};

export default DailyOrganizationBox;
