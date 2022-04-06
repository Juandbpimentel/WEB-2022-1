import React from 'react';

const CidadeSimples = (props) => {
    let forta = 0, quixa = 0, limNort = 0, crat = 0
    return (
        <div>
            <h3>Fortaleza: {forta}</h3>
            <h3>Quixadá: {quixa}</h3>
            <h3>Limoeiro do Norte: {limNort}</h3>
            <h3>Crato: {crat}</h3>
            <button onClick={() => ++forta}>Votar em Fortaleza</button>
            <button onClick={() => ++quixa}>Votar em Quixadá</button>
            <button onClick={() => ++limNort}>Votar em Limoeiro do Norte</button>
            <button onClick={() => ++crat}>Votar em Crato</button>

        </div>
    )
}

export default CidadeSimples