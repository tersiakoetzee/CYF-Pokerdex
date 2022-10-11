import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {

  return (
    <div>
      <Logo appName="Tersia's Pokedex" />
      <BestPokemon abilities = {["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date = {new Date().toLocaleDateString()} />
    </div>
  );
}


export default App;
