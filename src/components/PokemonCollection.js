import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeList}) {
  const pokeCards = pokeList.map((pokemon)=> <PokemonCard {...pokemon} key={pokemon.id} />);
  return (
    <Card.Group itemsPerRow={6}>
      {pokeCards}
    </Card.Group>
  );
}

export default PokemonCollection;
