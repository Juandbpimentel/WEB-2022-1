import React from 'react';
import Foto from './enemy.jpeg'

const Enemy = (props) => {

    return (
        <div>
            <img src={Foto} />
            <p>Nome: {props.name}</p>
        </div>
    )
}

export default Enemy;