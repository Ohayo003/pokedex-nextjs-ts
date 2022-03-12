import { StarIcon } from "@chakra-ui/icons";
import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import {
  GetPokemon_pokemon_abilities,
  GetPokemon_pokemon_element,
} from "../../types/GetPokemon";
import colorTypes from "components/functions/colorTypes";

type AbilitiesComponentType = {
  abilities: GetPokemon_pokemon_abilities[];
  element: GetPokemon_pokemon_element[];
};

const AbilitiesComponent = ({ abilities, element }: AbilitiesComponentType) => (
  <Box position="absolute" top="5" right="5" fontSize={17}>
    <Box
      fontWeight="bold"
      color="white"
      border="2px"
      pl={2}
      pr={2}
      textAlign="center"
      borderRadius={20}
      background={colorTypes(`${element[0]?.type?.name}`)}
    >
      Abilities
    </Box>
    {abilities.map((skill, idx) => {
      return (
        <HStack key={idx}>
          <Box>
            <StarIcon key={idx} color="yellow" />
          </Box>
          <Box
            fontStyle="italic"
            letterSpacing="wider"
            fontWeight="semibold"
            color="white"
          >
            {skill?.ability?.name}
          </Box>
        </HStack>
      );
    })}
  </Box>
);

export default AbilitiesComponent;
