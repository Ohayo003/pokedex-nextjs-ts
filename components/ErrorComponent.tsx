import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";

const ErrorComponent = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <VStack>
          <Box
            fontSize={20}
            fontStyle="italic"
            fontWeight="semibold"
            color="red"
          >
            <Heading>Something went wrong while Fetching Data</Heading>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default ErrorComponent;
