import React from 'react';
import NegativeBrand from '../img/monocromatic_brand_negative.png';

const About = () => {
    return (
        <>
            <div
                className="container-fluid mx-auto"
                style={{ width: '100%', margin: 'auto' }}
            >
                <h2 style={{ textAlign: 'center' }}>Sobre nós</h2>
                <h6 style={{ textAlign: 'center' }}>
                    Somos a melhor Universidade na área de TI do Brasil
                </h6>
                <img
                    src={NegativeBrand}
                    alt="Logo da Universidade Federal do Ceará"
                    style={{
                        maxHeight: 450,
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                />
            </div>
        </>
    );
};
export default About;
