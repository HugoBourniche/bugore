import { FC, useEffect, useState } from 'react';
import styles from './Content.module.less';
import TilesContainer from './TilesContainer/TilesContainer.tsx';
import { TilesJsonObject } from '../../model/tiles-json-object.ts';
import { ReadJsonUtils } from '../../utils/read-json.utils.ts';

interface ContentProps {}

const template = (tiles: TilesJsonObject | null) => (
  <>
    <div className={`${styles.Content} text-size-m text-center`}>
      Site en cours de construction
    </div>
    {tiles && tiles.gameTiles && <TilesContainer title={'Jeux'} content={tiles.gameTiles} />}
    {tiles && tiles.videoTiles && <TilesContainer title={'Videos'} content={tiles.videoTiles} />}
  </>
);

const Content: FC<ContentProps> = () => {
  const [tiles, setTiles] = useState<TilesJsonObject | null>(null);

  useEffect(() => {
    const fetchTiles = async () => {
      try {
        const json = await ReadJsonUtils.readTiles();
        const convertedTiles = ReadJsonUtils.convertTilesJsonObject(json);
        setTiles(convertedTiles);
      } catch (error) {
        console.error('Error when reading tiles: ' + error);
      }
    };
    fetchTiles();
  }, []);

  return template(tiles);
};

export default Content;
