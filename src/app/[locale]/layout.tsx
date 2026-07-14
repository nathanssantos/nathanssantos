import type { Metadata, Viewport } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Inter, Roboto_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

import site from '../../constants/site';
import { routing } from '../../i18n/routing';
import Providers from './providers';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

const ogLocales: Record<string, string> = { en: 'en_US', pt: 'pt_BR' };

export const viewport: Viewport = {
  themeColor: '#222222',
};

export const generateMetadata = async ({ params }: LocalePageProps): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const title = t('title');
  const description = t('description');

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    authors: [{ name: site.name }],
    alternates: {
      canonical: `/${locale}`,
      languages: { en: '/en', pt: '/pt' },
    },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title,
      description,
      url: `/${locale}`,
      locale: ogLocales[locale],
      alternateLocale: routing.locales
        .filter((item) => item !== locale)
        .map((item) => ogLocales[item]),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
};

export const generateStaticParams = () => routing.locales.map((locale) => ({ locale }));

type LocaleLayoutProps = LocalePageProps & {
  children: ReactNode;
};

const LocaleLayout = async ({ children, params }: LocaleLayoutProps) => {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
