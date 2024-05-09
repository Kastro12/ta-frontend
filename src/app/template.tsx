'use client';
import { Navbar, Footer } from '@/sections';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/utils/re-styledComponents/theme';
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}
