'use client';

import { useSyncExternalStore } from 'react';

let visible = false;
const listeners = new Set<() => void>();

export const setLogoVisible = (next: boolean) => {
  if (visible === next) return;

  visible = next;
  listeners.forEach((listener) => listener());
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
};

export const useLogoVisible = () =>
  useSyncExternalStore(
    subscribe,
    () => visible,
    () => false,
  );
