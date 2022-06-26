import React from 'react';
import foto from '../questao1/enemy.jpeg'

const Enemyq4 = (props) => {

    return (
        <div>
            <img src={foto} />
            <p>Nome: {props.name}</p>
            <p>Arena: {props.arena}</p>
        </div>
    )
}

export default Enemyq4;