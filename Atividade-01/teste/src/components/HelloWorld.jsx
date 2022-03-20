import React from 'react';


// Versão 0
/*

function OlaMundo() {
    return (
        <div>
            <h2>Desenvolvimento de Software para WEB - SI</h2>
        </div>
    );
}
export default OlaMundo;


*/

//Versão 1
/*

export default () => {
    return (
        <div>
            <h2>Desenvolvimento de Software para WEB - SI</h2>
        </div>
    );
}

*/

//Versão 2

/*
export default (props) =>
    <div>
        <h2>Desenvolvimento de Software para WEB - SI</h2>
    </div>
*/

//Versão 3



/*
*/

export default (props) =>
    <div>
        <h2>Desenvolvimento de Software para WEB - SI</h2>
        <h5>Nome: {props.name} Idade: {props.age}</h5>
    </div>

