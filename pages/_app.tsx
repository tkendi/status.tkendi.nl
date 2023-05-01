// styles
import '@/styles/global.css';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

import { themes } from '@/styles/theme';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Status</title>
      </Head>
      <ThemeProvider
        defaultTheme="system"
        attribute="class"
        value={{ ...themes }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
