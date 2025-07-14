'use client';
import { Button, Snackbar, SnackbarContent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { button, greenButton, selectedActivity } from '@/utils/re-styledComponents';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { RootState, AppDispatch } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';
import {
  addActivityWithPersistence,
  removeActivityWithPersistence,
} from '@/store/vacation/vacationReducer';
import { Activity } from '@/utils/interfaces';
import { useSnackbarControl } from '@/hooks/useSnackbarControl';

export default function ChooseActivity({ currentActivity }: { currentActivity: Activity }) {
  const dispatch = useDispatch<AppDispatch>();

  const chosenActivities = useSelector((state: RootState) => state.vacation.chosenActivities);
  const isSelected = chosenActivities.some((activity) => activity.id === currentActivity?.id);
  const {
    isOpen,
    snackbarMessage,
    snackbarBackgroundColor,
    snackbarColor,
    handleSnackbar,
    handleClose,
  } = useSnackbarControl();
  return (
    <Grid size={{ md: 12 }} sx={{ textAlign: 'center', display: { xs: 'none', md: 'block' } }}>
      <Button
        sx={{
          ...button,
          ...(isSelected ? selectedActivity : greenButton),
          width: 'calc(100% - 40px)',
          margin: '0 20px',
        }}
        variant='outlined'
        startIcon={isSelected ? <CloseOutlinedIcon /> : <AddShoppingCartOutlinedIcon />}
        onClick={() => {
          if (isSelected) {
            dispatch(removeActivityWithPersistence(currentActivity.id));
            handleSnackbar('REMOVE');
          } else {
            dispatch(addActivityWithPersistence(currentActivity));
            handleSnackbar('ADD');
          }
        }}
      >
        {isSelected ? 'Remove' : 'Choose'}
      </Button>
      <Snackbar
        open={isOpen}
        autoHideDuration={2200}
        onClose={handleClose}
        message={snackbarMessage}
        sx={{
          width: '100px',
          '&.MuiSnackbarContent-message': {
            textAlign: 'center',
            color: 'red',
          },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <SnackbarContent
          sx={{
            backgroundColor: snackbarBackgroundColor ? snackbarBackgroundColor : 'transparent',
            color: `${snackbarColor} !important`,
            marginTop: '60px',
            justifyContent: 'center',
            padding: '4px 0',
          }}
          message={
            <span style={{ textAlign: 'center', width: '100%', display: 'block' }}>
              {snackbarMessage}
            </span>
          }
        />
      </Snackbar>
    </Grid>
  );
}
