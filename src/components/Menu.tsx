'use client';

import { useLocale, useTranslations } from 'next-intl';

import { site } from '../constants';

type MenuProps = {
  vertical?: boolean;
};

const linkClassName =
  'inline-flex rounded-md px-3 py-1.5 text-sm font-medium text-blue-500 transition hover:bg-blue-500/10 dark:text-teal-500 dark:hover:bg-teal-500/10';

const Menu = ({ vertical = false }: MenuProps) => {
  const t = useTranslations('header');
  const locale = useLocale();

  const resumeHref = locale === 'pt' ? site.resume.pt : site.resume.en;

  const items = [
    { id: 'about', label: t('about') },
    { id: 'experience', label: t('experience') },
    { id: 'projects', label: t('projects') },
    { id: 'contact', label: t('contact') },
  ];

  return (
    <nav className='font-mono'>
      <ul className={`flex list-none gap-2 ${vertical ? 'flex-col' : 'flex-row'}`}>
        {items.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} className={linkClassName}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a href={resumeHref} target='_blank' rel='noreferrer' className={linkClassName}>
            {t('resume')}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
