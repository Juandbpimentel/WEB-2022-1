import React from 'react';
import foto from '../questao1/hero.jpeg'

const Heroq4 = (props) => {

    return (
        <div>
            <img src={foto} />
            <p>Nome: {props.name}</p>
            <p>Arena: {props.arena}</p>
        </div>
    )
}

export default Heroq4;