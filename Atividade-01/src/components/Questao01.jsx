import React from "react"
/*
const Questao01 = () => {
    return (
        <div>
            <h1>Meu nome é Juan David Bizerra Pimentel</h1>
            <h1>Sou do curso de Engenharia de Computação</h1>
            <h1>E vim do Rio de Janeiro </h1>
        </div>
    )
}
*/
const Questao01 = (props) => {
    const { nome, curso, cidade } = props
    return (
        <div>
            <h1>Meu nome é {nome}</h1>
            <h1>Sou do curso de {curso}</h1>
            <h1>E vim do {cidade} </h1>
        </div>
    )
}

export default Questao01