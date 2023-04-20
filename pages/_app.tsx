// styles
import '@/styles/global.css';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Status</title>
      </Head>
      <ThemeProvider defaultTheme="system" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
