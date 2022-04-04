import React, { Component } from "react";
class Arenaq4 extends Component {

    render() {
        return (
            <div>
                {
                    React.Children.map(
                        this.props.children,
                        (personagem) => {
                            return React.cloneElement(
                                personagem, { arena: this.props.arena }
                            )
                        }
                    )
                }

            </div>
        )
    }
}

export default Arenaq4