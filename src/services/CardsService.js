import { Ajax } from './Ajax';

export class CardsService extends Ajax {
  pathname = 'cards'

  fetchRowsCount = () => this.get(`${this.pathname}/rowsCount`)
}
