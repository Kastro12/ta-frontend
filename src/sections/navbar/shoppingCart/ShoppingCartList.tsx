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
import EmptyActivityList from './component/EmptyActivityList';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getDayText } from '@/utils/string';

interface DrawerList {
  handleOpenDrawer: () => void;
  pages: {
    name: string;
    icon?: SvgIconComponent | React.ElementType;
    link: string;
  }[];
}

const ShoppingCartList = ({ handleOpenDrawer }: DrawerList) => {
  const globalT = useTranslations('global');
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
    errorAlert = globalT('Choose a start date and choose activities');
    errorAlertLink = '/create-vacation';
  } else if (!startDate) {
    errorAlert = globalT('Choose a start date');
    errorAlertLink = '/create-vacation';
  } else if (chosenActivities.length == 0) {
    errorAlert = globalT('Choose activities');
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
            {globalT('Your vacation plan')}
          </Typography>
          <IconButton
            sx={{
              ...button,
              cursor: 'pointer',
              padding: '12px!important',
              color: '#212b3b',
            }}
            onClick={handleOpenDrawer}
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
              justifyContent: chosenActivities.length > 0 ? 'space-between' : 'flex-start',
              marginBottom: '6px',
            }}
          >
            <span>{globalT('Chosen activities')}:</span>
            {chosenActivities.length > 0 ? (
              <span style={{ fontSize: '12px' }}>
                {globalT('All takes')}{' '}
                <strong>
                  {Math.ceil(maxNumberOfDaysForChosenActivities)}{' '}
                  {globalT(getDayText(Math.ceil(maxNumberOfDaysForChosenActivities)))}
                </strong>
              </span>
            ) : (
              <></>
            )}
          </Typography>

          {chosenActivities.length > 0 ? (
            chosenActivities.map((activity, i) => {
              return <ActivityList activity={activity} key={i} />;
            })
          ) : (
            <EmptyActivityList handleOpenDrawer={handleOpenDrawer} />
          )}
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
            <span className={'date-label'}>{globalT('Dates')}:</span>
            {startDate ? (
              startDate
            ) : (
              <span className='no-data required'>
                <Link href={'/create-vacation'} onClick={handleOpenDrawer}>
                  {globalT('Start date')}
                </Link>
              </span>
            )}{' '}
            &nbsp;-&nbsp;
            {finishDate ? finishDate : <span className='no-data'>{globalT('Finish date')}</span>}
          </Typography>
        </Grid>

        <div className='persons'>
          <div>
            <Typography variant='body1' sx={{ marginTop: '16px', fontWeight: '600' }}>
              <span className={'date-label'}>{globalT('Adults')}:</span>
              {adults}
            </Typography>
          </div>
          <div>
            <Typography variant='body1' sx={{ marginTop: '16px', fontWeight: '600' }}>
              <span className='date-label'>{globalT('Children')}:</span>
              {children}
            </Typography>
          </div>
        </div>

        <Grid md={12} className='price_overview'>
          <Typography variant='body1' sx={{ mt: 0 }}>
            {globalT('Price overview')}:
          </Typography>

          <ul className='price_list'>
            <li>
              {globalT('Activities')} + €34 {globalT('booking fee')}
            </li>
            <li>
              {globalT('Accommodation')} + €34 {globalT('booking fee')}{' '}
              <span>({globalT('optional')})</span>
            </li>
            <li>
              {globalT('Transportation')} + €34 {globalT('booking fee')}{' '}
              <span>({globalT('optional')})</span>
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
              {globalT('Create vacation')}
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShoppingCartList;
