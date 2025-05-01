import { FC } from 'react';
import styles from './Content.module.less';
import TilesContainer from './TilesContainer/TilesContainer.tsx';
import { TilesJsonObject } from '../../model/tiles-json-object.ts';
import { ReadJsonUtils } from '../../utils/read-json.utils.ts';

interface ContentProps {}

const template = (tiles: TilesJsonObject | null) => (
  <>
    <div className={styles.Content + ' text-size-m text-center'}>
      Site en cours de construction
    </div>
    {tiles && tiles.gameTiles && <TilesContainer title={'Jeux'} />}
  </>
);

const Content: FC<ContentProps> = () => {
  let tiles = null;
  ReadJsonUtils.readTiles().then((json: any) => {
    tiles = ReadJsonUtils.convertTilesJsonObject(json);
    console.log(tiles);
  });
  return template(tiles);
};

export default Content;
