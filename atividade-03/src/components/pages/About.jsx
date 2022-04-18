import React from 'react';
import NegativeBrand from '../img/monocromatic_brand_negative.png';

const About = () => {
    return (
        <div className="container">
            <h2>Sobre nós</h2>
            <h6>Somos a melhor Universidade na área de TI do Brasil</h6>
            <img
                src={NegativeBrand}
                alt="Logo da Universidade Federal do Ceará"
                style={{ maxHeight: 500 }}
            />
        </div>
    );
};
export default About;
