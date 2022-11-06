import Head from 'next/head';
import type { FC } from 'react';

type Props = {
  heading: string;
  title: string;
};

const Header: FC<Props> = ({ heading, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <h1>{heading}</h1>
  </>
);

export default Header;
