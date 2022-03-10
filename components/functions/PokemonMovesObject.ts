import { IPokemonMoves } from "components/interface/pokemonData";



export default function PokemonMovesObject(data: any): IPokemonMoves {
  return {
    name: data.name,
    power: data.power,
    accuracy: data.accuracy,
  };
}
