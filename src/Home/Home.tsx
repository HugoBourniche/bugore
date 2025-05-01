import { FC } from 'react';
import './Home.module.less';
import Header from './Header/Header.tsx';
import Content from './Content/Content.tsx';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className="Home">
    <Header title="Bugo.re" />
    <Content />
  </div>
);

export default Home;
