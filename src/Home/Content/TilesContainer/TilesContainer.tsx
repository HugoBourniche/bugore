import { FC } from 'react';
import styles from './TilesContainer.module.less';

interface TuilesContainerProps {
  title: string;
}

const TilesContainer: FC<TuilesContainerProps> = ({ title }) => {
  return <div className={styles.TilesContainer}>{title}</div>;
};

export default TilesContainer;
