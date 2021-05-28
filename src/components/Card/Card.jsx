import { observer } from 'mobx-react-lite';
import { useCardsStore } from '../../hooks/useCardsStore';

import styles from './card.module.css';

export const Card = observer(({
  rowId,
  columnId,
  label,
  isActive,
}) => {
  const cardsStore = useCardsStore();

  const onClick = () => {
    cardsStore.activateCard(rowId, columnId);
  };

  return (
    <div className={styles.cardWrapper}>
      <div
        className={`${styles.card} ${isActive ? styles.active : ''}`}
        onClick={onClick}
        role="button"
      >
        <span className={styles.labelWrapper}>
          {label}
        </span>
      </div>
    </div>
  );
});
