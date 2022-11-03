import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");
  const handler = (event) => {
    setCity(event.target.value);
  };
  return (
    <form>
      <input type="text" value={city} onChange={handler} />
      <p>Welcome to the city of {city}</p>
    </form>
  );
}

export default PokemonCity;
