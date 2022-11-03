import React, { useState, useEffect } from "react";

function PokemonMoves(props) {
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemonData(data);
      });
  }, [props.pokemonId]);
  return (
    <>
      {pokemonData ? (
        <>
          {" "}
       
          <p>{pokemonData.name}'s moves:</p>
          <ul>
            {pokemonData.moves.map((move, index) => {
              return <li key={index}>{move.move.name}</li>;
            })}
          </ul>
        </>
      ) : null}
    </>
  );
}

export default PokemonMoves;
