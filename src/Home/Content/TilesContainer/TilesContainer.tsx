import { FC } from 'react';
import styles from './TilesContainer.module.less';
import { ATile } from '../../../model/a-tile.ts';
import Tile from './Tile/Tile.tsx';

interface TuilesContainerProps {
  title: string;
  content: ATile[];
}

const TilesContainer: FC<TuilesContainerProps> = ({ title, content }) => {
  return <>
    <h2 className={styles.Title}>{title}</h2>
    <div className={styles.TilesContainer}>
      {content.map((tile) => <Tile tile={tile}></Tile>)}
    </div>
  </>;
};

export default TilesContainer;
