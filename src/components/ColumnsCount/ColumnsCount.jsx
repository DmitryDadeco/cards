import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { useCardsStore } from '../../hooks/useCardsStore';

import styles from './columnsCount.module.css';

export const ColumnsCount = observer(() => {
  const cardsStore = useCardsStore();
  const [count, setCount] = useState(cardsStore.columnsCount);

  const onChangeCount = ({ target }) => {
    setCount(Number(target.value));
  };

  const onUpdate = () => {
    cardsStore.updateColumnsCount(count);
  };

  return (
    <div>
      <input className={styles.input} type="number" onChange={onChangeCount} value={count} min={1} />
      <button className={styles.button} type="button" onClick={onUpdate}>
        update
      </button>
    </div>
  );
});
