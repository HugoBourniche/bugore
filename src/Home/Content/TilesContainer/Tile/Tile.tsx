import { FC } from 'react';
import styles from './Tile.module.less';
import {ATile} from "../../../../model/a-tile.ts";
import Card from '@mui/material/Card';

interface TileProps {
    tile: ATile;
}

const Tile: FC<TileProps> = ({tile}) => {
    return <>
        <Card className={styles.Tile} sx={{ width: 200 }}>
            <div>{tile.title}</div>
        </Card>
    </>
};

export default Tile;
