import { Box, Grid, Typography, Button, IconButton, Alert } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import { button, greenButton, disabledButton } from '@/utils/re-styledComponents/index';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { SortableList } from './sortableList';
import { useRouter, usePathname } from 'next/navigation';

interface DrawerList {
  handleOpenDrawer: () => void;
  pages: {
    name: string;
    icon: SvgIconComponent;
    link: string;
  }[];
}

const ShoppingCartList = ({ handleOpenDrawer }: DrawerList) => {
  const router = useRouter();
  const pathname = usePathname();
  const startDate = useSelector((state: RootState) => state.vacation.startDate);
  const finishDate = useSelector((state: RootState) => state.vacation.finishDate);

  const adults = useSelector((state: RootState) => state.vacation.adults);
  const children = useSelector((state: RootState) => state.vacation.children);
  const chosenActivities = useSelector((state: RootState) => state.vacation.chosenActivities);

  let errorAlert = null;

  if (!startDate || chosenActivities.length == 0) {
    errorAlert = 'Fill required data.';
  }

  return (
    <Box className='drawerList shoppingCartList' sx={{ width: 250 }} role='presentation'>
      <Grid container className='container'>
        <Grid
          md={12}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography
            variant='h3'
            className='main-title'
            style={{ fontSize: '20px', marginTop: '0px' }}
          >
            Your vacation
          </Typography>
          <IconButton
            sx={{
              ...button,
              cursor: 'pointer',
              padding: '8px!important',
              right: '-4px',
              color: '#212b3b',
            }}
            onClick={handleOpenDrawer}
            title='Close cart'
          >
            <ArrowRightAltOutlinedIcon />
          </IconButton>
        </Grid>

        <Grid
          md={6}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography variant='body1' sx={{ marginTop: '18px', fontWeight: '600' }}>
            <span className={'date-label'}>
              Start date <span className='required-start'>*&nbsp;</span>:
            </span>
            {startDate ? startDate : <span className='no-data required'>No date</span>}
          </Typography>

          <Typography variant='body1' sx={{ marginTop: '18px', fontWeight: '600' }}>
            <span className='date-label'>Finish date:</span>
            {finishDate ? finishDate : <span className='no-data'>No date</span>}
          </Typography>
        </Grid>

        <Grid
          md={6}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography variant='body1' sx={{ marginTop: '18px', fontWeight: '600' }}>
            <span className={'date-label'}>Adults:</span>
            {adults ? adults : <span className='no-data required'>No date</span>}
          </Typography>
          <Typography variant='body1' sx={{ marginTop: '18px', fontWeight: '600' }}>
            <span className='date-label'>Children:</span>
            {children}
          </Typography>
        </Grid>

        <Grid
          md={12}
          sx={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
          }}
          className='chosen-activities'
        >
          <Typography variant='body1' sx={{ marginTop: '18px' }}>
            Chosen activities&nbsp;<span className='required-start'>*&nbsp;</span>:
          </Typography>

          <SortableList />
        </Grid>
        <Grid
          md={12}
          sx={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            marginTop: '12px',
          }}
          className=' submit-wrapper'
        >
          {errorAlert && (
            <Alert severity='warning' icon={<InfoOutlinedIcon fontSize='small' />}>
              {errorAlert}
            </Alert>
          )}

          {pathname !== '/book-vacation' && (
            <Button
              sx={{ ...button, ...(errorAlert ? disabledButton : greenButton), mt: '12px' }}
              variant='outlined'
              onClick={() => {
                if (!errorAlert) {
                  router.push('/book-vacation');
                }
                return;
              }}
              className='submit'
            >
              Book Now
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShoppingCartList;
