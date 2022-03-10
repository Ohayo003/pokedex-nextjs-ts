import {
  Box,
  SimpleGrid,
  type BoxProps,
  Flex,
  VStack,
  HStack,
  ScaleFade,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { TypesColor } from "components/functions/typesColor";
import { IPokemonDetails } from "components/interface/pokemonData";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";
import MoreDetails from "./MoreDetails";
import { GetPokemon } from "../../types/GetPokemon";

export const MotionBox = motion<BoxProps>(Box);

type PokemonDetailsType = {
  details: GetPokemon["pokemon"];
};

const PokemonDetails = ({ details }: PokemonDetailsType) => {
  const [viewMore, setViewMore] = useState(false);

  const handleViewMore = () => setViewMore(true);
  const handleViewMoreClose = () => setViewMore(false);
  // console.log(details.moves);
  return (
    <Box
      width="inherit"
      height="inherit"
      display="flex"
      justifyContent="center"
      p=" 20px 0px"
    >
      <Box
        background="#f97316"
        width={380}
        boxShadow={`0 4px 8px 0 gray, 0 6px 20px 0 gray`}
        borderRadius="20px"
        borderColor="#CAEFFF"
      >
        <Box
          position="relative"
          borderRadius="20px 20px 60px 60px"
          background={TypesColor(
            details!.element?.length <= 1
              ? `${details?.element[0]?.type?.name}`
              : `${details?.element[1]?.type?.name}`
          )}
        >
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${details?.id}.png`}
            alt={details?.name}
            priority
            layout="responsive"
            width={20}
            height={20}
          />
          <Box position="absolute" top="5" right="5" fontSize={17}>
            <Box
              fontWeight="bold"
              color="white"
              border="2px"
              textAlign="center"
              borderRadius={20}
              background={TypesColor(`${details!.element[0]?.type?.name}`)}
            >
              Abilities
            </Box>
            {details?.abilities.map((skill, idx) => {
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
        </Box>
        <Box width="inherit" height="inherit">
          <Box
            display="flex"
            fontSize={40}
            fontFamily="sans-serif"
            fontWeight="bold"
            fontStyle="italic"
            letterSpacing="widest"
            color="white"
            justifyContent="center"
          >
            {details?.name}
          </Box>
          <Box height={10}>
            <Flex justify="center">
              {details?.element.map((e) => {
                return (
                  <Box
                    key={e.type?.name}
                    p="0px 15px 0px 15px"
                    borderRadius={15}
                    border="2px"
                    borderColor="white"
                    background={TypesColor(`${e.type?.name}`)}
                    m="0px 10px"
                    fontSize={17}
                    fontWeight="bold"
                    color="white"
                    height={31}
                  >
                    {e.type?.name}
                  </Box>
                );
              })}
            </Flex>
          </Box>
          <Box mr={2}>
            <Flex justify="center" justifyContent="space-around">
              <VStack spacing="5px">
                <Box fontSize={30} fontWeight="bold" fontFamily="sans-serif">
                  {details?.weight} kg
                </Box>
                <Box fontStyle="italic" fontWeight="semibold">
                  Weight
                </Box>
              </VStack>
              <VStack spacing="5px">
                <Box fontSize={30} fontWeight="bold" fontFamily="sans-serif">
                  {details?.height} m
                </Box>
                <Box fontStyle="italic" fontWeight="semibold">
                  Height
                </Box>
              </VStack>
            </Flex>
          </Box>
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
                // spacingX={10}
                row={details?.stats.length}
                width="inherit"
                columns={2}
              >
                {details?.stats.map((basic) => {
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
                      >
                        <ProgressBar
                          height="22px"
                          bgColor={
                            details!.element.length <= 1
                              ? TypesColor(`${details!.element[0]?.type?.name}`)
                              : TypesColor(`${details!.element[1]?.type?.name}`)
                          }
                          completed={`${basic.base_stat}`}
                        />
                      </Box>
                    </>
                  );
                })}
              </SimpleGrid>
            </Box>
          </Box>

          <Box justifyContent="center" display="flex" width="inherit">
            <MotionBox
              width={120}
              pb={2}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              _hover={{
                cursor: "pointer",
                fontWeight: "semibold",
              }}
              onClick={handleViewMore}
              justifyContent="center"
              textAlign="center"
              color="white"
            >
              View more{">>"}
            </MotionBox>
          </Box>
        </Box>
      </Box>
      {viewMore ? (
        <ScaleFade initialScale={0.9} in={viewMore}>
          <Box
            background="#f97316"
            ml={10}
            width={560}
            height="inherit"
            boxShadow={`0 4px 8px 0 gray, 0 6px 20px 0 gray`}
            borderRadius="20px"
            borderColor="#CAEFFF"
          >
            {/* <MoreDetails
              moves={details?.moves}
              setViewMore={handleViewMoreClose}
            /> */}
          </Box>
        </ScaleFade>
      ) : null}
    </Box>
  );
};

export default PokemonDetails;
