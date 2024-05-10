import { Box, Paper, Grid, Typography, Button } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import { button, greenButton } from '@/utils/re-styledComponents/index';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
interface DrawerList {
  handleOpenDrawer: () => void;
  pages: {
    name: string;
    icon: SvgIconComponent;
    link: string;
  }[];
}

const ShoppingCartList = ({ handleOpenDrawer }: DrawerList) => {
  const startDate = useSelector((state: RootState) => state.vacation.startDate);
  const finishDate = useSelector((state: RootState) => state.vacation.finishDate);
  const chosenActivities = useSelector((state: RootState) => state.vacation.chosenActivities);

  return (
    <Box className='drawerList shoppingCartList' sx={{ width: 250 }} role='presentation'>
      <Grid container className='container'>
        <Grid
          md={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography variant='h3'>Your vacation</Typography>
          <CloseOutlinedIcon onClick={handleOpenDrawer} />
        </Grid>

        <Grid
          md={12}
          sx={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
          }}
        >
          <Typography variant='body1' sx={{ marginTop: '18px' }}>
            <span className={'date-label'}>Start date {startDate ? '*' : ''}:</span>
            {startDate ? startDate : <span className='no-data required'>No date</span>}
          </Typography>
          <Typography variant='body1' sx={{ marginTop: '18px' }}>
            <span className='date-label'>Finish date:</span>
            {finishDate ? finishDate : <span className='no-data'>No date</span>}
          </Typography>
        </Grid>

        <Typography variant='h4' sx={{ marginTop: '18px' }}>
          Chosen activities
        </Typography>

        <Grid
          md={12}
          sx={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
          }}
          className='chosen-activities'
        >
          {chosenActivities.length < 1 ? (
            <span className='no-data'>No date</span>
          ) : (
            <ul className='chosen-activities-list'>
              {chosenActivities.map((activity) => (
                <Paper elevation={3} sx={{ mb: 1 }} key={activity.id}>
                  <li>
                    <img src={activity.imageLink} />
                    <p>{activity.title}</p>
                  </li>
                </Paper>
              ))}
            </ul>
          )}
        </Grid>
        <Grid
          md={12}
          sx={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            marginTop: '26px',
          }}
          className=' submit-wrapper'
        >
          <Button
            sx={{ ...button, ...greenButton }}
            variant='outlined'
            // startIcon={isSelected ? <CloseOutlinedIcon /> : <AddShoppingCartOutlinedIcon />}
            onClick={() => console.log('zzzzz')}
            className='submit'
          >
            Confirm and Continue
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShoppingCartList;
