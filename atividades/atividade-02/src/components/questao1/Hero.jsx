import React from 'react';
import Foto from './hero.jpeg'
const Hero = (props) => {

    return (
        <div>
            <img src={Foto} />
            <p>Nome: {props.name}</p>
        </div>
    )
}

export default Hero;