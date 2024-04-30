'use client';
import { useState } from 'react';
import {
  MenuItem,
  Tooltip,
  Avatar,
  Container,
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { button, transparentLightButton } from '@/utils/re-styledComponents/index';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

import DrawerList from './DrawerList';

const pages = [
  { name: 'Activities', icon: AutoGraphIcon, link: './activities' },
  { name: 'Routes', icon: RouteOutlinedIcon, link: './routes' },
  { name: 'About us', icon: InfoOutlinedIcon, link: './about-us' },
  { name: 'Contact', icon: MailOutlineOutlinedIcon, link: './contact' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [isNavMenuOpened, setisNavMenuOpened] = useState<boolean>(false);

  const handleOpenDrawer = () => {
    setisNavMenuOpened(!isNavMenuOpened);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      // position='static'
      color='transparent'
      className='navigation-wrap'
      position='fixed'
      sx={{ top: 0  }}
      style={{
        boxShadow: 'none',
        backgroundColor: '#21817d',
        // position: 'fixed',
        // top: 0,
        // zIndex: 8,
      }}
    >
      <Container maxWidth='lg' className='custom-container'>
        <Toolbar disableGutters>
          <Link href={'/'} className='logo'>
            Vacation in Serbia
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'flex-end',
              mr: 2,

              fontSize: '20px',
            }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenDrawer}
              color='inherit'
            >
              <MenuIcon style={{ width: '36px', height: '36px', color: '#f5f5f5' }} />
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
              mr: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{ ...button, ...transparentLightButton, ...{ my: 2, mr: 2 } }}
                startIcon={<page.icon />}
                LinkComponent={Link}
                href={page.link}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
