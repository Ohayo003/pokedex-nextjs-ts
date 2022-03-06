import "/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layouts from "components/Layouts/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </ChakraProvider>
  );
}

export default MyApp;
