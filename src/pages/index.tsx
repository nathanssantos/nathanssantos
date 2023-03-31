import { useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import axios from 'axios';
import Head from 'next/head';

import {
  About,
  Background,
  Contact,
  Footer,
  Header,
  Hero,
  Experience,
  Projects,
  RooStoreProvider,
} from '@/components';

type HomeProps = {
  repositories: Repository[];
};

const Homepage = ({ repositories }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode('dark');
  }, []);

  return (
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
        <Experience />
        {!!repositories.length && <Projects projects={repositories} />}
        <Contact />
      </main>
      <Footer />
    </RooStoreProvider>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  const localeData = await serverSideTranslations(locale ?? 'en', [
    'common',
    'header',
    'hero',
    'about',
    'experience',
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
        revalidate: 60 * 60 * 1, // 1 hour
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
      revalidate: 60 * 60 * 1, // 1 hour
    };
  }
};

export default Homepage;
