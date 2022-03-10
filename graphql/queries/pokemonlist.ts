import { gql } from "@apollo/client";

export const GET_POKEMON_DATA = gql`
  fragment GetPokemonData on pokemon_v2_pokemon {
    id
    name
  }
`;

export const GET_POKEMON_DATA_LIST = gql`
  query GetPokemonDataList {
    pokemon_v2_pokemon {
      ...GetPokemonData
    }
  }
  ${GET_POKEMON_DATA}
`;

export const GET_POKEMON = gql`
  query GetPokemon($id: Int!) {
    pokemon_v2_pokemon_by_pk(id: $id) {
      ...GetPokemonData
    }
  }
  ${GET_POKEMON_DATA}
`;
