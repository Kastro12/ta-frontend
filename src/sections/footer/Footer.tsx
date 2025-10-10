import Grid from '@mui/material/Grid2';
import { Divider, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { Button } from '@mui/material';
import { button, transparentLightButton } from '@/utils/re-styledComponents/index';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const globalT = useTranslations('global');

  const pages = [
    { name: globalT('Create vacation'), icon: CreateOutlinedIcon, link: '/create-vacation' },
    {
      name: globalT('Predefined vacations'),
      icon: RouteOutlinedIcon,
      link: '/#predefined-vacations-position',
    },
  ];

  return (
    <footer>
      <Container maxWidth='lg' className='custom-container'>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant='h4' sx={{ mb: 3, fontWeight: '500' }}>
              {globalT('Services')}
            </Typography>

            <ul>
              {pages.map((page) => (
                <li className='list' key={page.name}>
                  <Link href={page.link} key={page.name}>
                    <Button
                      key={page.name}
                      sx={{ ...button, ...transparentLightButton }}
                      startIcon={<page.icon />}
                      LinkComponent={Link}
                    >
                      {page.name}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant='h4' sx={{ mb: 3, fontWeight: '500' }}>
              {globalT('Overview')}
            </Typography>

            <ul>
              <li className='list'>
                <Button
                  sx={{ ...button, ...transparentLightButton }}
                  LinkComponent={Link}
                  href={'/about-us'}
                >
                  {globalT('About us')}
                </Button>
              </li>

              <li className='list'>
                <Button
                  sx={{ ...button, ...transparentLightButton }}
                  LinkComponent={Link}
                  href={'/accommodation-and-dining'}
                >
                  {globalT('Accommodation')}
                </Button>
              </li>
              <li className='list'>
                <Button
                  sx={{ ...button, ...transparentLightButton }}
                  LinkComponent={Link}
                  href={'/vehicle-fleet'}
                >
                  {globalT('Vehicle fleet')}
                </Button>
              </li>
              <li className='list'>
                <Button
                  sx={{ ...button, ...transparentLightButton }}
                  LinkComponent={Link}
                  href={'/contact'}
                >
                  {globalT('Contact')}
                </Button>
              </li>
            </ul>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant='h4' sx={{ mb: 3, fontWeight: '500' }}>
              {globalT('Business')}
            </Typography>

            <ul>
              <li className='list'>
                <Button
                  sx={{ ...button, ...transparentLightButton }}
                  LinkComponent={Link}
                  href={'/digital-advertising'}
                >
                  {globalT('Digital advertising')}
                </Button>
              </li>
              <li className='list'>
                <Button
                  sx={{ ...button, ...transparentLightButton }}
                  LinkComponent={Link}
                  href={'/jobs'}
                >
                  {globalT('Jobs')}
                </Button>
              </li>
              <li className='list'>
                <Button
                  sx={{ ...button, ...transparentLightButton }}
                  LinkComponent={Link}
                  href={'/partnerships'}
                >
                  {globalT('Partnerships')}
                </Button>
              </li>
            </ul>
          </Grid>

          {/* <Grid xs={12} sm={6} md={3}>
            <Typography variant='h4' sx={{ mb: 3, fontWeight: '500' }}>
              Connect with us
            </Typography>
            <ul>
              <li className='list'>
                <Button
                  sx={{ ...button, ...transparentLightButton }}
                  startIcon={<FacebookIcon />}
                  LinkComponent={Link}
                  href={'/facebook'}
                >
                  Facebook
                </Button>
              </li>
              <li className='list'>
                <Button
                  sx={{ ...button, ...transparentLightButton }}
                  startIcon={<InstagramIcon />}
                  LinkComponent={Link}
                  href={'/'}
                >
                  Instagram
                </Button>
              </li>
            </ul>
          </Grid> */}
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 8 }} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='body2' style={{ fontSize: '12px', fontWeight: '300' }}>
              {globalT('Copyright')} ©2025 Tailor-made vacations - {globalT('All Rights Reserved')}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} className={'mobile_left_desktop_right_flex'}>
            <Button
              sx={{ ...button, ...transparentLightButton }}
              LinkComponent={Link}
              href={'/terms-and-conditions'}
            >
              {globalT('Terms and conditions')}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
