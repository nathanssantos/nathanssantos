import { action, makeObservable, observable } from 'mobx';

export default class DisclosureStore {
  isOpen = false;

  constructor() {
    makeObservable(this, {
      isOpen: observable,

      close: action,
      open: action,
      toggle: action,
    });
  }

  close = () => {
    this.isOpen = false;
  };

  open = () => {
    this.isOpen = true;
  };

  toggle = (isOpen = this.isOpen) => {
    this.isOpen = !isOpen;
  };
}
