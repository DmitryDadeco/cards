import { enableStaticRendering } from 'mobx-react-lite';
import React, { createContext } from 'react';

import { RootStore } from '../store/RootStore';
import { isServer } from '../utils/isServer';

enableStaticRendering(isServer);

let store;

export const StoreContext = createContext(undefined);
StoreContext.displayName = 'StoreContext';

function initializeStore(initialData) {
  const newStore = store ?? new RootStore();

  if (initialData) {
    newStore.hydrate(initialData);
  }
  if (isServer) return newStore;

  if (!store) store = newStore;

  return newStore;
}

export function RootStoreProvider({
  children,
  hydrationData,
}) {
  const newStore = initializeStore(hydrationData);

  return (
    <StoreContext.Provider value={newStore}>{children}</StoreContext.Provider>
  );
}
