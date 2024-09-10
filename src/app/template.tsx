'use client';
import { useEffect } from 'react';
import { Navbar, Footer } from '@/sections';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/utils/re-styledComponents/theme';
import Script from 'next/script';

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-91VKNG6XWG', {
        page_path: window.location.pathname,
      });
    }
  }, []);

  return (
    <>
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=G-91VKNG6XWG`}
      />
      <Script
        id='google-analytics-config'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-91VKNG6XWG');
          `,
        }}
      />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </Provider>
    </>
  );
}
