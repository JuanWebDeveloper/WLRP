import { useState, useEffect, Fragment } from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';

// Styles of the project
import '@/views/scss/styles.scss';

// Imported custom layout component to use as a wrapper for consistent site structure and styling
import { Layout } from '../views/components/Layout/Layout';
import { Loading } from '@/views/components/shared/Loading';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Loading style={{ height: '100vh' }} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Fragment>
  );
}
