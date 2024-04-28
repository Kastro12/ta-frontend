import Grid from '@mui/material/Unstable_Grid2';
import { Divider, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { Button } from '@mui/material';
import { button, transparentLightButton } from '@/utils/re-styledComponents/index';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid xs={12} sm={6} md={3}>
            <Typography variant='h4' sx={{ mb: 3, fontWeight: '500' }}>
              General
            </Typography>

            <ul>
              <li className='list'>
                <Button
                  sx={{ ...button, ...transparentLightButton }}
                  startIcon={<AutoGraphIcon />}
                  LinkComponent={Link}
                  href={'/activities'}
                >
                  Activities
                </Button>
              </li>
              <li className='list'>
                <Button
                  sx={{ ...button, ...transparentLightButton }}
                  startIcon={<RouteOutlinedIcon />}
                  LinkComponent={Link}
                  href={'/routes'}
                >
                  Routes
                </Button>
              </li>

              <li className='list'>
                <Button
                  sx={{ ...button, ...transparentLightButton }}
                  startIcon={<InfoOutlinedIcon />}
                  LinkComponent={Link}
                  href={'/about-us'}
                >
                  About us
                </Button>
              </li>

              <li className='list'>
                <Button
                  sx={{ ...button, ...transparentLightButton }}
                  startIcon={<MailOutlineOutlinedIcon />}
                  LinkComponent={Link}
                  href={'/contact'}
                >
                  Contact
                </Button>
              </li>
            </ul>
          </Grid>

          <Grid xs={12} sm={6} md={3}>
            <Typography variant='h4' sx={{ mb: 3, fontWeight: '500' }}>
              Overview
            </Typography>

            <ul>
              <li className='list'>
                <Button
                  sx={{ ...button, ...transparentLightButton }}
                  LinkComponent={Link}
                  href={'/accommodations-and-food'}
                >
                  Accommodations & food
                </Button>
              </li>
              <li className='list'>
                <Button
                  sx={{ ...button, ...transparentLightButton }}
                  LinkComponent={Link}
                  href={'/staff'}
                >
                  Staff
                </Button>
              </li>
              <li className='list'>
                <Button
                  sx={{ ...button, ...transparentLightButton }}
                  LinkComponent={Link}
                  href={'/vehicle-fleet'}
                >
                  Vehicle fleet
                </Button>
              </li>
            </ul>
          </Grid>

          <Grid xs={12} sm={6} md={3}>
            <Typography variant='h4' sx={{ mb: 3, fontWeight: '500' }}>
              Opportunities
            </Typography>

            <ul>
              <li className='list'>
                <Button
                  sx={{ ...button, ...transparentLightButton }}
                  LinkComponent={Link}
                  href={'/jobs'}
                >
                  Jobs
                </Button>
              </li>
              <li className='list'>
                <Button
                  sx={{ ...button, ...transparentLightButton }}
                  LinkComponent={Link}
                  href={'/collaborators'}
                >
                  Collaborators
                </Button>
              </li>
            </ul>
          </Grid>

          <Grid xs={12} sm={6} md={3}>
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
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={3}>
          <Grid xs={12} md={8}>
            <Typography variant='body2'>
              Copyright ©2024 www.vacationinserbia.com | Vacation in Serbia - All Rights Reserved
            </Typography>
          </Grid>
          <Grid xs={12} md={4} className={'mobile_left_desktop_right_flex'}>
            <Button
              sx={{ ...button, ...transparentLightButton }}
              LinkComponent={Link}
              href={'/terms-and-conditions'}
            >
              Terms & Conditions
            </Button>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
