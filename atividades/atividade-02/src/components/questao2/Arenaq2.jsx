import React, { Component } from "react";

import Heroq2 from './Heroq2'
import Enemyq2 from './Enemyq2'

class Arenaq2 extends Component {

    render() {
        return (
            <div>
                < Heroq2 name='Tanjiro Kamado' url={this.props.urlHero} />
                < Enemyq2 name='Muzan Kibutsuji' url={this.props.urlEnemy} />
            </div>
        )
    }
}

export default Arenaq2