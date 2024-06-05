'use client';
import { useState, useEffect, useMemo } from 'react';
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
import ShoppingCartList from './shoppingCart/ShoppingCartList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { clearActivityAction } from '@/store/vacation/vacationReducer';

const Navbar = () => {
  const pages = useMemo(
    () => [
      { name: 'Activities', icon: AutoGraphIcon, link: './activities' },
      { name: 'Routes', icon: RouteOutlinedIcon, link: './routes' },
      { name: 'About us', icon: InfoOutlinedIcon, link: './about-us' },
      { name: 'Contact', icon: MailOutlineOutlinedIcon, link: './contact' },
    ],
    []
  );

  const dispatch = useDispatch();

  const [isNavMenuOpened, setisNavMenuOpened] = useState<boolean>(false);
  const handleOpenNavMenu = () => {
    setisNavMenuOpened(!isNavMenuOpened);
  };

  const [isShoppingCartOpened, setIsShoppingCartOpened] = useState<boolean>(false);
  const handleOpenShoppingCart = () => {
    setIsShoppingCartOpened(!isShoppingCartOpened);
  };

  const chosenActivities = useSelector((state: RootState) => state.vacation.chosenActivities);

  const chosenActivitiesAction = useSelector(
    (state: RootState) => state.vacation.chosenActivitiesAction
  );

  useEffect(() => {
    if (chosenActivitiesAction !== null) {
      setTimeout(() => {
        dispatch(clearActivityAction());
      }, 1000);
    }
  }, [chosenActivitiesAction]);

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
            <Link href={'/'} className='logo'>
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
                onClick={handleOpenNavMenu}
                sx={{ ...button, ...transparentLightButton, p: 0, mr: 1 }}
              >
                <MenuIcon sx={{ fontSize: '26px' }} />
              </IconButton>

              <Drawer
                anchor={'right'}
                open={isNavMenuOpened}
                onClose={handleOpenNavMenu}
                className='drawerComponent'
              >
                <DrawerList pages={pages} handleOpenDrawer={handleOpenNavMenu} />
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
                <Link href={page.link} key={page.name}>
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
              <IconButton
                sx={{ ...button, ...transparentLightButton, p: '13px!important' }}
                id='shoppingCartIcon'
                onClick={handleOpenShoppingCart}
                size='small'
              >
                <ShoppingCartOutlinedIcon sx={{ fontSize: '24px' }} />
                <span className='count'>{chosenActivities.length}</span>
                {chosenActivitiesAction && (
                  <div className={`animation ${chosenActivitiesAction}`}></div>
                )}
              </IconButton>

              <Drawer
                anchor={'right'}
                open={isShoppingCartOpened}
                onClose={handleOpenShoppingCart}
                className='drawerComponent'
              >
                <ShoppingCartList pages={pages} handleOpenDrawer={handleOpenShoppingCart} />
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
