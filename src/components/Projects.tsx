import { getTranslations } from 'next-intl/server';
import { RiExternalLinkLine, RiGithubLine, RiStarLine } from 'react-icons/ri';

import { site } from '../constants';
import ButtonLink from './ButtonLink';
import Reveal from './Reveal';
import Section from './Section';

type ProjectsProps = {
  projects: Repository[];
};

const Projects = async ({ projects }: ProjectsProps) => {
  const t = await getTranslations('projects');
  const tCommon = await getTranslations('common');

  return (
    <Section id='projects' title={t('title')} className='font-mono text-xs'>
      <div className='grid gap-6 lg:grid-cols-2 xl:grid-cols-3'>
        {projects.map((item, index) => (
          <Reveal key={item.id} delay={index * 100} className='h-full'>
            <div className='group flex h-full flex-col rounded-md bg-[rgba(230,230,230,0.75)] p-8 backdrop-blur-[5px] transition duration-200 hover:-translate-y-1 hover:shadow-xl dark:bg-[rgba(42,42,42,0.75)]'>
              <div className='mb-6 flex items-start justify-between gap-2 transition duration-200 group-hover:text-blue-500 dark:group-hover:text-teal-500'>
                <h3 className='m-0 text-lg font-bold'>{item.name}</h3>
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
                    href={`https://github.com/${site.githubUsername}/${item.name}`}
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
      <div className='mt-8 flex justify-center'>
        <Reveal>
          <ButtonLink
            href={`https://github.com/${site.githubUsername}?tab=repositories`}
            target='_blank'
            rel='noreferrer'
          >
            {tCommon('view-more')}
          </ButtonLink>
        </Reveal>
      </div>
    </Section>
  );
};

export default Projects;
