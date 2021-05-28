import { useContext } from 'react';

import { StoreContext } from '../providers/RootStoreProvider';

export function useRootStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }

  return context;
}
