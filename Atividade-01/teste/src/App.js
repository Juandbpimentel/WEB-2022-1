import './App.css';
import OlaMundo from './components/HelloWorld';
import {DirtyJuan as Juan, OldSarah as Sarah} from './components/Dark'
import Time from './components/dark/Time';
import Character from './components/dark/Character';



function App() {
  return (
    <div>
      <OlaMundo name ='Juan David Bizerra Pimentel' age='20'/>
      <Juan year={2019}/>
      <Sarah year={2020}/>
      {/*<Time/>*/}
      <Time>
        <Character name='John Snow' time={1986} />
        <Character name='Daenerys Targaryen' time={1996} />
        <Character name='Bran Stark' time={2001} />
      </Time>
    </div>
  );
}



export default App;

