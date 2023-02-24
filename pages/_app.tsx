import { Fragment } from 'react';
import type { AppProps } from 'next/app';

// Styles of the project
import '@/views/scss/styles.scss';

// Shared components import
import { Navbar } from '@/views/components/shared/Navbar';
import { Footer } from '@/views/components/shared/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navbar />
      <main className='main'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Fragment>
  );
}
