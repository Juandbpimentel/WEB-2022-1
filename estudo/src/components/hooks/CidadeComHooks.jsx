import { React, Component, useState, useEffect } from 'react';

const CidadeComHooks = (props) => {

    const [forta, setForta] = useState(0);
    const [quixa, setQuixa] = useState(0);
    const [limo, setLimo] = useState(0);
    const [destaque, setDestaque] = useState('Empate');

    function votarFortaleza() {
        setForta(forta + 1)
    }

    function votarQuixada() {
        setQuixa(quixa + 1);
    }

    function votarLimoeiro() {
        setLimo(limo + 1);
    }

    function limparVotos() {
        setForta(0);
        setQuixa(0);
        setLimo(0);
    }

    function cidadeDestaque(cidade) {
        if (cidade === 1)
            setDestaque("Fortaleza");
        else if (cidade === 2)
            setDestaque("Quixadá")
        else if (cidade === 3) {
            setDestaque("Limoeiro do Norte")
        } else
            setDestaque("Empate")
    }

    useEffect(() => {

        if (forta > quixa) {
            if (forta > limo) {
                return cidadeDestaque(1);
            } else if (forta === limo) {
                return cidadeDestaque(0);
            } else {
                return cidadeDestaque(3);
            }
        } else if (quixa > limo) {
            if (quixa === forta) {
                return cidadeDestaque(0);
            } else {
                return cidadeDestaque(2);
            }
        } else if (limo > forta) {
            if (limo === quixa) {
                return cidadeDestaque(0);
            } else {
                return cidadeDestaque(3)
            }
        } else {
            return cidadeDestaque(0);
        }


    })

    return (
        <div>
            <h3>Fortaleza: {forta}</h3>
            <h3>Quixadá: {quixa}</h3>
            <h3>Limoeiro do Norte: {limo}</h3>
            <h2>A cidade que está a frente nos votos é: {destaque}</h2>
            <button onClick={() => votarFortaleza()}>Votar em Fortaleza</button>
            <button onClick={() => votarQuixada()}>Votar em Quixadá</button>
            <button onClick={() => votarLimoeiro()}>Votar em Limoeiro do Norte</button>
            <button onClick={() => limparVotos()}>Limpar</button>

        </div>
    )

}

export default CidadeComHooks