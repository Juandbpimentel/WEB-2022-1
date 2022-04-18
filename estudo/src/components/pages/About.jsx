import React from 'react';
import foto from '../img/brand.png';

const About = () => {
    return (
        <div>
            <h2>Sobre nós</h2>
            <h6>Somos a melhor Universidade na área de TI do Brasil</h6>
            <img
                src={foto}
                alt="Logo da Universidade Federal do Ceará"
                style={{ maxHeight: 500 }}
            />
        </div>
    );
};
export default About;
