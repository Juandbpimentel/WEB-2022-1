import './App.css';

/*
import Personagem from './components/hardcoded/Personagem';
import Casa from './components/hardcoded/Casa';
import Informacoes from './components/Informacoes';
import {Questao01} from './components/Questao01'
import {Questao02} from './components/Questao02'
import Questao03 from './components/Questao03'
import Questao04 from './components/Questao04'
import IMC from './components/imc/IMC'
*/

import IMClasse from './components/imc/IMCClasse'
/* Questão 01 :
function App(){
  return(
    <div className='App'>
    <Questao01/>
    </div>
  )
}

*/

/* Questão 02:
function App(){
  return(
    <div className='App'>

    <Questao02/>
    </div>
  )
}
*/

 /* Questão 03:
function App(){
  return(
    <div className='App'>
    <Questao03/>
    </div>
  );
}
 */

/* Questão 04
function App(){
  return(
    <div className='App'>
      <Questao04/>
    </div>
  );
}
*/


/* Estudo Children
function App(){
  return(
    <div className='App'>
      <Pai nome='Juan' >
        <Informacoes />
      </Pai>
    </div>
  );
}
*/
/*
function App(){
  return(
    <div className='App'>
      <Casa show='Game of Thrones' casa='Genérica' horario='Nobre'>
        <Personagem nome='John Snow' />
        <Personagem nome='Tyrion' />
        <Personagem nome='Daeneris' />
        <Personagem nome='George R. R. Martin' />
      </Casa>
    </div>
  );
}
*/

function App(){
  return(
    <div className='App'>
      <IMClasse altura={1.62} peso={74}/>      
    </div>
  );
}

export default App;
