'use client';
import { Navbar, Footer } from '@/sections';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/utils/re-styledComponents/theme';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function Template({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = Cookies.get('isLoggedIn');

    if (!loggedIn) {
      const formData = prompt('Enter your username and password') || '';
      const [username, password] = formData.split(' ');

      const validUsername = 'saleadmin' || '';
      const validPassword = 'salepassword' || '';

      if (username === validUsername && password === validPassword) {
        Cookies.set('isLoggedIn', 'true', { expires: 1 });
        setIsLoggedIn(true);
        router.push('/');
      } else {
        alert('Invalid username or password');
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  if (!isLoggedIn) {
    return null; // Ili možete vratiti neku placeholder komponentu dok se autentifikacija ne završi
  }

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
