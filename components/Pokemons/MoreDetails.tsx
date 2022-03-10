import React, { useState } from "react";
import { IPokemonMoves } from "components/interface/pokemonData";
import { useEffect } from "react";
import PokemonMovesObject from "components/functions/pokemonMovesObject";
import {
  Box,
  SimpleGrid,
  VStack,
  HStack,
  type BoxProps,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";
import { CloseIcon } from "@chakra-ui/icons";
import { GetPokemon_pokemon_moves } from "types/GetPokemon";

export const MotionBox = motion<BoxProps>(Box);

type MoreDetailsType = {
  moves: GetPokemon_pokemon_moves[];
  setViewMore: React.MouseEventHandler<HTMLDivElement>;
};

const MoreDetails = ({ moves, setViewMore }: MoreDetailsType) => {
  return (
    <Box p="10px 10px">
      <Box
        p="10px 0px"
        width="inherit"
        position="relative"
        justifyContent="center"
        display="flex"
      >
        <Box
          textAlign="center"
          background="#6890F0"
          width={100}
          border="1px"
          borderColor="white"
          borderRadius={50}
          fontWeight="bold"
          fontSize={20}
          color="white"
        >
          Moves
        </Box>
        <MotionBox
          as="button"
          position="absolute"
          right={5}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          borderRadius={100}
          color="white"
          p="0px 6px"
          pb="2px"
          onClick={setViewMore}
          _hover={{ backgroundColor: "white", color: "red" }}
        >
          <CloseIcon fontSize={12} />
        </MotionBox>
      </Box>
      <VStack justifyItems="center">
        {moves.slice(0, 10).map((move) => {
          return move.move?.power !== null ? (
            //   <Box key={move.name} height="inherit">
            // {/* <HStack width="inherit" background="yellow"> */}
            <>
              <HStack justifyContent="center">
                <VStack>
                  {move.move?.effects?.effect.map((e) => {
                    console.log(e.effect);
                    return (
                      <>
                        <Box
                          key={move.move?.name}
                          color="white"
                          width="10rem"
                          fontSize="md"
                          fontWeight="bold"
                          textAlign="center"
                          display="flex"
                          flexDirection="column"
                          justifyContent="center"
                        >
                          {move.move?.name}
                        </Box>
                        <Box
                          key={e.effect}
                          width="10rem"
                          fontSize="xs"
                          fontWeight="bold"
                          fontStyle="italic"
                          textAlign="center"
                          color="blackAlpha.700"
                          flexDirection="column"
                          justifyContent="center"
                        >
                          {e.effect}
                        </Box>
                      </>
                    );
                  })}
                </VStack>
                <VStack
                  width="xs"
                  // alignItems="start"
                  // justifyContent="left"
                >
                  <Box position="relative" display="flex">
                    <HStack>
                      <Box
                        border="1px"
                        width="10rem"
                        borderColor="white"
                        borderRadius={50}
                      >
                        <ProgressBar
                          height=".8rem"
                          bgColor="red"
                          completed={`${move.move?.power}`}
                        />
                      </Box>
                      <Box fontWeight="semibold" color="white" textAlign="left">
                        Power
                      </Box>
                    </HStack>
                  </Box>
                  <Box width="inherit">
                    <HStack justify="center">
                      <Box
                        width="10rem"
                        border="1px"
                        borderColor="white"
                        borderRadius={50}
                      >
                        <ProgressBar
                          height=".8rem"
                          bgColor="skyblue"
                          completed={`${move.move?.accuracy}`}
                        />
                      </Box>
                      <Box fontWeight="semibold" color="white">
                        Accu.
                      </Box>
                    </HStack>
                  </Box>
                </VStack>
              </HStack>
              <Divider orientation="horizontal" />
            </>
          ) : // {/* </HStack> */}
          //   </Box>
          null;
        })}
      </VStack>
    </Box>
  );
};

export default MoreDetails;
