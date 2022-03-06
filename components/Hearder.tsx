import { Box, Container } from "@chakra-ui/react";
import Image from "next/image";
import headerImage from "public/pokemon-go.png";

const Header = () => {
  return (
    <Box>
      <Container>
        <Image src={headerImage} alt="header image" width={500} height={200} />
      </Container>
    </Box>
  );
};

export default Header;
