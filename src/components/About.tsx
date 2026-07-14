import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { technologies } from '../constants';
import Reveal from './Reveal';
import Section from './Section';

const About = async () => {
  const t = await getTranslations('about');

  return (
    <Section id='about' title={t('title')} className='text-xs lg:text-sm'>
      <Reveal className='flex flex-col gap-4'>
        <Image
          src='/images/me.jpg'
          alt='Nathan S. Santos'
          width={637}
          height={637}
          className='h-auto w-full max-w-40 [filter:grayscale(100%)_contrast(1.25)]'
        />
        <div className='flex flex-col gap-4'>
          <p>{t('description')}</p>
          <p>{t('list-title')}:</p>
          <ul className='max-w-[30rem] columns-2 gap-x-6 sm:columns-3'>
            {technologies.map((tech) => (
              <li
                key={tech}
                className="mb-1 flex items-center gap-1 break-inside-avoid before:text-blue-500 before:content-['▹'] dark:before:text-teal-500"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
};

export default About;
