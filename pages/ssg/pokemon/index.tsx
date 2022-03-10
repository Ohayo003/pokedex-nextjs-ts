import { Box } from "@chakra-ui/react";
import { fetchLimitPokemons } from "components/functions/fetchPokemonData";
import PokemonList from "components/Pokemons/PokemonList";
import { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { IPokemonData } from "../../../components/interface/pokemonData";
import Router, { useRouter } from "next/router";
import LoadingSpinner from "components/LoadingSpinner";
import client from "apollo/apollo-client";
import { GET_POKEMON_DATA_LIST } from "graphql/queries/pokemonlist";
import { GetPokemonDataList } from "../../../types/GetPokemonDataList";

type PokemonPropsType = {
  data: GetPokemonDataList;
};

const Pokemon = ({ data }: PokemonPropsType) => {
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
    <Box height="inherit" p="50px 0px">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <PokemonList data={data.pokemon} fetchType="ssg" />
      )}
    </Box>
  );
};

export default Pokemon;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<GetPokemonDataList>({
    query: GET_POKEMON_DATA_LIST,
  });
  return {
    props: {
      data: data,
    },
  };
};
