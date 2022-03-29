import React, { Component } from "react";


class IMCClasse extends Component {
    calcularIMC(altura, peso) {
        return peso / (altura * altura)
    }

    resultado(imc) {
        if (imc < 18.5) {
            return 'Abaixo do peso'
        } else if (imc >= 18.5 && imc <= 24.9) {
            return 'Você está saudável'
        } else if (imc >= 25 && imc < 30) {
            return 'Você está acima do peso'
        } else if (imc >= 30 && imc < 40) {
            return 'Você está obeso'
        } else {
            return 'Você está com obesidade grave'
        }
    }

    render() {
        const { altura, peso } = this.props
        const { calcularIMC } = this
        const imc = calcularIMC(altura, peso)
        return (
            <div>
                <h5>A minha altura é {altura}m e o meu peso é {peso}kg</h5>
                <h5>O meu IMC é {calcularIMC(altura, peso)}</h5>
                <h1>{this.resultado(calcularIMC(altura, peso))}</h1>
            </div>

        )
    }
}
/*
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

*/


export default IMCClasse