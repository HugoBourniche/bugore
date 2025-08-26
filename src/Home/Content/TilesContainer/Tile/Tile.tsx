import { FC } from 'react';
import styles from './Tile.module.less';
import { ATile } from '../../../../model/a-tile.ts';
import Card from '@mui/material/Card';
import { CardMedia } from '@mui/material';
import { TILE_HEIGHT, TILE_WIDTH } from '../../../../utils/constants.ts';

interface TileProps {
  tile: ATile;
}

const Tile: FC<TileProps> = ({ tile }) => {
  return (
    <>
      <a href={tile.link}>
        <Card className={styles.Tile} sx={{ width: TILE_WIDTH }}>
          <CardMedia
            component="img"
            height={TILE_HEIGHT}
            image={tile.img}
            alt={tile.title}
          />
        </Card>
      </a>
    </>
  );
};

export default Tile;
