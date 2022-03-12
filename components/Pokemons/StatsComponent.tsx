import { Box, SimpleGrid } from "@chakra-ui/react";
import ProgressBar from "@ramonak/react-progress-bar";
import colorTypes from "components/functions/colorTypes";
import React from "react";
import {
  GetPokemon_pokemon_element,
  GetPokemon_pokemon_stats,
} from "types/GetPokemon";

type StatsComponentType = {
  stats: GetPokemon_pokemon_stats[];
  element: GetPokemon_pokemon_element[];
};

const StatsComponent = ({ stats, element }: StatsComponentType) => {
  return (
    <Box mt={2}>
      <Box
        textAlign="center"
        fontSize={25}
        fontWeight="bold"
        color="white"
        fontStyle="italic"
        letterSpacing="wider"
      >
        Basic Stats
      </Box>
      <Box p="5px 10px">
        <SimpleGrid
          justifyItems="center"
          p="5px 0px"
          gap={1}
          row={stats.length}
          width="inherit"
          columns={2}
        >
          {stats.map((basic) => {
            return (
              <>
                <Box
                  key={basic.stat?.name}
                  color="white"
                  width={120}
                  fontSize={15}
                  fontWeight="bold"
                  textAlign="right"
                >
                  {basic?.stat?.name}
                </Box>
                <Box
                  width={150}
                  border="1px"
                  borderColor="white"
                  borderRadius={50}
                  position="relative"
                >
                  <ProgressBar
                    height="22px"
                    bgColor={
                      element.length <= 1
                        ? colorTypes(`${element[0]?.type?.name}`)
                        : colorTypes(`${element[1]?.type?.name}`)
                    }
                    completed={basic.base_stat}
                    isLabelVisible={false}
                  />
                  <Box
                    position="absolute"
                    zIndex={1}
                    fontWeight="bold"
                    fontStyle="italic"
                    color="blackAlpha.700"
                    top={0}
                    left={59}
                  >
                    {basic.base_stat <= 9
                      ? `0${basic.base_stat}`
                      : basic.base_stat}
                  </Box>
                </Box>
              </>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default StatsComponent;
