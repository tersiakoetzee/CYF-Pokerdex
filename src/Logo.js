import React from "react";




const Logo = ({appName, handleClick}) => {



  return (
    <header>
      <div className="logoContainer">
        <h1>{appName}</h1>
        <img
          onClick={handleClick}
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="this"
        />
      </div>
    </header>
  );
};


export default Logo