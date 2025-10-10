'use client';
import { useState, useEffect, useMemo } from 'react';
import { Container, AppBar, Box, Button, Toolbar, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { button, transparentLightButton } from '@/utils/re-styledComponents/index';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DrawerList from './DrawerList';
import ShoppingCartList from './shoppingCart/ShoppingCartList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { clearActivityAction } from '@/store/vacation/vacationReducer';
import Image from 'next/image';
import SwitchLanguage from './SwitchLanguage';
import { AppDispatch } from '@/store/store';
import { loadChosenActivities } from '@/store/vacation/vacationReducer';
import { useTranslations } from 'next-intl';

const Navbar = () => {
  const globalT = useTranslations('global');
  const organizedVacationT = useTranslations('organizedVacations');

  const pages = useMemo(
    () => [
      { name: globalT('About us'), link: '/about-us' },
      { name: globalT('Create vacation'), icon: CreateOutlinedIcon, link: '/create-vacation' },
      {
        name: organizedVacationT('mainTitle'),
        icon: RouteOutlinedIcon,
        link: '/#predefined-vacations-position',
      },
    ],
    [],
  );

  const dispatch = useDispatch<AppDispatch>();

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
    (state: RootState) => state.vacation.chosenActivitiesAction,
  );

  useEffect(() => {
    dispatch(loadChosenActivities());
  }, []);

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
      <AppBar color='transparent' className='navigation-wrap'>
        <Container maxWidth='lg' className='custom-container'>
          <Toolbar disableGutters>
            <Link href={'/'} className='logo'>
              <Image
                src='/logo/android-chrome-256x256.png'
                alt='tailor-made vacations logo'
                loading='lazy'
                width={42}
                height={42}
              />

              <span className='content'>
                <span className='text'>Tailor-made vacations</span>
                <span className='destination'>Serbia & surroundings</span>
              </span>
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
                sx={{ ...button, ...transparentLightButton, p: '12px' }}
              >
                <MenuIcon sx={{ fontSize: '26px' }} />
              </IconButton>

              <Drawer
                anchor={'right'}
                open={isNavMenuOpened}
                onClose={handleOpenNavMenu}
                className='drawerComponent'
              >
                <DrawerList handleOpenDrawer={handleOpenNavMenu} />
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
                    startIcon={page.icon ? <page.icon /> : false}
                    LinkComponent={Link}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <SwitchLanguage />

              <IconButton
                sx={{
                  ...button,
                  ...transparentLightButton,
                  p: '12px!important',
                  marginLeft: '12px',
                }}
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
