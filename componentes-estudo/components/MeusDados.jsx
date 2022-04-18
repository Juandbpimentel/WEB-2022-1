import { React, Component } from "react";



class MeusDados extends Component {
    render() {
        const { nome, idade, curso, cidade } = this.props
        return (
            <div>
                <h3>Meu nome é {nome}</h3>
                <h3>Tenho {idade} anos de idade</h3>
                <h3>Faço o curso {curso}</h3>
                <h3>E nasci em {cidade}</h3>
            </div>
        )
    }
}


export default MeusDados; 