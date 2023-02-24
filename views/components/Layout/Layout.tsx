import Head from 'next/head';

// Shared components import
import { Navbar } from '@/views/components/shared/Navbar';
import { Footer } from '@/views/components/shared/Footer';

export const Layout = ({ children }: any) => {
  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
