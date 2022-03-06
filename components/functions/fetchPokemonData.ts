import React from "react";
import { IPokemonData, IPokemonDetails } from "../interface/pokemonData";
import PokemonObject from "./PokemonObject";
import PokemonObjectDetails from "./PokemonObjectDetails";

export const fetchLimitPokemons = async () => {
  const data = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
  );
  const jsonData = await data.json();
  const pokemonobj: IPokemonData[] = [];

  if (jsonData) {
    for (const pokemon of jsonData.results) {
      const pokemonData = await fetch(pokemon.url);
      const pokeJsonData = await pokemonData.json();
      const parsed = PokemonObject(pokeJsonData);

      pokemonobj.push(parsed);
    }
  }

  return pokemonobj;
};

export const fetchPokemonDetails = async (id: any) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${parseInt(id)}`);
  const jsonData = await data.json();

  const pokemonobj = PokemonObjectDetails(jsonData);

  return pokemonobj;
};
