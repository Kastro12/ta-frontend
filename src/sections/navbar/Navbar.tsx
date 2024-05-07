'use client';
import { useState } from 'react';
import { Container, AppBar, Box, Button, Toolbar, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { button, transparentLightButton } from '@/utils/re-styledComponents/index';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DrawerList from './DrawerList';

const CustomLink = ({ children, href }: any) => {
  return <Link href={'/'} scroll={false} />;
};

const pages = [
  { name: 'Activities', icon: AutoGraphIcon, link: './activities' },
  { name: 'Routes', icon: RouteOutlinedIcon, link: './routes' },
  { name: 'About us', icon: InfoOutlinedIcon, link: './about-us' },
  { name: 'Contact', icon: MailOutlineOutlinedIcon, link: './contact' },
];

const Navbar = () => {
  const [isNavMenuOpened, setisNavMenuOpened] = useState<boolean>(false);

  const handleOpenDrawer = () => {
    setisNavMenuOpened(!isNavMenuOpened);
  };

  return (
    <>
      <div className='navigation-wrap-placeholder'></div>
      <AppBar
        color='transparent'
        className='navigation-wrap'
        sx={{ top: 0, position: 'fixed', boxShadow: 'none', backgroundColor: '#21817d' }}
      >
        <Container maxWidth='lg' className='custom-container'>
          <Toolbar disableGutters>
            <Link
              href={'/'}
              className='logo'
              // scroll={false}
            >
              Vacation in Serbia
            </Link>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'flex-end',

                fontSize: '20px',
              }}
            >
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenDrawer}
                sx={{ ...button, ...transparentLightButton, p: 0 }}
              >
                <MenuIcon sx={{ fontSize: '28px' }} />
              </IconButton>

              <Drawer
                anchor={'right'}
                open={isNavMenuOpened}
                onClose={handleOpenDrawer}
                className='drawerComponent'
              >
                <DrawerList pages={pages} handleOpenDrawer={handleOpenDrawer} />
              </Drawer>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
              }}
            >
              {pages.map((page) => (
                <Link
                  href={page.link}
                  // scroll={false}
                  key={page.name}
                >
                  <Button
                    key={page.name}
                    sx={{ ...button, ...transparentLightButton, ...{ my: 2, mr: 2 } }}
                    startIcon={<page.icon />}
                    LinkComponent={Link}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ ...button, ...transparentLightButton, p: 0 }}>
                <ShoppingCartOutlinedIcon />
                <span className='count'>2</span>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
