import React, {useState} from 'react';
import './App.css';
import Pokemon from './components/Pokemon';



function App() {
  const [pokemon, setPokemon] = useState([]);
  const ShowPokemon = () => {
    console.log("Show Pokemon!");
    fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
        .then(response => {
            return response.json()
        })
        .then(jsonResponse => {
            setPokemon({
                allPokemon: jsonResponse.results
            })
        })
        .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <button onClick={ShowPokemon}>Show Me Pokemon</button>
      <Pokemon pokemon={pokemon}/>
    </div>
  );
}

export default App;
