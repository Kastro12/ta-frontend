import { Box, Button, Grid, Typography, IconButton } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import Link from 'next/link';
import { button, transparentLightButton } from '@/utils/re-styledComponents/index';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

interface DrawerList {
  handleOpenDrawer: () => void;
  pages: {
    name: string;
    icon: SvgIconComponent;
    link: string;
  }[];
}

const DrawerList = ({ handleOpenDrawer, pages }: DrawerList) => {
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
            marginBottom: '16px',
          }}
        >
          <Typography
            variant='h3'
            className='main-title'
            style={{
              fontSize: '20px',
              marginLeft: '20px',
              lineHeight: '55px',
            }}
          >
            Menu
          </Typography>
          <IconButton
            sx={{
              ...button,
              cursor: 'pointer',
              padding: '8px!important',
              right: '-4px',
              color: '#f5f5f5',
              top: '12px',
            }}
            onClick={handleOpenDrawer}
            title='Close cart'
          >
            <CloseOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>

      {pages.map((page) => (
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
          startIcon={<page.icon />}
          LinkComponent={Link}
          href={page.link}
        >
          {page.name}
        </Button>
      ))}
    </Box>
  );
};

export default DrawerList;
