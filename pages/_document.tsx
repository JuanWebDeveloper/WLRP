/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='es'>
      <Head>
        <link rel='shortcut icon' href='/favicon.png' type='image/x-icon' />
        <script src='https://kit.fontawesome.com/abb9bfd2a6.js' crossOrigin='anonymous'></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
