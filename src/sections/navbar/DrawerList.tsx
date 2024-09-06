import { useMemo } from 'react';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { Box, Button, Grid, Typography, IconButton } from '@mui/material';
import Link from 'next/link';
import { button, transparentLightButton } from '@/utils/re-styledComponents/index';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

interface DrawerList {
  handleOpenDrawer: () => void;
}

const DrawerList = ({ handleOpenDrawer }: DrawerList) => {
  const pages = useMemo(
    () => [
      { name: 'Create vacation', icon: CreateOutlinedIcon, link: '/create-vacation' },
      { name: 'Predefined vacations', icon: RouteOutlinedIcon, link: '/#predefined-vacations-position' },
    ],
    []
  );

  return (
    <Box
      className='drawerList'
      sx={{ width: 250 }}
      role='presentation'
      onClick={handleOpenDrawer}
      style={{ backgroundColor: '#21817d', height: '100%', color: '#f5f5f5' }}
    >
      <Grid container className='container'>
        <Grid
          md={12}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            width: '100%',
            mx: '16px',
            borderBottom: '1px solid #b9c1c6',
            marginBottom: '32px',
          }}
        >
          <Typography
            variant='h3'
            className='main-title'
            style={{
              fontSize: '20px',
              marginLeft: '12px',
              lineHeight: '72px',
              color: '#e4e4e4',
            }}
          >
            Menu
          </Typography>
          <IconButton
            sx={{
              ...button,
              ...transparentLightButton,
              cursor: 'pointer',
              padding: '12px!important',
              top: '13px',
            }}
            onClick={handleOpenDrawer}
            title='Close cart'
          >
            <CloseOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>

      <div className='content'>
        <Typography variant='h4' sx={{ mb: '12px', fontWeight: '500', color: '#e4e4e4' }}>
          Services
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

        <Typography
          variant='h4'
          sx={{ mt: '24px', mb: '12px', fontWeight: '500', color: '#e4e4e4' }}
        >
          Overview
        </Typography>

        <ul>
          <li className='list'>
            <Button
              sx={{ ...button, ...transparentLightButton }}
              LinkComponent={Link}
              href={'/about-us'}
            >
              About us
            </Button>
          </li>

          <li className='list'>
            <Button
              sx={{ ...button, ...transparentLightButton }}
              LinkComponent={Link}
              href={'/accommodation-and-dining'}
            >
              Accommodation and dining
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

        <Typography
          variant='h4'
          sx={{ mt: '24px', mb: '12px', fontWeight: '500', color: '#e4e4e4' }}
        >
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
              href={'/partnerships'}
            >
              Partnerships
            </Button>
          </li>

          <li className='list'>
            <Button
              sx={{ ...button, ...transparentLightButton }}
              LinkComponent={Link}
              href={'/contact'}
            >
              Contact us
            </Button>
          </li>
        </ul>
      </div>
      {/* {pages.map((page) => (
        <Button
          className='mobile-button'
          key={page.name}
          sx={{
            ...button,
            ...transparentLightButton,
            ...{
              my: 2,
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingLeft: 3,
            },
          }}
          startIcon={page.icon ? <page.icon /> : false}
          LinkComponent={Link}
          href={page.link}
        >
          {page.name}
        </Button>
      ))} */}
    </Box>
  );
};

export default DrawerList;
