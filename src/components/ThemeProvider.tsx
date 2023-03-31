import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react';
import '@fontsource/inter/100.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/roboto-mono/300.css';
import '@fontsource/roboto-mono/400.css';
import '@fontsource/roboto-mono/500.css';
import '@fontsource/roboto-mono/700.css';
import { GetServerSideProps } from 'next';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';

import theme from '../theme';

type ThemeProviderProps = {
  cookies: AppProps['pageProps']['cookies'];
  children: ReactElement;
};

const ThemeProvider = ({ cookies, children }: ThemeProviderProps) => {
  const colorModeManager =
    typeof cookies === 'string' ? cookieStorageManagerSSR(cookies) : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  };
};

export default ThemeProvider;
