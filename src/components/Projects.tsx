import { getTranslations } from 'next-intl/server';
import { RiExternalLinkLine, RiGithubLine, RiStarLine } from 'react-icons/ri';

import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

type ProjectsProps = {
  projects: Repository[];
};

const Projects = async ({ projects }: ProjectsProps) => {
  const t = await getTranslations('projects');
  const tCommon = await getTranslations('common');

  return (
    <div id='projects' className='font-mono'>
      <div className='mx-auto flex w-full max-w-7xl items-start pt-24 pr-[3.625rem] pb-48 pl-2 text-xs lg:pr-[8.25rem]'>
        <div className='flex items-start gap-3.5 lg:gap-7'>
          <div className='sticky top-20 flex pb-[4.25rem]'>
            <SectionHeader>{t('title')}</SectionHeader>
          </div>
          <div className='flex flex-col'>
            <div className='grid gap-6 lg:grid-cols-2 xl:grid-cols-3'>
              {projects.map((item, index) => (
                <Reveal key={item.id} delay={index * 100} className='h-full'>
                  <div className='group flex h-full flex-col rounded-md bg-[rgba(230,230,230,0.75)] p-8 backdrop-blur-[5px] transition duration-200 hover:-translate-y-1 hover:shadow-xl dark:bg-[rgba(42,42,42,0.75)]'>
                    <div className='mb-6 flex items-start justify-between gap-2 transition duration-200 group-hover:text-blue-500 dark:group-hover:text-teal-500'>
                      <p className='text-lg font-bold'>{item.name}</p>
                      {!!item.stargazers_count && (
                        <div className='flex items-center gap-2 text-base'>
                          <RiStarLine className='text-xl' />
                          {item.stargazers_count}
                        </div>
                      )}
                    </div>
                    <div className='flex flex-1'>
                      <p className='mb-8'>{t(`list.${item.name}.description`)}</p>
                    </div>
                    <div className='flex items-center justify-between gap-2'>
                      <p className='text-sm font-bold transition duration-200 group-hover:text-blue-500 dark:group-hover:text-teal-500'>
                        {item.language}
                      </p>
                      <div className='flex gap-2'>
                        {!!item.homepage?.length && (
                          <a
                            href={item.homepage}
                            target='_blank'
                            rel='noreferrer'
                            aria-label='Homepage Link'
                            className='p-1 text-xl transition group-hover:text-blue-500 dark:group-hover:text-teal-500'
                          >
                            <RiExternalLinkLine />
                          </a>
                        )}
                        <a
                          href={`https://github.com/nathanssantos/${item.name}`}
                          target='_blank'
                          rel='noreferrer'
                          aria-label='Github Link'
                          className='p-1 text-xl transition group-hover:text-blue-500 dark:group-hover:text-teal-500'
                        >
                          <RiGithubLine />
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className='mt-8 self-center'>
              <Reveal>
                <a
                  href='https://github.com/nathanssantos?tab=repositories'
                  target='_blank'
                  rel='noreferrer'
                  className='rounded-md border border-blue-500 px-4 py-2 text-blue-500 transition hover:bg-blue-500/10 dark:border-teal-500 dark:text-teal-500 dark:hover:bg-teal-500/10'
                >
                  {tCommon('view-more')}
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
