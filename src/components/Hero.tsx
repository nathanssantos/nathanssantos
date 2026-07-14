'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';

import { setLogoVisible } from '../store/logo';
import Reveal from './Reveal';

const Hero = () => {
  const t = useTranslations('hero');
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const element = nameRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setLogoVisible(entry.isIntersecting),
      {
        threshold: 0,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className='relative flex h-[calc(100vh-4.25rem)]'>
      <div className='mx-auto flex w-full max-w-7xl flex-col justify-center px-[3.625rem] pt-8 pb-48 lg:px-[8.25rem]'>
        <Reveal className='flex flex-col justify-center'>
          <p className='mb-1 font-mono text-base font-medium text-blue-500 md:mb-2 md:text-lg dark:text-teal-500'>
            {t('salutation')}
          </p>
          <div className='mb-2 -ml-[0.15rem] flex'>
            <h1
              ref={nameRef}
              className='m-0 bg-clip-text text-5xl leading-none font-black text-transparent [background-image:linear-gradient(120deg,#5374fa_50%,#64ffda_90%)] md:text-7xl dark:[background-image:linear-gradient(120deg,#64ffda_20%,#5374fa_60%)]'
            >
              {t('name')}.
            </h1>
          </div>
          <p className='mb-3 -ml-[0.05rem] text-2xl leading-none font-black md:mb-6 md:text-5xl'>
            {t('conclusion')}.
          </p>
          <p className='text-sm md:text-base'>{t('description')}</p>
          <p className='text-sm md:text-base'>{t('description-2')}</p>
        </Reveal>
      </div>
    </div>
  );
};

export default Hero;
