import '@fontsource/platypi/300.css';
import '@fontsource/platypi/400.css';
import '@fontsource/platypi/500.css';
import '@fontsource/platypi/700.css';

export const button = {
  textTransform: 'none',
  fontFamily: ['Platypi'].join(','),
  fontWeight: 300,
  letterSpacing: '0.07em',
  padding: '0 12px',
  border: '0px !important',
  minWidth: 'auto',
  whiteSpace: 'nowrap',
  '&:hover': {
    border: '0px !important',
  },
};

export const orangeButton = {
  backgroundColor: '#F5A950',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#FFA235',
    color: '#fff',
  },
};

export const selectedActivity = {
  color: '#21817d',
  backgroundColor: 'rgba(33, 129, 125, 0.06)',
  border: '1px solid  transparent',
  '&:hover': {

    color: '#1e706c',
    backgroundColor: 'rgba(33, 129, 125, 0.3)',
    border: '1px solid transparent',
  },
};

export const transparentLightButton = {
  color: '#f5f5f5',
  '&:hover': {
    color: '#fff',
    backgroundColor: 'rgba(245, 245, 245, 0.14)',
  },
};

export const greenButton = {
  color: '#fff',
  backgroundColor: '#21817d',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#1e706c',
  },
};

export const lightGreenButton = {
  color: '#21817d',
  backgroundColor: 'transparent',
  border: '1px solid  #21817d',
  '&:hover': {
    color: '#1e706c',
    backgroundColor: 'transparent',
    border: '1px solid #1e706c',
  },
};

export const linkGreenButton = {
  padding:'0 3px',
  color: '#21817d',
  backgroundColor: 'transparent',
  border: '1px solid  transparent',
  '&:hover': {
    color: '#1e706c',
    backgroundColor: 'rgba(33, 129, 125, 0.06)',
    border: '1px solid transparent',
  },
};


export const lightRedButton = {
  color: '#ef5350',
  backgroundColor: 'transparent',
  border: '1px solid  #ef5350',
  '&:hover': {
    color: '#d32f2f',
    backgroundColor: 'transparent',
    border: '1px solid #d32f2f',
  },
};
