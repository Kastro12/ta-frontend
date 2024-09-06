import { Box, Grid, Typography, Button, IconButton, Alert } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import { button, greenButton, disabledButton } from '@/utils/re-styledComponents/index';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useRouter, usePathname } from 'next/navigation';
import { useMaxNumberOfDaysForChosenActivities } from '@/utils/date';
import ActivityList from './component/ActivityList';
import Link from 'next/link';

interface DrawerList {
  handleOpenDrawer: () => void;
  pages: {
    name: string;
    icon?: SvgIconComponent | React.ElementType;
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
  let errorAlertLink = null;

  if (!startDate && chosenActivities.length == 0) {
    errorAlert = 'Choose a start date and choose activities.';
    errorAlertLink = '/create-vacation';
  } else if (!startDate) {
    errorAlert = 'Choose a start date.';
    errorAlertLink = '/create-vacation';
  } else if (chosenActivities.length == 0) {
    errorAlert = 'Choose activities.';
    errorAlertLink = '/create-vacation#activity_offer_position';
  }

  const maxNumberOfDaysForChosenActivities = useMaxNumberOfDaysForChosenActivities();

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
            Your created vacation
          </Typography>
          <IconButton
            sx={{
              ...button,
              cursor: 'pointer',
              padding: '12px!important',
              color: '#212b3b',
            }}
            onClick={handleOpenDrawer}
            title='Close cart'
          >
            <CloseOutlinedIcon />
          </IconButton>
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
          <Typography
            variant='body1'
            sx={{
              marginTop: '18px',
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '6px',
            }}
          >
            <span>Chosen activities:</span>
            {chosenActivities.length > 0 ? (
              <span style={{ fontSize: '12px' }}>
                All takes <strong>{maxNumberOfDaysForChosenActivities} days</strong>
              </span>
            ) : (
              ''
            )}
          </Typography>

          {chosenActivities.map((activity, i) => {
            return <ActivityList activity={activity} key={i} />;
          })}
        </Grid>

        <Grid
          md={12}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography variant='body1' sx={{ marginTop: '16px', fontWeight: '600' }}>
            <span className={'date-label'}>Dates:</span>
            {startDate ? startDate : <span className='no-data required'>Start date</span>}{' '}
            &nbsp;-&nbsp;
            {finishDate ? finishDate : <span className='no-data'>Finish date</span>}
          </Typography>
        </Grid>

        <div className='persons'>
          <div>
            <Typography variant='body1' sx={{ marginTop: '16px', fontWeight: '600' }}>
              <span className={'date-label'}>Adults:</span>
              {adults}
            </Typography>
          </div>
          <div>
            <Typography variant='body1' sx={{ marginTop: '16px', fontWeight: '600' }}>
              <span className='date-label'>Children:</span>
              {children}
            </Typography>
          </div>
        </div>

        <Grid md={12} className='price_overview'>
          <Typography variant='body1' sx={{ mt: 0 }}>
            Price overview:
          </Typography>

          <ul className='price_list'>
            <li>Activities + €34 booking fee</li>
            <li>
              Accommodations + €34 booking fee <span>(optional)</span>
            </li>
            <li>
              Transportations + €34 booking fee <span>(optional)</span>
            </li>
          </ul>
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
          {errorAlert && errorAlertLink && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link href={errorAlertLink} className='alert-link' onClick={handleOpenDrawer}>
                <Alert severity='warning' icon={<InfoOutlinedIcon fontSize='small' />}>
                  {errorAlert}
                </Alert>
              </Link>
            </div>
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
              Book now
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShoppingCartList;
