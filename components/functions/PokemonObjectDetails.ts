import { IPokemonDetails } from "components/interface/pokemonData";

export default function PokemonObjectDetails(data: any): IPokemonDetails {
  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other.home.front_default,
    abilities: data.abilities,
    stats: data.stats,
    weight: data.weight,
    height: data.height,
    element: data.types,
    base_experience: data.base_experience,
  };
}
