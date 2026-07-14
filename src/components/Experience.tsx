import { getTranslations } from 'next-intl/server';

import { experience } from '../constants';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const Experience = async () => {
  const t = await getTranslations('experience');

  return (
    <div id='experience' className='font-mono'>
      <div className='mx-auto flex w-full max-w-7xl pt-24 pr-[3.625rem] pb-48 pl-2 text-xs lg:pr-[8.25rem]'>
        <div className='flex items-start gap-3.5 lg:gap-7'>
          <div className='sticky top-20 flex'>
            <SectionHeader>{t('title')}</SectionHeader>
          </div>
          <div className='flex flex-col gap-6'>
            {experience.map((item, index) => (
              <Reveal key={item.key} delay={index * 100}>
                <a
                  href={item.url}
                  target='_blank'
                  rel='noreferrer'
                  className='group flex flex-col items-start gap-16 rounded-md bg-[rgba(230,230,230,0.75)] py-12 pr-8 pl-8 backdrop-blur-[5px] transition duration-200 hover:-translate-y-1 hover:shadow-xl md:flex-row md:py-8 md:pl-16 dark:bg-[rgba(42,42,42,0.75)]'
                >
                  <div className='w-28 min-w-28 self-center md:w-32 md:min-w-32'>
                    <img
                      alt={`${item.name} logo`}
                      src={item.logo}
                      className={`h-full w-full object-contain${
                        item.logo.endsWith('.svg')
                          ? ' dark:[filter:brightness(0)_invert(1)]'
                          : ''
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
                          className='rounded px-2 py-0.5 text-[#fff] bg-blue-500 dark:bg-teal-500 dark:text-[#222]'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
