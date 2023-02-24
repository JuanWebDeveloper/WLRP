import type { AppProps } from 'next/app';

// Styles of the project
import '@/views/scss/styles.scss';

// Imported custom layout component to use as a wrapper for consistent site structure and styling
import { Layout } from '../views/components/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
