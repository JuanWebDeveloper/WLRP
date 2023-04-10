import Head from 'next/head';

export const MyHead = (props: { titleName: string }) => {
  return (
    <Head>
      <title>{props.titleName}</title>
    </Head>
  );
};
