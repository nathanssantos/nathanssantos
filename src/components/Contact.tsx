import { getTranslations } from 'next-intl/server';
import { RiGithubLine, RiInstagramLine, RiLinkedinLine, RiMailLine } from 'react-icons/ri';

import Reveal from './Reveal';

const Contact = async () => {
  const t = await getTranslations('contact');

  return (
    <div id='contact'>
      <div className='mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-4 py-24 md:px-24'>
        <Reveal className='flex flex-col items-center gap-8'>
          <div className='flex items-center gap-4 font-mono text-[2rem] text-blue-500 uppercase lg:text-[2.5rem] dark:text-teal-500'>
            {t('title')}
          </div>
          <div className='flex flex-col items-center justify-center gap-12'>
            <div className='flex flex-col'>
              <p className='text-center text-sm md:text-base'>{t('description')}</p>
              <p className='text-center text-sm md:text-base'>{t('description-2')}</p>
            </div>
            <div className='flex items-center gap-4 text-blue-500 dark:text-teal-500'>
              <a
                aria-label='Github'
                href='https://github.com/nathanssantos/'
                target='_blank'
                rel='noreferrer'
                className='p-2 text-2xl'
              >
                <RiGithubLine />
              </a>
              <a
                aria-label='Instagram'
                href='https://www.instagram.com/nathanssantosdev/'
                target='_blank'
                rel='noreferrer'
                className='p-2 text-2xl'
              >
                <RiInstagramLine />
              </a>
              <a
                aria-label='LinkedIn'
                href='https://www.linkedin.com/in/nathan-s-santos-4b2637163/'
                target='_blank'
                rel='noreferrer'
                className='p-2 text-2xl'
              >
                <RiLinkedinLine />
              </a>
              <a
                aria-label='E-mail'
                href='mailto:nathansilvasantos@gmail.com'
                className='p-2 text-2xl'
              >
                <RiMailLine />
              </a>
            </div>
            <a
              href='mailto:nathansilvasantos@gmail.com'
              className='rounded-md border border-blue-500 px-4 py-2 font-mono text-blue-500 transition hover:bg-blue-500/10 dark:border-teal-500 dark:text-teal-500 dark:hover:bg-teal-500/10'
            >
              {t('button-label')}
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
