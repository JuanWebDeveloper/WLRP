import type { AppProps } from 'next/app';

// Styles of the project
import '@/views/scss/styles.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
