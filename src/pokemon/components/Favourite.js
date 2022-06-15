import React from "react";
import { selectState } from "../pokemonSlice";
import { useSelector } from "react-redux";

const Favourite = () => {
  const favourite = useSelector(selectState);

  return (
    <div>
      <h1> Favourite Pokemons</h1>
      {favourite.map()}
    </div>
  );
};

export default Favourite;
