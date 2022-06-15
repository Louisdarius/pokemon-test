import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { fetchPokemon, selectState } from "../redux/pokemonSlice";
import { useSelector, useDispatch } from "react-redux";
import PokemonCard from "./components/PokemonCard";

const Pokemon = () => {
  const data = useSelector(selectState);

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  const filtered = data.filter(d => d.name === search);

  const displayPokemons = (
    <Row className='my-6 p-3'>
      {data.map(d => (
        <Col key={d.url} sm={6} md={4} lg={3} xl={2}>
          <PokemonCard
            name={d.name}
            image={d.image}
            isFavourite={d.favourite}
          />
        </Col>
      ))}
    </Row>
  );

  return (
    <div>
      <h1>POKEMON APP </h1>
      {search}
      <input
        type='text'
        value={search}
        placeholder='Search by name'
        onChange={e => setSearch(e.target.value)}
      />
      {displayPokemons}
    </div>
  );
};
export default Pokemon;
