import { observer } from 'mobx-react-lite';
import React from 'react';
import { useCardsStore } from '../../hooks/useCardsStore';

import { Card } from '../Card';

import styles from './cards.module.css';

export const Cards = observer(() => {
  const cardsStore = useCardsStore();

  return (
    <div className={styles.cards}>
      {cardsStore.cards.map((row) => (
        <div className={styles.row} key={row.id}>
          {row.columns.map((column) => {
            const isActive = cardsStore.activeCard.rowId === row.id
              && cardsStore.activeCard.columnId === column.id;

            return (
              <Card
                key={column.id}
                label={column.label}
                rowId={row.id}
                columnId={column.id}
                isActive={isActive}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
});
