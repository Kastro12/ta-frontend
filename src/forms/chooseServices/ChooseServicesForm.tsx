import { useState } from 'react';
import Radio from '@mui/material/Radio';
import {
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Popover,
  Typography,
  IconButton,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useDispatch } from 'react-redux';
import { useTranslations } from 'next-intl';

export const radioStyle = {
  color: '#899199',
  '&.Mui-checked': {
    color: '#1e706c',
  },
  '&:hover': {
    backgroundColor: 'rgba(33, 129, 125, 0.06)',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(33, 129, 125, 0.06)',
  },
  '&:active': {
    backgroundColor: 'rgba(33, 129, 125, 0.3)',
  },
};

const FormControlLabelStyle = {
  '.MuiFormControlLabel-label': {
    fontSize: '14px',
    marginLeft: '3px',
  },
};

const FormLabelStyle = {
  fontSize: '15px',
  color: '#212b3b',
  fontWeight: '400',
  marginBottom: '6px',
  '&.Mui-focused': {
    color: '#212b3b',
  },
  '.MuiSvgIcon-root': {
    color: '#21817d',
  },
};

const ChooseServicesForm = ({ changeRadioGroup }: any) => {
  const dispatch = useDispatch();
  const globalT = useTranslations('global');

  const [accommodationPopover, setAccommodationPopover] = useState<HTMLButtonElement | null>(null);
  const handleClickAccommodationPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAccommodationPopover(event.currentTarget);
  };
  const handleCloseAccommodationPopover = () => {
    setAccommodationPopover(null);
  };
  const openAccommodationPopover = Boolean(accommodationPopover);
  const idAccommodationPopover = openAccommodationPopover ? 'simple-popover' : undefined;

  const [transportationPopover, setTransportationPopover] = useState<HTMLButtonElement | null>(
    null,
  );
  const handleClickTransportationPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTransportationPopover(event.currentTarget);
  };
  const handleCloseTransportationPopover = () => {
    setTransportationPopover(null);
  };
  const openTransportationPopover = Boolean(transportationPopover);
  const idTransportationPopover = openTransportationPopover ? 'simple-popover' : undefined;

  return (
    <div className='ChooseServicesForm'>
      <FormControl className='accommodation'>
        <FormLabel id='demo-row-radio-buttons-group-label' sx={FormLabelStyle}>
          {globalT('arrange-accommodation-question')}{' '}
          <IconButton aria-label='info' size='small' onClick={handleClickAccommodationPopover}>
            <InfoOutlinedIcon fontSize='small' />
          </IconButton>
          <Popover
            id={idAccommodationPopover}
            open={openAccommodationPopover}
            anchorEl={accommodationPopover}
            onClose={handleCloseAccommodationPopover}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            className='ChooseServicesForm_popover'
          >
            <Typography>
              <strong>Note:</strong> If you select &apos;Yes&apos; option, we will find several
              accommodation options that meet your needs and send them to you for selection.
            </Typography>
          </Popover>
        </FormLabel>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          name='radio-buttons-group'
          defaultValue='accommodation_yes'
          onChange={(e) =>
            dispatch(changeRadioGroup({ type: 'accommodation_radio', value: e.target.value }))
          }
        >
          <FormControlLabel
            value='accommodation_yes'
            control={<Radio size='small' sx={radioStyle} />}
            label={<>{globalT('confirm-arrangement')}</>}
            sx={FormControlLabelStyle}
          />
          <FormControlLabel
            value='accommodation_no'
            control={<Radio size='small' sx={radioStyle} />}
            label={<>{globalT('unconfirmed-arrangement')}</>}
            sx={FormControlLabelStyle}
          />
        </RadioGroup>
      </FormControl>

      <FormControl className='transportation'>
        <FormLabel id='demo-row-radio-buttons-group-label' sx={FormLabelStyle}>
          {globalT('arrange-transportation-question')}{' '}
          <IconButton aria-label='info' size='small' onClick={handleClickTransportationPopover}>
            <InfoOutlinedIcon fontSize='small' />
          </IconButton>
          <Popover
            id={idTransportationPopover}
            open={openTransportationPopover}
            anchorEl={transportationPopover}
            onClose={handleCloseTransportationPopover}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            className='ChooseServicesForm_popover'
          >
            <Typography>
              <strong>Note:</strong> If you select &apos;Yes&apos; option, we will offer you
              different types of transportation, including standard vehicles and luxury options, so
              you can choose what suits you best.
            </Typography>
          </Popover>
        </FormLabel>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          name='radio-buttons-group'
          defaultValue='transportation_yes'
          onChange={(e) =>
            dispatch(changeRadioGroup({ type: 'transportation_radio', value: e.target.value }))
          }
        >
          <FormControlLabel
            value='transportation_yes'
            control={<Radio size='small' sx={radioStyle} />}
            label={<>{globalT('confirm-arrangement')}</>}
            sx={FormControlLabelStyle}
          />
          <FormControlLabel
            value='transportation_no'
            control={<Radio size='small' sx={radioStyle} />}
            label={<>{globalT('unconfirmed-arrangement')}</>}
            sx={FormControlLabelStyle}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default ChooseServicesForm;
