import React from 'react';
import homeImg from '../img/home.jpg';
const Home = () => {
    return (
        <div
            className="container-fluid mx-auto"
            style={{ width: '100%', margin: 'auto' }}
        >
            <h5 style={{ textAlign: 'center' }}>
                Sejam bem-vindos ao sistema de gerenciamento da UFC Quixadá
            </h5>
            <img
                src={homeImg}
                alt="Foto com o cenário da universidade federal campus quixadá"
                style={{
                    maxHeight: 500,
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            />
        </div>
    );
};
export default Home;
