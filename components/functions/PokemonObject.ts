import { IPokemonData } from "components/interface/pokemonData";

type PokemonObjectType = Record<string, any>;

export default function PokemonObject(data: PokemonObjectType): IPokemonData {
  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other.home.front_default,
    experience: data.base_experience,
    element: data.types,
  };
}
