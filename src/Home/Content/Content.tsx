import { FC } from 'react';
import styles from './Content.module.less';
import TilesContainer from './TilesContainer/TilesContainer.tsx';

interface ContentProps {}

const Content: FC<ContentProps> = () => {


  return (
  <>
    <div className={styles.Content + " text-size-m text-center"}>
      Site en cours de construction
    </div>
    <TilesContainer title={"Jeux"}/>
  </>
)
};

export default Content;
