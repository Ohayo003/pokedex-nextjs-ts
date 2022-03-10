import "/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layouts from "components/Layouts/Layout";
import { ApolloProvider } from "@apollo/client";
import client from "apollo/apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Layouts >
          <Component {...pageProps} />
        </Layouts>
      </ChakraProvider> 
    </ApolloProvider>
  );
}

export default MyApp;
