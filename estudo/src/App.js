import './App.css';
import MeusDados from './components/MeusDados';
import Curso from './components/Curso';

function App() {
  return (
    <div className="App">
      
      <Curso curso='Engenharia de Computação'>
        <MeusDados nome='Juan Pimentel' idade={20} cidade='São João de Meriti'/>
      </Curso>
    </div>
  );
}

export default App;
