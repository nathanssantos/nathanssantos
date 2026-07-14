'use client';

import { useTranslations } from 'next-intl';

type ErrorProps = {
  reset: () => void;
};

const Error = ({ reset }: ErrorProps) => {
  const t = useTranslations('error');

  return (
    <main className='flex min-h-[80vh] flex-col items-center justify-center gap-6 px-6 text-center'>
      <h1 className='m-0 bg-clip-text font-mono text-3xl font-black text-transparent [background-image:linear-gradient(120deg,#5374fa_40%,#64ffda_80%)] md:text-4xl dark:[background-image:linear-gradient(120deg,#64ffda_30%,#5374fa_60%)]'>
        {t('title')}
      </h1>
      <p className='max-w-xl text-sm md:text-base'>{t('description')}</p>
      <button
        type='button'
        onClick={reset}
        className='inline-flex rounded-md border border-blue-500 px-4 py-2 font-mono text-sm text-blue-500 transition hover:bg-blue-500/10 dark:border-teal-500 dark:text-teal-500 dark:hover:bg-teal-500/10'
      >
        {t('retry')}
      </button>
    </main>
  );
};

export default Error;
