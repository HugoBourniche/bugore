import { FC } from 'react';
import styles from './Tile.module.less';

interface TileProps {}

const Tile: FC<TileProps> = () => (
  <div className={styles.Tile}>Tile Component</div>
);

export default Tile;
