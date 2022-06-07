import React from 'react';
const Heroq2 = (props) => {

    return (
        <div>
            <img src={props.url} />
            <p>Nome: {props.name}</p>
        </div>
    )
}

export default Heroq2;