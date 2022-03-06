import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import React from "react";

type PaginationButtonsType = {
  prevPage: React.MouseEventHandler<HTMLButtonElement>;
  nextPage: React.MouseEventHandler<HTMLButtonElement>;
  currentPage: number;
};

const PaginationButtons = ({
  prevPage,
  nextPage,
  currentPage,
}: PaginationButtonsType) => {
  return (
    <Box m={5} p="5px">
      <SimpleGrid justifyItems="center" columns={3} gap={2}>
        <Box>
          <Button
            border="1px"
            borderColor="tomato"
            color="tomato"
            borderRadius={100}
            onClick={prevPage}
            _hover={{ color: "white", background: "tomato" }}
            disabled={currentPage > 1 ? false : true}
          >
            <ChevronLeftIcon fontSize={20} />
          </Button>
        </Box>
        <Box>
          <Box
            color="white"
            background="tomato"
            borderRadius="full"
            textAlign="center"
            alignContent="center"
            height={10}
            fontSize="2xl"
            width={10}
          >
            {currentPage}
          </Box>
        </Box>
        <Box>
          <Button
            borderColor="tomato"
            border="1px"
            borderRadius={100}
            color="tomato"
            _hover={{ color: "white", background: "tomato" }}
            onClick={nextPage}
            disabled={currentPage < 10 ? false : true}
          >
            <ChevronRightIcon fontSize={20} />
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default PaginationButtons;
