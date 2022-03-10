import { IPokemonData, IPokemonMoves } from "components/interface/pokemonData";
import { useState } from "react";
import { GetPokemonDataList } from "types/GetPokemonDataList";

type PaginationType = {
  data: GetPokemonDataList["pokemon"];
};

export const usePagination = (
  itemsPerPage: number,
  { data }: PaginationType
) => {
  const copyData = [...data];
  const [currentPage, setCurrentPage] = useState(1);

  function currentData() {
    const lastIndexOfPokemonList = currentPage * itemsPerPage;
    const firstIndexOfPokemonList = lastIndexOfPokemonList - itemsPerPage;
    return copyData
      .sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      })
      .slice(firstIndexOfPokemonList, lastIndexOfPokemonList);
  }

  function nextPage() {
    setCurrentPage(() => currentPage + 1);
  }
  function previousPage() {
    setCurrentPage(() => currentPage - 1);
  }

  return { currentData, currentPage, nextPage, previousPage };
};
