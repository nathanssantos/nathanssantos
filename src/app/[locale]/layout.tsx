import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Inter, Roboto_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

import { routing } from '../../i18n/routing';
import Providers from './providers';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

const description =
  'Software Engineer with 7+ years building web, mobile and desktop products with React, Node.js, TypeScript and AI. Portfolio of Nathan S. Santos — projects, open source and experience.';

export const metadata: Metadata = {
  metadataBase: new URL('https://nathanssantos.vercel.app'),
  title: 'Nathan S. Santos',
  description,
  authors: [{ name: 'Nathan S. Santos' }],
  openGraph: {
    type: 'website',
    title: 'Nathan S. Santos',
    description,
    url: 'https://nathanssantos.vercel.app/',
    images: ['/images/me.jpg'],
  },
  twitter: {
    card: 'summary',
    title: 'Nathan S. Santos',
    description,
    images: ['/images/me.jpg'],
  },
};

export const generateStaticParams = () => routing.locales.map((locale) => ({ locale }));

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
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
