import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity"
import "./App.css";


function App() {
const caughtList = ["Chassis","Twilight","Micheal",]

const logWhenClicked = () => {
    console.log("this");
  }


  return (
    <div className="container">
      <Logo appName="Tersia's Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} caughtList={caughtList}/>
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}


export default App;
