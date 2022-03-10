import React, { useState } from "react";
import { IPokemonMoves } from "components/interface/pokemonData";
import { useEffect } from "react";
import PokemonMovesObject from "components/functions/PokemonMovesObject";
import {
  Box,
  SimpleGrid,
  VStack,
  HStack,
  Flex,
  type BoxProps,
  color,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";
import { CloseIcon } from "@chakra-ui/icons";

export const MotionBox = motion<BoxProps>(Box);

type MoreDetailsType = {
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
  setViewMore: React.MouseEventHandler<HTMLDivElement>;
};

const MoreDetails = ({ moves, setViewMore }: MoreDetailsType) => {
  const [movesData, setMovesData] = useState<IPokemonMoves[]>([]);
  //   const {moves, setViewMore } = props;
  useEffect(() => {
    // handleGetMovesData();
    const pokemonMoves: IPokemonMoves[] = [];
    moves.forEach(async (move) => {
      const data = await fetch(move.move.url);
      const jsonData = await data.json();
      const parsed = PokemonMovesObject(jsonData);
      pokemonMoves.push(parsed);
      setMovesData(pokemonMoves);
    });
  }, [moves]);

  return (
    <Box p="5px 10px">
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
          Skills
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
      <SimpleGrid
        justifyItems="center"
        p="5px 0px"
        // row={10}
        width="inherit"
        gap={1}
        columns={2}
      >
        {/* <Flex> */}
        {movesData.slice(0, 10).map((move) => {
          return move.power !== null ? (
            //   <Box key={move.name} height="inherit">
            // {/* <HStack width="inherit" background="yellow"> */}
            <>
              <Box
                key={move.name}
                color="white"
                width={100}
                fontSize={15}
                fontWeight="bold"
                textAlign="center"
                background="blue"
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                {move.name}
              </Box>
              <VStack
                ml={-10}
                width="inherit"
                background="brown"
                justifyContent="left"
              >
                <Box
                  background="yellow"
                  width={200}
                  position="relative"
                  justifyContent="left"
                  display="flex"
                >
                  <HStack>
                    <Box
                      width={200}
                      border="1px"
                      borderColor="white"
                      borderRadius={50}
                    >
                      <ProgressBar
                        height="15px"
                        bgColor="red"
                        completed={`${move.power}`}
                      />
                    </Box>
                    <Box fontWeight="semibold" color="white" textAlign="left">
                      Power
                    </Box>
                  </HStack>
                </Box>
                <Box justifyContent="left" width="inherit">
                  <HStack justifyContent="left">
                    <Box
                      width={200}
                      border="1px"
                      borderColor="white"
                      borderRadius={50}
                    >
                      <ProgressBar
                        height="15px"
                        bgColor="skyblue"
                        completed={`${move.accuracy}`}
                      />
                    </Box>
                    <Box fontWeight="semibold" color="white" textAlign="left">
                      Accuracy
                    </Box>
                  </HStack>
                </Box>
              </VStack>
            </>
          ) : // {/* </HStack> */}
          //   </Box>
          null;
        })}
        {/* </Flex> */}
      </SimpleGrid>
    </Box>
  );
};

export default MoreDetails;
