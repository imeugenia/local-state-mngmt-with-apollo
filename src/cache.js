import { InMemoryCache, gql } from "@apollo/client";
import { isDarkModeVar } from "./localStorage";

export const cache = new InMemoryCache({
  // typePolicies: {
  //   Query: {
  //     fields: {
  //       isDarkMode: {
  //         read() {
  //           return isDarkModeVar();
  //         },
  //       },
  //     },
  //   },
  // },
});

export const QUERY = gql`
  query getDarkMode {
    isDarkMode @client
  }
`;

cache.writeQuery({
  query: QUERY,
  data: {
    isDarkMode: true,
  },
});
