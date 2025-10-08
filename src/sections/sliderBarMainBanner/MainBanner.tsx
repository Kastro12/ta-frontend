import { Typography, Button } from '@mui/material';
import { button, greenButton } from '@/utils/re-styledComponents';
import Image from 'next/image';
import Grid from '@mui/material/Grid2';
import Link from 'next/link';
import { MainBannersProps } from '@/data/mainBanners';
import { useTranslations } from 'next-intl';

const MainBanner = ({ data }: { data: MainBannersProps }) => {
  const t = useTranslations(data.translationKey);

  return (
    <li className='header-section' key={data.id}>
      <Image
        src={data.image.src}
        alt={data.image.alt}
        style={{ objectFit: 'cover', borderRadius: '4px' }}
        sizes='100%'
        fill
        priority
      />
      <div className='content'>
        <Grid size={{ md: 12 }} className='titles'>
          <Typography variant='h1'>{t('title')}</Typography>
          <h2>{t('description')}</h2>
        </Grid>
        <Grid size={{ md: 12 }} style={{ textAlign: 'center' }}>
          <Button
            sx={{ ...button, ...greenButton, padding: '0 28px', mt: '16px' }}
            variant='outlined'
            href={data.link}
            LinkComponent={Link}
          >
            {t('buttonTitle')}
          </Button>
        </Grid>
      </div>
    </li>
  );
};

export default MainBanner;
