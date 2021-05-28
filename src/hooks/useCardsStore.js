import { useRootStore } from './useRootStore';

export function useCardsStore() {
  const { cardsStore } = useRootStore();

  return cardsStore;
}
