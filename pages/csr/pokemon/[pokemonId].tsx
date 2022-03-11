import React from "react";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import LoadingSpinner from "components/LoadingSpinner";
import PokemonDetails from "components/Pokemons/PokemonDetails";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "graphql/queries/pokemonlist";
import { GetPokemon } from "types/GetPokemon";
import ErrorComponent from "components/ErrorComponent";

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
      <Box height="inherit">
        <ErrorComponent />
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
