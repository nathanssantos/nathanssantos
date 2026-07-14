import { getTranslations } from 'next-intl/server';
import { RiGithubLine, RiInstagramLine, RiLinkedinLine, RiMailLine } from 'react-icons/ri';

import { site } from '../constants';
import ButtonLink from './ButtonLink';
import Reveal from './Reveal';

const mailHref = `mailto:${site.email}`;

const socialLinks = [
  { label: 'Github', href: site.social.github, Icon: RiGithubLine },
  { label: 'Instagram', href: site.social.instagram, Icon: RiInstagramLine },
  { label: 'LinkedIn', href: site.social.linkedin, Icon: RiLinkedinLine },
  { label: 'E-mail', href: mailHref, Icon: RiMailLine },
];

const Contact = async () => {
  const t = await getTranslations('contact');

  return (
    <div id='contact'>
      <div className='mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-4 py-24 md:px-24'>
        <Reveal className='flex flex-col items-center gap-8'>
          <h2 className='m-0 flex items-center gap-4 font-mono text-[2rem] font-normal text-blue-500 uppercase lg:text-[2.5rem] dark:text-teal-500'>
            {t('title')}
          </h2>
          <div className='flex flex-col items-center justify-center gap-12'>
            <div className='flex flex-col'>
              <p className='text-center text-sm md:text-base'>{t('description')}</p>
              <p className='text-center text-sm md:text-base'>{t('description-2')}</p>
            </div>
            <div className='flex items-center gap-4 text-blue-500 dark:text-teal-500'>
              {socialLinks.map(({ label, href, Icon }) => {
                const isExternal = href.startsWith('http');

                return (
                  <a
                    key={label}
                    aria-label={label}
                    href={href}
                    className='p-2 text-2xl'
                    {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
            <ButtonLink href={mailHref} className='font-mono'>
              {t('button-label')}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
