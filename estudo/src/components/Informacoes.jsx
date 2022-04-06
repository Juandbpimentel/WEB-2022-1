import { React, Component } from "react";

/*



const Informacoes = (props) => {
    return (
        <div>
            <h1>Nome: {props.nome}</h1>
            <h1>Curso: {props.curso}</h1>
            <h1>Turno: {props.turno}</h1>
            <h1>Universidade: {props.universidade}</h1>
            </div>
            )
        }
        */
class Informacoes extends Component {
    render() {
        return (
            <div>
                <h1>Nome: {this.props.nome}</h1>
                <h1>Curso: {this.props.curso}</h1>
                <h1>Turno: {this.props.turno}</h1>
                <h1>Universidade: {this.props.universidade}</h1>
            </div>
        )
    }
}






export default Informacoes