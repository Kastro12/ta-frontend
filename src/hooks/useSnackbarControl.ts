import { useState } from 'react';
import { useTranslations } from 'next-intl';
type SnackbarType = 'REMOVE' | 'ADD' | false;

export function useSnackbarControl() {
  const t = useTranslations('global');
  const [snackbar, setSnackbar] = useState<SnackbarType>(false);

  const handleSnackbar = (message: Exclude<SnackbarType, false>) => {
    setSnackbar(message);
  };
  const handleClose = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar(false);
  };

  let snackbarMessage = '';
  let snackbarBackgroundColor = '';
  let snackbarColor = '';

  switch (snackbar) {
    case 'REMOVE':
      snackbarMessage = t('Removed from vacation plan');
      snackbarBackgroundColor = '#bcd9d8';
      snackbarColor = '#21817d';
      break;
    case 'ADD':
      snackbarMessage = t('Added to vacation plan');
      snackbarBackgroundColor = '#1e706c';
      snackbarColor = '#fff';
      break;
    default:
      break;
  }

  return {
    snackbar,
    isOpen: snackbar !== false,
    snackbarMessage,
    snackbarBackgroundColor,
    snackbarColor,
    handleSnackbar,
    handleClose,
  };
}
