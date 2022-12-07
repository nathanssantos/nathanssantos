import { Flex } from '@chakra-ui/react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import {
  About,
  Background,
  Contact,
  Footer,
  Header,
  Hero,
  Jobs,
  RooStoreProvider,
} from '@/components';
import axios from 'axios';
import Head from 'next/head';
import { createContext } from 'react';
import Projects from 'src/components/Projects';

type HomeProps = {
  repositories: Repository[];
};

const Homepage = ({ repositories }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <RooStoreProvider>
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
      <Jobs />
      <Projects projects={repositories} />
      <Contact />
    </main>
    <Footer />
  </RooStoreProvider>
);

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({ locale }) => {
  const localeData = await serverSideTranslations(locale ?? 'en', [
    'common',
    'header',
    'hero',
    'about',
    'jobs',
    'projects',
    'contact',
    'footer',
  ]);

  try {
    const { status, data } = await axios.get(
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000/api/repositories'
        : 'https://nathanssantos.vercel.app/api/repositories',
    );

    if (status !== 200 || !data) {
      return {
        props: {
          ...localeData,
          repositories: [],
        },
      };
    }

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
