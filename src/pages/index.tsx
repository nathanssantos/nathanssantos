import { Button, Flex } from '@chakra-ui/react';
import type { GetServerSideProps, InferGetStaticPropsType } from 'next';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Footer, Header } from '@/components';

type Props = {
  // Add custom props here
};

const Homepage = (_props: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === 'en' ? 'pt' : 'en';

  return (
    <>
      <main>
        <Header heading={t('h1')} title={t('title')} />

        <Flex gap={4}>
          <Button onClick={() => onToggleLanguageClick(changeTo)}>
            {t('change-locale', { changeTo })}
          </Button>
          <Link href='/second-page'>
            <Button type='button'>{t('to-second-page')}</Button>
          </Link>
        </Flex>
      </main>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'footer'])),
  },
});

export default Homepage;
