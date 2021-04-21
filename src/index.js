import React from "react";
import { render } from "react-dom";
import App from "./App";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { cache } from "./cache";
import { persistCache } from "apollo-cache-persist";

persistCache({
  cache,
  storage: window.localStorage,
}).then(() => {
  const client = new ApolloClient({
    cache,
    connectToDevTools: true,
  });

  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById("root")
  );
});
