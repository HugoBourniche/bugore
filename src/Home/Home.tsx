import React, {FC} from 'react';
import './Home.less';
import Header from "./Header/Header.tsx";

interface HomeProps {}

const Home: FC<HomeProps> = () => (
    <div className="container">
        <Header title='Bugo.re'/>
    </div>
);

export default Home;
