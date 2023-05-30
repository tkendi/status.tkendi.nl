// styles
import '@/styles/global.css';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';

import { themes } from '@/styles/theme';
import { useApollo } from '@/gql/apollo';

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
