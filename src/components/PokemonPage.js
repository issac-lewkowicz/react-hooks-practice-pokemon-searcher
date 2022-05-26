import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeList, setPokeList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(res => res.json())
      .then(setPokeList)
  }, [])

  const handleAddPokemon = (newPokemon) => {
    const updatedPokeList = [...pokeList, newPokemon]
    setPokeList(updatedPokeList);
  }

  const displayedPokeList = pokeList.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <br />
      <PokemonCollection pokeList={displayedPokeList} />
    </Container>
  );
}

export default PokemonPage;
