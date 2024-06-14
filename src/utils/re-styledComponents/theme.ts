'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Platypi',

    h1: {
      fontSize: '50px',
      fontWeight: 800,
      marginBottom: '60px',
      textAlign: 'center',
      marginTop: '60px',
    },
    h2: {
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '0.07em',
      marginTop: 36,
      marginBottom: 36,
      lineHeight: 1.6,
    },
    h3: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    h4: {
      fontSize: 16,
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    body1: {
      lineHeight: '26px',
      fontSize: 16,
      fontWeight: 300,
    },
  },
});

export default theme;
