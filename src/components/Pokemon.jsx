import React from 'react';

const Pokemon = (props) => {

    
    const pokemon = props.pokemon;
    return (
        <div>
            {pokemon.allPokemon ? pokemon.allPokemon.map((onePokemon, i)=> {
                return (
                    <div key={i}>{onePokemon.name}</div>
                )
            }):
            null}
        </div>
    );
}
export default Pokemon;