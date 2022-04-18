import React from 'react';
import { Button } from 'reactstrap';

const Filho = (props) => {
    return (
        <div>
            <Button color='danger' onClick={
                () => {
                    //alert('Juan')
                    props.notificarPai('Oi Pai, tudo bem?', 100)
                }
            }>
                Enviar mensagem pro meu pai
            </Button>
        </div>
    )
}

export default Filho