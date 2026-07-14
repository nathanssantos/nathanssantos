import { getTranslations } from 'next-intl/server';

import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const technologies = [
  'TypeScript',
  'React / React Native',
  'Next.js',
  'Electron',
  'Node.js',
  'Fastify / tRPC',
  'PostgreSQL',
  'Canvas API',
  'Vitest / Cypress',
  'Chakra UI',
  'Zustand / MobX',
  'pnpm Monorepo',
];

const About = async () => {
  const t = await getTranslations('about');

  return (
    <div id='about'>
      <div className='mx-auto flex w-full max-w-7xl gap-2 pt-24 pr-[3.625rem] pb-48 pl-2 text-xs lg:gap-7 lg:pr-[8.25rem] lg:text-sm'>
        <div className='flex items-start gap-3.5 lg:gap-7'>
          <div className='sticky top-20 flex'>
            <SectionHeader>{t('title')}</SectionHeader>
          </div>
          <Reveal className='flex flex-col gap-4'>
            <img
              src='/images/me.jpg'
              alt='Nathan S. Santos'
              className='h-full w-full max-w-40 [filter:grayscale(100%)_contrast(1.25)]'
            />
            <div className='flex flex-col gap-4'>
              <p>{t('description')}</p>
              <p>{t('list-title')}:</p>
              <ul className='flex max-h-28 max-w-[30rem] flex-col flex-wrap gap-1 gap-x-6 lg:max-h-[8.5rem]'>
                {technologies.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-1 before:text-blue-500 before:content-['▹'] dark:before:text-teal-500"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default About;
