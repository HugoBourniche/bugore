import { FC } from 'react';
import styles from './TilesContainer.module.less';

interface TuilesContainerProps {
  title: string;
}

const TilesContainer: FC<TuilesContainerProps> = () => (
  <div className={styles.TilesContainer}>
    TilesContainer Component
  </div>
);

export default TilesContainer;
