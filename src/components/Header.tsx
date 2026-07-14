'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { RiMoonLine, RiSunLine, RiTranslate } from 'react-icons/ri';

import { usePathname, useRouter } from '../i18n/navigation';
import { useLogoVisible } from '../store/logo';
import Drawer from './Drawer';
import Menu from './Menu';

const Header = () => {
  const t = useTranslations('header');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const logoVisible = useLogoVisible();

  const isDark = resolvedTheme !== 'light';
  const isPt = locale === 'pt';

  const toggleLanguage = () => {
    router.replace(pathname, { locale: isPt ? 'en' : 'pt' });
  };

  return (
    <header className='sticky top-0 z-10 flex items-center justify-between gap-2 bg-[rgba(240,240,240,0.75)] px-4 py-4 backdrop-blur-[5px] dark:bg-[rgba(34,34,34,0.75)]'>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <button
            type='button'
            onClick={() => window.scrollTo(0, 0)}
            className={`overflow-hidden transition-all duration-200 ${
              logoVisible
                ? 'mr-6 ml-0 opacity-100'
                : '-ml-[1.625rem] opacity-0 md:-ml-[2.625rem]'
            }`}
            aria-label='Scroll to top'
          >
            <span className='bg-clip-text text-4xl leading-none font-bold text-transparent [background-image:linear-gradient(120deg,#5374fa_40%,#64ffda_80%)] dark:[background-image:linear-gradient(120deg,#64ffda_30%,#5374fa_60%)]'>
              N
            </span>
          </button>
          <div className='md:hidden'>
            <Drawer />
          </div>
        </div>
        <div className='hidden md:flex'>
          <Menu />
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <button
          type='button'
          onClick={toggleLanguage}
          aria-label={t('change-language')}
          title={t('change-language')}
          className='flex items-center gap-1 overflow-hidden rounded-md px-3 py-1.5 text-sm text-blue-500 dark:text-teal-500'
        >
          <RiTranslate className='h-4 w-4' />
          <span className='flex h-8 flex-col overflow-hidden'>
            <span
              className='flex flex-col transition-transform duration-200'
              style={{ transform: `translateY(${isPt ? '-2rem' : '0'})` }}
            >
              <span className='flex h-8 items-center'>EN</span>
              <span className='flex h-8 items-center'>PT</span>
            </span>
          </span>
        </button>
        <button
          type='button'
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          aria-label={isDark ? t('turn-on-the-light') : t('turn-off-the-light')}
          title={isDark ? t('turn-on-the-light') : t('turn-off-the-light')}
          className='rounded-md p-1.5 text-blue-500 dark:text-teal-500'
        >
          {isDark ? <RiSunLine className='h-4 w-4' /> : <RiMoonLine className='h-4 w-4' />}
        </button>
      </div>
    </header>
  );
};

export default Header;
