import { CardsStore } from './CardsStore';

export class RootStore {
  constructor() {
    this.cardsStore = new CardsStore(this);
  }

  hydrate({ hydrationCardsStore }) {
    if (hydrationCardsStore) {
      this.cardsStore.hydrate(hydrationCardsStore);
    }
  }
}
