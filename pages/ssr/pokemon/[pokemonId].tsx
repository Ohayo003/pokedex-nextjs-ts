import React, { useEffect, useState } from "react";
import Router from "next/router";
import { GetServerSideProps } from "next";
import { fetchPokemonDetails } from "components/functions/fetchPokemonData";
import { IPokemonDetails } from "components/interface/pokemonData";
import { Box } from "@chakra-ui/react";
import LoadingSpinner from "components/LoadingSpinner";
import PokemonDetails from "components/Pokemons/PokemonDetails";

type PokemonIdType = {
  data: IPokemonDetails;
};

const PokemonId = ({ data }: PokemonIdType) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handelChangeRoute = () => {
      console.log("changing route...");
      setLoading(true);
    };
    const handleChangeRouteComplete = () => {
      console.log("changing route Complete...");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", handelChangeRoute);
    Router.events.on("routeChangeComplete", handleChangeRouteComplete);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      Router.events.off("routeChangeStart", handelChangeRoute);
      Router.events.off("routeChangeComplete", handleChangeRouteComplete);
    };
  }, []);

  return (
    <Box height="inherit" width="inherit">
      {loading ? <LoadingSpinner /> : <PokemonDetails details={data} />}
    </Box>
  );
};

export default PokemonId;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { pokemonId } = context.params!;

  const data = await fetchPokemonDetails(pokemonId);

  return {
    props: {
      data: data,
    },
  };
};
