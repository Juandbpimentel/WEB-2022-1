import { React, Component } from "react"


class Questao02 extends Component {
    render() {
        return (
            <div>
                <h1>Meu nome é Juan David Bizerra Pimentel</h1>
                <h1>Sou do curso de Engenharia de Computação</h1>
                <h1>E vim do Rio de Janeiro </h1>
            </div>
        )
    }
}

class Questao0204 extends Component {
    /*
    constructor(props) {
        super(props)
    }
    */


    render() {
        const { nome, curso, cidade } = this.props
        return (
            <div>
                <h1>Meu nome é {nome}</h1>
                <h1>Sou do curso de {curso}</h1>
                <h1>E vim do {cidade} </h1>
            </div>
        )
    }
}

export { Questao02, Questao0204 };