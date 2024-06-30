'use client';
import { Navbar, Footer } from '@/sections';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/utils/re-styledComponents/theme';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function Template({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isLoggedIn = Cookies.get('isLoggedIn');

  if (!isLoggedIn) {
    const formData = prompt('Enter your username and password') || '';
    const [username, password] = formData.split(' ');

    const validUsername = process.env.NEXT_PUBLIC_USERNAME || '';
    const validPassword = process.env.NEXT_PUBLIC_PASSWORD || '';

    if (username === validUsername && password === validPassword) {
      Cookies.set('isLoggedIn', 'true', { expires: 1 });
      router.push('/');
    }
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
