import { gql } from "@apollo/client";

// export const CORE_GET_POKEMON_DATA = gql`
//   fragment GetPokemonData on pokemon_v2_pokemon {
//     id
//     name
//   }
// `;

export const GET_POKEMON_DATA_LIST = gql`
  query GetPokemonDataList {
    pokemon: pokemon_v2_pokemon(limit: 100, offset: 100) {
      id
      name
      base_experience
      element: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
        }
      }
    }
  }
`;

export const GET_POKEMON = gql`
  query GetPokemon($id: Int!) {
    pokemon: pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      height
      weight

      element: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
        }
      }
      abilities: pokemon_v2_pokemonabilities {
        ability: pokemon_v2_ability {
          name
        }
      }

      stats: pokemon_v2_pokemonstats {
        base_stat
        stat: pokemon_v2_stat {
          name
        }
      }
    }
  }
`;
