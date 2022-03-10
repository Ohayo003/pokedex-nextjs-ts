import React from "react";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import LoadingSpinner from "components/LoadingSpinner";
import PokemonDetails from "components/Pokemons/PokemonDetails";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "graphql/queries/pokemonlist";
import { GetPokemon } from "types/GetPokemon";

// type PokemonIdType = {
//   data: IPokemonDetails;
// };

const PokemonId = () => {
  const { query } = useRouter();
  const { loading, data, error } = useQuery<GetPokemon>(GET_POKEMON, {
    variables: { id: query.pokemonId },
  });

  if (loading) {
    return (
      <Box height="inherit" width="inherit">
        <LoadingSpinner />
      </Box>
    );
  }
  if (error) {
    return (
      <Box height="inherit" width="inherit">
        <h1>Failed Fetching Data {query.pokemonId}</h1>
      </Box>
    );
  }
  return (
    <Box height="inherit" width="inherit">
      {data && <PokemonDetails details={data.pokemon} />}
    </Box>
  );
};

export default PokemonId;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { pokemonId } = context.params!;

//   const data = await fetchPokemonDetails(pokemonId);

//   return {
//     props: {
//       data: data,
//     },
//   };
// };
