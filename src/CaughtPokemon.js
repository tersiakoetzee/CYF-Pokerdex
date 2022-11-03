import React, { useState } from "react";

function CaughtPokemon(props) {
  const [caught, setCaught] = useState([]);
  const catchPokemon = () => {
    if (pokemonNameInput !== "") {
      setCaught(caught.concat(pokemonNameInput));
      setPokemonNameInput("");
    }
  };
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  return (
    <div className="caughtContainer">
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <ul>
        {caught.map((pokemon, index) => {
          return <li key={index}>{pokemon}</li>;
        })}
      </ul>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={(event) => setPokemonNameInput(event.target.value)}
      ></input>
      <button className="butt" onClick={catchPokemon}>
        Catch Pokemon
      </button>
    </div>
  );
}

export default CaughtPokemon;
