import Router from "next/router";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import LoadingSpinner from "components/LoadingSpinner";
import PokemonList from "components/Pokemons/PokemonList";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_DATA_LIST } from "../../../graphql/queries/pokemonlist";
import { GetPokemonDataList } from "../../../types/GetPokemonDataList";

// type PokemonPropsType = {
//   data: GetPokemonDataList[];
// };

const Pokemon = () => {
  const { loading, data, error } = useQuery<GetPokemonDataList>(
    GET_POKEMON_DATA_LIST
  );

  const [isLoading, setIsLoading] = useState(false);

  if (loading && !data) {
    return (
      <Box height="inherit">
        <LoadingSpinner />
      </Box>
    );
  }
  if (error) {
    return (
      <Box height="inherit">
        <h1>Something went wrong while Fetching Data</h1>
      </Box>
    );
  }
  return (
    <Box height="inherit">
      {data && <PokemonList data={data.pokemon} fetchType="csr" />}
    </Box>
  );
};

export default Pokemon;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const data = await fetchLimitPokemons();

//   return {
//     props: {
//       data: data,
//     },
//   };
// };
