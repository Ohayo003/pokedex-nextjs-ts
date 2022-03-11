import { Box, type BoxProps } from "@chakra-ui/react";
import Image from "next/image";
import pokemonGo from "public/pngegg.png";
import styles from "styles/BtnNavigation.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export const MotionBox = motion<BoxProps>(Box);

function NavigatButton() {
  return (
    <Box alignSelf="center" width="100%" maxW={500} position="relative">
      <Image src={pokemonGo} alt="Pokemon Egg" />
      <Link passHref href="/ssg/pokemon">
        <MotionBox
          as="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          borderRadius="0px 10px"
          pl={1}
          pr={1}
          position="absolute"
          top="32%"
          borderColor="tomato"
          background="transparent"
          fontWeight="bold"
          fontFamily="sans-serif"
          width={120}
          _hover={{ background: "white", color: "#D01E23" }}
          left="38%"
          color="white"
          className={styles.btnNavigation}
        >
          SSG Pokedex
        </MotionBox>
      </Link>
      <Link passHref href={"/csr/pokemon"}>
        <MotionBox
          pl={1}
          pr={1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          as="button"
          position="absolute"
          top="63%"
          borderRadius="0px 10px"
          fontFamily="sans-serif"
          _hover={{ background: "#D01E23", color: "white" }}
          background="transparent"
          color="#D01E23"
          fontWeight="bold"
          width={120}
          className={styles.btnNavigation}
          left="38%"
        >
          CSR Pokedex
        </MotionBox>
      </Link>
    </Box>
  );
}

export default NavigatButton;
