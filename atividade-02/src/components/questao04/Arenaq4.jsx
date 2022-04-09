import React, { Component } from "react";
class Arenaq4 extends Component {

    render() {
        return (
            <div>
                {
                    React.Children.map(
                        this.props.children,
                        (filho) => {
                            return React.cloneElement(
                                filho, { arena: this.props.arena }
                            )
                        }
                    )
                }

            </div>
        )
    }
}

export default Arenaq4