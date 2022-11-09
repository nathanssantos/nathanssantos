import { appWithTranslation, UserConfig } from 'next-i18next';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '@/components';

import nextI18NextConfig from '../../next-i18next.config.js';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default appWithTranslation(
  App,
  nextI18NextConfig as UserConfig & { i18n: { localeDetection: boolean } },
);
