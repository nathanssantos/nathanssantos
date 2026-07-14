import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { experience } from '../constants';
import Reveal from './Reveal';
import Section from './Section';

const baseCardClassName =
  'group flex w-full flex-col items-start gap-16 rounded-md bg-[rgba(230,230,230,0.75)] py-12 pr-8 pl-8 backdrop-blur-[5px] transition duration-200 hover:-translate-y-1 hover:shadow-xl md:flex-row md:py-8 md:pl-16 dark:bg-[rgba(42,42,42,0.75)]';

const Experience = async () => {
  const t = await getTranslations('experience');

  return (
    <Section id='experience' title={t('title')} className='font-mono text-xs'>
      <div className='flex flex-col gap-6'>
        {experience.map((item, index) => {
          const content = (
            <>
              <div className='relative h-16 w-28 min-w-28 self-center md:h-20 md:w-32 md:min-w-32'>
                <Image
                  alt={`${item.name} logo`}
                  src={item.logo}
                  fill
                  sizes='128px'
                  className={`object-contain ${
                    item.logo.endsWith('.svg') ? 'dark:[filter:brightness(0)_invert(1)]' : ''
                  }`}
                />
              </div>
              <div className='flex w-full flex-col'>
                <p className='mb-6 text-xl font-bold transition duration-200 group-hover:text-blue-500 dark:group-hover:text-teal-500'>
                  {item.name}
                </p>
                <p className='mb-2'>{t(`list.${item.key}.description-1`)}</p>
                <p className='mb-6 transition duration-200 group-hover:text-blue-500 dark:group-hover:text-teal-500'>
                  {t(`list.${item.key}.description-2`)}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className='rounded bg-blue-500 px-2 py-0.5 text-[#fff] dark:bg-teal-500 dark:text-[#222]'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </>
          );

          return (
            <Reveal key={item.key} delay={index * 100}>
              {item.url ? (
                <a
                  href={item.url}
                  target='_blank'
                  rel='noreferrer'
                  className={`${baseCardClassName} cursor-pointer`}
                >
                  {content}
                </a>
              ) : (
                <div className={`${baseCardClassName} cursor-default`}>{content}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default Experience;
