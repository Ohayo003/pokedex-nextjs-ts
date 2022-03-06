import { Box } from "@chakra-ui/react";
import { fetchLimitPokemons } from "components/functions/fetchPokemonData";
import PokemonList from "components/Pokemons/PokemonList";
import { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { IPokemonData } from "../../../components/interface/pokemonData";
import Router, { useRouter } from "next/router";
import LoadingSpinner from "components/LoadingSpinner";

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

  // useEffect(() => {
  //   const handleRouteChange = (url: string) => {
  //     console.log(`Loading: ${url}`);
  //     setLoading(true);
  //   };
  //   const handleRouteComplete = () => {
  //     setLoading(false);
  //   };

  //   router.events.on("routeChangeStart", handleRouteChange);
  //   router.events.on("routeChangeComplete", handleRouteComplete);
  //   router.events.on("routeChangeError", handleRouteComplete);

  //   // If the component is unmounted, unsubscribe
  //   // from the event with the `off` method:
  //   return () => {
  //     router.events.off("routeChangeStart", handleRouteChange);
  //     router.events.off("routeChangeComplete", handleRouteComplete);
  //     router.events.on("routeChangeError", handleRouteComplete);
  //   };
  // }, [router]);

  return (
    <Box height="inherit" p="50px 0px">
      {loading ? <LoadingSpinner /> : <PokemonList data={data} />}
    </Box>
  );
};

export default Pokemon;

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchLimitPokemons();
  return {
    props: {
      data: data,
    },
  };
};
