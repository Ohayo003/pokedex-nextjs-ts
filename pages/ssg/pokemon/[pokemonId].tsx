import { GetStaticPaths, GetStaticProps } from "next";
import { Box } from "@chakra-ui/react";
import PokemonDetails from "components/Pokemons/PokemonDetails";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingSpinner from "components/LoadingSpinner";
import client from "apollo/apollo-client";
import { GET_POKEMON } from "graphql/queries/pokemonlist";
import { GET_POKEMON_DATA_LIST } from "graphql/queries/pokemonlist";
import { GetPokemonDataList } from "types/GetPokemonDataList";
import { GetPokemon } from "types/GetPokemon";

type PokemonIdType = {
  details: GetPokemon;
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
        details && <PokemonDetails details={details.pokemon} />
      )}
    </Box>
  );
};

export default PokemonId;

///GET STATIC PATHS FUNCTION
export const getStaticPaths: GetStaticPaths = async () => {
  // const { pokemonId } = ;

  const { data } = await client.query<GetPokemonDataList>({
    query: GET_POKEMON_DATA_LIST,
  });
  const paths = data.pokemon.map((pokemon) => {
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

///GET STATIC PROPS FUNCTION
export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  console.log(params?.pokemonId);
  const { data } = await client.query<GetPokemon>({
    query: GET_POKEMON,
    variables: { id: params?.pokemonId },
  });

  return {
    props: {
      details: data,
    },
  };
};
