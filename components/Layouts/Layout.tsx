import { Box } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Header from "components/Hearder";
import pokeballbg from "public/pokeballbg.png";

type Props = {
  children: any;
};

const Layouts = ({ children }: Props) => {
  return (
    <Box width="100%" position="relative" zIndex="0">
      <Box
        width="100%"
        height="100%"
        position="absolute"
        zIndex="-1"
        top="0px"
        bottom="0px"
        left="0px"
        right="0px"
      >
        <Image
          src={pokeballbg}
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Header />
      {children}
    </Box>
  );
};

export default Layouts;
