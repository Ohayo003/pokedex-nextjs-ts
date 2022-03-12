import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { GetPokemonDataList_pokemon_element } from "types/GetPokemonDataList";
import colorTypes from "components/functions/colorTypes";
import Image from "next/image";

type PokemonCardType = {
  hovering: boolean;
  element: GetPokemonDataList_pokemon_element[];
  id: number;
  name: string;
  base_experience: number;
  pokeid: number;
};

const PokemonCard = ({
  hovering,
  element,
  id,
  name,
  base_experience,
  pokeid,
}: PokemonCardType) => {
  return (
    <Box
      p={6}
      borderColor="#ef4444"
      maxW="xl"
      _hover={{ backgroundColor: "#0ea5e9" }}
      background={colorTypes(`${element[0]?.type?.name}`)}
      borderRadius={10}
      overflow="hidden"
    >
      <Box
        m={1}
        background="#f1f5f9"
        borderRadius={100}
        borderWidth="2px 2px 6px 2px"
      >
        {hovering && id === pokeid ? (
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
            alt={name}
            layout="responsive"
            width={20}
            height={20}
          />
        ) : (
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
            alt={name}
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
          fontSize={name.length > 7 ? "xl" : "2xl"}
          isTruncated
        >
          {name}
        </Box>
        <Box width="inherit" m="5px 0px">
          <Flex justify="center">
            <Box fontWeight="bold" fontSize="xs">
              {element.length <= 1 ? "Type: " : "Types: "}
            </Box>
            {element.map((e) => {
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
            Base Experience: {base_experience}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PokemonCard;
