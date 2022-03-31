import { React, Component } from 'react';

const CidadeComHooks = (props) => {

    const [forta, setForta] = useState(0);
    const [quixa, setQuixa] = useState(0);
    const [limo, setLimo] = useState(0);

    function votarFortaleza() {
        setForta(forta + 1)
    }

    function votarQuixada() {
        setQuixa(quixa + 1);
    }

    function votarLimoeiro() {
        setLimo(limo + 1);
    }

    return (
        <div>
            <h3>Fortaleza: {forta}</h3>
            <h3>Quixadá: {quixa}</h3>
            <h3>Limoeiro do Norte: {limo}</h3>
            <button onClick={() => votarFortaleza()}>Votar em Fortaleza</button>
            <button onClick={() => votarQuixada()}>Votar em Quixadá</button>
            <button onClick={() => votarLimoeiro()}>Votar em Limoeiro do Norte</button>
        </div>
    )

}

export default CidadeComClasse