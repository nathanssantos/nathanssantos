import { Flex } from '@chakra-ui/react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import { Footer, Header } from '@/components';
import axios from 'axios';

type HomeProps = {
  repositories: Repository[];
};

const Homepage = ({ repositories }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation('common');

  return (
    <>
      <Header />
      <main>
        <Flex direction='column' gap={3}>
          {repositories.map(({ id, name }) => (
            <Flex key={id}>{name}</Flex>
          ))}
        </Flex>
      </main>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({ locale }) => {
  const localeData = await serverSideTranslations(locale ?? 'en', [
    'common',
    'header',
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
