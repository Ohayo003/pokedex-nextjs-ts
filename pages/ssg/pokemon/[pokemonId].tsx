import {
  fetchLimitPokemons,
  fetchPokemonDetails,
} from "components/functions/fetchPokemonData";
import { IPokemonDetails } from "components/interface/pokemonData";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Box } from "@chakra-ui/react";
import PokemonDetails from "components/Pokemons/PokemonDetails";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingSpinner from "components/LoadingSpinner";

type PokemonIdType = {
  details: IPokemonDetails;
};

const PokemonId = ({ details }: PokemonIdType) => {
  const [loading, setLoading] = useState(false);
  const route = useRouter();

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
      {loading ? (
        <LoadingSpinner />
      ) : route.isFallback ? (
        <LoadingSpinner />
      ) : (
        <PokemonDetails details={details} />
      )}
    </Box>
  );
};

export default PokemonId;

export const getStaticPaths: GetStaticPaths = async () => {
  // const {params} = context;
  const data = await fetchLimitPokemons();
  const paths = data.map((pokemon) => {
    return {
      params: {
        pokemonId: `${pokemon.id}`,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { pokemonId } = context.params!;
  const data = await fetchPokemonDetails(pokemonId);

  return {
    props: {
      details: data,
    },
  };
};
