import { Spinner, Box, VStack } from "@chakra-ui/react";

const LoadingSpinner = () => {
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
          <Spinner
            thickness="10px"
            speed="0.65s"
            emptyColor="white"
            color="blue.500"
            size="xl"
          />
          <Box
            fontSize={20}
            fontStyle="italic"
            fontWeight="semibold"
            color="white"
          >
            Please wait...
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default LoadingSpinner;
