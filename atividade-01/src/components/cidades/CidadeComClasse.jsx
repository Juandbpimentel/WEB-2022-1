import { React, Component } from 'react';

class CidadeComClasse extends Component {

    constructor(props) {
        super(props)
        this.state = { forta: 0, quixa: 0, limNort: 0, crat: 0 }
    }

    votarFortaleza() {
        this.setState({ forta: this.state.forta + 1 })
    }

    votarQuixada() {
        this.setState({ quixa: this.state.quixa + 1 })
    }

    votarLimoeiro() {
        this.setState({ limNort: this.state.limNort + 1 })
    }

    votarCrato() {
        this.setState({ crat: this.state.crat + 1 })
    }

    render() {

        return (
            <div>
                <h3>Fortaleza: {this.state.forta}</h3>
                <h3>Quixadá: {this.state.quixa}</h3>
                <h3>Limoeiro do Norte: {this.state.limNort}</h3>
                <h3>Crato: {this.state.crat}</h3>
                <button onClick={() => this.votarFortaleza()}>Votar em Fortaleza</button>
                <button onClick={() => this.votarQuixada()}>Votar em Quixadá</button>
                <button onClick={() => this.votarLimoeiro()}>Votar em Limoeiro do Norte</button>
                <button onClick={() => this.votarCrato()}>Votar em Crato</button>

            </div>
        )
    }

}

export default CidadeComClasse