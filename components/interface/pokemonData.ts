export interface IPokemonData {
  id: number;
  name: string;
  image: string;
  experience: number;
  element: {
    type: {
      name: string;
    };
  }[];
}
[];

export interface IPokemonDetails {
  id: number;
  name: string;
  image: string;
  abilities: {
    ability: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  element: {
    type: {
      name: string;
    };
  }[];
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
  height: number;
  base_experience: number;
}

export interface IPokemonMoves {
  name: string;
  power: number;
  accuracy: number;
}
[];
