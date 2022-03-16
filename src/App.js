import React, {useState} from 'react';
import './App.css';
import Pokemon from './components/Pokemon';
import axios from 'axios';


// normal aka vanilla fetch method
function App() {
  const [pokemon, setPokemon] = useState([]);
  const ShowPokemon = () => {
    console.log("Show Pokemon!");
    fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
        .then(response => {
            return response.json()
        })
        .then(jsonResponse => {
            console.log(jsonResponse);
            setPokemon({
                allPokemon: jsonResponse.results
            })
        })
        .catch(err => console.log(err));
  };

  //axios method
  const axiousShowPokemon = () => {
    console.log("Show Pokemon Axios Style!");
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=898')
      .then((response) => {
        console.log(response.data);
        setPokemon({
          allPokemon: response.data.results
        })
      })
      .catch(err => console.log(err))
  };

  return (
    <div className="App">
      <button onClick={ShowPokemon}>Show Me Pokemon</button>
      <button onClick={axiousShowPokemon}>Show Me Pokemon Axios Style!</button>
      <Pokemon pokemon={pokemon}/>
    </div>
  );
}

export default App;
