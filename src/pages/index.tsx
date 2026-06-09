import { useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
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

const Homepage = ({ repositories }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode('dark');
  }, []);

  return (
    <RooStoreProvider>
      <Head>
        <title>Nathan S. Santos</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Software Engineer with 7+ years building web, mobile and desktop products with React, Node.js, TypeScript and AI. Portfolio of Nathan S. Santos — projects, open source and experience.'
        />

        <meta property='og:type' content='website' key='og:type' />
        <meta property='og:title' content='Nathan S. Santos' key='og:title' />
        <meta
          property='og:description'
          content='Software Engineer with 7+ years building web, mobile and desktop products with React, Node.js, TypeScript and AI. Portfolio of Nathan S. Santos — projects, open source and experience.'
          key='og:description'
        />
        <meta property='og:url' content='https://nathanssantos.vercel.app/' key='og:url' />
        <meta
          property='og:image'
          content='https://nathanssantos.vercel.app/images/me.jpg'
          key='og:image'
        />

        <meta name='twitter:card' content='summary' key='twitter:card' />
        <meta name='twitter:title' content='Nathan S. Santos' key='twitter:title' />
        <meta
          name='twitter:description'
          content='Software Engineer with 7+ years building web, mobile and desktop products with React, Node.js, TypeScript and AI. Portfolio of Nathan S. Santos — projects, open source and experience.'
          key='twitter:description'
        />
        <meta
          name='twitter:image'
          content='https://nathanssantos.vercel.app/images/me.jpg'
          key='twitter:image'
        />
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

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({ locale }) => {
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
