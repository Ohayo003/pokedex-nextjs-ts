import { IPokemonData } from "components/interface/pokemonData";

export default function PokemonObject(data: any): IPokemonData {
  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other.home.front_default,
    experience: data.base_experience,
    element: data.types,
  };
}
