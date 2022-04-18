import React from "react";

const IMC = (props) => {
    function calcularIMC(altura, peso) {
        return peso / (altura * altura)
    }
    const { altura, peso } = props
    return (
        <div>
            <h3>A minha altura é {altura}m e o meu peso é {peso}kg</h3>
            <h3>O meu IMC é {calcularIMC(props.altura, props.peso)}</h3>
        </div>
    )
}

export default IMC