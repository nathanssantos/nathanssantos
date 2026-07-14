import { getTranslations } from 'next-intl/server';

import Reveal from './Reveal';

const Footer = async () => {
  const t = await getTranslations('footer');

  return (
    <footer className='flex items-center justify-center px-4 py-16'>
      <Reveal>
        <p className='text-center font-mono text-xs'>{t('description')}</p>
      </Reveal>
    </footer>
  );
};

export default Footer;
