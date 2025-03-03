import { Typography } from '@mui/material';
import { GalleryWithCarousel } from '@/components';

const DailyOrganizationBox = ({
  title,
  description,
  images,
  id,
}: {
  title: string;
  description: string[] | undefined;
  images: { link: string; alt: string }[];
  id: string;
}) => {
  return (
    <div className='TextImage1'>
      <div className='text'>
        <Typography variant='h3'>{title}</Typography>
        {description?.map((desc: string, i) => (
          <Typography key={i} variant='body1'>
            {desc}
          </Typography>
        ))}
      </div>
      <div className='image'>
        <GalleryWithCarousel images={images} glide_classname={id} />
      </div>
    </div>
  );
};

export default DailyOrganizationBox;
