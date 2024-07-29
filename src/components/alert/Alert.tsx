import { useEffect } from 'react';
import { Alert as MUIAlert } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { AlertsProps } from '@/utils/interfaces';
import { useDispatch } from 'react-redux';
import { removePageAlert } from '@/store/alerts/alertsReducer';

interface AlertComponentProps extends AlertsProps {
  className: string;
}

const Alert = ({ severity, message, timeout, className }: AlertComponentProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(removePageAlert());
    }, timeout);
  }, []);

  return (
    <MUIAlert
      severity={severity}
      className={className}
      icon={<InfoOutlinedIcon fontSize='small' />}
      onClose={() => {
        dispatch(removePageAlert());
      }}
    >
      {message}
    </MUIAlert>
  );
};

export default Alert;
