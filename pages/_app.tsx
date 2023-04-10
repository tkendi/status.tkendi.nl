import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

// styles
import '@/styles/reset.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
