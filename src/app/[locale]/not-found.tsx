import { getTranslations } from 'next-intl/server';

import { Link } from '../../i18n/navigation';

const NotFound = async () => {
  const t = await getTranslations('notFound');

  return (
    <main className='flex min-h-[80vh] flex-col items-center justify-center gap-6 px-6 text-center'>
      <p className='bg-clip-text font-mono text-7xl font-black text-transparent [background-image:linear-gradient(120deg,#5374fa_40%,#64ffda_80%)] md:text-8xl dark:[background-image:linear-gradient(120deg,#64ffda_30%,#5374fa_60%)]'>
        404
      </p>
      <h1 className='m-0 max-w-xl text-base font-medium md:text-lg'>{t('h1')}</h1>
      <Link
        href='/'
        className='inline-flex rounded-md border border-blue-500 px-4 py-2 font-mono text-sm text-blue-500 transition hover:bg-blue-500/10 dark:border-teal-500 dark:text-teal-500 dark:hover:bg-teal-500/10'
      >
        {t('back')}
      </Link>
    </main>
  );
};

export default NotFound;
