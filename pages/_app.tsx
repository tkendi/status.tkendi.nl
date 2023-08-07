// styles
import '@/styles/global.css';

import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

import { useApollo } from '@/gql/apollo';
import { themes } from '@/styles/theme';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const client = useApollo(pageProps.initialApolloState);

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
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
