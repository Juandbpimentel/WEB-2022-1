import React from "react";
import { Component } from "react";

/*
const MeusDadosProps = (props) => {
    return (
        <div>
            <h1> Meu nome é {props.name} </h1>
            <h1> Meu curso é {props.curso} </h1>
        </div>
    )
}

*/


class MeusDadosProps extends Component {
    render(props) {
        return (
            <div>
                <h1> Meu nome é {props.name} </h1>
                <h1> Meu curso é {props.curso} </h1>
            </div>
        )
    }
}
export default MeusDadosProps