import {
  Box,
  type BoxProps,
  Container,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePagination } from "components/hooks/usePagination";
import PaginationButtons from "components/Pokemons/PaginationButtons";
import { useRouter } from "next/router";
import { GetPokemonDataList } from "types/GetPokemonDataList";
import colorTypes from "components/functions/colorTypes";

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
                  <Box
                    p={6}
                    borderColor="#ef4444"
                    maxW="xl"
                    _hover={{ backgroundColor: "#0ea5e9" }}
                    background={colorTypes(`${pokemon.element[0]?.type?.name}`)}
                    borderRadius={10}
                    overflow="hidden"
                    // p="2"
                  >
                    <Box
                      m={1}
                      background="#f1f5f9"
                      borderRadius={100}
                      borderWidth="2px 2px 6px 2px"
                    >
                      {hovering && pokemon.id === id ? (
                        <Image
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
                          alt={pokemon.name}
                          layout="responsive"
                          width={20}
                          height={20}
                        />
                      ) : (
                        <Image
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
                          alt={pokemon.name}
                          priority={true}
                          layout="responsive"
                          width={30}
                          height={30}
                        />
                      )}
                    </Box>
                    <Box width="inherit" height={75}>
                      <Box
                        mt="1"
                        fontWeight="bold"
                        fontFamily="sans-serif"
                        letterSpacing="widest"
                        as="h4"
                        textAlign="center"
                        color="white"
                        lineHeight="tight"
                        fontSize={pokemon.name.length > 7 ? "xl" : "2xl"}
                        isTruncated
                      >
                        {pokemon.name}
                      </Box>
                      <Box width="inherit" m="5px 0px">
                        <Flex justify="center">
                          <Box fontWeight="bold" fontSize="xs">
                            {pokemon.element.length <= 1 ? "Type: " : "Types: "}
                          </Box>
                          {pokemon.element.map((e) => {
                            return (
                              <Box
                                key={e.type?.name}
                                fontWeight="semibold"
                                letterSpacing="wide"
                                background="skyblue"
                                borderRadius="25"
                                fontSize="xs"
                                color="black"
                                m="0px 5px"
                                p="0px 5px"
                                textAlign="center"
                                alignSelf="center"
                                textTransform="uppercase"
                              >
                                {e.type?.name}
                              </Box>
                            );
                          })}
                        </Flex>
                      </Box>

                      <Box>
                        <Box as="span" color="gray.200" ml={5} fontSize="sm">
                          Base Experience: {pokemon.base_experience}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
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
