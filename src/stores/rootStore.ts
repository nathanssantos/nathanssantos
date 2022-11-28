import { configure } from 'mobx';
import { createContext } from 'react';

import UiStore from './uiStore';

class RootStore {
  uiStore = new UiStore();

  constructor() {
    configure({
      enforceActions: 'never',
    });
  }
}

export const RootStoreContext = createContext({} as RootStore);

export default RootStore;
