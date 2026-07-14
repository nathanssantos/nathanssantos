'use client';

import { ChakraProvider } from '@chakra-ui/react';
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
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from '../lib/i18n';
import rootStore from '../stores';
import { RootStoreContext } from '../stores/rootStore';
import theme from '../theme';

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => (
  <I18nextProvider i18n={i18n}>
    <ChakraProvider theme={theme}>
      <RootStoreContext.Provider value={rootStore}>{children}</RootStoreContext.Provider>
    </ChakraProvider>
  </I18nextProvider>
);

export default Providers;
