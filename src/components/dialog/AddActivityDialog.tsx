import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CancelOutlined';

import { button, lightGreenButton, greenButton } from '@/utils/re-styledComponents';

export default function AddActivityDialog() {
  const [open, setOpen] = React.useState(false);

  const confirmAddingActivity = useSelector(
    (state: RootState) => state.vacation.confirmAddingActivity
  );

  const startDate = useSelector((state: RootState) => state.vacation.startDate);
  const finishDate = useSelector((state: RootState) => state.vacation.finishDate);

  console.log('confirmAddingActivity', confirmAddingActivity);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* <Button variant='outlined' onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <Dialog
        // onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={confirmAddingActivity == null ? false : true}
        className='dialog-wrapper'
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
          Activity overflow
        </DialogTitle>
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 12,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Typography variant='body1' sx={{ mb: '9px' }}>
            {startDate} - {finishDate} is <strong>5</strong> days.
            {/* The duration from start to finish date is <strong>5</strong> days. */}
          </Typography>
          <Typography variant='body1' sx={{ mb: '24px' }}>
            Chosen activities require <strong>7</strong> days.
          </Typography>

          <Button
            sx={{ ...button, ...greenButton, mb: 2 }}
            variant='outlined'
            startIcon={<AddShoppingCartOutlinedIcon />}
            className='actions'
            // onClick={() => dispatch(isSelected ? removeActivity(id) : addActivity(data))}
          >
            Add the activity and extend the finish date
          </Button>

          <Button
            sx={{ ...button, ...lightGreenButton }}
            variant='outlined'
            startIcon={<CloseOutlinedIcon />}
            className='actions'
            // onClick={() => dispatch(isSelected ? removeActivity(id) : addActivity(data))}
          >
            Do not add the selected activity.
          </Button>

          {/* <Typography gutterBottom>
            You selected activities beyond your 5-day vacation ({startDate} - {finishDate}).
          </Typography>

          <Typography gutterBottom>Options:</Typography>

          <p>Extend your vacation to save the activity (new end date: Jan 7, 2020)</p>
          <Button autoFocus onClick={handleClose}>
            Extend
          </Button>

          <p>Remove the last activity and keep the original end date (Jan 5, 2020).</p>
          <Button autoFocus onClick={handleClose}>
            Remove
          </Button> */}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
