import "/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layouts from "components/Layouts/Layout";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { ApolloProvider } from "@apollo/client";
import client from "apollo/apollo-client";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

const theme = extendTheme({
  breakpoints,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
