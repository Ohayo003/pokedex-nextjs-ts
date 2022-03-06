import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import pokemonGo from "public/pngegg.png";
import styles from "styles/BtnNavigation.module.css";
import Link from "next/link";

function NavigatButton() {
  return (
    <Box alignSelf="center" width="100%" maxW={500} position="relative">
      <Image src={pokemonGo} alt="Pokemon Egg" />
      <Link passHref href="/ssg/pokemon">
        <Button
          borderRadius="0px 10px"
          pl={1}
          pr={1}
          position="absolute"
          top="30%"
          borderColor="tomato"
          border="1px"
          background="transparent"
          fontWeight="bold"
          fontFamily="sans-serif"
          width={120}
          _hover={{ background: "transparent", border: "1px" }}
          left="38%"
          color="white"
          className={styles.btnNavigation}
        >
          SSG Pokedex
        </Button>
      </Link>
      <Link passHref href={"/ssr/pokemon"}>
        <Button
          pl={1}
          pr={1}
          position="absolute"
          top="61%"
          borderColor="tomato"
          borderRadius="0px 10px"
          fontFamily="sans-serif"
          border="1px"
          _hover={{ background: "transparent", border: "1px" }}
          background="transparent"
          color="tomato"
          fontWeight="bold"
          width={120}
          className={styles.btnNavigation}
          left="38%"
        >
          SSR Pokedex
        </Button>
      </Link>
    </Box>
  );
}

export default NavigatButton;
