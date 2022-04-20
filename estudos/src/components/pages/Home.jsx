import React from 'react';
import homeImg from '../img/home.jpg';
const Home = () => {
    return (
        <div className="container-fluid">
            <h5>Sejam bem-vindos ao sistema de gerenciamento da UFC Quixadá</h5>
            <img
                src={homeImg}
                alt="Foto com o cenário da universidade federal campus quixadá"
                style={{ maxHeight: 500 }}
            />
        </div>
    );
};
export default Home;
