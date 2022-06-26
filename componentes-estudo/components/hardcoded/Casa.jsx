import React, { Component } from "react";

/* 
const Casa = props => {
    return (
        <div>

        </div>
    )
}

*/



class Casa extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.show} no horario {this.props.horario}</h1>
                {
                    React.Children.map(
                        this.props.children,
                        (personagem) => {
                            return React.cloneElement(
                                personagem,
                                { casa: this.props.casa }
                            )
                        }
                    )
                }
            </div>
        )
    }
}





export default Casa