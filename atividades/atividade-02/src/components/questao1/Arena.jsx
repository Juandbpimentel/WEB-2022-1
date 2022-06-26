import React, { Component } from "react";
import Enemy from "./Enemy";
import Hero from "./Hero";

class Arena extends Component {

    render() {
        return (
            <div>
                <Hero name='Tanjiro Kamado' />
                <Enemy name='Muzan Kibutsuji' />
            </div>
        )
    }
}

export default Arena