import {
  Box,
  type BoxProps,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePagination } from "components/hooks/usePagination";
import PaginationButtons from "components/Pokemons/PaginationButtons";
import { useRouter } from "next/router";
import { GetPokemonDataList } from "types/GetPokemonDataList";
import PokemonCard from "./PokemonCards";

export const MotionBox = motion<BoxProps>(Box);

type PokemonListType = {
  data: GetPokemonDataList["pokemon"];
  fetchType: "csr" | "ssg";
};

const PokemonList = ({ data, fetchType }: PokemonListType) => {
  const { currentData, currentPage, nextPage, previousPage } = usePagination(
    10,
    { data }
  );
  const route = useRouter();

  const handleChangeRoute = (id: number) => {
    route.push(
      fetchType === "csr" ? `/csr/pokemon/${id}` : `/ssg/pokemon/${id}`,
      undefined,
      { shallow: false }
    );
  };

  const [hovering, setHovering] = useState(false);
  const [id, setId] = useState<number | null>();
  return (
    <Box position="relative" height="100%" width="100%">
      <Container
        borderRadius={10}
        height="100%"
        width="100%"
        centerContent
        display="flex"
        justifyContent="center"
      >
        <SimpleGrid
          width="max-content"
          height="max-content"
          columns={[1, 2, 3, 4, 5]}
          spacing="30px"
        >
          {currentData().map((pokemon) => {
            return (
              <Box key={pokemon.id}>
                <MotionBox
                  key={pokemon.id}
                  borderRadius={10}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleChangeRoute(pokemon.id)}
                  onMouseOver={() => {
                    setId(pokemon.id);
                    setHovering(true);
                  }}
                  _hover={{ cursor: "pointer" }}
                  onMouseLeave={() => {
                    setId(null);
                    setHovering(false);
                  }}
                  width={200}
                  height="270px"
                  boxShadow={`0 4px 8px 0 gray, 0 6px 20px 0 gray`}
                >
                  <PokemonCard
                    hovering={hovering}
                    element={pokemon.element}
                    id={pokemon.id}
                    name={pokemon.name}
                    base_experience={pokemon.base_experience!}
                    pokeid={id!}
                  />
                </MotionBox>
              </Box>
            );
          })}
        </SimpleGrid>
        <PaginationButtons
          prevPage={previousPage}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      </Container>
    </Box>
  );
};
export default PokemonList;
