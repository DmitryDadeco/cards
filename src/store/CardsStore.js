import { makeAutoObservable } from 'mobx';
import cookieCutter from 'cookie-cutter';

import { getUid } from '../utils/getUid';
import { COLUMNS_COUNT } from '../constants/cookies';
import { logger } from '../logger';

export class CardsStore {
  rowsCount = 1;

  columnsCount = 3;

  activeCard = { rowId: '', columnId: '' };

  constructor() {
    makeAutoObservable(this);
  }

  setRowsCount(rowsCount) {
    this.rowsCount = Number(rowsCount);
  }

  setColumnsCount(columnsCount) {
    this.columnsCount = Number(columnsCount);
  }

  updateColumnsCount(columnsCount) {
    cookieCutter.set(COLUMNS_COUNT, columnsCount);
    this.setColumnsCount(columnsCount);
  }

  activateCard(rowId, columnId) {
    this.activeCard = { rowId, columnId };
  }

  hydrate({ rowsCount, columnsCount }) {
    if (rowsCount) {
      this.setRowsCount(rowsCount);
    }

    if (columnsCount) {
      this.setColumnsCount(columnsCount);
    }
  }

  get cards() {
    try {
      const rows = [...Array(this.rowsCount)];
      const columns = [...Array(this.columnsCount)];

      return rows.map(() => ({
        id: getUid(),
        columns: columns.map(() => ({
          id: getUid(),
          label: '16:9',
        })),
      }));
    } catch (error) {
      logger.add(error);
      return [];
    }
  }
}
