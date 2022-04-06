import React from "react";
import Filho from "./Filho";

const Pai = () => {

    function mensagemDoMeuFilho(msg, grana) {
        alert(`Recebi do meu filho: ${msg}, pediu emprestado: ${grana}`)
    }

    return <div>
        <Filho notificarPai={mensagemDoMeuFilho} />
    </div>
}

export default Pai