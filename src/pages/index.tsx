import { Flex } from '@chakra-ui/react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import { About, Background, Footer, Header, Hero } from '@/components';
import axios from 'axios';
import Head from 'next/head';

type HomeProps = {
  repositories: Repository[];
};

const Homepage = ({ repositories }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Nathan S. Santos</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:title' content='Nathan S. Santos' key='title' />
      </Head>
      <Header />
      <main>
        <Background />
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({ locale }) => {
  const localeData = await serverSideTranslations(locale ?? 'en', [
    'common',
    'header',
    'hero',
    'about',
    'footer',
  ]);

  try {
    const { status, data } = await axios.get(
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000/api/repositories'
        : 'https://nathanssantos.vercel.app/api/repositories',
    );

    return {
      props: {
        ...localeData,
        repositories: data,
      },
    };
  } catch (error) {
    return {
      props: {
        ...localeData,
        repositories: [],
      },
    };
  }
};

export default Homepage;
