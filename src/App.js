
import './App.css';
import {Lista} from './Lista/Index'
import {Lista2} from './Lista2/indexs'

export default function App() {

  const ListaDePokemons = [
    'Charizard',
    'Electabuz',
    'Wipebel',
    'Wigle'
  ]

  
  for(let i=0; i <= 10; i++){
    <li>{i}</li>
  }


  return (
    <div className="App">
      <h1>Testando o React</h1>
      
      <Lista Lista={ListaDePokemons} />
      <Lista2/>
    </div>
  );
}


