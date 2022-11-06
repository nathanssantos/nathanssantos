import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

import { Footer, Header } from '@/components';

type Props = {
  // Add custom props here
};

const SecondPage = (_props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation(['common', 'second-page']);

  return (
    <>
      <main>
        <Header heading={t('second-page:h1')} title={t('second-page:title')} />
        <Link href='/'>
          <button type='button'>{t('common:back-to-home')}</button>
        </Link>
      </main>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'second-page', 'footer'])),
  },
});

export default SecondPage;
