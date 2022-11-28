import { ReactElement } from 'react';

import rootStore from '../stores';
import { RootStoreContext } from '../stores/rootStore';

type RootStoreProviderProps = {
  children: ReactElement[];
};

const RootStoreProvider = ({ children }: RootStoreProviderProps) => (
  <RootStoreContext.Provider value={rootStore}>{children}</RootStoreContext.Provider>
);

export default RootStoreProvider;
