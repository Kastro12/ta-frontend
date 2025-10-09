import { Typography, Button } from '@mui/material';
import { GalleryWithCarousel } from '@/components';
import Link from 'next/link';
import { button, linkGreenButton } from '@/utils/re-styledComponents';
import { getTranslations } from 'next-intl/server';

export default async function InfoWithBackgroundImage({
  translationKey,
  images,
  link,
  glide_classname,
}: {
  translationKey: string;
  images: { link: string; alt: string }[];
  link: string;
  glide_classname: string;
}) {
  const t = await getTranslations(translationKey);

  return (
    <div className='TextImage1'>
      <div className='text'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ display: 'inline-block' }} variant='h3'>
            {t('label')}
          </Typography>
          <Button
            sx={{ ...button, ...linkGreenButton }}
            variant='outlined'
            size='small'
            LinkComponent={Link}
            href={link}
            className='mobile-button'
          >
            activities
          </Button>
        </div>

        <Typography variant='body1'>{t('description')}</Typography>

        <div className='desktop-button'>
          <Button
            sx={{ ...button, ...linkGreenButton, ml: '16px' }}
            variant='outlined'
            LinkComponent={Link}
            href={link}
          >
            {t('label')}
          </Button>
        </div>
      </div>
      <div className='image'>
        <GalleryWithCarousel images={images} glide_classname={glide_classname} />
      </div>
    </div>
  );
}
