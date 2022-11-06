import { Flex } from '@chakra-ui/react';
import type { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Footer, Header } from '@/components';

const Homepage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Header />
      <main>
        <Flex gap={3}>Home</Flex>
      </main>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'header', 'footer'])),
  },
});

export default Homepage;
