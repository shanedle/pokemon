import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import App from "./App";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

const theme = extendTheme({ breakpoints });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
