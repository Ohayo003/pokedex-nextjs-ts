import { GetServerSideProps } from "next";
import { fetchLimitPokemons } from "components/functions/fetchPokemonData";
import { IPokemonData } from "components/interface/pokemonData";
import Router from "next/router";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import LoadingSpinner from "components/LoadingSpinner";
import PokemonList from "components/Pokemons/PokemonList";

type PokemonPropsType = {
  data: IPokemonData[];
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
    <Box height="inherit">
      {loading ? <LoadingSpinner /> : <PokemonList data={data} />}
    </Box>
  );
};

export default Pokemon;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchLimitPokemons();

  return {
    props: {
      data: data,
    },
  };
};
